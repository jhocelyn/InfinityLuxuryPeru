import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';
import {BannerComponent} from "../../../../../shared/components/To Destinations/list-destinations/banner/banner.component";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
    SectionDestinationsComponent
} from "../../../../../shared/components/To Destinations/list-destinations/section-destinations/section-destinations.component";
import {TranslateService} from '@ngx-translate/core';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-list-packages',
    imports: [
        BannerComponent,
        FormsModule,
        NgForOf,
        ReactiveFormsModule,
        SectionDestinationsComponent
    ],
  templateUrl: './list-packages.component.html',
  styleUrl: './list-packages.component.css'
})
export class ListPackagesComponent {
  images: any[] = [];
  info: any = {};
  paquetes: any[] = [];
  ruta = "/premium-services/mice/"; // La ruta se mantiene igual para todos los paquetes

  constructor(private translate: TranslateService) {
    this.loadTranslations();
  }

  loadTranslations() {
    this.translate.get('LIST_PACKAGES.MICE').subscribe((data: any) => {
      this.images = data.images || [];
      this.info = data.info || {};
      this.paquetes = (data.paquetes || []).map((paquete: any, index: number) => ({
        id: paquete.id || index , // Si el paquete ya tiene un ID, lo mantiene. Si no, se le asigna uno basado en el índice.
        ...paquete,
        ruta: `${this.ruta}` // Agregar ID a la ruta.
      }));
    });
    console.log(this.paquetes);
  }

  formData = {
    travelStyle: '',
    departureDate: '',
    returnDate: '',
    days: null,
    adults: null,
    accommodation: '',
    destinations: [] as string[],
    phone: '',
    email: ''
  };

  destinationsList = [
    'Lima', 'Cusco - Machu Picchu', 'Puno - Lake Titicaca', 'Arequipa - Colca Canyon',
    'Amazon Rainforest'
  ];


  submitForm() {
    const serviceID = 'service_od5s9j8'; // Reemplaza con tu Service ID de EmailJS
    const templateID = 'template_r0g1wuh'; // Reemplaza con tu Template ID de EmailJS
    const publicKey = '8QEKVUtg-l_vDX_uc'; // Reemplaza con tu Public Key de EmailJS

    const templateParams = {
      travelStyle: this.formData.travelStyle,
      departureDate: this.formData.departureDate,
      returnDate: this.formData.returnDate,
      days: this.formData.days,
      adults: this.formData.adults,
      accommodation: this.formData.accommodation,
      destinations: this.formData.destinations.join(', '),
      phone: this.formData.phone,
      email: this.formData.email
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(response => {
        console.log('Correo enviado:', response);
        alert('¡Formulario enviado con éxito!');
      })
      .catch(error => {
        console.error('Error al enviar correo:', error);
        alert('Hubo un error al enviar el formulario.');
      });
  }
}
