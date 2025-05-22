import {Routes} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {ListNewsComponent} from './list-news/list-news.component';
import {NewsInfoComponent} from './news-info/news-info.component';

export const blogRoutes:Routes=[
  {
    path:'',
    component:LayoutComponent,
    children:[
      {path:'',component:ListNewsComponent},
      {path:':slug', component:NewsInfoComponent},
    ]
  }
]
