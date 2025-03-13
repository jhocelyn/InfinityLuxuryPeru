import {Component, Input} from '@angular/core';
import {DestinationCarruselComponent} from '../destination-carrusel/destination-carrusel.component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-info-section-destinations',
  imports: [
    DestinationCarruselComponent,
    NgIf,
  ],
  templateUrl: './info-section-destinations.component.html',
  styleUrl: './info-section-destinations.component.css'
})
export class InfoSectionDestinationsComponent {
  @Input() titulo!: string;
  @Input() descripcion!: string;
  @Input() subtitulo!: string;
  @Input() images: { title: string; description: string; image: string; }[] = [];
}
