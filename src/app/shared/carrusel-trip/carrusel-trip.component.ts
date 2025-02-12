import { Component } from '@angular/core';
import {NgClass, NgForOf, NgStyle} from '@angular/common';

@Component({
  selector: 'app-carrusel-trip',
  imports: [
    NgClass,
    NgForOf,
    NgStyle
  ],
  templateUrl: './carrusel-trip.component.html',
  styleUrl: './carrusel-trip.component.css'
})
export class CarruselTripComponent {
  currentIndex: number = 0;
  journeys = [
    { title: 'Wilderness',       image: 'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp',
      large: false },
    { title: 'Wildlife & Safari',       image: 'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp',
      large: true },
    { title: 'Adventure',      image: 'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp',
      large: false },
    { title: 'Culture & History',       image: 'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp',
      large: true },
    { title: 'Family',       image: 'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp',
      large: false },
    { title: 'Solo',       image: 'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp',
      large: false }
  ];

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  nextSlide() {
    if (this.currentIndex < this.journeys.length - 3) {
      this.currentIndex++;
    }
  }

}
