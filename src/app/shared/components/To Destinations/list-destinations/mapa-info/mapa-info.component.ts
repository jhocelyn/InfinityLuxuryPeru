import {Component, Input} from '@angular/core';
import {MapaComponent} from '../mapa/mapa.component';

@Component({
  selector: 'app-mapa-info',
  imports: [
    MapaComponent
  ],
  templateUrl: './mapa-info.component.html',
  styleUrl: './mapa-info.component.css'
})
export class MapaInfoComponent {
  @Input() lat!: number;
  @Input() lng!: number;
  @Input() descripcion!: string;
}
