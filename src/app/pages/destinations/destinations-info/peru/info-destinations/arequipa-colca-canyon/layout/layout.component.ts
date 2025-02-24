import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FooterComponent} from '../../../../../../../shared/Important/footer/footer.component';
import {NavbarComponent} from '../../../../../../../shared/Important/navbar/navbar.component';
import {BreadcrumbComponent} from '../../../../../../../shared/To Destinations/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-layout',
  imports: [
    RouterOutlet,
    BreadcrumbComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
