import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeersComponent } from './beers/beers.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BeerDetailComponent } from './beer-detail/beer-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BeersComponent,
    BeerDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
