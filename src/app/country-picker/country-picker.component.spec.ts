import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { CountriesActions } from '../countries/store/countries.actions';
import { RegionsActions } from '../regions/store/regions.actions';

import { CountryPickerComponent } from './country-picker.component';

describe('CountryPickerComponent', () => {
  let component: CountryPickerComponent;
  let fixture: ComponentFixture<CountryPickerComponent>;
  let store: MockStore;
  const initialState = {};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryPickerComponent ],
      providers: [
        provideMockStore({ initialState }),
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryPickerComponent);
    store = TestBed.inject(MockStore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('On Region Change', () => {
    describe('New region selected', () => {
      const regionName = 'Test';

      beforeEach(() => {
        spyOn(store, 'dispatch');
      });

      it('should set the selected region', () => {
        const expectedAction = RegionsActions.setSelectedRegion({ region: regionName })
  
        component.onRegionChange(regionName);
  
        expect(store.dispatch).toHaveBeenCalledWith(expectedAction)
      })
  
      it('should signify that a region has been selected', () => {
        component.onRegionChange(regionName);
  
        expect(component.noRegionSelected).toBeFalse();
      })
    })

    it('should signify that no region has been selected if the placeholder has been selected', () => {
      const regionName = '';
      component.onRegionChange(regionName);

      expect(component.noRegionSelected).toBeTruthy();
    })
  })

  describe('On Country Change', () => {
    it('should set the selected country if a new country is selected', () => {
      const countryName = 'Test';
      const expectedAction = CountriesActions.setSelectedCountry({ country: countryName })
      spyOn(store, 'dispatch');

      component.onCountryChange(countryName);

      expect(store.dispatch).toHaveBeenCalledOnceWith(expectedAction)
    })
  })
});

