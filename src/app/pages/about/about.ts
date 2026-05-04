import { Component, inject } from '@angular/core';
import { BreadcrumbService } from '../../services/breadcrumb.service';

@Component({
  selector: 'app-about',
  template: '<p>About page</p>',
})
export class About {
  constructor() {
    inject(BreadcrumbService).set([{ label: 'About', url: '/about' }]);
  }
}
