export interface Ingredient {
  name: string;
  amount: {
    value: number;
    unit: string;
  };
  add?: string;
  attribute?: string;
}

export interface Beer {
  id: number;
  name: string;
  tagline: string;
  image_url: string;
  first_brewed: string;
  description: string;
  abv: number;
  ibu: number;
  ingredients: {
    malt: Ingredient[];
    hops: Ingredient[];
    yeast: string;
  };
  food_pairing: [];
  brewers_tips: string;
}
