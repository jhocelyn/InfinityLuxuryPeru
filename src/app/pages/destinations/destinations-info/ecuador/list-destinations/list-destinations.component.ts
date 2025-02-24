import { Component } from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-list-destinations',
  imports: [
    NgForOf,
    NgClass,
    RouterLink
  ],
  templateUrl: './list-destinations.component.html',
  styleUrl: './list-destinations.component.css'
})
export class ListDestinationsComponent {
  destinos=[
    {nombre:'Galapagos - Seaborn',imagen:'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp', slug:'galapagos' ,destacado:true},
  ]
}
