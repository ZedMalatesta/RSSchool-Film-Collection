import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'duration' })
export class DurationPipe implements PipeTransform {
  transform(minutes: number): string {
    const hours: number = Math.floor(minutes / 60);
    const mins: number = minutes % 60;

    if (hours && mins) return `${hours}h ${mins}min`;
    if (hours) return `${hours}h`;

    return `${mins}min`;
  }
}
