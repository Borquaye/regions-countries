import { CountriesReducer } from "../countries/store/countries.reducer";
import { RegionsReducer } from "../regions/store/regions.reducer";

export interface AppState {
  'regions': RegionsReducer.State;
  'countries': CountriesReducer.State;
}

export const reducers = {
  'regions': RegionsReducer.reducer,
  'countries': CountriesReducer.reducer,
};