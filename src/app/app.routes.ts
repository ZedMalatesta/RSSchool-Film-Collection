import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';

export const routes: Routes = [
  { path: '', component: Home, data: { breadcrumb: 'Home' } },
  { path: 'about', component: About, data: { breadcrumb: 'About' } },
];
