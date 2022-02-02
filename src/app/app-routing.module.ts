import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeersComponent } from './beers/beers.component';
import { BeerDetailComponent } from './beer-detail/beer-detail.component';

const routes: Routes = [
  { path: 'beers', component: BeersComponent },
  { path: '', redirectTo: '/beers', pathMatch: 'full' },
  { path: 'detail/:id', component: BeerDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
