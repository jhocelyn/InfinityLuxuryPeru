import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router, RouterLink} from '@angular/router';
import {NgForOf, NgIf} from '@angular/common';
import {filter} from 'rxjs';

interface Breadcrumb {
  label: string;
  url: string;
}
@Component({
  selector: 'app-breadcrumb',
  imports: [
    RouterLink,
    NgForOf,
    NgIf
  ],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.css'
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs: Breadcrumb[] = [];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      this.breadcrumbs = this.buildBreadcrumbs(this.route.root);
    });
  }

  private buildBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: Breadcrumb[] = []): Breadcrumb[] {
    const children: ActivatedRoute[] = route.children;

    for (const child of children) {
      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');

      if (routeURL !== '') {
        url += `/${routeURL}`;
      }

      // Si existe un breadcrumb definido en 'data', úsalo. Si no, usa el path.
      let label = child.snapshot.data['breadcrumb'] || routeURL;

      // Si la ruta tiene un parámetro como ":id", lo reemplazamos por su valor real
      if (child.snapshot.paramMap.get('id')) {
        label = `Package #${child.snapshot.paramMap.get('id')}`;
      }

      // **Evitar agregar el breadcrumb si ya existe**
      if (breadcrumbs.length === 0 || breadcrumbs[breadcrumbs.length - 1].label !== label) {
        breadcrumbs.push({ label, url });
      }

      // Continuar con los hijos
      this.buildBreadcrumbs(child, url, breadcrumbs);
    }

    return breadcrumbs;
  }
}
