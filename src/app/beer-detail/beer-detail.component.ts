import { Component, OnInit, Input } from '@angular/core';
import { Beer, Ingredient } from '../beer';
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

  getIngredientNames(ingredients: Ingredient[]): string[] {
    return ingredients
      .map((ingredient) => ingredient.name)
      .filter(this.onlyUnique);
  }

  onlyUnique(value: string, index: number, self: string[]) {
    return self.indexOf(value) === index;
  }

  getBeer(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.beerService.getBeer(id).subscribe((beer) => {
      this.beer = beer[0];
    });
  }

  goBack(): void {
    this.location.back();
  }
}
