import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeersComponent } from './beers/beers.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BeerDetailComponent } from './beer-detail/beer-detail.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, BeersComponent, BeerDetailComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
