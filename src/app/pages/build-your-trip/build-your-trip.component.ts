import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-build-your-trip',
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './build-your-trip.component.html',
  styleUrl: './build-your-trip.component.css'
})
export class BuildYourTripComponent {

  formData = {
    travelStyle: '',
    departureDate: '',
    returnDate: '',
    days: null,
    adults: null,
    children: null,
    accommodation: '',
    destinations: [] as string[],
    phone: '',
    email: ''
  };

  destinationsList = [
    'Lima', 'Cusco - Machu Picchu', 'Puno - Lake Titicaca', 'Arequipa - Colca Canyon',
    'Amazon Rainforest', 'Manu', 'Galápagos - Seaborn', 'Uyuni Salt'
  ];

  submitForm() {
    console.log('Formulario enviado:', this.formData);
  }
}
