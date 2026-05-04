import { Component, inject } from '@angular/core';
import { BreadcrumbService } from '../../services/breadcrumb.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  constructor() {
    inject(BreadcrumbService).set([{ label: 'About', url: '/about' }]);
  }
}
