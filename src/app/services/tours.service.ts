import { Injectable } from '@angular/core';
import { TravelPackage } from '../shared/models/travel-packages.model';

@Injectable({
  providedIn: 'root'
})
export class PremiumTours {
  private paquetesPorDestino: { [key: string]: TravelPackage[] } = {
    cusco:[
      {id: 1,
        title: "Laguna Humantay de Lujo",
        subtitle: "Una experiencia exclusiva en la majestuosa laguna turquesa rodeada de imponentes montañas",
        days: 1,
        nights: 0,
        price: 350,
        mapUrl: [
          { name: "Cusco", lat: -13.532, lng: -71.967, day: 1 },
          { name: "Mollepata", lat: -13.400, lng: -72.500, day: 1 },
          { name: "Soraypampa", lat: -13.414, lng: -72.626, day: 1 },
          { name: "Laguna Humantay", lat: -13.414, lng: -72.620, day: 1 }
        ],
        description: {
          highlights: [
            "Exploración de la impresionante Laguna Humantay",
            "Vistas panorámicas de los nevados Salkantay y Humantay",
            "Experiencia de lujo con almuerzo gourmet en medio de la naturaleza"
          ],
          text: "Embárcate en una aventura de un día a la Laguna Humantay con servicio de lujo, caminatas guiadas, vistas espectaculares y un almuerzo gourmet en un entorno inigualable.",
          itinerary: [
            { dayTitle: "Día 1", daySubtitle: "Cusco - Mollepata - Laguna Humantay - Cusco", dayDescription: "Salida desde Cusco en transporte privado. Caminata desde Soraypampa hasta la Laguna Humantay con impresionantes vistas. Almuerzo gourmet y retorno a Cusco." }
          ]
        },
        sampleJourney: [
          {
            dayTitle: "Día 1",
            daySubtitle: "Cusco - Laguna Humantay - Cusco",
            dayDescription: "Traslado privado desde Cusco a Mollepata. Caminata a la Laguna Humantay. Almuerzo gourmet en Soraypampa y regreso a Cusco en transporte privado.",
            accommodations: []
          }
        ],
        customOptions: {
          description: "Opciones adicionales para mejorar tu experiencia",
          packages: [
            { title: "Alquiler de caballo para la subida", image: "horse-rental.jpg" },
            { title: "Sesión fotográfica profesional", image: "photo-session.jpg" }
          ]
        },
        pricing: {
          title: "Incluye y No Incluye",
          included: [
            "Guía profesional de habla inglesa",
            "Todas las entradas y permisos requeridos",
            "Almuerzo de picnic gourmet con opciones personalizadas",
            "Refrigerios saludables durante la caminata",
            "Transporte terrestre privado de ida y vuelta",
            "Kit de primeros auxilios y balón de oxígeno"
          ],
          notIncluded: [
            "Bastones de trekking",
            "Caballo de emergencia",
            "Seguro de viaje (recomendado)",
            "Propinas y gastos personales"
          ]
        },
        images: [
          { alt: "Vista de la Laguna Humantay", src: "laguna-humantay.jpg", width: 800 },
          { alt: "Montaña Salkantay", src: "salkantay.jpg", width: 800 },
          { alt: "Almuerzo de lujo en la naturaleza", src: "luxury-lunch.jpg", width: 800 }
        ]
      },
      {
        id: 2,
        title: "Tour de Lujo Mirador de Cóndores de Chonta",
        subtitle: "Una experiencia exclusiva para observar el majestuoso vuelo del cóndor andino",
        days: 1,
        nights: 0,
        price: 320,
        mapUrl: [
          { name: "Cusco", lat: -13.532, lng: -71.967, day: 1 },
          { name: "Limatambo", lat: -13.486, lng: -72.325, day: 1 },
          { name: "Chonta", lat: -13.415, lng: -72.445, day: 1 }
        ],
        description: {
          highlights: [
            "Observación del majestuoso vuelo del cóndor andino",
            "Exploración de la comunidad de Chonta y su biodiversidad",
            "Experiencia de lujo con almuerzo gourmet en el mirador"
          ],
          text: "Disfruta de un exclusivo recorrido por el Mirador de Cóndores de Chonta, con vistas impresionantes del cañón de Apurímac y una experiencia culinaria gourmet en plena naturaleza.",
          itinerary: [
            { dayTitle: "Día 1", daySubtitle: "Cusco - Limatambo - Chonta - Cusco", dayDescription: "Salida desde Cusco en transporte privado. Caminata al mirador de cóndores. Observación del vuelo de los cóndores y almuerzo gourmet. Retorno a Cusco." }
          ]
        },
        sampleJourney: [
          {
            dayTitle: "Día 1",
            daySubtitle: "Cusco - Chonta - Cusco",
            dayDescription: "Traslado privado desde Cusco hasta Chonta. Caminata hasta el mirador para observar los cóndores. Almuerzo gourmet con vista panorámica y regreso a Cusco en transporte privado.",
            accommodations: []
          }
        ],
        customOptions: {
          description: "Opciones adicionales para mejorar tu experiencia",
          packages: [
            { title: "Visita al sitio arqueológico de Killarumiyoq", image: "killarumiyoq.jpg" },
            { title: "Visita al complejo arqueológico de Tarawasi", image: "tarawasi.jpg" }
          ]
        },
        pricing: {
          title: "Incluye y No Incluye",
          included: [
            "Guía profesional de habla inglesa",
            "Todas las entradas y permisos requeridos",
            "Almuerzo de picnic gourmet con opciones personalizadas",
            "Refrigerios saludables durante la caminata",
            "Transporte terrestre privado de ida y vuelta",
            "Kit de primeros auxilios y balón de oxígeno"
          ],
          notIncluded: [
            "Bastones de trekking",
            "Caballo de emergencia",
            "Seguro de viaje (recomendado)",
            "Propinas y gastos personales"
          ]
        },
        images: [
          { alt: "Cóndor andino en vuelo", src: "condor-vuelo.jpg", width: 800 },
          { alt: "Mirador de Chonta", src: "mirador-chonta.jpg", width: 800 },
          { alt: "Almuerzo gourmet con vista panorámica", src: "luxury-lunch-chonta.jpg", width: 800 }
        ]
      },
      {
        id: 3,
        title: "Palcoyo Montañas de Colores - Caminata de Lujo Full Day",
        subtitle: "Una experiencia relajada para descubrir la increíble cordillera arco iris",
        days: 1,
        nights: 0,
        price: 280,
        mapUrl: [
          { name: "Cusco", lat: -13.532, lng: -71.967, day: 1 },
          { name: "Checacupe", lat: -14.048, lng: -71.417, day: 1 },
          { name: "Palcoyo", lat: -13.868, lng: -71.167, day: 1 }
        ],
        description: {
          highlights: [
            "Vistas impresionantes de la cordillera arco iris de Palcoyo",
            "Exploración del bosque de piedras y el Valle Rojo",
            "Experiencia gastronómica de lujo en plena naturaleza"
          ],
          text: "Descubre la belleza de la Montaña de Colores de Palcoyo en una caminata accesible y relajada, disfrutando de vistas espectaculares y un almuerzo gourmet en los Andes.",
          itinerary: [
            { dayTitle: "Día 1", daySubtitle: "Cusco - Palcoyo - Cusco", dayDescription: "Salida desde Cusco en transporte privado. Caminata corta hacia Palcoyo. Exploración del mirador y almuerzo gourmet. Retorno a Cusco." }
          ]
        },
        sampleJourney: [
          {
            dayTitle: "Día 1",
            daySubtitle: "Cusco - Palcoyo - Cusco",
            dayDescription: "Traslado privado desde Cusco hasta Palcoyo. Caminata corta para explorar la cordillera arco iris y el bosque de piedras. Almuerzo gourmet con vistas panorámicas y regreso a Cusco en transporte privado.",
            accommodations: []
          }
        ],
        customOptions: {
          description: "Opciones adicionales para mejorar tu experiencia",
          packages: []
        },
        pricing: {
          title: "Incluye y No Incluye",
          included: [
            "Guía profesional de habla inglesa",
            "Todas las entradas y permisos requeridos",
            "Almuerzo de picnic gourmet con opciones personalizadas",
            "Refrigerios saludables durante la caminata",
            "Transporte terrestre privado de ida y vuelta",
            "Kit de primeros auxilios y balón de oxígeno"
          ],
          notIncluded: [
            "Bastones de trekking",
            "Seguro de viaje (recomendado)",
            "Propinas y gastos personales"
          ]
        },
        images: [
          { alt: "Montaña de Colores Palcoyo", src: "palcoyo-mountain.jpg", width: 800 },
          { alt: "Bosque de piedras en Palcoyo", src: "stone-forest-palcoyo.jpg", width: 800 },
          { alt: "Vista panorámica de la cordillera arco iris", src: "rainbow-range-palcoyo.jpg", width: 800 }
        ]
      },
      {
        id: 4,
        title: "Vinicunca Montaña Arco Iris – Caminata Completa de Lujo Full Day",
        subtitle: "Descubre la impresionante Montaña de 7 Colores con una experiencia premium",
        days: 1,
        nights: 0,
        price: 300,
        mapUrl: [
          { name: "Cusco", lat: -13.532, lng: -71.967, day: 1 },
          { name: "Checacupe", lat: -14.048, lng: -71.417, day: 1 },
          { name: "Vinicunca", lat: -13.858, lng: -71.302, day: 1 }
        ],
        description: {
          highlights: [
            "Caminata hacia la Montaña de 7 Colores a 5200 metros de altitud",
            "Exploración de la increíble geología de la zona y sus minerales",
            "Almuerzo gourmet en un entorno natural espectacular"
          ],
          text: "Vive una experiencia única explorando la Montaña Arco Iris de Vinicunca, donde los colores naturales de la montaña te sorprenderán. Disfruta de un recorrido exclusivo con guías expertos y un almuerzo de lujo.",
          itinerary: [
            { dayTitle: "Día 1", daySubtitle: "Cusco - Vinicunca - Cusco", dayDescription: "Salida desde Cusco en transporte privado. Caminata hasta la Montaña Arco Iris. Observación del paisaje y almuerzo gourmet. Retorno a Cusco." }
          ]
        },
        sampleJourney: [
          {
            dayTitle: "Día 1",
            daySubtitle: "Cusco - Vinicunca - Cusco",
            dayDescription: "Traslado privado desde Cusco hasta Vinicunca. Caminata hasta el mirador de la Montaña de 7 Colores. Almuerzo gourmet con vistas espectaculares y regreso a Cusco en transporte privado.",
            accommodations: []
          }
        ],
        customOptions: {
          description: "Opciones adicionales para mejorar tu experiencia",
          packages: []
        },
        pricing: {
          title: "Incluye y No Incluye",
          included: [
            "Guía profesional de habla inglesa",
            "Todas las entradas y permisos requeridos",
            "Almuerzo de picnic gourmet con opciones personalizadas",
            "Refrigerios saludables durante la caminata",
            "Transporte terrestre privado de ida y vuelta",
            "Kit de primeros auxilios y balón de oxígeno"
          ],
          notIncluded: [
            "Bastones de trekking",
            "Caballo de equitación personal",
            "Seguro de viaje (recomendado)",
            "Propinas y gastos personales"
          ]
        },
        images: [
          { alt: "Montaña de 7 Colores", src: "vinicunca-mountain.jpg", width: 800 },
          { alt: "Vista panorámica de Vinicunca", src: "vinicunca-view.jpg", width: 800 },
          { alt: "Almuerzo gourmet en los Andes", src: "luxury-lunch-vinicunca.jpg", width: 800 }
        ]
      },
      {
        id: 5,
        title: "Camino Inca Expres de Lujo Full Day",
        subtitle: "Descubre la magia del Camino Inca en un solo día con una experiencia premium",
        days: 1,
        nights: 0,
        price: 350,
        mapUrl: [
          { name: "Cusco", lat: -13.532, lng: -71.967, day: 1 },
          { name: "Ollantaytambo", lat: -13.259, lng: -72.265, day: 1 },
          { name: "Km 104", lat: -13.158, lng: -72.525, day: 1 },
          { name: "Machu Picchu", lat: -13.163, lng: -72.545, day: 1 }
        ],
        description: {
          highlights: [
            "Recorrido exclusivo por el Camino Inca hasta Machu Picchu",
            "Exploración de los sitios arqueológicos de Chachabamba y Wiñaywayna",
            "Almuerzo gourmet con vistas impresionantes"
          ],
          text: "Vive la experiencia única del Camino Inca en un solo día con un servicio de lujo. Descubre los impresionantes paisajes y sitios arqueológicos en esta inolvidable caminata hacia Machu Picchu.",
          itinerary: [
            { dayTitle: "Día 1", daySubtitle: "Cusco - Km 104 - Machu Picchu - Cusco", dayDescription: "Salida desde Cusco en transporte privado. Tren a Km 104. Caminata por el Camino Inca con visita a Wiñaywayna. Almuerzo gourmet. Llegada a Machu Picchu y visita guiada. Retorno a Cusco." }
          ]
        },
        sampleJourney: [
          {
            dayTitle: "Día 1",
            daySubtitle: "Cusco - Camino Inca - Machu Picchu - Cusco",
            dayDescription: "Traslado privado desde Cusco hasta la estación de tren. Caminata por el Camino Inca con vistas impresionantes y almuerzo gourmet. Visita guiada a Machu Picchu y regreso a Cusco en transporte privado.",
            accommodations: []
          }
        ],
        customOptions: {
          description: "Opciones adicionales para mejorar tu experiencia",
          packages: []
        },
        pricing: {
          title: "Incluye y No Incluye",
          included: [
            "Guía profesional de habla inglesa",
            "Todas las entradas y permisos requeridos",
            "Almuerzo de picnic gourmet con opciones personalizadas",
            "Refrigerios saludables durante la caminata",
            "Transporte terrestre privado de ida y vuelta",
            "Kit de primeros auxilios y balón de oxígeno"
          ],
          notIncluded: [
            "Bastones de trekking",
            "Seguro de viaje (recomendado)",
            "Propinas y gastos personales"
          ]
        },
        images: [
          { alt: "Vista panorámica del Camino Inca", src: "camino-inca-view.jpg", width: 800 },
          { alt: "Sitio arqueológico de Wiñaywayna", src: "winaywayna-ruins.jpg", width: 800 },
          { alt: "Almuerzo gourmet en la ruta", src: "luxury-lunch-inca-trail.jpg", width: 800 }
        ]
      }
]
  }
  getPackagesByDestination(destino: string): TravelPackage[] {
    return this.paquetesPorDestino[destino] || [];
  }

  getPackageById(destino: string, id: number): TravelPackage | undefined {
    return this.paquetesPorDestino[destino]?.find(p => p.id === id);
  }
  }
