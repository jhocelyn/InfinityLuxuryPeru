import { Injectable } from '@angular/core';
import { TravelPackage } from '../shared/models/travel-packages.model';
import {TranslateService} from '@ngx-translate/core';
import {map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PremiumTours {
  constructor(private translate: TranslateService) {}

  getPackagesByCategory(category: string): Observable<TravelPackage[]> {
    return this.translate.get(`PACKAGES.TOURS.${category}`).pipe(
      map(packages => {
        console.log('Datos originales de TranslateService:', packages);

        if (!Array.isArray(packages)) {
          console.log('No es un array, convirtiendo a valores...');
          packages = Object.values(packages); // Convertir objeto a array
        }

        console.log('Array convertido:', packages);
        return packages;
      })
    );
  }


  getPackageById(category: string, index: number): Observable<TravelPackage | undefined> {
    return this.getPackagesByCategory(category).pipe(
      map(packages => {
        console.log('Lista de paquetes:', packages);

        if (index < 1 || index > packages.length) {
          console.warn(`Índice fuera de rango (${index}), seleccionando el primer paquete`);
          return packages.length > 0 ? packages[0] : undefined;
        }

        console.log('Paquete seleccionado:', packages[index - 1]);
        return packages[index - 1]; // 🔥 Tomamos el paquete en la posición [index - 1]
      })
    );
  }
}
