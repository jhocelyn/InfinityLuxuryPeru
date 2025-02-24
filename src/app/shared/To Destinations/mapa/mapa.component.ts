import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
import L from 'leaflet';

@Component({
  selector: 'app-mapa',
  imports: [],
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.css'
})
export class MapaComponent implements AfterViewInit{
  @Input() lat!: number;
  @Input() lng!: number;
  @Input() countryName!: string;

  @ViewChild('mapContainer', { static: true }) mapContainer!: ElementRef;
  private map!: L.Map;

  ngAfterViewInit(): void {
    if (this.mapContainer) {
      this.initMap();
    } else {
      console.error("Map container not found.");
    }
  }

  private initMap(): void {
    this.map = L.map(this.mapContainer.nativeElement).setView([this.lat, this.lng], 5);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);

    const customIcon = L.icon({
      iconUrl: 'assets/img/marker-icon.png',  // Ensure this file exists
      shadowUrl: 'assets/img/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    L.marker([this.lat, this.lng], { icon: customIcon })
      .addTo(this.map)
      .bindPopup(`<b>${this.countryName}</b>`)
      .openPopup();

    // Ensure the map resizes correctly
    setTimeout(() => {
      this.map.invalidateSize();
    }, 500);
  }
}
