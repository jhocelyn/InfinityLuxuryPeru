import {Routes} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {ListDestinationsComponent} from './list-destinations/list-destinations.component';

export const PeruRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: ListDestinationsComponent,
      },
      {
        path:'arequipa-colca-canyon',
        loadChildren: () => import('./info-destinations/arequipa-colca-canyon/arequipa.routes').then(m => m.arequipaRoutes), data:{breadcrumb:'Arequipa-Colca Canyon'}
      },
      {
        path:'cusco-macchu-picchu',
        loadChildren: () => import('./info-destinations/cusco-macchu-picchu/cusco.routes').then(m => m.cuscoRoutes),data:{breadcrumb:'Cusco-Macchu Picchu'}
      },
      {path:'amazon-rainforest',
        loadChildren: () => import('./info-destinations/amazon-rainforest/amazon.routes').then(m => m.amazonRoutes),data:{breadcrumb:'Amazon Rainforest'}
      },
      {
        path:'manu',
        loadChildren: () => import('./info-destinations/manu/manu.routes').then(m => m.manuRoutes),data:{breadcrumb:'Manu'}

      },
      {
        path:'lima',
        loadChildren: () => import('./info-destinations/lima/lima.routes').then(m => m.limaRoutes),data:{breadcrumb:'Lima'}
      },
      {
        path:'puno-lake-titicaca',
        loadChildren: () => import('./info-destinations/puno-lake-titicaca/puno-lake-titicaca.routes').then(m => m.punoLakeTiticacaRoutes),data:{breadcrumb:'Puno-Lake Titicaca'}
      },


    ]
  }
];
