import {Component, Input} from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-pack-sample-journey',
  imports: [
    NgForOf
  ],
  templateUrl: './pack-sample-journey.component.html',
  styleUrl: './pack-sample-journey.component.css'
})
export class PackSampleJourneyComponent {
  @Input() package: any;

}
