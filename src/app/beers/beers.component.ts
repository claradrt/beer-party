import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Beer } from '../beer';
import { BeerService } from '../beer.service';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css'],
})
export class BeersComponent implements OnInit {
  beers: Beer[] = [];

  getBeers(): void {
    this.beerService.getBeers().subscribe((beers) => (this.beers = beers));
  }

  getRandomBeerAndRedirect(): void {
    this.beerService
      .getRandomBeer()
      .subscribe((beers) =>
        this.router.navigateByUrl(`/detail/${beers[0].id}`)
      );
  }

  constructor(private beerService: BeerService, private router: Router) {}

  ngOnInit(): void {
    this.getBeers();
  }
}
