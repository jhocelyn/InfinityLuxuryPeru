import { Component } from '@angular/core';
import {BannerComponent} from '../../../../../shared/components/To Destinations/list-destinations/banner/banner.component';
import {
  DestinationsGridComponent
} from '../../../../../shared/components/To Destinations/list-destinations/destinations-grid/destinations-grid.component';
import {MapaInfoComponent} from '../../../../../shared/components/To Destinations/list-destinations/mapa-info/mapa-info.component';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-list-destinations',
  imports: [
    BannerComponent,
    DestinationsGridComponent,
    MapaInfoComponent,
    TranslatePipe
  ],
  templateUrl: './list-destinations.component.html',
  styleUrl: './list-destinations.component.css'
})
export class ListDestinationsComponent {
  destinos=[
    {nombre:'Arequipa Colca Canyon',imagen:'assets/img/destinations/Trip-Arequipa.webp', slug:'arequipa-colca-canyon' ,destacado:true},
    {nombre:'Cusco Macchu Picchu',imagen:'assets/img/destinations/Trip-Machu-Picchu.webp' , slug:'cusco-macchu-picchu', destacado: false},
    {nombre:'Lima',imagen:'assets/img/destinations/Trip-Lima-Costa-Verde.webp' , slug: 'lima', destacado:true},
    {nombre:'Manu',imagen:'assets/img/destinations/Trip-Manu-Lake-Peru.webp' , slug: 'manu', destacado: true},
    {nombre:'Amazon Rainforest',imagen:'assets/img/destinations/Trip-Amazon-Rainforest-Peru.webp', slug: 'amazon-rainforest' , destacado: false},
    {nombre:'Puno Lake Titicaca',imagen:'assets/img/destinations/Trip-Lake-Titicaca-Peru.webp' , slug: 'puno-lake-titicaca', destacado:false},
  ]
  rutaPadre = '/destinations/peru';
  locations=[
    {name:'Peru',lat:-9.189967,lng:-75.015152,day:1},
  ]
}
