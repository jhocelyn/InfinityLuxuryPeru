import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-cards-packages-destination',
  imports: [],
  templateUrl: './cards-packages-destination.component.html',
  styleUrl: './cards-packages-destination.component.css'
})
export class CardsPackagesDestinationComponent {

  @Input()nombre:string='';
  @Input()descripcion:string='';
  @Input()imagen:string='';
  @Input() id: number = 0;
  @Input() ruta: string = '';

  // Esto redirige al paquete específico
  redirectToPaquete() {
    window.location.href = `${this.ruta}/${this.id}`;
  }
}
