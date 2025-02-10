import {Component, HostListener} from '@angular/core';
import {NavbarComponent} from '../../shared/navbar/navbar.component';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    NavbarComponent,
    NgForOf,
    RouterLink,
    NgClass,
    NgIf
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
  journeys = [
    {
      title: 'Japanese Traditions',
      description: 'Experience the elegance of Japan.',
      image: 'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp'
    },
    {
      title: 'Luxury Yacht Dining',
      description: 'Fine dining on the open seas.',
      image: 'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp'
    },
    {
      title: 'African Safari',
      description: 'Witness the great migration up close.',
      image: 'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp'
    }
  ];

isMobile: boolean = window.innerWidth <= 768;
  currentIndex: number = 0;

  @HostListener('window:resize', [])
  onResize() {
    this.isMobile = window.innerWidth <= 768;
  }

  prevCard() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  nextCard() {
    if (this.currentIndex < this.sections.length - 1) {
      this.currentIndex++;
    }
  }

}
