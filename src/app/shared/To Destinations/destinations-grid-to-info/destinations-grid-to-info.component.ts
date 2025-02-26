import {Component, Input} from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-destinations-grid-to-info',
  imports: [
    NgForOf
  ],
  templateUrl: './destinations-grid-to-info.component.html',
  styleUrl: './destinations-grid-to-info.component.css'
})
export class DestinationsGridToInfoComponent {
  @Input() destinos: { imagen: string; nombre: string; descripcion: string }[] = [];
}
