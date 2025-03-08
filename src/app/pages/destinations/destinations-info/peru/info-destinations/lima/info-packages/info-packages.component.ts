import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-info-package',
  imports: [
    NgIf
  ],
  templateUrl: './info-packages.component.html',
  styleUrl: './info-packages.component.css'
})
export class InfoPackagesComponent {
  packageInfo: any;

  destinations_lima = [
    {
      id: 1,
      nombre: 'Paquete 1',
      descripcion: 'Descripción del paquete 1',
      video: 'assets/videos/sheeps-and-donkeys-in-peru-2023-11-27-05-34-27-utc.mp4',
      img: 'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp'
    },
    {
      id: 2,
      nombre: 'Paquete 2',
      descripcion: 'Descripción del paquete 2',
      video: 'assets/videos/sheeps-and-donkeys-in-peru-2023-11-27-05-34-27-utc.mp4',
      img: 'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp'
    },
    {
      id: 3,
      nombre: 'Paquete 3',
      descripcion: 'Descripción del paquete 3',
      video: 'assets/videos/sheeps-and-donkeys-in-peru-2023-11-27-05-34-27-utc.mp4',
      img: 'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp'
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id')); // Captura el ID de la URL
      this.packageInfo = this.destinations_lima.find(pkg => pkg.id === id);
    });
  }
}
