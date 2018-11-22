import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

<<<<<<< HEAD
import { ROUTES } from './app.routes'
=======
import { ROUTES } from './app.routes';
>>>>>>> 76e9e06068ef129eafb55f31deee1cce44ae7a71

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
import { AboutComponent } from './about/about.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component'
import { RestaurantsService } from './restaurants/restaurant/restaurants.service'
=======
import { AboutComponent } from './about/about.component'
>>>>>>> 76e9e06068ef129eafb55f31deee1cce44ae7a71


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
<<<<<<< HEAD
    AboutComponent,
    RestaurantsComponent,
    RestaurantComponent
=======
    AboutComponent
>>>>>>> 76e9e06068ef129eafb55f31deee1cce44ae7a71
  ],
  imports: [
    BrowserModule,
    HttpModule,
<<<<<<< HEAD
    RouterModule.forRoot(ROUTES)
=======
    RouterModule.forRoot(ROUTES),
>>>>>>> 76e9e06068ef129eafb55f31deee1cce44ae7a71
  ],
  providers: [RestaurantsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
