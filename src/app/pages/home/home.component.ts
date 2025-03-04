import {Component, HostListener} from '@angular/core';
import {NavbarComponent} from '../../shared/components/Important/navbar/navbar.component';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';
import {CarruselTripComponent} from '../../shared/components/carrusel-trip/carrusel-trip.component';
import {CarruselComponent} from '../../shared/components/carrusel/carrusel.component';
import {FooterComponent} from '../../shared/components/Important/footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [
    NgForOf,
    RouterLink,
    NgClass,
    NgIf,
    CarruselTripComponent,
    CarruselComponent,
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
      section:'Travel Privately',
      title: 'Japanese Traditions',
      description: 'Our guided journeys redefine the group tour, bringing together a select collective of like-minded travellers seeking shared adventures and meaningful connections.',
      discover:'Discover More',
      image: 'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp',
      colSpan: 2, // Ocupa 2 columnas
      rowSpan: 1, // Ocupa 1 fila,
      colStart: 1 // Comienza en la columna 1
    },
    {
      section: 'Small Group Journeys',
      title: 'Luxury Yacht Dining',
      description: 'Our guided journeys redefine the group tour, bringing together a select collective of like-minded travellers seeking shared adventures and meaningful connections.',
      discover:'Discover More',
      image: 'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp',
      colSpan: 1, // Ocupa 1 columna
      rowSpan: 1,  // Ocupa 1 fila
      colStart: 3
    },
    {
      section: 'Safarey Experience',
      title: 'African Safari',
      description: 'Our guided journeys redefine the group tour, bringing together a select collective of like-minded travellers seeking shared adventures and meaningful connections.',
      discover:'Discover More',
      image: 'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp',
      colSpan: 3, // Ocupa 3 columnas
      rowSpan: 1,  // Ocupa 1 fila
      colStart: 1
    }
  ];
  isFading = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    const videoSection = document.querySelector('.sticky') as HTMLElement;
    if (!videoSection) return;

    const rect = videoSection.getBoundingClientRect();
    const fadePoint = window.innerHeight * 0.3; // Empieza a desaparecer cuando el 30% del video está fuera de la pantalla

    this.isFading = rect.bottom < fadePoint;
  }

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

  phoneNumber: string = '+51934983711'; // 📌 Reemplaza con tu número de WhatsApp
  message: string = 'Hola, quiero más información sobre los paquetes de viaje.';

  openWhatsApp() {
    const url = `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(this.message)}`;
    window.open(url,'_blank');
  }
}
