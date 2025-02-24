import { Component } from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-list-packages',
  imports: [
    NgForOf,
    NgClass,
    RouterLink
  ],
  templateUrl: './list-packages.component.html',
  styleUrl: './list-packages.component.css'
})
export class ListPackagesComponent {
  servicios=[
    {nombre:'Peruvian Cooking Class',imagen:'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp', slug:'peruvian-cooking-class' ,destacado:true},
  ]
}
