import {AfterViewInit, Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {NavbarComponent} from './shared/components/Important/navbar/navbar.component';
import {FooterComponent} from './shared/components/Important/footer/footer.component';
import {TranslatePipe} from '@ngx-translate/core';
import {isPlatformBrowser, NgIf} from '@angular/common';
import {filter} from 'rxjs';

declare global {
  interface Window { fbq: (...args: any[]) => void; }
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent, TranslatePipe, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit,AfterViewInit{
  title = 'InfinityLuxury';

  phoneNumber: string = '+51934983711'; // 📌 Reemplaza con tu número de WhatsApp
  message: string = 'Hola, quiero más información sobre los paquetes de viaje.';

  openWhatsApp() {
    const url = `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(this.message)}`;
    window.open(url,'_blank');
  }
  isBrowser = false;
  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    // Meta Pixel: track 'PageView' solo en navegador
    if (isPlatformBrowser(this.platformId)) {
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe(() => {
        if (typeof window.fbq === 'function') {
          window.fbq('track', 'PageView');
        } else {
          console.warn('Meta Pixel (fbq) aún no está cargado.');
        }
      });
    }
  }

  cookiesAccepted = false;


  ngOnInit() {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngAfterViewInit() {
    if (this.isBrowser) {
      const accepted = localStorage.getItem('cookiesAccepted') === 'true';

      // Para asegurar detección por Angular
      setTimeout(() => {
        this.cookiesAccepted = accepted;

        if (this.cookiesAccepted) {
          this.loadAnalytics();
        }
      });
    }
  }

  acceptCookies() {
    if (this.isBrowser) {
      localStorage.setItem('cookiesAccepted', 'true');
      this.cookiesAccepted = true;
      this.loadAnalytics();
    }
  }

  rejectCookies() {
    if (this.isBrowser) {
      localStorage.setItem('cookiesAccepted', 'false');
      this.cookiesAccepted = true; // Oculta el banner
      // No se carga analytics ni pixel
    }
  }

  loadAnalytics() {
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-LQCL7CW1PK';
    script.async = true;
    document.head.appendChild(script);

    const inlineScript = document.createElement('script');
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-LQCL7CW1PK');
    `;
    document.head.appendChild(inlineScript);
  }
}
