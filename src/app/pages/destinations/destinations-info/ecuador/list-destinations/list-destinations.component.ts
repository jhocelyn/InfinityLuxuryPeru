import { Component } from '@angular/core';
import {BannerComponent} from "../../../../../shared/components/To Destinations/list-destinations/banner/banner.component";
import {
    DestinationsGridComponent
} from "../../../../../shared/components/To Destinations/list-destinations/destinations-grid/destinations-grid.component";
import {MapaInfoComponent} from "../../../../../shared/components/To Destinations/list-destinations/mapa-info/mapa-info.component";
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
    {nombre:'Galapagos - Seaborn',imagen:'assets/img/destinations/Trip-Galapagos-Ecuador.webp', slug:'galapagos' ,destacado:true},
  ]
  rutaPadre = '/destinations/ecuador';
  locations=[
    {name:'Ecuador',lat:-9.189967,lng:-75.015152,day:1},
  ]}
