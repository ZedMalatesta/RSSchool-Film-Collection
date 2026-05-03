import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Breadcrumb } from './components/breadcrumb/breadcrumb';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, Breadcrumb],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  readonly year = new Date().getFullYear();
}
