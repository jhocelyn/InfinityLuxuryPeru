import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FooterComponent} from '../../../../shared/footer/footer.component';
import {NavbarComponent} from '../../../../shared/navbar/navbar.component';
import {BreadcrumbComponent} from '../../../../shared/breadcrumb/breadcrumb.component';

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
