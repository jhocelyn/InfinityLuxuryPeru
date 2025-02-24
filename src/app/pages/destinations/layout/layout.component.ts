import { Component } from '@angular/core';
import {NavbarComponent} from '../../../shared/Important/navbar/navbar.component';
import {FooterComponent} from '../../../shared/Important/footer/footer.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [
    RouterOutlet
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  }
