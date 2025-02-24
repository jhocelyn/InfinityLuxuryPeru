import {Routes} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {InfoPackagesComponent} from './info-packages/info-packages.component';

export const BoliviaRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    data: { breadcrumb: 'Bolivia' },  // 📌 Se mantiene para claridad
    children: [
      {
        path: '',
        component: InfoPackagesComponent,
        data: { breadcrumb: 'Packages' }  // 📌 Nombre del breadcrumb para la lista de paquetes
      },
      {
        path:'uyuni-salt',
        loadChildren: () => import('./info-destinations/uyuni-salt/uyuni-salt.routes').then(m => m.UyuniSaltRoutes)
      }
    ]
  }
];
