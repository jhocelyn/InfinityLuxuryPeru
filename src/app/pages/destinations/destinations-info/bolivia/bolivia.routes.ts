import {Routes} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {InfoPackagesComponent} from './info-packages/info-packages.component';

export const BoliviaRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: InfoPackagesComponent,
      },
      {
        path:'uyuni-salt',
        loadChildren: () => import('./info-destinations/uyuni-salt/uyuni-salt.routes').then(m => m.UyuniSaltRoutes), data:{breadcrumb:'Uyuni Salt'}
      }
    ]
  }
];
