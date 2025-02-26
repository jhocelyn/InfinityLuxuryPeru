import {Routes} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {NazcaPackagesComponent} from './amazon-rainforest-packages/nazca-packages.component';
import {InfoPackagesComponent} from './info-packages/info-packages.component';

export const amazonRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: NazcaPackagesComponent,
      },
      {
        path: ':id',
        component: InfoPackagesComponent,
        data: { breadcrumb: 'Package Info' }  // 📌 Nombre genérico para paquetes individuales
      }
    ]
  }
];
