import {Component, Input} from '@angular/core';
import {NgForOf} from '@angular/common';
import {CardsPackagesDestinationComponent} from '../cards-packages-destination/cards-packages-destination.component';

@Component({
  selector: 'app-package-list-to-destinations',
  imports: [
    NgForOf,
    CardsPackagesDestinationComponent
  ],
  templateUrl: './package-list-to-destinations.component.html',
  styleUrl: './package-list-to-destinations.component.css'
})
export class PackageListToDestinationsComponent {
  @Input() paquetes: { nombre: string; descripcion: string; imagen: string; id: number; ruta: string }[] = [];

}
