import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { FilmDetail } from './pages/film-detail/film-detail';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'films/:id', component: FilmDetail },
  { path: 'about', component: About },
  { path: '**', component: NotFound },
];
