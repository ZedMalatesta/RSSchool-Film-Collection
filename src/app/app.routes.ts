import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { FilmDetail } from './pages/film-detail/film-detail';
import { NotFound } from './pages/not-found/not-found';
import { filmTitleResolver } from './resolvers/film-title.resolver';

export const routes: Routes = [
  {
    path: '',
    data: { breadcrumb: 'Home' },
    children: [
      { path: '', component: Home },
      { path: 'films/:id', component: FilmDetail, resolve: { breadcrumb: filmTitleResolver } },
    ],
  },
  { path: 'about', component: About, data: { breadcrumb: 'About' } },
  { path: '**', component: NotFound },
];
