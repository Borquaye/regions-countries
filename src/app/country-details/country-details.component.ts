import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CountriesSelectors } from '../countries/store/counties.selectors';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent {
  selectedCountry$ = this.store.select(CountriesSelectors.getSelectedCountry);

  constructor(private store: Store<any>) { }
}