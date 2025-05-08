import {Component, Input} from '@angular/core';
import {NgIf} from '@angular/common';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-banner',
  imports: [
    NgIf,
    TranslatePipe
  ],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  @Input() imagen!: string;
  @Input() texto?: string;
  @Input() mostrarFlecha: boolean = false;
  @Input() targetId: string = ''; // ID al que hacer scroll
  scrollToContent() {
    const scrollTarget = document.getElementById(this.targetId);
    if (scrollTarget) {
      scrollTarget.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
