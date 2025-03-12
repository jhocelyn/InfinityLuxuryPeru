import { Component } from '@angular/core';
import {TravelPackage} from '../../../../../shared/models/travel-packages.model';
import {ActivatedRoute} from '@angular/router';
import {BannerComponent} from '../../../../../shared/components/To Destinations/info-package/banner/banner.component';
import {
  CustomOptionsComponent
} from '../../../../../shared/components/To Destinations/info-package/custom-options/custom-options.component';
import {MapComponent} from '../../../../../shared/components/To Destinations/info-package/map/map.component';
import {NgForOf, NgIf, NgSwitch, NgSwitchCase} from '@angular/common';
import {
  PackSampleJourneyComponent
} from '../../../../../shared/components/To Destinations/info-package/pack-sample-journey/pack-sample-journey.component';
import {
  PackageDescriptionComponent
} from '../../../../../shared/components/To Destinations/info-package/package-description/package-description.component';
import {
  PackageOverViewComponent
} from '../../../../../shared/components/To Destinations/info-package/package-over-view/package-over-view.component';
import {
  PackagePricingComponent
} from '../../../../../shared/components/To Destinations/info-package/package-pricing/package-pricing.component';
import {
  RequestProgramComponent
} from '../../../../../shared/components/To Destinations/info-package/request-program/request-program.component';
import {TrekkingService} from '../../../../../services/trekking.service';

@Component({
  selector: 'app-info-package',
  imports: [
    BannerComponent,
    CustomOptionsComponent,
    MapComponent,
    NgForOf,
    NgIf,
    NgSwitchCase,
    PackSampleJourneyComponent,
    PackageDescriptionComponent,
    PackageOverViewComponent,
    PackagePricingComponent,
    RequestProgramComponent,
    NgSwitch
  ],
  templateUrl: './info-packages.component.html',
  styleUrl: './info-packages.component.css'
})
export class InfoPackagesComponent {
  selectedTab = 'description'; // Por defecto, se muestra la descripción

  tabs = [
    { id: 'description', label: 'DESCRIPCIÓN', icon: 'fas fa-file-alt' },
    { id: 'sample-journey', label: 'SAMPLE JOURNEY', icon: 'fas fa-map-marked-alt' },
    { id: 'custom-options', label: 'OPCIONES A MEDIDA', icon: 'fas fa-plus' },
    { id: 'pricing', label: 'PRECIOS', icon: 'fas fa-tags' },
    { id: 'request-program', label: 'REQUEST THE PROGRAM', icon: 'fas fa-envelope' } // Nueva pestaña
  ];
  package: TravelPackage | undefined;

  constructor(
    private route: ActivatedRoute,
    private packagesService: TrekkingService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const destino = 'cusco'; // Se puede cambiar dinámicamente si se usa en otros destinos
      const id = +params['id'];
      this.package = this.packagesService.getPackageById(destino, id);
    });
  }
}
