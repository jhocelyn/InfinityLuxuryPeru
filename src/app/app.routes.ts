import { Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';

export const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:'home', component: HomeComponent, data:{breadcrumb:'Home'}},
  {path:'destinations', loadChildren:()=>import('./pages/destinations/destinations.routes').then(m=>m.DestinationsRoutes)},
];
