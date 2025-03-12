import { Component } from '@angular/core';
import {
  BannerToInfoDestinationsComponent
} from '../../../../../shared/components/To Destinations/list-destinations/banner-to-info-destinations/banner-to-info-destinations.component';
import {
  InfoSectionDestinationsComponent
} from '../../../../../shared/components/To Destinations/list-destinations/info-section-destinations/info-section-destinations.component';
import {BannerComponent} from '../../../../../shared/components/To Destinations/list-destinations/banner/banner.component';

@Component({
  selector: 'app-list-packages',
  imports: [
    BannerToInfoDestinationsComponent,
    InfoSectionDestinationsComponent,
    BannerComponent
  ],
  templateUrl: './list-packages.component.html',
  styleUrl: './list-packages.component.css'
})
export class ListPackagesComponent {
  images = [
    { title: 'Private Jet Journeys', description: 'Iconic Wonders: Around the World by Private Jet', image: 'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp' },
    { title: 'Tailormade Journeys', description: 'Climb Mount Kilimanjaro', image: 'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp' }
  ];
  info = {
    image_principal: 'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp',
    titlePage: 'Chartes',
    button: 'View all charters',
    titleInfo: 'Charters to Peru',
    descripcion: 'We offer the best charters to Peru. We have been spinning dreams into remarkable adventures for discerning travellers for more than 60 years, ever since our founder pioneered the first modern luxury safari in Africa. Today we are the world’s leading travel company, taking guests to the earth’s wildest frontiers on all seven continents.',
    subtitulo: 'Best Ways to Travel',
    text:'We have been spinning dreams into remarkable adventures for over 60 years.',
    image_middle:'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp'
  }

}
