import {Routes} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {ListPackagesComponent} from './list-packages/list-packages.component';

export const WellnesRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    data: { breadcrumb: 'Wellness' },  // 📌 Se mantiene para claridad
    children: [
      {
        path: '',
        component: ListPackagesComponent,
        data: { breadcrumb: 'Packages' }  // 📌 Nombre del breadcrumb para la lista de paquetes
      },
      {
        path:'spa',
        loadChildren:()=>import('./info-packages/spa/spa.routes').then(m=>m.SpaRoutes),
      },
      {
        path:'yoga',
        loadChildren:()=>import('./info-packages/yoga/yoga.routes').then(m=>m.YogaRoutes),
      }
    ]
  }
];
