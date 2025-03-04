import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NgForOf, NgIf, NgSwitch, NgSwitchCase} from '@angular/common';
import {
  PackageOverViewComponent
} from '../../../../../../../shared/components/To Destinations/info-package/package-over-view/package-over-view.component';
import {
  PackageDescriptionComponent
} from '../../../../../../../shared/components/To Destinations/info-package/package-description/package-description.component';
import {
  PackSampleJourneyComponent
} from '../../../../../../../shared/components/To Destinations/info-package/pack-sample-journey/pack-sample-journey.component';
import {
  CustomOptionsComponent
} from '../../../../../../../shared/components/To Destinations/info-package/custom-options/custom-options.component';
import {
  PackagePricingComponent
} from '../../../../../../../shared/components/To Destinations/info-package/package-pricing/package-pricing.component';
import {TravelPackage} from '../../../../../../../shared/models/travel-packages.model';
import {PackagesService} from '../../../../../../../services/packages.service';
import {
  BannerComponent
} from '../../../../../../../shared/components/To Destinations/info-package/banner/banner.component';

@Component({
  selector: 'app-info-packages',
  imports: [
    PackageOverViewComponent,
    PackageDescriptionComponent,
    PackSampleJourneyComponent,
    CustomOptionsComponent,
    PackagePricingComponent,
    NgForOf,
    NgSwitchCase,
    NgSwitch,
    BannerComponent,
    NgIf
  ],
  templateUrl: './info-packages.component.html',
  styleUrl: './info-packages.component.css'
})
export class InfoPackagesComponent implements OnInit{
  selectedTab = 'description'; // Por defecto, se muestra la descripción

  tabs = [
    { id: 'description', label: 'DESCRIPCIÓN', icon: 'fas fa-file-alt' },
    { id: 'sample-journey', label: 'SAMPLE JOURNEY', icon: 'fas fa-map-marked-alt' },
    { id: 'custom-options', label: 'OPCIONES A MEDIDA', icon: 'fas fa-plus' },
    { id: 'pricing', label: 'PRECIOS', icon: 'fas fa-tags' }
  ];
  package: TravelPackage | undefined;

  constructor(
    private route: ActivatedRoute,
    private packagesService: PackagesService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const destino = 'arequipa'; // Se puede cambiar dinámicamente si se usa en otros destinos
      const id = +params['id'];
      this.package = this.packagesService.getPackageById(destino, id);
    });
  }
}
