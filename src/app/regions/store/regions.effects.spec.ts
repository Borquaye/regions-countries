import { TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { RegionsEffects } from './regions.effects';
import { cold, hot } from 'jasmine-marbles';
import { RegionsActions } from './regions.actions';
import { CountriesSelectors } from 'src/app/countries/store/counties.selectors';
import { CountriesActions } from 'src/app/countries/store/countries.actions';

describe('RegionsEffects', () => {
  let actions$: Observable<any>;
  let effects: RegionsEffects;
  let store: MockStore;
  

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockActions(() => actions$),
        provideMockStore(),
      ]
    });
    effects = TestBed.inject(RegionsEffects);
    store = TestBed.inject(MockStore);
  });

  describe('loadCountriesForRegionIfNotLoaded$', () => {
    it('should load countries for the region if they haven\'t already been loaded', () => {
      store.overrideSelector(CountriesSelectors.getAllCountries, []);

      actions$ = hot('-a', { a: RegionsActions.setSelectedRegion({ region: 'Test' }) });
      const expected = cold('-b', {
        b: CountriesActions.loadCountriesForRegion({ region: 'Test' })
      });
  
      expect(effects.loadCountriesForRegionIfNotLoaded$).toBeObservable(expected)
    });

    it('should return a non-action if countries have already been loaded for the region', () => {
      store.overrideSelector(CountriesSelectors.getAllCountries, [{ region: 'Test' }]);

      actions$ = hot('-a', { a: RegionsActions.setSelectedRegion({ region: 'Test' }) });
      const expected = cold('-b', {
        b: { type: 'NO_ACTION' }
      });
  
      expect(effects.loadCountriesForRegionIfNotLoaded$).toBeObservable(expected)
    });

  });
});
