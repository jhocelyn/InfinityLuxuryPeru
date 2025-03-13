import { Component } from '@angular/core';
import {BannerComponent} from "../../../../../shared/components/To Destinations/list-destinations/banner/banner.component";
import {
  BannerToInfoDestinationsComponent
} from '../../../../../shared/components/To Destinations/list-destinations/banner-to-info-destinations/banner-to-info-destinations.component';
import {
  InfoSectionDestinationsComponent
} from '../../../../../shared/components/To Destinations/list-destinations/info-section-destinations/info-section-destinations.component';
import {
  PackageListToDestinationsComponent
} from '../../../../../shared/components/To Destinations/list-destinations/package-list-to-destinations/package-list-to-destinations.component';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-list-packages',
  imports: [
    BannerComponent,
    BannerToInfoDestinationsComponent,
    InfoSectionDestinationsComponent,
    PackageListToDestinationsComponent
  ],
  templateUrl: './list-packages.component.html',
  styleUrl: './list-packages.component.css'
})
export class ListPackagesComponent {
  images: any[] = [];
  info: any = {};
  paquetes: any[] = [];
  ruta = "/premium-services/premium-tours"; // La ruta se mantiene igual para todos los paquetes

  constructor(private translate: TranslateService) {
    this.loadTranslations();
  }

  loadTranslations() {
    this.translate.get('LIST_PACKAGES.TOURS').subscribe((data: any) => {
      this.images = data.images ||[];
      this.info = data.info || {};
      this.paquetes = (data.paquetes||[]).map((paquete: any) => ({
        ...paquete,
        ruta: this.ruta // Se asigna la misma ruta a todos los paquetes
      }));
    });
  }
}
