import {Routes} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {ListDestinationsComponent} from './list-destinations/list-destinations.component';

export const EcuadorRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: ListDestinationsComponent,
      },

      {
        path: 'galapagos',
        loadChildren: () => import('./info-destinations/galapagos/galapagos.routes').then(m => m.galapagosRoutes), data:{breadcrumb:'Galapagos'}
      }
    ]
  }
];
