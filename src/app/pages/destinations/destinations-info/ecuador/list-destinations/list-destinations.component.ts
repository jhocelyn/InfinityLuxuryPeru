import { Component } from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";
import {RouterLink} from '@angular/router';
import {BannerComponent} from "../../../../../shared/components/To Destinations/list-destinations/banner/banner.component";
import {
    DestinationsGridComponent
} from "../../../../../shared/components/To Destinations/list-destinations/destinations-grid/destinations-grid.component";
import {MapaInfoComponent} from "../../../../../shared/components/To Destinations/list-destinations/mapa-info/mapa-info.component";

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
  locations=[
    {name:'Ecuador',lat:-9.189967,lng:-75.015152,day:1},
  ]}
