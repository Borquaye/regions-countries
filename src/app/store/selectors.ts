import { createSelector } from "@ngrx/store";
import { CountriesSelectors } from "../countries/store/counties.selectors";
import { RegionsSelectors } from "../regions/store/regions.selectors";

export namespace AppSelectors {

  export const getCountriesInSelectedRegion = createSelector(
    RegionsSelectors.getSelectedRegionName,
    CountriesSelectors.getAllCountries,
    (region, allCountries) => allCountries.filter((country) => country.region === region)
  );
}