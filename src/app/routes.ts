import { Routes } from '@angular/router';
import { Homepage } from './pages/homepage/homepage';

export const ROUTES: Routes = [
  {path: '', component: Homepage, pathMatch: 'full', data: {}},
  {path: '**', redirectTo: ''},
];
