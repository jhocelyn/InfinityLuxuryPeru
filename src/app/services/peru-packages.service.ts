import { Injectable } from '@angular/core';
import { TravelPackage } from '../shared/models/travel-packages.model';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class PeruPackagesService {
  constructor(private translate: TranslateService) {}

  getPackagesByDestination(destino: string): TravelPackage[] {
    return this.translate.instant(`PACKAGES.COUNTRIES.PERU.${destino}`) || [];
  }

  getPackageById(destino: string, id: number): TravelPackage | undefined {
    const packages = this.getPackagesByDestination(destino);
    return packages.find(p => p.id === id);
  }
}
