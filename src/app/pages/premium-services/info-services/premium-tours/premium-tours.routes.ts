import {Routes} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {ListPackagesComponent} from './list-packages/list-packages.component';

export const PremiumToursRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path:'',component:ListPackagesComponent, },
      {path:'tour1',loadChildren:()=>import('./info-packages/Tour-1/tour1.routes').then(m=>m.tour1Routes),data:{breadcrumb:'Tour 1'}},
      {path:'tour2',loadChildren:()=>import('./info-packages/Tour-2/tour2.routes').then(m=>m.tour2Routes), data:{breadcrumb:'Tour 2'}},
      {path:'tour3',loadChildren:()=>import('./info-packages/Tour-3/tour3.routes').then(m=>m.tour3Routes),data:{breadcrumb:'Tour 3'}},
      {path:'tour4',loadChildren:()=>import('./info-packages/Tour-4/tour4.routes').then(m=>m.tour4Routes), data:{breadcrumb:'Tour 4'}},
      {path:'tour5',loadChildren:()=>import('./info-packages/Tour-5/tour5.routes').then(m=>m.tour5Routes),data:{breadcrumb:'Tour 5'}},
    ]
  }
];
