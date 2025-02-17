import {Component, HostListener} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {DestinationCarruselComponent} from '../../../../shared/destination-carrusel/destination-carrusel.component';
import { NgForOf} from '@angular/common';
import {
  CardsPackagesDestinationComponent
} from '../../../../shared/cards-packages-destination/cards-packages-destination.component';

@Component({
  selector: 'app-arequipa-packages',
  imports: [
    TranslatePipe,
    DestinationCarruselComponent,
    CardsPackagesDestinationComponent,
    NgForOf,
  ],
  templateUrl: './arequipa-packages.component.html',
  styleUrl: './arequipa-packages.component.css'
})
export class ArequipaPackagesComponent {
  images = [
    { title: 'Private Jet Journeys', description: 'Iconic Wonders: Around the World by Private Jet', image: 'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp' },
    { title: 'Tailormade Journeys', description: 'Climb Mount Kilimanjaro', image: 'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp' }
  ];

  paquetes = [
    {
      id: 1,
      nombre: 'Paquete 1',
      descripcion: 'Descripción del Paquete 1',
      imagen: 'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp',
      ruta: 'destino'
    },
    {
      id: 2,
      nombre: 'Paquete 2',
      descripcion: 'Descripción del Paquete 2',
      imagen: 'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp',
      ruta: 'destino'
    },
    {
      id: 3,
      nombre: 'Paquete 3',
      descripcion: 'Descripción del Paquete 3',
      imagen: 'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp',
      ruta: 'destino'
    },
  ];
}
