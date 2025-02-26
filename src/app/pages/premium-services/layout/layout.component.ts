import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {BreadcrumbComponent} from '../../../shared/To Destinations/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-layout',
  imports: [
    RouterOutlet,
    BreadcrumbComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
