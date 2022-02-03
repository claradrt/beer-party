# BeerParty

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Presentation

The requirements asked for a web application destined to Deale employees who are invited to a Beer party but don't know anything about beers.

This project consists of 3 different views:
1. As per the requirements, one view lists the beers
2. Also per the requirements, another view shows the details of a selected beer. 
3. The extra  view was added as a personal decision and is a home page which is also the landing page. As a user experience, it is confusing to arrive on a page that is just a list of beers, which is why I tought of a home page to welcome the users. Moreover, the users targeted for this application know nothing about beer, I therefore took the liberty of adding a YouTube video in the home page to bring more information about beer.

The following components were created for this application:
1. Beers: responsible for displaying the beers fetched from the API
2. Beer detail: responsible for displaying information about a specific beer fetched from the API
3. Home: the landing page of the app, responsible for welcoming the user and displaying a YouTube video about how beer is made
4. Navbar: responsible for the navigation across the app

The following services were created for this application:
 1. Beer service: responsible for getting the information of the beers through the Punk APIs

Extra tools used in this application include: 
- Punk Api: https://punkapi.com/documentation/v2
- Bootstrap
- Fontawesome
- Google Fonts
