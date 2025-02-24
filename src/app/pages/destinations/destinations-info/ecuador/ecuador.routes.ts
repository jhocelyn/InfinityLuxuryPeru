import {Routes} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {ListDestinationsComponent} from './list-destinations/list-destinations.component';

export const EcuadorRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    data: { breadcrumb: 'Ecuador' },  // 📌 Se mantiene para claridad
    children: [
      {
        path: '',
        component: ListDestinationsComponent,
        data: { breadcrumb: 'Packages' }  // 📌 Nombre del breadcrumb para la lista de paquetes
      },

      {
        path: 'galapagos',
        loadChildren: () => import('./info-destinations/galapagos/galapagos.routes').then(m => m.galapagosRoutes)
      }
    ]
  }
];
