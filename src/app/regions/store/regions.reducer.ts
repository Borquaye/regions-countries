import { createReducer, on } from "@ngrx/store";
import { RegionsActions } from "./regions.actions";

export namespace RegionsReducer {

  export interface State {
    entities: string[];
    selectedRegionName: string | null;
  }

  export const initialState: State = {
    entities: ['Europe', 'Asia'],
    selectedRegionName: null
  }

  export const reducer = createReducer(
    initialState,
    on(RegionsActions.setSelectedRegion, (state, { region }) => ({ ...state, selectedRegionName: region }))
  );
}
