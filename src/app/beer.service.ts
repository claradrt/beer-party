import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Beer } from './beer';

@Injectable({
  providedIn: 'root',
})
export class BeerService {
  private beersUrl = 'https://api.punkapi.com/v2/beers?per_page=78';
  private randomBeerUrl = 'https://api.punkapi.com/v2/beers/random';

  getBeers(): Observable<Beer[]> {
    return this.http.get<Beer[]>(this.beersUrl);
  }

  getRandomBeer(): Observable<Beer[]> {
    return this.http.get<Beer[]>(this.randomBeerUrl);
  }

  getBeer(id: number): Observable<Beer[]> {
    const beerDetailsUrl = `https://api.punkapi.com/v2/beers?ids=${id}`;
    return this.http.get<Beer[]>(beerDetailsUrl);
  }

  constructor(private http: HttpClient) {
    this.getBeers;
  }
}
