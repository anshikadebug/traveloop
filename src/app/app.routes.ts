import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Signup } from './pages/signup/signup';
import { CreateTrip } from './pages/create-trip/create-trip';
import { MyTrips } from './pages/my-trips/my-trips';
import { TripDetails } from './pages/trip-details/trip-details';
import { Budget } from './pages/budget/budget';
import { PackingChecklist } from './pages/packing-checklist/packing-checklist';
import { TripNotes } from './pages/trip-notes/trip-notes';

export const routes: Routes = [
  {
  path: 'budget',
  component: Budget
},
{
  path: 'packing-checklist',
  component: PackingChecklist
},
{
  path: 'trip-notes',
  component: TripNotes
},
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