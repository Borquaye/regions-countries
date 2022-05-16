import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RegionsReducer } from './regions.reducer';

export namespace RegionsSelectors {
  export const selectRegionsState = createFeatureSelector<RegionsReducer.State>('regions');

  export const getSelectedRegionName = createSelector(
    selectRegionsState,
    (state) => state.selectedRegionName ? state.selectedRegionName : undefined
  );

  export const getAllRegions = createSelector(
    selectRegionsState,
    (state) => state.entities
  );
}
