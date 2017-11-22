import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CountriesComponent } from './countries/countries.component';
import { HomeComponent } from './home/home.component';
import { CountryService } from 'app/services/country.service';

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
            { path: 'home', component: HomeComponent },
            { path: 'countries', component: CountriesComponent },
             { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: '**', redirectTo: 'home', pathMatch: 'full' }
          ]),
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
