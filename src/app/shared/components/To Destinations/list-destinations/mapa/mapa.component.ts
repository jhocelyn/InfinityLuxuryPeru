import {AfterViewInit, Component, Input} from '@angular/core';
import L from 'leaflet';

// Reemplazar el icono de marcador de Leaflet
const DefaultIcon = L.icon({
  iconUrl: 'assets/img/marker-icon.png',  // Usa un icono personalizado
  shadowUrl: 'assets/img/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

@Component({
  selector: 'app-mapa',
  imports: [],
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.css'
})
export class MapaComponent implements AfterViewInit{
  @Input() locations: { name: string; lat: number; lng: number; day: number }[] = [];

  private map!: L.Map;

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map').setView([this.locations[0].lat, this.locations[0].lng], 6);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);

    this.locations.forEach((location) => {
      const marker = L.marker([location.lat, location.lng], { icon: DefaultIcon })
        .addTo(this.map)
        .bindPopup(`<b>${location.name}</b><br>Day: ${location.day}`);

      marker.on('mouseover', () => {
        this.map.setView([location.lat, location.lng], 10);
        marker.openPopup();
      });

      marker.on('mouseout', () => {
        this.map.setView([this.locations[0].lat, this.locations[0].lng], 6);
        marker.closePopup();
      });
    });
  }
}
