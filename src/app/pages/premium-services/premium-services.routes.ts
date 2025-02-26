import {Routes} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {ListServicesComponent} from './list-services/list-services.component';
import {DonationsComponent} from './info-services/donations/donations.component';

export const PremiumServicesRoutes: Routes = [
  {
    path:'',
    component:LayoutComponent,
    data:{breadcrumb:'Premium Services'},
    children:[
      {path:'', component:ListServicesComponent},
      {path:'charters', loadChildren: () => import('./info-services/charters/charters.routes').then(m => m.chartersRoutes)},
      {path:'gastronomy', loadChildren: () => import('./info-services/gastronomy/gastronomy.routes').then(m => m.GastronomyRoutes)},
      {path:'family-best-experiences', loadChildren: () => import('./info-services/family-best-experiences/family-best-experiencies.routes').then(m => m.familyBestExperienciesRoutes)},
      {path:'luxury-packages',loadChildren: () => import('./info-services/luxury-packages/luxury-packages.routes').then(m => m.LuxuryPackagesRoutes)},
      {path:'mice',loadChildren: () => import('./info-services/MICE/mice.routes').then(m => m.MiceRoutes)},
      {path:'premium-tours',loadChildren: () => import('./info-services/premium-tours/premium-tours.routes').then(m => m.PremiumToursRoutes)},
      {path:'special-services',loadChildren: () => import('./info-services/special-services/special-services.routes').then(m => m.SpecialServicesRoutes)},
      {path:'sustainable-tourism',loadChildren: () => import('./info-services/sustainable-tourism/sustainable-tourism.routes').then(m => m.SustainableTourismRoutes)},
      {path:'wedding',loadChildren: () => import('./info-services/wedding/wedding.routes').then(m => m.WeddingRoutes)},
      {path:'wellness',loadChildren: () => import('./info-services/wellness/wellnes.routes').then(m => m.WellnesRoutes)},
      {path:'trekking',loadChildren: () => import('./info-services/trekking/trekking.routes').then(m => m.trekkingRoutes)},
      {path:'donations',component:DonationsComponent}
    ]
  }
]
