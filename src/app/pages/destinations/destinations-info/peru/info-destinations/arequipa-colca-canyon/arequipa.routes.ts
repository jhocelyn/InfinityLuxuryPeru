import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ArequipaPackagesComponent } from './arequipa-colca-canyon-packages/arequipa-packages.component';
import { InfoPackagesComponent } from './info-packages/info-packages.component';

export const arequipaRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: ArequipaPackagesComponent,
      },
      { path: 'info/:id',
        component: InfoPackagesComponent,
        data:{breadcrumb:'Packages'}
      }
    ]
  }
];
