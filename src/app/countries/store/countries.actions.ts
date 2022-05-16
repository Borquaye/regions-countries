import { createAction, props } from "@ngrx/store";

export namespace CountriesActions {
  export const loadCountriesForRegion = createAction(
    '[REGION EFFECTS] Load Countries For Region',
    props<{ region: string }>()
  )
  export const loadCountriesForRegionSuccess = createAction(
    '[COUNTRY EFFECTS] Load Countries For Region Success',
    props<{ countries: any[] }>()
  )
  export const loadCountriesForRegionFailure = createAction(
    '[COUNTRY EFFECTS] Load Countries For Region Failure',
    props<{ error: any }>()
  )

  export const setSelectedCountry = createAction(
    '[COUNTRY PICKER] Set Selected Country',
    props<{ country: string }>()
  )
}

