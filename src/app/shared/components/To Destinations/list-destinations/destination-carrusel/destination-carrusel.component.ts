import { AfterViewInit, Component, Input } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import {CommonModule, NgForOf} from '@angular/common';

@Component({
  selector: 'app-destination-carrusel',
  standalone: true,
  imports: [NgForOf,CommonModule],
  templateUrl: './destination-carrusel.component.html',
  styleUrl: './destination-carrusel.component.css'
})
export class DestinationCarruselComponent implements AfterViewInit {
  @Input() images: { title: string; description: string; image: string }[] = [];

  ngAfterViewInit() {
    new Swiper('.mySwiper', {
      modules: [Navigation, Pagination],
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: { el: '.swiper-pagination', clickable: true },
      slidesPerView: 1,
      spaceBetween: 20,
    });
  }
}
