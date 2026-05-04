import { Injectable, signal, computed } from '@angular/core';
import { Film } from '../models/film.model';
import { FILMS } from '../mocks/films.mock';

@Injectable({ providedIn: 'root' })
export class FilmsService {
  private readonly _films = signal<Film[]>(FILMS);
  readonly films = this._films.asReadonly();
  readonly favorites = computed(() => this._films().filter(f => f.isFavorite));

  getById(id: number): Film | undefined {
    return this._films().find(f => f.id === id);
  }

  toggleFavorite(id: number): void {
    this._films.update(films =>
      films.map(f => f.id === id ? { ...f, isFavorite: !f.isFavorite } : f)
    );
  }
}
