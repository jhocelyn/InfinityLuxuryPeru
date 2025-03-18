import {Component} from '@angular/core';
import {
  BannerComponent
} from '../../../../../../../shared/components/To Destinations/list-destinations/banner/banner.component';
import {
  PackageListToDestinationsComponent
} from '../../../../../../../shared/components/To Destinations/list-destinations/package-list-to-destinations/package-list-to-destinations.component';
import {
    SectionDestinationsComponent
} from "../../../../../../../shared/components/To Destinations/list-destinations/section-destinations/section-destinations.component";
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-arequipa-colca-canyon-packages',
    imports: [
        BannerComponent,
        PackageListToDestinationsComponent,
        SectionDestinationsComponent,
    ],
  templateUrl: './arequipa-packages.component.html',
  styleUrl: './arequipa-packages.component.css'
})
export class ArequipaPackagesComponent {

  images: any[] = [];
  info: any = {};
  paquetes: any[] = [];
  ruta = "/destinations/peru/arequipa-colca-canyon/"; // La ruta se mantiene igual para todos los paquetes

  constructor(private translate: TranslateService) {
    this.loadTranslations();
  }

  loadTranslations() {
    this.translate.get('LIST_PACKAGES.AREQUIPA').subscribe((data: any) => {
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
