import {Component, Input} from '@angular/core';
import {MapaComponent} from "../../list-destinations/mapa/mapa.component";

@Component({
  selector: 'app-map',
    imports: [
        MapaComponent
    ],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent {
 @Input() locations!: { name:string,lat:number,lng:number,day:number }[];
}
