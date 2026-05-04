import { Component, inject, input, computed } from '@angular/core';
import { FilmsService } from '../../services/films.service';
import { DurationPipe } from '../../pipes/duration.pipe';

@Component({
  selector: 'app-film-detail',
  imports: [DurationPipe],
  templateUrl: './film-detail.html',
  styleUrl: './film-detail.css',
})
export class FilmDetail {
  private readonly filmsService = inject(FilmsService);

  readonly id = input.required<string>();

  readonly film = computed(() =>
    this.filmsService.films().find(f => f.id === Number(this.id()))
  );
}
