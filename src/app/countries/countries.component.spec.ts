import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesComponent } from './countries.component';
import { CountryService } from 'app/services/country.service';
import { Observable } from 'rxjs/Rx';
import { Country } from 'app/models/country';

class MockCountryService extends CountryService {
  constructor() {
    super(null);
  }

  getAll(): Observable < Country[] > {
    console.log('sending fake countries!');

    return Observable.of([ { name: 'Peru', alpha2Code: 'PE',
                            capital: 'Lima', demonym: 'peruvian',
                            region: 'Americas'}]);
  }
}

let _countryService: CountryService;

describe('CountriesComponent', () => {
  let component: CountriesComponent;
  let fixture: ComponentFixture<CountriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountriesComponent ],
      providers: [
        {
          provide: CountryService,
          useClass: MockCountryService
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    _countryService = TestBed.get(CountryService);

    fixture = TestBed.createComponent(CountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set one country', () => {
        component.ngOnInit();
        expect(component.countries.length).toBe(1);
  });
});
