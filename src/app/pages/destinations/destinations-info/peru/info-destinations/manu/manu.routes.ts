import {Routes} from '@angular/router';
import {LayoutComponent} from '../puno-lake-titicaca/layout/layout.component';
import {PuertoMaldonadoPackagesComponent} from './manu-packages/puerto-maldonado-packages.component';
import {InfoPackagesComponent} from './info-packages/info-packages.component';

export const manuRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: PuertoMaldonadoPackagesComponent,
      },
      {
        path: ':id',
        component: InfoPackagesComponent,
        data: { breadcrumb: 'Package Info' }  // 📌 Nombre genérico para paquetes individuales
      }
    ]
  }
];
