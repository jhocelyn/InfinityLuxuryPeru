import { Component } from '@angular/core';
import {BannerComponent} from '../../../shared/components/To Destinations/list-destinations/banner/banner.component';
import {MapaInfoComponent} from '../../../shared/components/To Destinations/list-destinations/mapa-info/mapa-info.component';
import {DestinationsGridComponent} from '../../../shared/components/To Destinations/list-destinations/destinations-grid/destinations-grid.component';

@Component({
  selector: 'app-list-destinations',
  imports: [
    DestinationsGridComponent,
    BannerComponent,
  ],
  templateUrl: './list-destinations.component.html',
  styleUrl: './list-destinations.component.css'
})
export class ListDestinationsComponent {
  destinos=[
    {nombre:'Perú',imagen:'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp', slug:'peru' ,destacado:true},
    {nombre:'Ecuador',imagen:'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp' , slug:'ecuador', destacado: true},
    {nombre:'Bolivia',imagen:'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp' , slug: 'bolivia', destacado:true},
  ]
  rutaPadre = '/destinations';
}
