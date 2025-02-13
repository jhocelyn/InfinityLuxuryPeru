import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FooterComponent} from '../../../../shared/footer/footer.component';
import {NavbarComponent} from '../../../../shared/navbar/navbar.component';

@Component({
  selector: 'app-layout',
  imports: [
    RouterOutlet,
    FooterComponent,
    NavbarComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
