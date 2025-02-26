import {Routes} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {ListPackagesComponent} from './list-packages/list-packages.component';

export const GastronomyRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: ListPackagesComponent,
      },
      {
        path:'peruvian-cooking-class',
        loadChildren: () => import('./info-packages/peruvian-cooking-class/peruvian-cooking-class.routes').then(m => m.PeruvianCookingClassRoutes)
      },
      {
        path:'peruvian-best-restaurants',
        loadChildren: () => import('./info-packages/peruvian-best-restaurants/peruvian-best-resturants.routes').then(m => m.peruvianBestResturantsRoutes)
      }
    ]
  }
];
