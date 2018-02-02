import { Routes } from '@angular/router';
import { AboutMe } from './pages/about-me/about-me';
import { Experiences } from './pages/experiences/experiences';

export const ROUTES: Routes = [
  {path: '', redirectTo: '/aboutMe', pathMatch: 'full'},
  {path: 'aboutMe', component: AboutMe},
  {path: 'experiences', component: Experiences},
  {path: '**', redirectTo: ''},
];
