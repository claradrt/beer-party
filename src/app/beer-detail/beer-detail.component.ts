import { Component, OnInit, Input } from '@angular/core';
import { Beer } from '../beer';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { BeerService } from '../beer.service';

@Component({
  selector: 'app-beer-detail',
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.css'],
})
export class BeerDetailComponent implements OnInit {
  @Input() beer?: Beer;
  constructor(
    private route: ActivatedRoute,
    private beerService: BeerService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getBeer();
  }

  getBeer(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.beerService.getBeer(id).subscribe((beer) => (this.beer = beer));
  }
}
