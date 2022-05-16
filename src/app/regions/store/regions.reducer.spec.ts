import { RegionsActions } from './regions.actions';
import { RegionsReducer } from './regions.reducer';

describe('Regions Reducer', () => {
  it('should set the selected region name', () => {
    const region = 'Region';
    const expectedResult = { ...RegionsReducer.initialState, selectedRegionName: region };

    const result = RegionsReducer.reducer(
      RegionsReducer.initialState,
      RegionsActions.setSelectedRegion({ region })
    );

    expect(result).toEqual(expectedResult);
  });
});
