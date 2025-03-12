import {Routes} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {ListPackagesComponent} from './list-packages/list-packages.component';

export const SpecialServicesRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: ListPackagesComponent,
      },
      {
        path:'autism',
        loadChildren: () => import('./info-packages/austism/austism.routes').then(m => m.AustismRoutes), data:{breadcrumb:'Autism'}
      },
      {
        path:'handicap',
        loadChildren: () => import('./info-packages/handicap/handicap.routes').then(m => m.HandicapRoutes),data:{breadcrumb:'Handicap'}

      },
      {
        path:'oxygen-requirement',
        loadChildren: () => import('./info-packages/oxygen-requirement/oxygen-requirement.routes').then(m => m.OxygenRequirementRoutes), data:{breadcrumb:'Oxygen Requirement'}
      }
    ]
  }
];
