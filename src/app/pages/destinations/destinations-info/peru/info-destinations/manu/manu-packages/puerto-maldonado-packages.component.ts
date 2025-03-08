import { Component } from '@angular/core';
import {
  BannerComponent
} from '../../../../../../../shared/components/To Destinations/list-destinations/banner/banner.component';
import {
  BannerToInfoDestinationsComponent
} from '../../../../../../../shared/components/To Destinations/list-destinations/banner-to-info-destinations/banner-to-info-destinations.component';
import {
  InfoSectionDestinationsComponent
} from '../../../../../../../shared/components/To Destinations/list-destinations/info-section-destinations/info-section-destinations.component';
import {
  PackageListToDestinationsComponent
} from '../../../../../../../shared/components/To Destinations/list-destinations/package-list-to-destinations/package-list-to-destinations.component';

@Component({
  selector: 'app-manu-packages',
  imports: [
    BannerComponent,
    BannerToInfoDestinationsComponent,
    InfoSectionDestinationsComponent,
    PackageListToDestinationsComponent
  ],
  templateUrl: './puerto-maldonado-packages.component.html',
  styleUrl: './puerto-maldonado-packages.component.css'
})
export class PuertoMaldonadoPackagesComponent {
  images = [
    { title: 'Private Jet Journeys', description: 'Iconic Wonders: Around the World by Private Jet', image: 'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp' },
    { title: 'Tailormade Journeys', description: 'Climb Mount Kilimanjaro', image: 'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp' }
  ];
  info = {
    image_principal: 'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp',
    titlePage: 'Manu',
    button: 'View all packages',
    titleInfo: 'Manu to Peru',
    descripcion: 'We offer the best charters to Peru. We have been spinning dreams into remarkable adventures for discerning travellers for more than 60 years, ever since our founder pioneered the first modern luxury safari in Africa. Today we are the world’s leading travel company, taking guests to the earth’s wildest frontiers on all seven continents.',
    subtitulo: 'Best Ways to Travel',
    text:'We have been spinning dreams into remarkable adventures for over 60 years.',
    image_middle:'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp'
  }
  paquetes=[
    {nombre:'Paquete 1',imagen:'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp', descripcion:'Best Ways to Travel', id:1 , ruta:'/destinations/peru/arequipa-colca-canyon/info'},
    {nombre:'Paquete 2',imagen:'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp', descripcion:'Best Ways to Travel', id:2 , ruta:'/destinations/peru/arequipa-colca-canyon/info'},
    {nombre:'Paquete 3',imagen:'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp', descripcion:'Best Ways to Travel' ,id:3 , ruta:'/destinations/peru/arequipa-colca-canyon/info'},
  ]

}
