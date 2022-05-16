import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, withLatestFrom } from "rxjs";
import { CountriesSelectors } from "src/app/countries/store/counties.selectors";
import { CountriesActions } from "src/app/countries/store/countries.actions";

import { RegionsActions } from "./regions.actions";

@Injectable({
  providedIn: 'root'
})
export class RegionsEffects {
  loadCountriesForRegionIfNotLoaded$ = createEffect(() => this.actions$.pipe(
    ofType(RegionsActions.setSelectedRegion),
    withLatestFrom(this.store.select(CountriesSelectors.getAllCountries)),
    map(([action, countries]) => {
      const countriesLoadedForRegion = countries.some((country) => country.region === action.region);
      return countriesLoadedForRegion ? { type: 'NO_ACTION' } : CountriesActions.loadCountriesForRegion({ region: action.region });
    })
  ));

  constructor(
    private actions$: Actions,
    private store: Store<any>,
  ) { }

}
