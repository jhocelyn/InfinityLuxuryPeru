import {Component, Input} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-package-description',
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './package-description.component.html',
  styleUrl: './package-description.component.css'
})
export class PackageDescriptionComponent {
  @Input() package: any;

}
