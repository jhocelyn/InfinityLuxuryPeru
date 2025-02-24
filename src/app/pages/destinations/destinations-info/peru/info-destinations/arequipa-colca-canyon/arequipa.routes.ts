import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ArequipaPackagesComponent } from './arequipa-colca-canyon-packages/arequipa-packages.component';
import { InfoPackagesComponent } from './info-packages/info-packages.component';

export const arequipaRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    data: { breadcrumb: 'Arequipa' },  // 📌 Se mantiene para claridad
    children: [
      {
        path: '',
        component: ArequipaPackagesComponent,
        data: { breadcrumb: 'Packages' }  // 📌 Nombre del breadcrumb para la lista de paquetes
      },
      {
        path: ':id',
        component: InfoPackagesComponent,
        data: { breadcrumb: 'Package Info' }  // 📌 Nombre genérico para paquetes individuales
      }
    ]
  }
];
