import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-build-your-trip',
  imports: [
    FormsModule,
    CommonModule,
    TranslatePipe
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
    if (!this.formData.email || !this.formData.phone) {
      alert('Please enter a valid email and phone number.');
      return;
    }

    const templateParams = {
      travelStyle: this.formData.travelStyle,
      departureDate: this.formData.departureDate,
      returnDate: this.formData.returnDate,
      days: this.formData.days,
      adults: this.formData.adults,
      children: this.formData.children,
      accommodation: this.formData.accommodation,
      destinations: this.formData.destinations.join(', '),
      phone: this.formData.phone,
      email: this.formData.email
    };

    emailjs.send(
      'service_od5s9j8',   // Reemplaza con tu SERVICE ID
      'template_n10hzlb',  // Reemplaza con tu TEMPLATE ID
      templateParams,
      '8QEKVUtg-l_vDX_uc'    // Reemplaza con tu PUBLIC KEY
    ).then(response => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Your request has been sent successfully!');
    }).catch(error => {
      console.error('FAILED...', error);
      alert('An error occurred. Please try again.');
    });
  }
}
