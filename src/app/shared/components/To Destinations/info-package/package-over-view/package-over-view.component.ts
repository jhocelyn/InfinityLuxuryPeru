import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-package-over-view',
  imports: [],
  templateUrl: './package-over-view.component.html',
  styleUrl: './package-over-view.component.css'
})
export class PackageOverViewComponent {
  @Input() package: any;
}
