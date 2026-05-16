import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Signup } from './pages/signup/signup';
import { CreateTrip } from './pages/create-trip/create-trip';
import { MyTrips } from './pages/my-trips/my-trips';
import { TripDetails } from './pages/trip-details/trip-details';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: 'signup',
    component: Signup
  },
  {
    path: 'create-trip',
    component: CreateTrip
  },
  {
    path: 'edit-trip/:id',
    component: CreateTrip
  },
  {
    path: 'my-trips',
    component: MyTrips
  },
  {
    path: 'trip/:id',
    component: TripDetails
  }
];