import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Film } from '../../models/film.model';

@Component({
  selector: 'app-film-card',
  imports: [RouterLink],
  templateUrl: './film-card.html',
  styleUrl: './film-card.css',
})
export class FilmCard {
  readonly film = input.required<Film>();
  readonly toggleFavorite = output<number>();
}
