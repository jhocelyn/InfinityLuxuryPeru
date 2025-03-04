import {Component, Input} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-banner-to-info-destinations',
  imports: [
    TranslatePipe
  ],
  templateUrl: './banner-to-info-destinations.component.html',
  styleUrl: './banner-to-info-destinations.component.css'
})
export class BannerToInfoDestinationsComponent {
  @Input() imagen!: string;
  @Input() titulo!: string;
  @Input() botonTexto!: string;

}
