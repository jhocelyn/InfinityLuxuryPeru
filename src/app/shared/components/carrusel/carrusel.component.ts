import { Component } from '@angular/core';
import {NgForOf, NgStyle} from '@angular/common';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-carrusel',
  imports: [
    NgStyle,
    NgForOf,
    TranslatePipe
  ],
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.css'
})
export class CarruselComponent {
  targets: any[]=[];
  displayedCards: any[] = [];
  constructor(private translate: TranslateService) {}
  ngOnInit() {
    this.loadTranslations();
    this.translate.onLangChange.subscribe(() => {
      this.loadTranslations();
    });

  }

  loadTranslations() {
    console.log('Intentando obtener HOME.STAY.TARGETS...');

    this.translate.get('HOME.STAY.TARGETS').subscribe((targets) => {
      console.log('Datos obtenidos para HOME.STAY.TARGETS:', targets);
      this.targets = targets;
      // Se duplica la lista para la transición infinita
      this.displayedCards = [...this.targets, ...this.targets];
    });


  }
  currentIndex = 0;

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.targets.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.targets.length) % this.targets.length;
  }
}
