import {Component, Input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgClass, NgForOf} from '@angular/common';

@Component({
  selector: 'app-destinations-grid',
  imports: [
    RouterLink,
    NgClass,
    NgForOf
  ],
  templateUrl: './destinations-grid.component.html',
  styleUrl: './destinations-grid.component.css'
})
export class DestinationsGridComponent {
  @Input() destinos: { imagen: string; nombre: string; slug: string; destacado?: boolean }[] = [];
  @Input() rutaPadre:string = '';
}
