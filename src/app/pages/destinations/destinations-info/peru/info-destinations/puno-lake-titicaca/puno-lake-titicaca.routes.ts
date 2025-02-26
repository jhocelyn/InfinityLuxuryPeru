import {Routes} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {IcaPackagesComponent} from './puno-lake-titicaca-packages/ica-packages.component';
import {InfoPackagesComponent} from './info-packages/info-packages.component';

export const punoLakeTiticacaRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: IcaPackagesComponent,
      },
      {
        path: ':id',
        component: InfoPackagesComponent,
        data: { breadcrumb: 'Package Info' }  // 📌 Nombre genérico para paquetes individuales
      }
    ]
  }
];
