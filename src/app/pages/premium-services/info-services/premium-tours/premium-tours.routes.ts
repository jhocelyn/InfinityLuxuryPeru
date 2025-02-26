import {Routes} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {ListPackagesComponent} from './list-packages/list-packages.component';

export const PremiumToursRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    data: { breadcrumb: 'Premium Tours' },  // 📌 Se mantiene para claridad
    children: [
      {path:'',component:ListPackagesComponent,data: { breadcrumb: 'Packages' } }, // 📌 Nombre del breadcrumb para la lista de paquete<
      {path:'tour1',loadChildren:()=>import('./info-packages/Tour-1/tour1.routes').then(m=>m.tour1Routes)},
      {path:'tour2',loadChildren:()=>import('./info-packages/Tour-2/tour2.routes').then(m=>m.tour2Routes)},
      {path:'tour3',loadChildren:()=>import('./info-packages/Tour-3/tour3.routes').then(m=>m.tour3Routes)},
      {path:'tour4',loadChildren:()=>import('./info-packages/Tour-4/tour4.routes').then(m=>m.tour4Routes)},
      {path:'tour5',loadChildren:()=>import('./info-packages/Tour-5/tour5.routes').then(m=>m.tour5Routes)},
    ]
  }
];
