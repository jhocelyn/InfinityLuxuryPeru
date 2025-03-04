import { Component } from '@angular/core';
import {BannerComponent} from "../../../../../shared/components/To Destinations/list-destinations/banner/banner.component";
import {
    DestinationsGridComponent
} from "../../../../../shared/components/To Destinations/list-destinations/destinations-grid/destinations-grid.component";

@Component({
  selector: 'app-list-packages',
    imports: [
        BannerComponent,
        DestinationsGridComponent
    ],
  templateUrl: './list-packages.component.html',
  styleUrl: './list-packages.component.css'
})
export class ListPackagesComponent {

  servicios=[
    {nombre:'Spa',imagen:'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp', slug:'spa' ,destacado:true},
    {nombre:'Yoga',imagen:'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp', slug:'yoga' ,destacado:true},
  ]
  rutaPadre = '/premium-services/wellness';

}
