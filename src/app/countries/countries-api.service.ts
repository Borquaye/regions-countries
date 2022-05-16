import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesApiService {
  api: string = 'https://restcountries.com/v2/region'

  constructor(private http: HttpClient) { }

  getCountriesForRegion(region: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.api}/${region}`);
  }
}
