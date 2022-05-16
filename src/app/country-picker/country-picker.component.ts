import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { CountriesActions } from '../countries/store/countries.actions';
import { RegionsActions } from '../regions/store/regions.actions';
import { RegionsSelectors } from '../regions/store/regions.selectors';
import { AppSelectors } from '../store/selectors';

@Component({
  selector: 'app-country-picker',
  templateUrl: './country-picker.component.html',
  styleUrls: ['./country-picker.component.scss']
})
export class CountryPickerComponent {
  regions$ = this.store.select(RegionsSelectors.getAllRegions).pipe(map((regions) =>
    regions.map((region) => ({ label: region, value: region }))
  ));

  countriesInSelectedRegion$ = this.store.select(AppSelectors.getCountriesInSelectedRegion).pipe(map((countries) =>
    countries.map((country) => ({ label: country.name, value: country.name }))
  ));

  noRegionSelected = true;

  constructor(private store: Store<any>) { }

  onRegionChange(newValue: string): void {
    if (newValue !== '') {
      this.noRegionSelected = false;
      this.store.dispatch(RegionsActions.setSelectedRegion({ region: newValue }));
      this.store.dispatch(CountriesActions.loadCountriesForRegion({ region: newValue }));
    } else {
      this.noRegionSelected = true;
    }
  }

  onCountryChange(newValue: string): void {
    if (newValue !== '') {
      this.store.dispatch(CountriesActions.setSelectedCountry({ country: newValue }))
    }
  }

}
