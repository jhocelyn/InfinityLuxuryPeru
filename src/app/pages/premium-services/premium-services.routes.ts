import {Routes} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {ListServicesComponent} from './list-services/list-services.component';
import {DonationsComponent} from './info-services/donations/donations.component';

export const PremiumServicesRoutes: Routes = [
  {
    path:'',
    component:LayoutComponent,
    children:[
      {path:'', component:ListServicesComponent },
      {path:'charters', loadChildren: () => import('./info-services/charters/charters.routes').then(m => m.chartersRoutes), data: { breadcrumb: 'Charters' },},
      {path:'gastronomy', loadChildren: () => import('./info-services/gastronomy/gastronomy.routes').then(m => m.GastronomyRoutes),data: { breadcrumb: 'Gastronomy' },},
      {path:'family-best-experiences', loadChildren: () => import('./info-services/family-best-experiences/family-best-experiencies.routes').then(m => m.familyBestExperienciesRoutes),data:{breadcrumb:'Family Best Experiences'}},
      {path:'luxury-packages',loadChildren: () => import('./info-services/luxury-packages/luxury-packages.routes').then(m => m.LuxuryPackagesRoutes), data: { breadcrumb: 'Luxury Packages' },},
      {path:'mice',loadChildren: () => import('./info-services/MICE/mice.routes').then(m => m.MiceRoutes), data: { breadcrumb: 'MICE' },},
      {path:'premium-tours',loadChildren: () => import('./info-services/premium-tours/premium-tours.routes').then(m => m.PremiumToursRoutes),data:{breadcrumb:'Premium Tours'}},
      {path:'special-services',loadChildren: () => import('./info-services/special-services/special-services.routes').then(m => m.SpecialServicesRoutes),data:{breadcrumb:'Special Services'}},
      {path:'sustainable-tourism',loadChildren: () => import('./info-services/sustainable-tourism/sustainable-tourism.routes').then(m => m.SustainableTourismRoutes),data:{breadcrumb:'Sustainable Tourism'}},
      {path:'wedding',loadChildren: () => import('./info-services/wedding/wedding.routes').then(m => m.WeddingRoutes),data:{breadcrumb:'Wedding'}},
      {path:'wellness',loadChildren: () => import('./info-services/wellness/wellnes.routes').then(m => m.WellnesRoutes),data:{breadcrumb:'Wellness'}},
      {path:'trekking',loadChildren: () => import('./info-services/trekking/trekking.routes').then(m => m.trekkingRoutes),data:{breadcrumb:'Trekking'}},
      {path:'donations',component:DonationsComponent,data:{breadcrumb:'Donations'}},
    ]
  }
]
