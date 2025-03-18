import { Component } from '@angular/core';
import {BannerComponent} from '../../../../../shared/components/To Destinations/list-destinations/banner/banner.component';
import {
  DestinationsGridComponent
} from '../../../../../shared/components/To Destinations/list-destinations/destinations-grid/destinations-grid.component';
import {MapaInfoComponent} from '../../../../../shared/components/To Destinations/list-destinations/mapa-info/mapa-info.component';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-info-package',
  imports: [
    BannerComponent,
    DestinationsGridComponent,
    MapaInfoComponent,
    TranslatePipe
  ],
  templateUrl: './info-packages.component.html',
  styleUrl: './info-packages.component.css'
})
export class InfoPackagesComponent {
  destinos=[
    {nombre:'Uyuni Salt',imagen:'assets/img/destinations/Trip-Uyuni-Salt-Bolivia.webp', slug:'uyuni-salt' ,destacado:true},
   ]
  rutaPadre:string = '/destinations/bolivia';
  locations=[
    {name:'Bolivia',lat:-9.189967,lng:-75.015152,day:1},
  ]
}
