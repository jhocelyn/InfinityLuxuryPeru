import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';
import {CarruselComponent} from '../../shared/components/carrusel/carrusel.component';
import {TranslateModule, TranslatePipe, TranslateService} from '@ngx-translate/core';

interface Journey {
  SECTION: string;
  TITLE: string;
  DESCRIPTION: string;
  DISCOVER: string;
  COLUMNA: number;
  ROW: number;
  START: number;
  IMAGE: string;
  RUTA:string;
}

@Component({
  selector: 'app-home',
  imports: [
    NgForOf,
    RouterLink,
    NgClass,
    CarruselComponent,
    TranslatePipe,
    TranslateModule,
    NgIf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  sections: any[] = [];
  journeys: Journey[] = [];
  testimonials: any[] = [];
  isFading = false;
  isMobile: boolean = window.innerWidth <= 768;
  currentIndex: number = 0;
  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.loadTranslations();
    this.translate.onLangChange.subscribe(() => {
      this.loadTranslations();
    });
  }

  loadTranslations() {
    console.log('Intentando obtener HOME.SECTIONS...');

    this.translate.get('HOME.SECTIONS').subscribe((sections) => {
      console.log('Datos obtenidos para HOME.SECTIONS:', sections);
      this.sections = sections;
    });

    this.translate.get('HOME.JOURNEYS').subscribe((journeys: Journey[]) => {
      console.log('Datos obtenidos para HOME.JOURNEYS:', journeys);
      this.journeys = journeys.map((journey: Journey) => ({
        ...journey,
        COLUMNA: Number(journey.COLUMNA),
        ROW: Number(journey.ROW),
        START: Number(journey.START)
      }));
    });

    this.translate.get('HOME.TESTIMONIALS.DATA').subscribe((testimonials) => {
      console.log('Datos obtenidos para HOME.TESTIMONIALS:', testimonials);
      this.testimonials = testimonials;
    });

  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const videoSection = document.querySelector('.sticky') as HTMLElement;
    if (!videoSection) return;

    const rect = videoSection.getBoundingClientRect();
    const fadePoint = window.innerHeight * 0.3;
    this.isFading = rect.bottom < fadePoint;
  }

  @HostListener('window:resize', [])
  onResize() {
    this.isMobile = window.innerWidth <= 768;
  }
  @ViewChild('carouselContainer', { static: false }) carouselContainer!: ElementRef;

  prevCard() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = 0;
    }
    this.scrollToCurrent();
  }

  nextCard() {
    if (this.currentIndex < this.sections.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = this.sections.length - 1;
    }
    this.scrollToCurrent();
  }



  scrollToCurrent() {
    const container = this.carouselContainer.nativeElement;
    const cardWidth = container.children[0].offsetWidth;
    const gap = 16; // Espaciado entre tarjetas (ajustar si es necesario)

    const scrollPosition = this.currentIndex * (cardWidth + gap);

    // Aplicamos el desplazamiento manualmente
    container.scrollLeft = scrollPosition;
  }


}
