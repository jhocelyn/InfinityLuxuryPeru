import { Component } from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";
import {RouterLink} from '@angular/router';
import {MapaComponent} from '../../../../../shared/To Destinations/mapa/mapa.component';
import {BannerComponent} from '../../../../../shared/To Destinations/banner/banner.component';
import {
  DestinationsGridComponent
} from '../../../../../shared/To Destinations/destinations-grid/destinations-grid.component';
import {MapaInfoComponent} from '../../../../../shared/To Destinations/mapa-info/mapa-info.component';

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
    {nombre:'Arequipa Colca Canyon',imagen:'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp', slug:'arequipa-colca-canyon' ,destacado:true},
    {nombre:'Cusco Macchu Picchu',imagen:'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp' , slug:'cusco-macchu-picchu', destacado: false},
    {nombre:'Lima',imagen:'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp' , slug: 'lima', destacado:true},
    {nombre:'Manu',imagen:'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp' , slug: 'manu', destacado: true},
    {nombre:'Amazon Rainforest',imagen:'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp', slug: 'amazon-rainforest' , destacado: false},
    {nombre:'Puno Lake Titicaca',imagen:'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp' , slug: 'puno-lake-titicaca', destacado:false},
  ]
  rutaPadre = 'destinations/peru';
}
