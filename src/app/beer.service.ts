import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Beer } from './beer';
import { BEERS } from './mock-beers';

@Injectable({
  providedIn: 'root',
})
export class BeerService {
  getBeers(): Observable<Beer[]> {
    const beers = of(BEERS);
    return beers;
  }

  getBeer(id: number): Observable<Beer> {
    const beer = BEERS.find((b) => b.id === id)!;
    return of(beer);
  }

  constructor() {}
}
