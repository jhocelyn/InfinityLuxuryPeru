import { Component } from '@angular/core';
import {NavbarComponent} from '../../shared/navbar/navbar.component';
import {NgForOf} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    NavbarComponent,
    NgForOf,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  sections = [
    {
      title: 'Destinations',
      description: 'We can arrange remarkable travel experiences on all seven continents. Where do you want to go?',
      image: 'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp',
      link: '/destinations'
    },
    {
      title: 'Journeys',
      description: 'Find your dream journey, whether you want to travel privately or with a group, by train, boat, or plane.',
      image: 'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp',
      link: '/journeys'
    },
    {
      title: 'Stays',
      description: 'Our collection of inspiring places to stay includes safari lodges, super-villas, and boutique riverboats.',
      image: 'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp',
      link: '/stays'
    }
  ];
}
