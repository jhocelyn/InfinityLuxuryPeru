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
    {nombre:'Arequipa',imagen:'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp', slug:'arequipa' ,destacado:true},
    {nombre:'Cusco',imagen:'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp' , slug:'cusco', destacado: false},
    {nombre:'Lima',imagen:'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp' , slug: 'lima', destacado:true},
    {nombre:'Puerto Maldonado',imagen:'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp' , slug: 'puerto-maldonado', destacado: true},
    {nombre:'Nazca',imagen:'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp', slug: 'nazca' , destacado: false},
    {nombre:'Ica',imagen:'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp' , slug: 'ica', destacado:false},
  ]

}
