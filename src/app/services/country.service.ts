import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { Country } from '../models/country';

@Injectable()
export class CountryService {

  private _basetUrl = 'https://restcountries.eu/rest/v2';

      constructor(private _http: Http) { }

      getAll(): Observable<Country[]> {
          return this._http.get(`${this._basetUrl}/all`)
              .map((response: Response) => <Country[]> response.json())
              .catch(this.handleError);
      }

      private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
