import {Component, Input} from '@angular/core';
import Swiper from 'swiper';
import {NgForOf, NgStyle} from '@angular/common';

@Component({
  selector: 'app-destination-carrusel',
  imports: [
    NgForOf,

  ],
  templateUrl: './destination-carrusel.component.html',
  styleUrl: './destination-carrusel.component.css'
})
export class DestinationCarruselComponent {
  @Input() images: { title: string; description: string; image: string }[] = [];

  ngAfterViewInit() {
    new Swiper('.mySwiper', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      slidesPerView: 2,
      spaceBetween: 20,
    });
  }
}
