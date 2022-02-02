import { Component, OnInit, Input } from '@angular/core';
import { BeerSummary } from '../beer';

@Component({
  selector: 'app-beer-detail',
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.css'],
})
export class BeerDetailComponent implements OnInit {
  @Input() beer?: BeerSummary;
  constructor() {}

  ngOnInit(): void {}
}
