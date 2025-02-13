import {Routes} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {ArequipaPackagesComponent} from './arequipa-packages/arequipa-packages.component';

export const arequipaRoutes: Routes = [
  {path:'', component:LayoutComponent,
  children:[
    {path:'',redirectTo:'arequipa',pathMatch:'full'},
    {path: '', component:ArequipaPackagesComponent}
  ]
  }


]
