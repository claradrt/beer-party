import { Component, OnInit } from '@angular/core';
import { BeerSummary } from '../beer';
import { BEERS } from '../mock-beers';
import { BEERSDETAILS } from '../mock-beers';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css'],
})
export class BeersComponent implements OnInit {
  beers = BEERS;
  beersDetails = BEERSDETAILS;
  selectedBeer?: BeerSummary;

  onSelect(beer: BeerSummary): void {
    this.selectedBeer = beer;
  }
  constructor() {}

  ngOnInit(): void {}
}
