import { Component } from '@angular/core';
import {CommonModule, NgSwitch, NgSwitchCase} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-build-your-trip',
  imports: [
    NgSwitch,
    FormsModule,
    NgSwitchCase,CommonModule
  ],
  templateUrl: './build-your-trip.component.html',
  styleUrl: './build-your-trip.component.css'
})
export class BuildYourTripComponent {
  step = 1;

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

  nextStep() {
    if (this.step < 2) this.step++;
  }

  prevStep() {
    if (this.step > 1) this.step--;
  }

  submitForm() {
    console.log('Formulario enviado:', this.formData);
  }
}
