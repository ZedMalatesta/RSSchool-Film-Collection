import { Component, signal, computed } from '@angular/core';
import { FilmCard } from '../../components/film-card/film-card';
import { Autofocus } from '../../directives/autofocus';
import { FILMS } from '../../mocks/films.mock';

@Component({
  selector: 'app-home',
  imports: [FilmCard, Autofocus],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  readonly query = signal('');

  readonly films = computed(() => {
    const q = this.query().toLowerCase().trim();
    return q ? FILMS.filter(f => f.title.toLowerCase().includes(q)) : FILMS;
  });
}
