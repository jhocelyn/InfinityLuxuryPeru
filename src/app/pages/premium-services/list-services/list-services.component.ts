import { Component } from '@angular/core';
import {NgClass, NgForOf} from '@angular/common';
import {RouterLink} from '@angular/router';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-list-services',
  imports: [
    NgForOf,
    NgClass,
    RouterLink,
    TranslatePipe
  ],
  templateUrl: './list-services.component.html',
  styleUrl: './list-services.component.css'
})
export class ListServicesComponent {
  services: any = {}; // Aquí se guardarán los datos traducidos
  servicesKeys: string[] = []; // Claves para iterar en la vista

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.loadServices();
    // Escuchar cambios de idioma para actualizar los datos
    this.translate.onLangChange.subscribe(() => {
      this.loadServices();
    });
  }

  loadServices(): void {
    this.translate.get('PREMIUM_SERVICES.services').subscribe((data) => {
      this.services = data;
      this.servicesKeys = Object.keys(this.services);
    });
  }
}
