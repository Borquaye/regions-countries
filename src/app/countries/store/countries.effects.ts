import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, concatMap, map, of } from "rxjs";
import { CountriesApiService } from "../countries-api.service";
import { CountriesActions } from "./countries.actions";

@Injectable({
  providedIn: 'root'
})
export class CountriesEffects {
  loadCountriesForRegion$ = createEffect(() => this.actions$.pipe(
    ofType(CountriesActions.loadCountriesForRegion),
    concatMap((action) => {
      return this.countriesApiService.getCountriesForRegion(action.region).pipe(
        map((countries) => CountriesActions.loadCountriesForRegionSuccess({ countries })),
        catchError((error) => of(CountriesActions.loadCountriesForRegionFailure({ error })))
      )
    })
  ));

  constructor(
    private actions$: Actions,
    private countriesApiService: CountriesApiService
  ) { }

}
