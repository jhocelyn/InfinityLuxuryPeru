import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from './shared/components/Important/navbar/navbar.component';
import {FooterComponent} from './shared/components/Important/footer/footer.component';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent, TranslatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'InfinityLuxury';

  phoneNumber: string = '+51934983711'; // 📌 Reemplaza con tu número de WhatsApp
  message: string = 'Hola, quiero más información sobre los paquetes de viaje.';

  openWhatsApp() {
    const url = `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(this.message)}`;
    window.open(url,'_blank');
  }
}
