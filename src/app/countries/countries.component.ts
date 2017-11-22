import { Component, OnInit } from '@angular/core';
import { CountryService } from 'app/services/country.service';
import { Country } from 'app/models/country';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  public countries: Country[];
  public errorMessage: string;
  constructor(private _countryService: CountryService) { }

  ngOnInit(): void {

    this._countryService.getAll()
      .subscribe(countries => this.countries = countries,
      error => this.errorMessage = <any>error);

  }

}
