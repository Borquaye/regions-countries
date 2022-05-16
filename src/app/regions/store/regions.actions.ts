import { createAction, props } from '@ngrx/store';

export namespace RegionsActions {
  export const setSelectedRegion = createAction(
    '[COUNTRY PICKER] Set Selected Region',
    props<{ region: string }>()
  )
}
