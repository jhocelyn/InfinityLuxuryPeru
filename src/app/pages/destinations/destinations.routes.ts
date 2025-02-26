import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import {ListDestinationsComponent} from './list-destinations/list-destinations.component';

export const DestinationsRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'destinations', pathMatch: 'full' },
      { path: '', component: ListDestinationsComponent },
      { path: 'peru',
        loadChildren: () => import('./destinations-info/peru/peru.routes').then(m => m.PeruRoutes), data:{breadcrumb:'Peru'}},
      {path:'ecuador',
      loadChildren: () => import('./destinations-info/ecuador/ecuador.routes').then(m => m.EcuadorRoutes), data:{breadcrumb:'Ecuador'}},
      {path:'bolivia',
      loadChildren: () => import('./destinations-info/bolivia/bolivia.routes').then(m => m.BoliviaRoutes),data:{breadcrumb:'Bolivia'}},
    ]
  }
];
