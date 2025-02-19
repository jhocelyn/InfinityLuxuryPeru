import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ListDestinationsComponent } from './list-destinations/list-destinations.component';

export const DestinationsRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    data: { breadcrumb: 'Destinations' },  // 📌 Nombre del breadcrumb para esta ruta
    children: [
      { path: '', redirectTo: 'destinations', pathMatch: 'full' },
      { path: '', component: ListDestinationsComponent },
      {
        path: 'arequipa',
        loadChildren: () => import('./arequipa/arequipa.routes').then(m => m.arequipaRoutes),
        data: { breadcrumb: 'Arequipa' }  // 📌 Nombre de breadcrumb para la subruta
      },
      {
        path:'cusco',
        loadChildren:()=>import('./cusco/cusco.routes').then(m=>m.cuscoRoutes),
        data:{breadcrumb:'Cusco'}
      },
      {
        path:'ica',
        loadChildren:()=>import('./ica/ica.routes').then(m=>m.icaRoutes),
        data:{breadcrumb:'Ica'}
      },
      {
        path:'puerto-maldonado',
        loadChildren:()=>import('./puerto-maldonado/puerto-maldondo.routes').then(m=>m.puertoMaldondoRoutes),
        data:{breadcrumb:'Puerto Maldonado'}
      },
      {
        path:'lima',
        loadChildren:()=>import('./lima/lima.routes').then(m=>m.limaRoutes),
        data:{breadcrumb:'Lima'}
      },
      {
        path:'nazca',
        loadChildren:()=>import('./nazca/nazca.routes').then(m=>m.nazcaRoutes),
        data:{breadcrumb:'Nazca'}
      }

    ]
  }
];
