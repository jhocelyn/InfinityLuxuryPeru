import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {TranslateService} from '@ngx-translate/core';

bootstrapApplication(AppComponent, appConfig)
  .then(appRef => {
    // Inyectar el servicio de traducción manualmente
    const translate = appRef.injector.get(TranslateService);
    translate.addLangs(['en', 'es']); // Idiomas disponibles
    const browserLang = localStorage.getItem('lang') || translate.getBrowserLang() || 'en';
    translate.use(browserLang.match(/en|es/) ? browserLang : 'en');
  })
  .catch(err => console.error(err));

