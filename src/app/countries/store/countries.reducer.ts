import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { CountriesActions } from "./countries.actions";

export namespace CountriesReducer {

  export interface State extends EntityState<any> {
    selectedCountryName: string | null;
  }

  export function selectCountryName(country: any): string {
    return country.name;
  }

  export const adapter: EntityAdapter<any> = createEntityAdapter<any>({
    selectId: selectCountryName
  });

  export const initialState = adapter.getInitialState({
    selectedCountry: null,
  });

  export const reducer = createReducer(
    initialState,
    on(CountriesActions.loadCountriesForRegionSuccess, (state, { countries }) => {
      return adapter.addMany(countries, state)
    }),
    on(CountriesActions.setSelectedCountry, (state, { country }) => ({ ...state, selectedCountryName: country }))
  );
}
