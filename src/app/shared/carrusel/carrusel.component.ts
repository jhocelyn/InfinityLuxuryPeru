import { Component } from '@angular/core';
import {NgForOf, NgStyle} from '@angular/common';

@Component({
  selector: 'app-carrusel',
  imports: [
    NgStyle,
    NgForOf
  ],
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.css'
})
export class CarruselComponent {
  journeys = [
    { title: 'Private Estates',    image: 'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp',
  description: 'The finest houses in Italy’s Chianti wine region to take over for a dolce vita summer escape.' },
    { title: 'Villas',       image: 'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp',
       description: 'Beautiful houses to rent in the dreamiest destinations in Europe and the Caribbean.' },
    { title: 'River Boats',       image: 'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp',
      description: 'Sail the world’s greatest rivers, the Nile and the Amazon, aboard our sleek, chic riverboats.' }
  ];

  // Se duplica la lista para la transición infinita
  displayedCards = [...this.journeys, ...this.journeys];
  currentIndex = 0;

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.journeys.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.journeys.length) % this.journeys.length;
  }
}
