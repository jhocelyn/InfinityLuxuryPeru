import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgClass, NgForOf} from '@angular/common';

@Component({
  selector: 'app-list-destinations',
  imports: [
    RouterLink,
    NgForOf,
    NgClass
  ],
  templateUrl: './list-destinations.component.html',
  styleUrl: './list-destinations.component.css'
})
export class ListDestinationsComponent {
  destinos=[
    {nombre:'Perú',imagen:'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp', slug:'peru' ,destacado:true},
    {nombre:'Ecuador',imagen:'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp' , slug:'ecuador', destacado: true},
    {nombre:'Bolivia',imagen:'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp' , slug: 'bolivia', destacado:true},
  ]
}
