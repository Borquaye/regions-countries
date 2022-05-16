import { CountriesReducer } from './countries.reducer';
import { createFeatureSelector, createSelector } from "@ngrx/store";

export namespace CountriesSelectors {
  export const selectCountriesState = createFeatureSelector<CountriesReducer.State>('countries');
 
  const {
    selectAll,
    selectEntities,
    selectIds,
    selectTotal
  } = CountriesReducer.adapter.getSelectors();

  export const getAllCountries = createSelector(
    selectCountriesState,
    (state) => selectAll(state)
  );

  export const getCountriesDictionary = createSelector(
    selectCountriesState,
    (state) => selectEntities(state)
  );

  export const getSelectedCountryName = createSelector(
    selectCountriesState,
    (state) => state.selectedCountryName ? state.selectedCountryName : undefined
  );

  export const getSelectedCountry = createSelector(
    getCountriesDictionary,
    getSelectedCountryName,
    (state, name) => name ? state[name] : undefined
  );
}
