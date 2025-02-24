import {Routes} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';

export const ExpeditionsRoutes: Routes=[
  {
    path:'',
    component:LayoutComponent,
    data:{breadcrumb:'Expeditions'},
    children:[

    ]
  }
]
