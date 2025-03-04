import { Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {AboutUsComponent} from './pages/about-us/about-us.component';
import {BuildYourTripComponent} from './pages/build-your-trip/build-your-trip.component';
import {ContactUsComponent} from './pages/contact-us/contact-us.component';

export const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:'home', component: HomeComponent, data:{breadcrumb:'Home'}},
  {path:'destinations', loadChildren:()=>import('./pages/destinations/destinations.routes').then(m=>m.DestinationsRoutes), data:{breadcrumb:'Destinations'}},
  {path:'about-us',component:AboutUsComponent, data:{breadcrumb:'About Us'}},
  {path:'expeditions', loadChildren:()=>import('./pages/expeditions/expeditions.routes').then(m=>m.ExpeditionsRoutes), data:{breadcrumb:'Expeditions'}},
  {path:'premium-services',loadChildren:()=>import('./pages/premium-services/premium-services.routes').then(m=>m.PremiumServicesRoutes),data:{breadcrumb:'Premium Services'}},
  {path:'build-your-trip',component:BuildYourTripComponent , data:{breadcrumb:'Build Your Trip'}},
  {path:'contact-us', component:ContactUsComponent, data:{breadcrumb: 'Contact Us'}},
];
