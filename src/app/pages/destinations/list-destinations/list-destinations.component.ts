import { Component } from '@angular/core';
import {BannerComponent} from '../../../shared/components/To Destinations/list-destinations/banner/banner.component';
import {DestinationsGridComponent} from '../../../shared/components/To Destinations/list-destinations/destinations-grid/destinations-grid.component';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-list-destinations',
  imports: [
    DestinationsGridComponent,
    BannerComponent,
    TranslatePipe,
  ],
  templateUrl: './list-destinations.component.html',
  styleUrl: './list-destinations.component.css'
})
export class ListDestinationsComponent {
  destinos=[
    {nombre:'Perú',imagen:'assets/img/destinations/Trip-Peru.webp', slug:'peru' ,destacado:true},
    {nombre:'Ecuador',imagen:'assets/img/destinations/Trip-Ecuador.webp' , slug:'ecuador', destacado: true},
    {nombre:'Bolivia',imagen:'assets/img/destinations/Trip-Bolivia.webp' , slug: 'bolivia', destacado:true},
  ]
  rutaPadre = '/destinations';
}
