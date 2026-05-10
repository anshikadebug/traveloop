import { Routes } from '@angular/router';

import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { CreateTrip } from './pages/create-trip/create-trip';
import { ItineraryBuilder } from './pages/itinerary-builder/itinerary-builder';

export const routes: Routes = [

  {
    path:'',
    component: Login
  },

  {
    path:'dashboard',
    component: Dashboard
  },

  {
    path:'create-trip',
    component: CreateTrip
  },

  {
    path:'itinerary',
    component: ItineraryBuilder
  }

];
