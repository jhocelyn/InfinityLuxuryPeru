import { Component } from '@angular/core';
import {BannerComponent} from "../../../../../shared/To Destinations/banner/banner.component";
import {
    DestinationsGridComponent
} from "../../../../../shared/To Destinations/destinations-grid/destinations-grid.component";

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
    {nombre:'Tour 1',imagen:'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp', slug:'tour1' ,destacado:false},
    {nombre:'Tour 2',imagen:'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp' , slug:'tour2', destacado: false},
    {nombre:'Tour 3',imagen:'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp' , slug:'tour3', destacado: false},
    {nombre:'Tour 4',imagen:'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp' , slug:'tour4', destacado: false},
    {nombre:'Tour 5',imagen:'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp' , slug:'tour5', destacado: false},
  ]
  rutaPadre = '/premium-services/premium-tours';

}
