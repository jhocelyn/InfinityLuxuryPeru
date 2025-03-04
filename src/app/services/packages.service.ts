import { Injectable } from '@angular/core';
import { TravelPackage } from '../shared/models/travel-packages.model';

@Injectable({
  providedIn: 'root'
})
export class PackagesService {
  private paquetesPorDestino: { [key: string]: TravelPackage[] } = {
    arequipa: [
      {
        id: 1,
        title: "Arequipa y Cañón del Colca",
        subtitle: "Explora la Ciudad Blanca y el majestuoso Cañón del Colca",
        days: 5,
        nights: 4,
        price: 1200,
        mapUrl: "https://www.google.com/maps/embed?pb=...",
        description: {
          highlights: [
            "Recorrido por el Centro Histórico de Arequipa",
            "Visita al Monasterio de Santa Catalina",
            "Excursión al Cañón del Colca",
            "Avistamiento de cóndores en Cruz del Cóndor"
          ],
          text: "Descubre la belleza colonial de Arequipa y la impresionante naturaleza del Cañón del Colca en un viaje único.",
          itinerary: [
            {
              dayTitle: "Día 1",
              daySubtitle: "Llegada a Arequipa",
              dayDescription: "Recepción en el aeropuerto y traslado al hotel. Recorrido por el Centro Histórico y la Plaza de Armas."
            },
            {
              dayTitle: "Día 2",
              daySubtitle: "Exploración de Arequipa",
              dayDescription: "Visita guiada al Monasterio de Santa Catalina y al mirador de Yanahuara."
            },
            {
              dayTitle: "Día 3",
              daySubtitle: "Rumbo al Cañón del Colca",
              dayDescription: "Viaje a Chivay con paradas en la Reserva Nacional de Salinas y Aguada Blanca."
            },
            {
              dayTitle: "Día 4",
              daySubtitle: "Avistamiento de cóndores",
              dayDescription: "Salida hacia la Cruz del Cóndor para observar el vuelo de los cóndores sobre el Cañón del Colca."
            },
            {
              dayTitle: "Día 5",
              daySubtitle: "Regreso a Arequipa",
              dayDescription: "Tiempo libre en Chivay antes del retorno a la ciudad."
            }
          ]
        },
        sampleJourney: [
          {
            dayTitle: "Día 1",
            daySubtitle: "Llegada a Arequipa",
            dayDescription: "Recepción en el aeropuerto y traslado a un hotel con vista a los volcanes.",
            accommodations: [
              {
                stars: 5,
                title: "Casa Andina Premium Arequipa",
                image: "assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp",
                location: "Arequipa, Perú"
              }
            ]
          },
          {
            dayTitle: "Día 2",
            daySubtitle: "Hospedaje en el Valle del Colca",
            dayDescription: "Llegada a Chivay y hospedaje en un hotel rodeado de naturaleza.",
            accommodations: [
              {
                stars: 4,
                title: "Colca Lodge Spa & Hot Springs",
                image: "assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp",
                location: "Chivay, Perú"
              },
              {
                stars: 4,
                title: "Colca Lodge Spa & Hot Springs",
                image: "assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp",
                location: "Chivay, Perú"
              }
            ]
          }
        ],
        customOptions: {
          description: "Añade experiencias personalizadas a tu viaje.",
          packages: [
            {
              title: "Baños termales en La Calera",
              image: "assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp",
            },
            {
              title: "Trekking al mirador de Achachihua",
              image: "assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp",
            },
            {
              title: "Cena gourmet con vista a los volcanes",
              image: "assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp",
            }
          ]
        },
        pricing: {
          title: "Precios del paquete",
          included: [
            "Alojamiento en hoteles 4 y 5 estrellas",
            "Desayunos diarios",
            "Guía turístico en español e inglés",
            "Entradas a los atractivos turísticos"
          ],
          notIncluded: [
            "Vuelos nacionales",
            "Almuerzos y cenas",
            "Gastos personales y propinas"
          ]
        }
      }
    ],
    cusco: [
      {
        id: 1,
        title: "Machu Picchu Express",
        subtitle: "Una visita rápida a la maravilla del mundo",
        days: 2,
        nights: 1,
        price: 750,
        mapUrl: "https://maps.google.com/?q=Machu+Picchu",
        description: {
          highlights: ["Tren panorámico", "Tour guiado en Machu Picchu", "Exploración de Aguas Calientes"],
          text: "Un viaje de dos días para conocer lo mejor de Machu Picchu.",
          itinerary: [
            { dayTitle: "Día 1", daySubtitle: "Viaje a Aguas Calientes", dayDescription: "Tren y pernocte en Aguas Calientes." },
            { dayTitle: "Día 2", daySubtitle: "Tour en Machu Picchu", dayDescription: "Visita guiada y regreso a Cusco." }

          ]
        },
        sampleJourney: [],
        customOptions: { description: "Opciones extra", packages: [] },
        pricing: { title: "Incluye", included: ["Boletos de tren", "Entrada a Machu Picchu"], notIncluded: ["Vuelos", "Almuerzos"] }
      }
    ]
  };

  getPackagesByDestination(destino: string): TravelPackage[] {
    return this.paquetesPorDestino[destino] || [];
  }

  getPackageById(destino: string, id: number): TravelPackage | undefined {
    return this.paquetesPorDestino[destino]?.find(p => p.id === id);
  }
}
