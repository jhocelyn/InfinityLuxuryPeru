import { Component } from '@angular/core';
import {BannerComponent} from "../../../../../shared/components/To Destinations/list-destinations/banner/banner.component";
import {
    DestinationsGridComponent
} from "../../../../../shared/components/To Destinations/list-destinations/destinations-grid/destinations-grid.component";
import {TranslatePipe, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-list-packages',
  imports: [
    BannerComponent,
    DestinationsGridComponent,
    TranslatePipe
  ],
  templateUrl: './list-packages.component.html',
  styleUrl: './list-packages.component.css'
})
export class ListPackagesComponent {
  servicios: any[] = [];
  ruta = '/premium-services/special-services/';

  constructor(private translate: TranslateService) {
    this.loadTranslations();
  }

  loadTranslations() {
    this.translate.get('SPECIAL_SERVICES').subscribe((data: any) => {
      if (data && data.Services) { // Asegurar que existe 'Services' en el JSON
        this.servicios = data.Services.map((servicio: any, index: number) => ({
          id: servicio.id || index, // Si no tiene ID, asignamos un índice
          nombre: servicio.name,
          imagen: servicio.image,
          slug: servicio.slug,
          destacado: servicio.featured,
          ruta: `${this.ruta}${servicio.slug}` // Agregar slug a la ruta
        }));
      }
    });
    console.log(this.servicios);
  }

}
