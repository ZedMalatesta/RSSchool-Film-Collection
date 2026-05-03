import { Component } from '@angular/core';
import { FilmCard } from '../../components/film-card/film-card';
import { FILMS } from '../../mocks/films.mock';

@Component({
  selector: 'app-home',
  imports: [FilmCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  readonly films = FILMS;
}
