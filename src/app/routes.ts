import { Routes } from '@angular/router';
import { AboutMe } from './pages/about-me/about-me';

export const ROUTES: Routes = [
  {path: '', redirectTo: '/aboutMe', pathMatch: 'full'},
  {path: 'aboutMe', component: AboutMe},
  {path: '**', redirectTo: ''},
];
