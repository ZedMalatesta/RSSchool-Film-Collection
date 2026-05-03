import { Component, inject, signal, computed } from '@angular/core';
import { FilmCard } from '../../components/film-card/film-card';
import { Autofocus } from '../../directives/autofocus';
import { FilmsService } from '../../services/films.service';

@Component({
  selector: 'app-home',
  imports: [FilmCard, Autofocus],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private readonly filmsService = inject(FilmsService);

  readonly query = signal('');

  readonly films = computed(() => {
    const q = this.query().toLowerCase().trim();
    return q
      ? this.filmsService.films().filter(f => f.title.toLowerCase().includes(q))
      : this.filmsService.films();
  });
}
