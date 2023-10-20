import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { PageSlugs } from 'src/app/enums/page-slugs';
import { PageTitles } from 'src/app/enums/page-titles';

interface Breadcrumb {
  label: string;
  url: string;
}

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css'],
})
export class BreadcrumbsComponent implements OnInit {
  breadcrumbs: Breadcrumb[] = [];

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.breadcrumbs = this.createBreadcrumbs(this.activatedRoute.root);
      });

    console.log(this.breadcrumbs);
  }

  private createBreadcrumbs(
    route: ActivatedRoute,
    url: string = '',
    breadcrumbs: Breadcrumb[] = []
  ): Breadcrumb[] {
    if (breadcrumbs.length === 0) {
      breadcrumbs.push({ label: PageTitles.HOME, url: '/' });
    }

    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      const routeSegments: string[] = child.snapshot.url.map(
        (segment) => segment.path
      );

      routeSegments.forEach((segment) => {
        url += `/${segment}`;

        let label = this.getLabelFromRoute(segment);
        if (!label) {
          label = this.convertSlugToReadableFormat(segment);
        }

        breadcrumbs.push({ label, url });
      });

      return this.createBreadcrumbs(child, url, breadcrumbs);
    }

    return breadcrumbs;
  }

  private convertSlugToReadableFormat(slug: string): string {
    return slug
      .replace(/-/g, ' ') // înlocuiește toate instanțele de '-' cu un spațiu
      .split(' ') // desparte stringul în cuvinte
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // capitalizează fiecare cuvânt
      .join(' '); // combină cuvintele înapoi într-un string, separate de spații
  }

  private getLabelFromRoute(path: string): string {
    // Map path segments to labels here, as needed.
    switch (path) {
      case PageSlugs.ARTICLES.slice(1):
        return PageTitles.ARTICLES;
      case PageSlugs.SERVICES.slice(1):
        return PageTitles.SERVICES;
      // Add other paths and their labels here
      default:
        return path.charAt(0).toUpperCase() + path.slice(1); // Capitalize the first letter by default
    }
  }
}
