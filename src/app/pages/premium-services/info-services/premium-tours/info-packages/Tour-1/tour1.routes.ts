import {Routes} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {ListPackagesComponent} from './list-packages/list-packages.component';
import {InfoPackagesComponent} from './info-packages/info-packages.component';

export const tour1Routes:Routes=[
  {path:'',
  component:LayoutComponent,
    data:{breadcrumb:'Tour 1'},
  children:[
    {
      path:'',
      component:ListPackagesComponent,
      data: { breadcrumb: 'Packages' }  // 📌 Nombre del breadcrumb para la lista de paquetes
    },
    {
      path:':id',
      component:InfoPackagesComponent,
      data: { breadcrumb: 'InfoPackages' }  // 📌 Nombre del breadcrumb para la lista de paquetes
    }
  ]
  }
]
