import {Routes} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {ListDestinationsComponent} from './list-destinations/list-destinations.component';

export const PeruRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    data: { breadcrumb: 'peru' },  // 📌 Se mantiene para claridad
    children: [
      {
        path: '',
        component: ListDestinationsComponent,
        data: { breadcrumb: 'Packages' }  // 📌 Nombre del breadcrumb para la lista de paquetes
      },
      {
        path:'arequipa-colca-canyon',
        loadChildren: () => import('./info-destinations/arequipa-colca-canyon/arequipa.routes').then(m => m.arequipaRoutes)
      },
      {
        path:'cusco-macchu-picchu',
        loadChildren: () => import('./info-destinations/cusco-macchu-picchu/cusco.routes').then(m => m.cuscoRoutes)
      },
      {path:'amazon-rainforest',
        loadChildren: () => import('./info-destinations/amazon-rainforest/amazon.routes').then(m => m.amazonRoutes)
      },
      {
        path:'manu',
        loadChildren: () => import('./info-destinations/manu/manu.routes').then(m => m.manuRoutes)

      },
      {
        path:'lima',
        loadChildren: () => import('./info-destinations/lima/lima.routes').then(m => m.limaRoutes)
      },
      {
        path:'puno-lake-titicaca',
        loadChildren: () => import('./info-destinations/puno-lake-titicaca/puno-lake-titicaca.routes').then(m => m.punoLakeTiticacaRoutes)
      },


    ]
  }
];
