import {Routes} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {NazcaPackagesComponent} from './amazon-rainforest-packages/nazca-packages.component';
import {InfoPackagesComponent} from './info-packages/info-packages.component';

export const amazonRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    data: { breadcrumb: 'Nazca' },  // 📌 Se mantiene para claridad
    children: [
      {
        path: '',
        component: NazcaPackagesComponent,
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
