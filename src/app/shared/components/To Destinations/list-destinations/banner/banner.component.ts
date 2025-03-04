import {Component, Input} from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-banner',
  imports: [
    NgIf
  ],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  @Input() imagen!: string;
  @Input() texto?: string;
  @Input() mostrarFlecha: boolean = false;
}
