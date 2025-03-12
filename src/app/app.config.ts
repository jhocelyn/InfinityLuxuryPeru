import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {provideClientHydration} from '@angular/platform-browser';
import {HttpClient, HttpClientModule, provideHttpClient, withFetch} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';


// Función de fábrica para el cargador de traducciones
export function httpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    importProvidersFrom(HttpClientModule),

    // Configuración del TranslateModule
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: httpLoaderFactory,
          deps: [HttpClient],
        }
      })
    )
  ]
};
