import {Routes} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {ListPackagesComponent} from './list-packages/list-packages.component';

export const SpecialServicesRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    data: { breadcrumb: 'Special Services' },  // 📌 Se mantiene para claridad
    children: [
      {
        path: '',
        component: ListPackagesComponent,
        data: { breadcrumb: 'Packages' }  // 📌 Nombre del breadcrumb para la lista de paquetes
      },
      {
        path:'austism',
        loadChildren: () => import('./info-packages/austism/austism.routes').then(m => m.AustismRoutes),
      },
      {
        path:'handicap',
        loadChildren: () => import('./info-packages/handicap/handicap.routes').then(m => m.HandicapRoutes),

      },
      {
        path:'oxygen-requirement',
        loadChildren: () => import('./info-packages/oxygen-requirement/oxygen-requirement.routes').then(m => m.OxygenRequirementRoutes),
      }
    ]
  }
];
