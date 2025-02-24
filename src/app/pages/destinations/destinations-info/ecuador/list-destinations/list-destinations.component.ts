import { Component } from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";
import {RouterLink} from '@angular/router';
import {BannerComponent} from "../../../../../shared/To Destinations/banner/banner.component";
import {
    DestinationsGridComponent
} from "../../../../../shared/To Destinations/destinations-grid/destinations-grid.component";
import {MapaInfoComponent} from "../../../../../shared/To Destinations/mapa-info/mapa-info.component";

@Component({
  selector: 'app-list-destinations',
    imports: [
        BannerComponent,
        DestinationsGridComponent,
        MapaInfoComponent
    ],
  templateUrl: './list-destinations.component.html',
  styleUrl: './list-destinations.component.css'
})
export class ListDestinationsComponent {
  destinos=[
    {nombre:'Galapagos - Seaborn',imagen:'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp', slug:'galapagos' ,destacado:true},
  ]
  rutaPadre = '/destinations/ecuador';
}
