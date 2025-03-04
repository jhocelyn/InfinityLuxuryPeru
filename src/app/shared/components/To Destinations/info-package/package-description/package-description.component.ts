import {Component, Input} from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-package-description',
  imports: [
    NgForOf
  ],
  templateUrl: './package-description.component.html',
  styleUrl: './package-description.component.css'
})
export class PackageDescriptionComponent {
  @Input() package: any;

}
