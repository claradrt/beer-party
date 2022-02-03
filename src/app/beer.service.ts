import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Observable } from 'rxjs';
import { Beer } from './beer';

@Injectable({
  providedIn: 'root',
})
export class BeerService {
  private beersUrl = 'https://api.punkapi.com/v2/beers?per_page=78';

  getBeers(): Observable<Beer[]> {
    return this.http.get<Beer[]>(this.beersUrl);
  }

  getBeer(id: number): Observable<Beer[]> {
    const beerDetailsUrl = `https://api.punkapi.com/v2/beers?ids=${id}`;
    //Why does "first()" still return an array?
    return this.http.get<Beer[]>(beerDetailsUrl).pipe(first());
  }

  constructor(private http: HttpClient) {
    this.getBeers;
  }
}
