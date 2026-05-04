import { Component, inject, input, computed, effect } from '@angular/core';
import { FilmsService } from '../../services/films.service';
import { BreadcrumbService } from '../../services/breadcrumb.service';
import { DurationPipe } from '../../pipes/duration.pipe';

@Component({
  selector: 'app-film-detail',
  imports: [DurationPipe],
  templateUrl: './film-detail.html',
  styleUrl: './film-detail.css',
})
export class FilmDetail {
  private readonly filmsService = inject(FilmsService);
  private readonly breadcrumbService = inject(BreadcrumbService);

  readonly id = input.required<string>();

  readonly film = computed(() =>
    this.filmsService.films().find(f => f.id === Number(this.id()))
  );

  constructor() {
    effect(() => {
      const film = this.film();
      this.breadcrumbService.set([
        { label: 'Home', url: '/' },
        { label: film?.title ?? 'Film', url: `/films/${this.id()}` },
      ]);
    });
  }
}
