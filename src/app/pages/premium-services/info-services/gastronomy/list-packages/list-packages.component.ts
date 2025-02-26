import { Component } from '@angular/core';

import {BannerComponent} from '../../../../../shared/To Destinations/banner/banner.component';
import {
  DestinationsGridComponent
} from '../../../../../shared/To Destinations/destinations-grid/destinations-grid.component';

@Component({
  selector: 'app-list-packages',
  imports: [
    BannerComponent,
    DestinationsGridComponent,
  ],
  templateUrl: './list-packages.component.html',
  styleUrl: './list-packages.component.css'
})
export class ListPackagesComponent {
  servicios=[
    {nombre:'Peruvian Cooking Class',imagen:'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp', slug:'peruvian-cooking-class' ,destacado:false},
    {nombre:'Peruvian Best Restaurants',imagen:'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp' , slug:'peruvian-best-restaurants', destacado: false},
    ]
  rutaPadre = '/premium-services/gastronomy';
}
