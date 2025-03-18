import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';
import {BannerComponent} from "../../../../../shared/components/To Destinations/list-destinations/banner/banner.component";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
    SectionDestinationsComponent
} from "../../../../../shared/components/To Destinations/list-destinations/section-destinations/section-destinations.component";
import {TranslateService} from '@ngx-translate/core';

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
    console.log('Formulario enviado:', this.formData);
  }
}
