import { CountriesActions } from './countries.actions';
import { CountriesReducer } from './countries.reducer';

describe('Countries Reducer', () => {
  it('should select the country name as the id', () => {
    const country = { name: 'Country' };

    const result = CountriesReducer.selectCountryName(country);

    expect(result).toEqual(country.name);
  });
  it('should add the new countries once they have been loaded successfully', () => {
    const countries = [{ name: 'Country' }];

    spyOn(CountriesReducer.adapter, 'addMany');

    const result = CountriesReducer.reducer(
      CountriesReducer.initialState,
      CountriesActions.loadCountriesForRegionSuccess({ countries })
    );

    expect(CountriesReducer.adapter.addMany).toHaveBeenCalledOnceWith(countries, CountriesReducer.initialState);
  });

  it('should set the selected country name', () => {
    const country = 'Country';
    const expectedResult = { ...CountriesReducer.initialState, selectedCountryName: country };

    const result = CountriesReducer.reducer(
      CountriesReducer.initialState,
      CountriesActions.setSelectedCountry({ country })
    );

    expect(result).toEqual(expectedResult);
  });
});
