import { TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of, throwError } from 'rxjs';

import { CountriesEffects } from './countries.effects';
import { cold, hot } from 'jasmine-marbles';
import { CountriesActions } from './countries.actions';
import { CountriesApiService } from '../countries-api.service';

class MockCountriesApiService {
  getCountriesForRegion(){}
}

describe('CountriesEffects', () => {
  let actions$: Observable<any>;
  let effects: CountriesEffects;
  let store: MockStore;
  let countriesApiService: CountriesApiService;
  

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockActions(() => actions$),
        provideMockStore(),
        { provide: CountriesApiService, useClass: MockCountriesApiService }
      ]
    });
    countriesApiService = TestBed.inject(CountriesApiService);
    effects = TestBed.inject(CountriesEffects);
    store = TestBed.inject(MockStore);
  });

  describe('loadCountriesForRegion$', () => {
    it('should load countries for the region if they haven\'t already been loaded', () => {
      const countries = [{ name: 'Country'}];
      spyOn(countriesApiService, 'getCountriesForRegion').and.returnValue(of(countries));

      actions$ = hot('-a', { a: CountriesActions.loadCountriesForRegion({ region: 'Test' }) });
      const expected = cold('-b', {
        b: CountriesActions.loadCountriesForRegionSuccess({ countries })
      });
  
      expect(effects.loadCountriesForRegion$).toBeObservable(expected)
    });

    it('should send a failure action if there is an error loading the countries', () => {
      const error = new Error('error');
      spyOn(countriesApiService, 'getCountriesForRegion').and.returnValue(throwError(() => error));

      actions$ = hot('-a', { a: CountriesActions.loadCountriesForRegion({ region: 'Test' }) });
      const expected = cold('-b', {
        b: CountriesActions.loadCountriesForRegionFailure({ error })
      });
  
      expect(effects.loadCountriesForRegion$).toBeObservable(expected)
    });
  });
});
