<<<<<<< HEAD
import { Routes } from '@angular/router'

import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'
import { RestaurantsComponent } from './restaurants/restaurants.component'

export const ROUTES: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "restaurants", component: RestaurantsComponent }
]
=======
import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component"
import { AboutComponent } from "./about/about.component"

export const ROUTES: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent }
];
>>>>>>> 76e9e06068ef129eafb55f31deee1cce44ae7a71
