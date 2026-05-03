import { Component, input, output } from '@angular/core';
import { Film } from '../../models/film.model';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.html',
  styleUrl: './film-card.css',
})
export class FilmCard {
  film = input.required<Film>();
  toggleFavorite = output<number>();
}
