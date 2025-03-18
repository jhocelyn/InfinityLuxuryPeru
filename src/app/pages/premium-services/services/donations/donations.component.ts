import { Component } from '@angular/core';
import {BannerComponent} from '../../../../shared/components/To Destinations/list-destinations/banner/banner.component';
import {
  PackageListToDestinationsComponent
} from '../../../../shared/components/To Destinations/list-destinations/package-list-to-destinations/package-list-to-destinations.component';
import {
  SectionDestinationsComponent
} from '../../../../shared/components/To Destinations/list-destinations/section-destinations/section-destinations.component';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-donations',
  imports: [
    BannerComponent,
    PackageListToDestinationsComponent,
    SectionDestinationsComponent
  ],
  templateUrl: './donations.component.html',
  styleUrl: './donations.component.css'
})
export class DonationsComponent {
  images: any[] = [];
  info: any = {};
  paquetes: any[] = [];
  ruta = "/premium-services/donations"; // La ruta se mantiene igual para todos los paquetes

  constructor(private translate: TranslateService) {
    this.loadTranslations();
  }

  loadTranslations() {
    this.translate.get('LIST_PACKAGES.DONATIONS').subscribe((data: any) => {
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

}
