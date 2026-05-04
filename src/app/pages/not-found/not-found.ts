import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  template: `
    <div class="not-found">
      <h1>404</h1>
      <p>Page not found.</p>
      <a routerLink="/">Go home</a>
    </div>
  `,
  styles: [`
    .not-found {
      text-align: center;
      margin-top: 4rem;
      color: #2c3e50;
    }
    h1 {
      font-size: 4rem;
      font-weight: 700;
      color: #FFA500;
      margin-bottom: 0.5rem;
    }
    p {
      color: #7f8c8d;
      margin-bottom: 1.5rem;
    }
    a {
      color: #FFA500;
      font-weight: 600;
      text-decoration: none;
    }
    a:hover { text-decoration: underline; }
  `],
})
export class NotFound {}
