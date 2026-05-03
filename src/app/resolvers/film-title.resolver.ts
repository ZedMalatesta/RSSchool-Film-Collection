import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { FilmsService } from '../services/films.service';

export const filmTitleResolver: ResolveFn<string> = route => {
  const id = Number(route.paramMap.get('id'));
  return inject(FilmsService).films().find(f => f.id === id)?.title ?? 'Film';
};
