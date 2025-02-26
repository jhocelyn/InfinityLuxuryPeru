import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';
import {BannerComponent} from "../../../../../shared/To Destinations/banner/banner.component";
import {
    BannerToInfoDestinationsComponent
} from "../../../../../shared/To Destinations/banner-to-info-destinations/banner-to-info-destinations.component";
import {
    InfoSectionDestinationsComponent
} from "../../../../../shared/To Destinations/info-section-destinations/info-section-destinations.component";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-list-packages',
  imports: [
    BannerComponent,
    BannerToInfoDestinationsComponent,
    InfoSectionDestinationsComponent,
    FormsModule,
    NgForOf,
    ReactiveFormsModule
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
    titlePage: 'MICE',
    button: 'View all information',
    titleInfo: 'MICE to Peru',
    descripcion: 'We offer the best charters to Peru. We have been spinning dreams into remarkable adventures for discerning travellers for more than 60 years, ever since our founder pioneered the first modern luxury safari in Africa. Today we are the world’s leading travel company, taking guests to the earth’s wildest frontiers on all seven continents.',
    subtitulo: 'Best Ways to Travel',
    text:'We have been spinning dreams into remarkable adventures for over 60 years.',
    image_middle:'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp'
  }

  formData = {
    travelStyle: '',
    departureDate: '',
    returnDate: '',
    days: null,
    adults: null,
    accommodation: '',
    destinations: [] as string[],
    phone: '',
    email: ''
  };

  destinationsList = [
    'Lima', 'Cusco - Machu Picchu', 'Puno - Lake Titicaca', 'Arequipa - Colca Canyon',
    'Amazon Rainforest'
  ];

  submitForm() {
    console.log('Formulario enviado:', this.formData);
  }
}
