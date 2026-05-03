import { Component } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, RouterLink } from '@angular/router';
import { filter } from 'rxjs';

interface Crumb {
  label: string;
  url: string;
}

@Component({
  selector: 'app-breadcrumb',
  imports: [RouterLink],
  templateUrl: './breadcrumb.html',
  styleUrl: './breadcrumb.css',
})
export class Breadcrumb {
  crumbs: Crumb[] = [];

  constructor(private router: Router, private route: ActivatedRoute) {
    this.crumbs = this.build(this.route.root);
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => (this.crumbs = this.build(this.route.root)));
  }

  private build(route: ActivatedRoute, url = '', crumbs: Crumb[] = []): Crumb[] {
    for (const child of route.children) {
      const segment = child.snapshot.url.map(s => s.path).join('/');
      const nextUrl = segment ? `${url}/${segment}` : url || '/';
      const label = this.getLabel(child);
      if (label) crumbs.push({ label, url: nextUrl });
      this.build(child, nextUrl, crumbs);
    }
    return crumbs;
  }

  private getLabel(route: ActivatedRoute): string | undefined {
    const config = route.snapshot.routeConfig;
    if (config?.resolve?.['breadcrumb']) return route.snapshot.data['breadcrumb'];
    return config?.data?.['breadcrumb'];
  }
}
