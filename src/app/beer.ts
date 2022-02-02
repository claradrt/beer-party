export interface BeerSummary {
  id: number;
  name: string;
  tagline: string;
  image_url: string;
}

export interface BeerDetails {
  id: number;
  first_brewed: string;
  description: string;
  abv: 4.5;
  ibu: 60;
}
