import {Routes} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {LimaPackagesComponent} from './lima-packages/lima-packages.component';
import {InfoPackagesComponent} from './info-packages/info-packages.component';

export const limaRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: LimaPackagesComponent,
      },
      {
        path: ':id',
        component: InfoPackagesComponent,
        data: { breadcrumb: 'Package Info' }  // 📌 Nombre genérico para paquetes individuales
      }
    ]
  }
];
