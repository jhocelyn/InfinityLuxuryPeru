import {Routes} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {ListPackagesComponent} from './list-packages/list-packages.component';

export const WellnesRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: ListPackagesComponent,
      },
      {
        path:'spa',
        loadChildren:()=>import('./info-packages/spa/spa.routes').then(m=>m.SpaRoutes), data:{breadcrumb:'Spa'}
      },
      {
        path:'yoga',
        loadChildren:()=>import('./info-packages/yoga/yoga.routes').then(m=>m.YogaRoutes), data:{breadcrumb:'Yoga'}
      }
    ]
  }
];
