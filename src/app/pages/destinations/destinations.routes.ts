import {Routes} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {ListDestinationsComponent} from './list-destinations/list-destinations.component';

export const DestinationsRoutes: Routes = [
  {
    path:'',
    component:LayoutComponent,
    children:[
      {path:'',redirectTo:'destinations',pathMatch:'full'},
      {path:'', component:ListDestinationsComponent}
    ]
  }
]
