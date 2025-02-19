import {Routes} from '@angular/router';
import {LayoutComponent} from '../ica/layout/layout.component';
import {PuertoMaldonadoPackagesComponent} from './puerto-maldonado-packages/puerto-maldonado-packages.component';
import {InfoPackagesComponent} from './info-packages/info-packages.component';

export const puertoMaldondoRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    data: { breadcrumb: 'Cusco' },  // 📌 Se mantiene para claridad
    children: [
      {
        path: '',
        component: PuertoMaldonadoPackagesComponent,
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
