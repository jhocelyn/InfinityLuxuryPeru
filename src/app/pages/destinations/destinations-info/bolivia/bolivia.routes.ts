import {Routes} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {ListPackagesComponent} from './info-destinations/uyuni-salt/list-packages/list-packages.component';

export const BoliviaRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: ListPackagesComponent,
      },
      {
        path:'uyuni-salt',
        loadChildren: () => import('./info-destinations/uyuni-salt/uyuni-salt.routes').then(m => m.UyuniSaltRoutes), data:{breadcrumb:'Uyuni Salt'}
      }
    ]
  }
];
