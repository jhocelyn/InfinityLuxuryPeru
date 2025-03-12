import {Component, HostListener} from '@angular/core';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';
import {CarruselComponent} from '../../shared/components/carrusel/carrusel.component';
import {TranslateModule, TranslatePipe, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  imports: [
    NgForOf,
    RouterLink,
    NgClass,
    NgIf,
    CarruselComponent,
    TranslatePipe,
    TranslateModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  sections: any[] = [];
  journeys: any[] = [];
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

    this.translate.get('HOME.JOURNEYS').subscribe((journeys) => {
      console.log('Datos obtenidos para HOME.JOURNEYS:', journeys);
      this.journeys = journeys;
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

  phoneNumber: string = '+51934983711';
  message: string = 'Hola, quiero más información sobre los paquetes de viaje.';

  openWhatsApp() {
    const url = `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(this.message)}`;
    window.open(url, '_blank');
  }
}
