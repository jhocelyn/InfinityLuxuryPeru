import { Component } from '@angular/core';
import {NgClass, NgForOf} from '@angular/common';
import {RouterLink} from '@angular/router';
import {BannerComponent} from '../../../../../shared/To Destinations/banner/banner.component';
import {
  DestinationsGridComponent
} from '../../../../../shared/To Destinations/destinations-grid/destinations-grid.component';
import {MapaInfoComponent} from '../../../../../shared/To Destinations/mapa-info/mapa-info.component';

@Component({
  selector: 'app-info-packages',
  imports: [
    BannerComponent,
    DestinationsGridComponent,
    MapaInfoComponent
  ],
  templateUrl: './info-packages.component.html',
  styleUrl: './info-packages.component.css'
})
export class InfoPackagesComponent {
  destinos=[
    {nombre:'Uyuni Salt',imagen:'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp', slug:'uyuni-salt' ,destacado:true},
   ]
  rutaPadre:string = '/destinations/bolivia';
}
