import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { ICountryFormModel } from '../models/country-form.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

const COUNTRY_URL = 'http://localhost:3000/country'

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  addCountry(country: ICountryFormModel): Observable<any> {
    return this.http.post(COUNTRY_URL,country).pipe(
      retry(3),
      catchError(this.handleError));
  }

  getAllCountrties() : Observable<any> {
    return this.http.get(COUNTRY_URL).pipe(
      retry(3),
      catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
