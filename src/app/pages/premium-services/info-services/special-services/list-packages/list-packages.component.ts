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
    {nombre:'Handicap',imagen:'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp', slug:'handicap' ,destacado:false},
    {nombre:'Autism',imagen:'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp' , slug:'autism', destacado: false},
    {nombre:'Oxygen Requirement',imagen:'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp' , slug:'oxygen-requirement', destacado: false},
  ]
  rutaPadre = '/premium-services/special-services';
}
