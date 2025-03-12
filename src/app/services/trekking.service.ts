import { Injectable } from '@angular/core';
import { TravelPackage } from '../shared/models/travel-packages.model';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TrekkingService {
  constructor(private translate: TranslateService) {
  }

  getPackagesByCategory(category: string): TravelPackage[] {
    return this.translate.instant(`PACKAGES.TREKKING.${category}`) || [];
  }

  getPackageById(category: string, id: number): TravelPackage | undefined {
    const packages = this.getPackagesByCategory(category);
    return packages.find(p => p.id === id);
  }
}
