import { Component } from '@angular/core';
import {BreadcrumbComponent} from '../../../../../../../shared/components/To Destinations/list-destinations/breadcrumb/breadcrumb.component';
import {
  CardsPackagesDestinationComponent
} from '../../../../../../../shared/components/To Destinations/list-destinations/cards-packages-destination/cards-packages-destination.component';
import {DestinationCarruselComponent} from '../../../../../../../shared/components/To Destinations/list-destinations/destination-carrusel/destination-carrusel.component';
import {NgForOf} from '@angular/common';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-manu-packages',
  imports: [
    BreadcrumbComponent,
    CardsPackagesDestinationComponent,
    DestinationCarruselComponent,
    NgForOf,
    TranslatePipe
  ],
  templateUrl: './puerto-maldonado-packages.component.html',
  styleUrl: './puerto-maldonado-packages.component.css'
})
export class PuertoMaldonadoPackagesComponent {
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
      ruta: 'destinations/manu'
    },
    {
      id: 2,
      nombre: 'Paquete 2',
      descripcion: 'Descripción del Paquete 2',
      imagen: 'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp',
      ruta: 'destinations/manu'
    },
    {
      id: 3,
      nombre: 'Paquete 3',
      descripcion: 'Descripción del Paquete 3',
      imagen: 'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp',
      ruta: 'destinations/manu'
    },
  ];
}
