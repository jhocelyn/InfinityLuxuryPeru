import {Component, Input} from '@angular/core';
import {BannerToInfoDestinationsComponent} from '../banner-to-info-destinations/banner-to-info-destinations.component';
import {InfoSectionDestinationsComponent} from '../info-section-destinations/info-section-destinations.component';

@Component({
  selector: 'app-section-destinations',
  imports: [
    BannerToInfoDestinationsComponent,
    InfoSectionDestinationsComponent
  ],
  templateUrl: './section-destinations.component.html',
  styleUrl: './section-destinations.component.css'
})
export class SectionDestinationsComponent {
  @Input() info!: {
    image_principal: string;
    titlePage: string;
    button: string;
    titleInfo: string;
    descripcion: string;
    subtitulo: string;
  };

  @Input() images!: { title:string , description:string, image:string }[];
}
