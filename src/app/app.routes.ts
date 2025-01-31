import { Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {ContactUsComponent} from './pages/contact-us/contact-us.component';
import {PackagesComponent} from './pages/packages/packages.component';
import {AboutUsComponent} from './pages/about-us/about-us.component';

export const routes: Routes = [
  { path:'home',component:HomeComponent},
  { path:'',redirectTo:'home',pathMatch:'full'},
  { path:'contact-us',component:ContactUsComponent},
  { path:'packages', component:PackagesComponent},
  { path:'about-us',component:AboutUsComponent}
];
