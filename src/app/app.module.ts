import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { CountryPickerComponent } from './country-picker/country-picker.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { CountriesEffects } from './countries/store/countries.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { RegionsEffects } from './regions/store/regions.effects';

@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    CountryPickerComponent,
    CountryDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([RegionsEffects, CountriesEffects]),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
