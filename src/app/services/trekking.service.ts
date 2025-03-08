import { Injectable } from '@angular/core';
import { TravelPackage } from '../shared/models/travel-packages.model';

@Injectable({
  providedIn: 'root'
})
export class TrekkingService {
  private paquetesPorDestino: { [key: string]: TravelPackage[] } = {
    cusco:[
      {
        id: 1,
        title: "Ancascocha Trail de Lujo",
        subtitle: "Una aventura única en los Andes con experiencias exclusivas",
        days: 4,
        nights: 3,
        price: 1500,
        mapUrl: [
          { name: "Cusco", lat: -13.532, lng: -71.967, day: 1 },
          { name: "Lecheria", lat: -13.450, lng: -72.080, day: 1 },
          { name: "Lluchani", lat: -13.420, lng: -72.120, day: 1 },
          { name: "Lago Ancascocha", lat: -13.400, lng: -72.150, day: 2 },
          { name: "Escuela", lat: -13.380, lng: -72.180, day: 2 }
        ],
        description: {
          highlights: [
            "Caminata por los majestuosos paisajes andinos",
            "Experiencia de lujo con campamentos exclusivos",
            "Cena gourmet con ingredientes locales y frescos"
          ],
          text: "Sumérgete en una experiencia inolvidable recorriendo los Andes en una travesía de lujo. Disfruta de campamentos exclusivos, gastronomía gourmet y vistas impresionantes en el Ancascocha Trail.",
          itinerary: [
            {
              dayTitle: "Día 1",
              daySubtitle: "Cusco – Lecheria – Lluchani",
              dayDescription: "Inicio de la caminata con vistas espectaculares, sesión de yoga y cena gourmet."
            },
            {
              dayTitle: "Día 2",
              daySubtitle: "Lluchani – Lago Ancascocha – Escuela",
              dayDescription: "Caminata por pasos de alta montaña con vistas panorámicas y brindis especial."
            },
            {
              dayTitle: "Día 3",
              daySubtitle: "Escuela – Hatun Rumiyoc - Ollantaytambo – Aguas Calientes",
              dayDescription: "Descenso a tierras bajas con flora exuberante y llegada a Ollantaytambo."
            },
            {
              dayTitle: "Día 4",
              daySubtitle: "Aguas Calientes – Machu Picchu – Cusco",
              dayDescription: "Exploración guiada de Machu Picchu con retorno a Cusco."
            }
          ]
        },
        sampleJourney: [
          {
            dayTitle: "Día 1",
            daySubtitle: "Cusco – Lecheria – Lluchani",
            dayDescription: "Comenzamos el día con un traslado privado desde Cusco hasta Lecheria, el punto de inicio de nuestra caminata. Durante la ruta, podremos apreciar los imponentes nevados y la belleza natural del Valle Sagrado. La caminata inicial nos lleva a través de senderos rodeados de vegetación autóctona hasta llegar a nuestro exclusivo campamento en Lluchani, donde nos espera una sesión de yoga guiada por expertos, seguida de un masaje relajante y una exquisita cena gourmet elaborada con productos orgánicos de la región.",
            accommodations: [{ stars: 5, title: "Campamento de Lujo Lluchani", image: "luxury-camp-lluchani.jpg", location: "Lluchani, Perú" }]
          },
          {
            dayTitle: "Día 2",
            daySubtitle: "Lluchani – Lago Ancascocha – Escuela",
            dayDescription: "Después de un desayuno energizante, comenzamos una de las jornadas más desafiantes, ascendiendo hasta el Paso Accocasa, el punto más alto de nuestra travesía, donde seremos recompensados con vistas panorámicas de los nevados circundantes. Descendemos hacia el impresionante Lago Ancascocha, con su característico color turquesa, y nos detenemos para disfrutar de un almuerzo gourmet. La caminata continúa hasta nuestro campamento en Escuela, donde nos esperan una ducha caliente, un masaje reparador y una deliciosa cena gourmet bajo un cielo estrellado.",
            accommodations: [{ stars: 5, title: "Campamento de Lujo Escuela", image: "luxury-camp-escuela.jpg", location: "Escuela, Perú" }]
          },
          {
            dayTitle: "Día 3",
            daySubtitle: "Escuela – Hatun Rumiyoc - Ollantaytambo – Aguas Calientes",
            dayDescription: "Iniciamos el día con un descenso a través de exuberantes valles andinos, con la oportunidad de avistar cóndores en su hábitat natural. Pasamos por comunidades locales antes de llegar a Hatun Rumiyoc, donde nos despedimos de nuestro equipo de caminata. Luego, nos dirigimos a Ollantaytambo para disfrutar de un almuerzo en un restaurante exclusivo antes de abordar el tren de lujo hacia Aguas Calientes, donde pasaremos la noche en un hotel 5 estrellas.",
            accommodations: [{ stars: 5, title: "Hotel de Lujo Aguas Calientes", image: "luxury-hotel-aguas-calientes.jpg", location: "Aguas Calientes, Perú" }]
          },
          {
            dayTitle: "Día 4",
            daySubtitle: "Aguas Calientes – Machu Picchu – Cusco",
            dayDescription: "El gran día ha llegado. Muy temprano, tomamos el bus hacia la ciudadela de Machu Picchu, donde nuestro guía experto nos llevará a descubrir sus misterios y su historia fascinante. Disfrutaremos de una visita privada y tiempo libre para explorar el sitio por cuenta propia antes de regresar a Aguas Calientes para almorzar. Finalmente, tomamos el tren de regreso a Cusco, donde concluye nuestra inolvidable aventura.",
            accommodations: []
          }
        ],
        customOptions: {
          description: "Personaliza tu experiencia con estas opciones adicionales.",
          packages: [
            { title: "Paseo en caballo", image: "horse-riding.jpg" },
            { title: "Clase de cocina andina", image: "andean-cooking-class.jpg" }
          ]
        },
        pricing: {
          title: "Incluido y No Incluido",
          included: [
            "Guía profesional bilingüe",
            "Alojamiento en campamentos de lujo y hotel 5 estrellas",
            "Todas las comidas gourmet durante el recorrido",
            "Boletos de tren y entrada a Machu Picchu"
          ],
          notIncluded: [
            "Vuelos internacionales",
            "Seguro de viaje",
            "Propinas para el personal"
          ]
        },
        images: [
          { alt: "Paisaje andino", src: "andes-landscape.jpg", width: 1200 },
          { alt: "Cena gourmet", src: "gourmet-dinner.jpg", width: 1200 }
        ]
      },
      {id: 2,
        title: "Salkantay de Lujo",
        subtitle: "Una expedición mágica al corazón de los Andes",
        days: 5,
        nights: 4,
        price: 1800,
        mapUrl: [
          { name: "Cusco", lat: -13.532, lng: -71.967, day: 1 },
          { name: "Soraypampa", lat: -13.399, lng: -72.620, day: 1 },
          { name: "Soyrococha", lat: -13.378, lng: -72.630, day: 1 },
          { name: "Collpapampa", lat: -13.350, lng: -72.700, day: 2 },
          { name: "Playa Sahuayaco", lat: -13.320, lng: -72.750, day: 3 },
          { name: "Llaqtapata", lat: -13.300, lng: -72.780, day: 4 },
          { name: "Machu Picchu", lat: -13.1631, lng: -72.5450, day: 5 }
        ],
        description: {
          highlights: [
            "Trekking por el imponente Paso Salkantay",
            "Alojamiento en campamentos de lujo con todas las comodidades",
            "Experiencia única en Machu Picchu"
          ],
          text: "Descubre la majestuosidad del Salkantay en una expedición de lujo con paisajes espectaculares y servicios de primera categoría.",
          itinerary: [
            { dayTitle: "Día 1", daySubtitle: "Cusco – Soraypampa – Soyrococha", dayDescription: "Inicio del trekking con impresionantes vistas de los nevados." },
            { dayTitle: "Día 2", daySubtitle: "Soyrococha – Paso Salkantay – Collpapampa", dayDescription: "Caminata desafiante hasta el Paso Salkantay con vistas panorámicas." },
            { dayTitle: "Día 3", daySubtitle: "Collpapampa – Lluscamayo – Playa Sahuayaco", dayDescription: "Descenso hacia la ceja de selva con flora y fauna exuberante." },
            { dayTitle: "Día 4", daySubtitle: "Playa Sahuayaco – Llaqtapata – Aguas Calientes", dayDescription: "Visita a un antiguo sitio inca y llegada a Aguas Calientes." },
            { dayTitle: "Día 5", daySubtitle: "Aguas Calientes – Machu Picchu – Cusco", dayDescription: "Exploración guiada de Machu Picchu y regreso a Cusco." }
          ]
        },
        sampleJourney: [
          {
            dayTitle: "Día 1",
            daySubtitle: "Cusco – Soraypampa – Soyrococha",
            dayDescription: "Salida de Cusco en transporte privado hasta Soraypampa, con parada en Mollepata. Caminata con vistas espectaculares del Salkantay y el Humantay. Llegada al campamento de lujo en Soyrococha, con duchas calientes y cena gourmet.",
            accommodations: [{ stars: 5, title: "Campamento de Lujo Soyrococha", image: "luxury-camp-soyrococha.jpg", location: "Soyrococha, Perú" }]
          },
          {
            dayTitle: "Día 2",
            daySubtitle: "Soyrococha – Paso Salkantay – Collpapampa",
            dayDescription: "Caminata hasta el Paso Salkantay con vistas panorámicas del nevado. Descenso hacia la ceja de selva, pasando por cascadas y exuberante vegetación. Masajes relajantes y cena gourmet en el campamento de Collpapampa.",
            accommodations: [{ stars: 5, title: "Campamento de Lujo Collpapampa", image: "luxury-camp-collpapampa.jpg", location: "Collpapampa, Perú" }]
          },
          {
            dayTitle: "Día 3",
            daySubtitle: "Collpapampa – Lluscamayo – Playa Sahuayaco",
            dayDescription: "Descenso hacia el bosque nuboso, pasando por plantaciones de café y frutas tropicales. Encuentro con comunidades locales y degustación de productos frescos. Almuerzo en un entorno natural con vistas espectaculares. Caminata hasta Playa Sahuayaco para disfrutar de un descanso reparador.",
            accommodations: [{ stars: 5, title: "Campamento de Lujo Playa Sahuayaco", image: "luxury-camp-playa-sahuayaco.jpg", location: "Playa Sahuayaco, Perú" }]
          },
          {
            dayTitle: "Día 4",
            daySubtitle: "Playa Sahuayaco – Llaqtapata – Aguas Calientes",
            dayDescription: "Ascenso por un sendero inca hasta Llaqtapata, con vistas impresionantes de Machu Picchu a la distancia. Explicación histórica del sitio y almuerzo con una vista privilegiada. Descenso hasta Hidroeléctrica y caminata hacia Aguas Calientes, donde nos alojaremos en un hotel de lujo.",
            accommodations: [{ stars: 5, title: "Hotel de Lujo Aguas Calientes", image: "luxury-hotel-aguas-calientes.jpg", location: "Aguas Calientes, Perú" }]
          },
          {
            dayTitle: "Día 5",
            daySubtitle: "Aguas Calientes – Machu Picchu – Cusco",
            dayDescription: "Visita guiada privada a la ciudadela de Machu Picchu, explorando sus templos y terrazas. Tiempo libre para recorrer el sitio antes de regresar a Aguas Calientes para almorzar. Viaje en tren de regreso a Cusco, concluyendo una experiencia inolvidable.",
            accommodations: []
          }
        ],
        customOptions: {
          description: "Personaliza tu experiencia con estas opciones adicionales.",
          packages: [
            { title: "Ascenso a Huayna Picchu", image: "huayna-picchu-hike.jpg" },
            { title: "Clase de cocina andina", image: "andean-cooking-class.jpg" }
          ]
        },
        pricing: {
          title: "Incluido y No Incluido",
          included: [
            "Guía profesional bilingüe",
            "Alojamiento en campamentos de lujo y hotel 5 estrellas",
            "Todas las comidas gourmet durante el recorrido",
            "Boletos de tren y entrada a Machu Picchu"
          ],
          notIncluded: [
            "Vuelos internacionales",
            "Seguro de viaje",
            "Propinas para el personal"
          ]
        },
        images: [
          { alt: "Nevado Salkantay", src: "salkantay-mountain.jpg", width: 1200 },
          { alt: "Campamento de lujo", src: "luxury-camp.jpg", width: 1200 }
        ]
      },
      {
        id: 3,
        title: "Camino Inca de Lujo Plus",
        subtitle: "Una experiencia inigualable en el sendero más famoso del mundo",
        days: 5,
        nights: 4,
        price: 1900,
        mapUrl: [
          { name: "Cusco", lat: -13.532, lng: -71.967, day: 1 },
          { name: "Tarayoc", lat: -13.493, lng: -72.000, day: 1 },
          { name: "Wayllabamba", lat: -13.480, lng: -72.030, day: 1 },
          { name: "Pacaymayo", lat: -13.450, lng: -72.080, day: 2 },
          { name: "Phuyupatamarca", lat: -13.420, lng: -72.120, day: 3 },
          { name: "Machu Picchu", lat: -13.1631, lng: -72.5450, day: 4 }
        ],
        description: {
          highlights: [
            "Explora los restos arqueológicos a lo largo del Camino Inca",
            "Campamentos de lujo con duchas calientes y servicio premium",
            "Acceso privilegiado a Machu Picchu con guía experto"
          ],
          text: "Disfruta de una aventura inigualable en el Camino Inca de Lujo Plus, combinando historia, naturaleza y comodidad en un recorrido de cinco días hacia Machu Picchu.",
          itinerary: [
            { dayTitle: "Día 1", daySubtitle: "Cusco – Tarayoc – Wayllabamba", dayDescription: "Inicio de la caminata pasando por sitios arqueológicos y paisajes andinos únicos." },
            { dayTitle: "Día 2", daySubtitle: "Wayllabamba – Llulluchapampa – Pacaymayo", dayDescription: "Ascenso hasta el Paso Warmiwañusca y llegada a Pacaymayo." },
            { dayTitle: "Día 3", daySubtitle: "Pacaymayo – Chaquicocha – Phuyupatamarca", dayDescription: "Exploración de ruinas incas y caminata a través de bosques nubosos." },
            { dayTitle: "Día 4", daySubtitle: "Phuyupatamarca – Wiñaywayna – Machu Picchu", dayDescription: "Ingreso a Machu Picchu por la Puerta del Sol con vistas impresionantes." },
            { dayTitle: "Día 5", daySubtitle: "Aguas Calientes – Machu Picchu – Cusco", dayDescription: "Tour guiado en Machu Picchu y retorno a Cusco." }
          ]
        },
        sampleJourney: [
          {
            dayTitle: "Día 1",
            daySubtitle: "Cusco – Tarayoc – Wayllabamba",
            dayDescription: "Salida de Cusco en transporte privado hasta el Km 82, con una parada en Ollantaytambo. Caminata a través del sendero inca con vistas espectaculares y almuerzo en Tarayoc. Llegada al campamento de lujo en Wayllabamba con cena gourmet y masajes relajantes.",
            accommodations: [{ stars: 5, title: "Campamento de Lujo Wayllabamba", image: "luxury-camp-wayllabamba.jpg", location: "Wayllabamba, Perú" }]
          },
          {
            dayTitle: "Día 2",
            daySubtitle: "Wayllabamba – Llulluchapampa – Pacaymayo",
            dayDescription: "Caminata hasta el Paso Warmiwañusca, el punto más alto del Camino Inca. Descenso hasta el campamento en Pacaymayo, con vistas panorámicas y servicio exclusivo de spa y cena gourmet.",
            accommodations: [{ stars: 5, title: "Campamento de Lujo Pacaymayo", image: "luxury-camp-pacaymayo.jpg", location: "Pacaymayo, Perú" }]
          },
          {
            dayTitle: "Día 3",
            daySubtitle: "Pacaymayo – Chaquicocha – Phuyupatamarca",
            dayDescription: "Exploración de las ruinas de Runkurakay y Sayacmarca, caminata a través de un bosque nuboso con vistas espectaculares de los Andes. Campamento de lujo en Phuyupatamarca con una sesión de yoga al atardecer.",
            accommodations: [{ stars: 5, title: "Campamento de Lujo Phuyupatamarca", image: "luxury-camp-phuyupatamarca.jpg", location: "Phuyupatamarca, Perú" }]
          },
          {
            dayTitle: "Día 4",
            daySubtitle: "Phuyupatamarca – Wiñaywayna – Machu Picchu",
            dayDescription: "Descenso a través de la selva hasta el sitio arqueológico de Wiñaywayna. Almuerzo gourmet con vistas espectaculares antes de ingresar a Machu Picchu por la Puerta del Sol. Cena de celebración en Aguas Calientes y noche en un hotel de lujo.",
            accommodations: [{ stars: 5, title: "Hotel de Lujo Aguas Calientes", image: "luxury-hotel-aguas-calientes.jpg", location: "Aguas Calientes, Perú" }]
          },
          {
            dayTitle: "Día 5",
            daySubtitle: "Aguas Calientes – Machu Picchu – Cusco",
            dayDescription: "Tour guiado por la ciudadela de Machu Picchu con explicación detallada de sus estructuras y misterios. Tiempo libre para explorar antes del almuerzo y regreso en tren de lujo a Cusco.",
            accommodations: []
          }
        ],
        customOptions: {
          description: "Personaliza tu experiencia con estas opciones adicionales.",
          packages: [
            { title: "Ascenso a Huayna Picchu", image: "huayna-picchu-hike.jpg" },
            { title: "Sesión de spa en Aguas Calientes", image: "spa-aguas-calientes.jpg" }
          ]
        },
        pricing: {
          title: "Incluido y No Incluido",
          included: [
            "Guía profesional bilingüe",
            "Alojamiento en campamentos de lujo y hotel 5 estrellas",
            "Todas las comidas gourmet durante el recorrido",
            "Boletos de tren y entrada a Machu Picchu"
          ],
          notIncluded: [
            "Vuelos internacionales",
            "Seguro de viaje",
            "Propinas para el personal"
          ]
        },
        images: [
          { alt: "Sendero del Camino Inca", src: "inca-trail-path.jpg", width: 1200 },
          { alt: "Vista de Machu Picchu desde la Puerta del Sol", src: "machu-picchu-sungate.jpg", width: 1200 }
        ]
      },
      {
        id: 4,
        title: "Qelqanqa Inca Trail de Lujo",
        subtitle: "Un sendero inexplorado con lujo y comodidad",
        days: 4,
        nights: 3,
        price: 1700,
        mapUrl: [
          { name: "Cusco", lat: -13.532, lng: -71.967, day: 1 },
          { name: "Rosaspata", lat: -13.450, lng: -72.100, day: 1 },
          { name: "Cochayoq", lat: -13.430, lng: -72.150, day: 1 },
          { name: "Quelqanqa", lat: -13.400, lng: -72.180, day: 2 },
          { name: "Aguas Calientes", lat: -13.158, lng: -72.525, day: 3 },
          { name: "Machu Picchu", lat: -13.1631, lng: -72.5450, day: 4 }
        ],
        description: {
          highlights: [
            "Explora senderos poco transitados con paisajes impresionantes",
            "Interacción con comunidades locales y visitas a escuelas rurales",
            "Lujo y confort en campamentos exclusivos con servicio premium"
          ],
          text: "Descubre el lado menos explorado del Valle Sagrado en una caminata de lujo hacia Machu Picchu, combinando aventura, historia y exclusividad.",
          itinerary: [
            { dayTitle: "Día 1", daySubtitle: "Cusco – Rosaspata – Cochayoq", dayDescription: "Caminata entre paisajes andinos con vistas espectaculares y almuerzo gourmet." },
            { dayTitle: "Día 2", daySubtitle: "Cochayoq – Paso de Terihuayjasa – Quelqanqa", dayDescription: "Ascenso desafiante con ofrenda a la Pachamama y llegada a un exclusivo campamento." },
            { dayTitle: "Día 3", daySubtitle: "Quelqanqa – Aguas Calientes", dayDescription: "Visita a una comunidad local, traslado en tren y alojamiento en un hotel de lujo." },
            { dayTitle: "Día 4", daySubtitle: "Aguas Calientes – Machu Picchu – Cusco", dayDescription: "Tour guiado por la ciudadela de Machu Picchu y regreso en tren a Cusco." }
          ]
        },
        sampleJourney: [
          {
            dayTitle: "Día 1",
            daySubtitle: "Cusco – Rosaspata – Cochayoq",
            dayDescription: "Salida de Cusco con paradas en miradores panorámicos. Caminata entre valles andinos con vistas espectaculares y almuerzo gourmet en Machuwasi. Llegada al campamento de lujo en Cochayoq, con masajes relajantes y cena exclusiva.",
            accommodations: [{ stars: 5, title: "Campamento de Lujo Cochayoq", image: "luxury-camp-cochayoq.jpg", location: "Cochayoq, Perú" }]
          },
          {
            dayTitle: "Día 2",
            daySubtitle: "Cochayoq – Paso de Terihuayjasa – Quelqanqa",
            dayDescription: "Ascenso hasta el Paso de Terihuayjasa, con vistas panorámicas y ceremonia andina en honor a la Pachamama. Descenso hacia la Laguna Blanca y llegada al campamento de lujo en Quelqanqa, con ducha caliente y cena gourmet.",
            accommodations: [{ stars: 5, title: "Campamento de Lujo Quelqanqa", image: "luxury-camp-quelqanqa.jpg", location: "Quelqanqa, Perú" }]
          },
          {
            dayTitle: "Día 3",
            daySubtitle: "Quelqanqa – Aguas Calientes",
            dayDescription: "Visita a la escuela de Quelqanqa para interactuar con niños locales. Traslado a la estación de tren y almuerzo con vista al Nevado Verónica. Viaje en tren Vistadome hasta Aguas Calientes y cena en un hotel de lujo.",
            accommodations: [{ stars: 5, title: "Hotel de Lujo Aguas Calientes", image: "luxury-hotel-aguas-calientes.jpg", location: "Aguas Calientes, Perú" }]
          },
          {
            dayTitle: "Día 4",
            daySubtitle: "Aguas Calientes – Machu Picchu – Cusco",
            dayDescription: "Tour guiado exclusivo por Machu Picchu con explicaciones detalladas sobre la historia y arquitectura inca. Tiempo libre para explorar el sitio antes del almuerzo y regreso en tren a Cusco.",
            accommodations: []
          }
        ],
        customOptions: {
          description: "Personaliza tu experiencia con estas opciones adicionales.",
          packages: [
            { title: "Ascenso a Huayna Picchu", image: "huayna-picchu-hike.jpg" },
            { title: "Visita al Museo de Machu Picchu", image: "machu-picchu-museum.jpg" }
          ]
        },
        pricing: {
          title: "Incluido y No Incluido",
          included: [
            "Guía profesional bilingüe",
            "Alojamiento en campamentos de lujo y hotel 5 estrellas",
            "Todas las comidas gourmet durante el recorrido",
            "Boletos de tren y entrada a Machu Picchu"
          ],
          notIncluded: [
            "Vuelos internacionales",
            "Seguro de viaje",
            "Propinas para el personal"
          ]
        },
        images: [
          { alt: "Paisaje andino en el Qelqanqa Trail", src: "qelqanqa-landscape.jpg", width: 1200 },
          { alt: "Vista panorámica de Machu Picchu", src: "machu-picchu-view.jpg", width: 1200 }
        ]
      },
      {
        id: 5,
        title: "Choquequirao de Lujo",
        subtitle: "Una travesía épica a la ciudadela inca escondida",
        days: 5,
        nights: 4,
        price: 2000,
        mapUrl: [
          { name: "Cusco", lat: -13.532, lng: -71.967, day: 1 },
          { name: "Saywite", lat: -13.500, lng: -72.200, day: 1 },
          { name: "Chiquiska", lat: -13.450, lng: -72.250, day: 1 },
          { name: "Choquequirao", lat: -13.400, lng: -72.300, day: 2 },
          { name: "Pacchayoc", lat: -13.380, lng: -72.320, day: 3 },
          { name: "Capuliyoc", lat: -13.350, lng: -72.350, day: 5 }
        ],
        description: {
          highlights: [
            "Explora la impresionante ciudadela de Choquequirao",
            "Alojamiento en campamentos de lujo con servicio premium",
            "Senderos espectaculares con vistas panorámicas del Cañón del Apurímac"
          ],
          text: "Vive una experiencia única recorriendo el sendero hacia Choquequirao con todas las comodidades de un viaje de lujo. Descubre la grandeza de este sitio inca rodeado de montañas y valles profundos.",
          itinerary: [
            { dayTitle: "Día 1", daySubtitle: "Cusco – Saywite – Chiquiska", dayDescription: "Inicio de la caminata con vistas al Cañón del Apurímac y descenso hacia el campamento en Chiquiska." },
            { dayTitle: "Día 2", daySubtitle: "Chiquiska – Campamento de Choquequirao", dayDescription: "Ascenso hasta Marampata con vistas espectaculares y llegada al campamento de lujo en Choquequirao." },
            { dayTitle: "Día 3", daySubtitle: "Campamento Choquequirao – Choquequirao – Pacchayoc", dayDescription: "Día completo explorando Choquequirao y visita a las impresionantes terrazas de Pacchayoc." },
            { dayTitle: "Día 4", daySubtitle: "Campamento Choquequirao – Marampata – Chiquiska", dayDescription: "Descenso hacia Santa Rosa y regreso al campamento de lujo en Chiquiska." },
            { dayTitle: "Día 5", daySubtitle: "Chiquiska – Capuliyoc – Cusco", dayDescription: "Ascenso final hacia Capuliyoc y traslado privado de regreso a Cusco." }
          ]
        },
        sampleJourney: [
          {
            dayTitle: "Día 1",
            daySubtitle: "Cusco – Saywite – Chiquiska",
            dayDescription: "Salida en transporte privado con paradas en Curahuasi y Saywite. Almuerzo gourmet en Capuliyoc antes de iniciar el descenso hacia Chiquiska. Llegada al campamento de lujo con masajes relajantes y cena gourmet.",
            accommodations: [{ stars: 5, title: "Campamento de Lujo Chiquiska", image: "luxury-camp-chiquiska.jpg", location: "Chiquiska, Perú" }]
          },
          {
            dayTitle: "Día 2",
            daySubtitle: "Chiquiska – Campamento de Choquequirao",
            dayDescription: "Descenso hasta el río Apurímac y ascenso desafiante hacia Marampata. Almuerzo con vistas panorámicas antes de continuar hacia el campamento de Choquequirao. Sesión de yoga al atardecer y cena gourmet.",
            accommodations: [{ stars: 5, title: "Campamento de Lujo Choquequirao", image: "luxury-camp-choquequirao.jpg", location: "Choquequirao, Perú" }]
          },
          {
            dayTitle: "Día 3",
            daySubtitle: "Campamento Choquequirao – Choquequirao – Pacchayoc",
            dayDescription: "Exploración guiada por la ciudadela de Choquequirao, descubriendo sus terrazas, templos y sectores ceremoniales. Visita a las ruinas de Pacchayoc antes de regresar al campamento para una cena especial bajo las estrellas.",
            accommodations: [{ stars: 5, title: "Campamento de Lujo Choquequirao", image: "luxury-camp-choquequirao.jpg", location: "Choquequirao, Perú" }]
          },
          {
            dayTitle: "Día 4",
            daySubtitle: "Campamento Choquequirao – Marampata – Chiquiska",
            dayDescription: "Descenso gradual con vistas espectaculares del Cañón del Apurímac. Almuerzo en Santa Rosa y llegada al campamento de lujo en Chiquiska con masajes relajantes y cena gourmet.",
            accommodations: [{ stars: 5, title: "Campamento de Lujo Chiquiska", image: "luxury-camp-chiquiska.jpg", location: "Chiquiska, Perú" }]
          },
          {
            dayTitle: "Día 5",
            daySubtitle: "Chiquiska – Capuliyoc – Cusco",
            dayDescription: "Ascenso final hasta Capuliyoc con vistas panorámicas de las montañas. Almuerzo de despedida y traslado privado de regreso a Cusco.",
            accommodations: []
          }
        ],
        customOptions: {
          description: "Personaliza tu experiencia con estas opciones adicionales.",
          packages: [
            { title: "Ascenso al mirador de Choquequirao", image: "choquequirao-viewpoint.jpg" },
            { title: "Trekking nocturno con observación de estrellas", image: "night-trek-choquequirao.jpg" }
          ]
        },
        pricing: {
          title: "Incluido y No Incluido",
          included: [
            "Guía profesional bilingüe",
            "Alojamiento en campamentos de lujo",
            "Todas las comidas gourmet durante el recorrido",
            "Transporte privado de ida y vuelta a Cusco"
          ],
          notIncluded: [
            "Vuelos internacionales",
            "Seguro de viaje",
            "Propinas para el personal"
          ]
        },
        images: [
          { alt: "Vista panorámica de Choquequirao", src: "choquequirao-landscape.jpg", width: 1200 },
          { alt: "Sendero hacia Choquequirao", src: "choquequirao-trail.jpg", width: 1200 }
        ]
      },
      {
        id: 6,
        title: "Lares Trail de Lujo",
        subtitle: "Explora los Andes con comodidad y exclusividad",
        days: 4,
        nights: 3,
        price: 1800,
        mapUrl: [
          { name: "Cusco", lat: -13.532, lng: -71.967, day: 1 },
          { name: "Calca", lat: -13.300, lng: -71.950, day: 1 },
          { name: "Cancha Cancha", lat: -13.200, lng: -71.900, day: 1 },
          { name: "Quiswarani", lat: -13.150, lng: -71.850, day: 2 },
          { name: "Aguas Calientes", lat: -13.150, lng: -72.525, day: 3 },
          { name: "Machu Picchu", lat: -13.1631, lng: -72.5450, day: 4 }
        ],
        description: {
          highlights: [
            "Caminata a través de los impresionantes paisajes de Lares",
            "Encuentro con comunidades locales y su cultura",
            "Baño termal relajante en Lares antes de tomar el tren a Machu Picchu"
          ],
          text: "Disfruta de un trekking único a través del valle de Lares, combinando aventura, cultura y lujo. Descubre impresionantes montañas, lagunas y la calidez de las comunidades andinas.",
          itinerary: [
            { dayTitle: "Día 1", daySubtitle: "Cusco - Calca - Cancha Cancha", dayDescription: "Inicio de la caminata desde Huaran, atravesando valles y ríos hasta el campamento en Cancha Cancha." },
            { dayTitle: "Día 2", daySubtitle: "Cancha Cancha – Paso de Pachacutec - Quiswarani", dayDescription: "Ascenso hasta el Paso de Pachacutec con vistas espectaculares y descenso hacia Quiswarani." },
            { dayTitle: "Día 3", daySubtitle: "Quiswarani – Aguas Termales de Lares - Aguas Calientes", dayDescription: "Baño termal en Lares y traslado en tren a Aguas Calientes." },
            { dayTitle: "Día 4", daySubtitle: "Aguas Calientes - Machu Picchu - Cusco", dayDescription: "Visita guiada a Machu Picchu y regreso a Cusco en tren de lujo." }
          ]
        },
        sampleJourney: [
          {
            dayTitle: "Día 1",
            daySubtitle: "Cusco - Calca - Cancha Cancha",
            dayDescription: "Salida en transporte privado con paradas en el Valle Sagrado. Caminata de ascenso por valles y bosques hasta el campamento de lujo en Cancha Cancha. Alojamiento en tiendas premium con calefacción. Ducha caliente y masajes relajantes antes de una cena gourmet bajo las estrellas.",
            accommodations: [{ stars: 5, title: "Campamento de Lujo Cancha Cancha", image: "luxury-camp-cancha-cancha.jpg", location: "Cancha Cancha, Perú" }]
          },
          {
            dayTitle: "Día 2",
            daySubtitle: "Cancha Cancha – Paso de Pachacutec - Quiswarani",
            dayDescription: "Ascenso desafiante hasta el Paso de Pachacutec con vistas panorámicas de glaciares y lagunas. Descenso a Quiswarani con un almuerzo gourmet al aire libre. Visita a la comunidad local para conocer sus costumbres y tiempo libre para explorar las cascadas cercanas antes de la cena.",
            accommodations: [{ stars: 5, title: "Campamento de Lujo Quiswarani", image: "luxury-camp-quiswarani.jpg", location: "Quiswarani, Perú" }]
          },
          {
            dayTitle: "Día 3",
            daySubtitle: "Quiswarani – Aguas Termales de Lares - Aguas Calientes",
            dayDescription: "Descenso a Cuncani observando flora y fauna local. Relajante baño en las aguas termales de Lares seguido de un almuerzo gourmet. Viaje en transporte privado a la estación de tren en Ollantaytambo y traslado panorámico en tren de lujo a Aguas Calientes. Cena y noche en un hotel de lujo.",
            accommodations: [{ stars: 5, title: "Hotel de Lujo Aguas Calientes", image: "luxury-hotel-aguas-calientes.jpg", location: "Aguas Calientes, Perú" }]
          },
          {
            dayTitle: "Día 4",
            daySubtitle: "Aguas Calientes - Machu Picchu - Cusco",
            dayDescription: "Salida temprano en bus a Machu Picchu para una visita guiada exclusiva con tiempo libre para exploración personal. Posibilidad de escalar Huayna Picchu o la Montaña Machu Picchu. Almuerzo en un restaurante gourmet antes de tomar el tren de regreso a Cusco con entretenimiento a bordo.",
            accommodations: []
          }
        ],
        customOptions: {
          description: "Opciones adicionales y personalización de paquetes.",
          packages: [
            { title: "Ascenso a la montaña Huayna Picchu", image: "huayna-picchu.jpg" },
            { title: "Noche adicional en Aguas Calientes", image: "luxury-hotel-aguas-calientes.jpg" },
            { title: "Cena gourmet en Belmond Sanctuary Lodge", image: "belmond-sanctuary-lodge.jpg" }
          ]
        },
        pricing: {
          title: "Incluye y No Incluye",
          included: [
            "Guías profesionales de habla inglesa",
            "02 noches de campamento de lujo",
            "01 sesión de yoga el segundo día",
            "Todas las comidas preparadas por chef profesional",
            "Transporte terrestre privado",
            "Tren de lujo de Ollantaytambo a Aguas Calientes",
            "Entradas y permisos necesarios",
            "Kit de primeros auxilios y balón de oxígeno"
          ],
          notIncluded: [
            "Noche de hotel en Aguas Calientes",
            "Bastones de trekking",
            "Seguro de viaje (recomendado)",
            "Propinas y gastos personales"
          ]
        },
        images: [
          { alt: "Paisaje del Valle de Lares", src: "lares-valley.jpg", width: 800 },
          { alt: "Campamento de lujo en Cancha Cancha", src: "luxury-camp-cancha-cancha.jpg", width: 800 },
          { alt: "Baños termales de Lares", src: "lares-hot-springs.jpg", width: 800 },
          { alt: "Vista de Machu Picchu", src: "machu-picchu.jpg", width: 800 }
        ]
      },
      {
        id: 7,
        title: "Camino Inca de Lujo",
        subtitle: "Descubre Machu Picchu a través del legendario Camino Inca con lujo y comodidad",
        days: 2,
        nights: 1,
        price: 1200,
        mapUrl: [
          { name: "Cusco", lat: -13.532, lng: -71.967, day: 1 },
          { name: "Ollantaytambo", lat: -13.258, lng: -72.265, day: 1 },
          { name: "Wiñaywayna", lat: -13.190, lng: -72.540, day: 1 },
          { name: "Intipunku", lat: -13.166, lng: -72.544, day: 1 },
          { name: "Machu Picchu", lat: -13.1631, lng: -72.5450, day: 1 },
          { name: "Aguas Calientes", lat: -13.150, lng: -72.525, day: 1 }
        ],
        description: {
          highlights: [
            "Caminata exclusiva por el Camino Inca con vistas espectaculares",
            "Exploración de Wiñaywayna y la Puerta del Sol antes de llegar a Machu Picchu",
            "Visita guiada premium a Machu Picchu con servicio de lujo"
          ],
          text: "Vive una experiencia inolvidable recorriendo el legendario Camino Inca, disfrutando de un servicio exclusivo con guías expertos, comidas gourmet y vistas impresionantes.",
          itinerary: [
            { dayTitle: "Día 1", daySubtitle: "Cusco - Wiñaywayna - Intipunku - Machu Picchu", dayDescription: "Travesía por el Camino Inca desde el km 104 con paradas en Chachabamba y Wiñaywayna antes de llegar a Machu Picchu." },
            { dayTitle: "Día 2", daySubtitle: "Aguas Calientes - Machu Picchu - Cusco", dayDescription: "Exploración guiada de Machu Picchu y retorno en tren de lujo a Cusco." }
          ]
        },
        sampleJourney: [
          {
            dayTitle: "Día 1",
            daySubtitle: "Cusco - Wiñaywayna - Intipunku - Machu Picchu",
            dayDescription: "Salida en tren Vistadome hasta el km 104. Caminata guiada por Chachabamba y Wiñaywayna con un lujoso almuerzo en el camino. Llegada a Intipunku con vistas impresionantes de Machu Picchu antes de descender a la ciudadela. Traslado a un hotel de lujo en Aguas Calientes y cena gourmet.",
            accommodations: [{ stars: 5, title: "Hotel de Lujo Aguas Calientes", image: "luxury-hotel-aguas-calientes.jpg", location: "Aguas Calientes, Perú" }]
          },
          {
            dayTitle: "Día 2",
            daySubtitle: "Aguas Calientes - Machu Picchu - Cusco",
            dayDescription: "Salida temprano para la visita guiada a Machu Picchu. Tiempo libre para exploración personal y posibilidad de ascenso a Huayna Picchu. Almuerzo en un restaurante gourmet y retorno en tren de lujo Hiram Bingham a Cusco con traslado privado al hotel.",
            accommodations: []
          }
        ],
        customOptions: {
          description: "Opciones adicionales para mejorar tu experiencia",
          packages: [
            { title: "Ascenso a Huayna Picchu", image: "huayna-picchu.jpg" },
            { title: "Noche adicional en hotel de lujo", image: "luxury-hotel-night.jpg" }
          ]
        },
        pricing: {
          title: "Incluye y No Incluye",
          included: [
            "Guía profesional de habla inglesa",
            "Tickets de tren: Vistadome (ida) y Hiram Bingham (retorno)",
            "Todas las comidas preparadas en el lugar por chef privado",
            "Transporte terrestre privado",
            "Entradas y permisos para Machu Picchu",
            "Kit de primeros auxilios y balón de oxígeno"
          ],
          notIncluded: [
            "Bastones de trekking",
            "Alojamiento adicional en Cusco",
            "Seguro de viaje (recomendado)",
            "Propinas y gastos personales"
          ]
        },
        images: [
          { alt: "Vista de Wiñaywayna", src: "winaywayna.jpg", width: 800 },
          { alt: "Puerta del Sol - Intipunku", src: "intipunku.jpg", width: 800 },
          { alt: "Machu Picchu al atardecer", src: "machu-picchu-sunset.jpg", width: 800 },
          { alt: "Hotel de lujo en Aguas Calientes", src: "luxury-hotel-aguas-calientes.jpg", width: 800 }
        ]
      },
      {
        id: 8,
    title: "Quarry Trail de Lujo",
    subtitle: "Una ruta alternativa y exclusiva hacia Machu Picchu con paisajes impresionantes y confort total",
    days: 4,
    nights: 3,
    price: 1800,
    mapUrl: [
      { name: "Cusco", lat: -13.532, lng: -71.967, day: 1 },
      { name: "Socma", lat: -13.294, lng: -72.187, day: 1 },
      { name: "Perolniyoc", lat: -13.288, lng: -72.181, day: 1 },
      { name: "Rayanniyoc", lat: -13.280, lng: -72.175, day: 1 },
      { name: "Inti Punku", lat: -13.253, lng: -72.159, day: 2 },
      { name: "Ollantaytambo", lat: -13.258, lng: -72.265, day: 3 },
      { name: "Aguas Calientes", lat: -13.150, lng: -72.525, day: 3 },
      { name: "Machu Picchu", lat: -13.1631, lng: -72.5450, day: 4 }
    ],
    description: {
      highlights: [
        "Exploración de la impresionante Cascada de Perolniyoc",
        "Vistas panorámicas desde Inti Punku, la Puerta del Sol",
        "Caminata por la cantera de Cachicata y llegada a Machu Picchu"
      ],
      text: "Vive una experiencia única en el Quarry Trail, un camino alternativo con paisajes impresionantes, sitios arqueológicos y un servicio exclusivo de lujo.",
      itinerary: [
        { dayTitle: "Día 1", daySubtitle: "Cusco - Cataratas de Perolniyoc - Rayanniyoc", dayDescription: "Inicio de la caminata desde Socma, pasando por la Cascada de Perolniyoc y el sitio arqueológico de Raqaypata. Campamento de lujo en Rayanniyoc." },
        { dayTitle: "Día 2", daySubtitle: "Rayanniyoc - Inti Punku - Choquetacarpo", dayDescription: "Ascenso a los pasos de Puccaqasa y Buena Negra con vistas espectaculares. Llegada a Inti Punku y campamento en Choquetacarpo." },
        { dayTitle: "Día 3", daySubtitle: "Choquetacarpo - Cachicata - Ollantaytambo - Aguas Calientes", dayDescription: "Exploración de la cantera de Cachicata y descenso a Ollantaytambo. Tren de lujo a Aguas Calientes y noche en hotel premium." },
        { dayTitle: "Día 4", daySubtitle: "Aguas Calientes - Machu Picchu - Cusco", dayDescription: "Tour guiado en Machu Picchu con opción de escalar Huayna Picchu. Retorno en tren de lujo a Cusco." }
      ]
    },
    sampleJourney: [
      {
        dayTitle: "Día 1",
        daySubtitle: "Cusco - Cataratas de Perolniyoc - Rayanniyoc",
        dayDescription: "Traslado privado a Socma. Caminata a la Cascada de Perolniyoc y Raqaypata. Almuerzo gourmet y campamento de lujo en Rayanniyoc con ducha caliente y masajes relajantes.",
        accommodations: []
      },
      {
        dayTitle: "Día 2",
        daySubtitle: "Rayanniyoc - Inti Punku - Choquetacarpo",
        dayDescription: "Ascenso a los pasos de Puccaqasa y Buena Negra con vistas espectaculares. Brindis en la cima y llegada a Inti Punku. Campamento de lujo en Choquetacarpo con cena gourmet.",
        accommodations: []
      },
      {
        dayTitle: "Día 3",
        daySubtitle: "Choquetacarpo - Cachicata - Ollantaytambo - Aguas Calientes",
        dayDescription: "Visita a la cantera de Cachicata. Descenso a Ollantaytambo y almuerzo gourmet. Viaje en tren de lujo a Aguas Calientes y noche en hotel premium.",
        accommodations: [{ stars: 5, title: "Hotel de Lujo en Aguas Calientes", image: "luxury-hotel-aguas-calientes.jpg", location: "Aguas Calientes, Perú" }]
      },
      {
        dayTitle: "Día 4",
        daySubtitle: "Aguas Calientes - Machu Picchu - Cusco",
        dayDescription: "Tour guiado en Machu Picchu. Opción de escalar Huayna Picchu. Retorno en tren de lujo Hiram Bingham a Cusco con traslado privado al hotel.",
        accommodations: []
      }
    ],
    customOptions: {
      description: "Opciones adicionales para mejorar tu experiencia",
      packages: [
        { title: "Ascenso a Huayna Picchu", image: "huayna-picchu.jpg" },
        { title: "Noche adicional en hotel de lujo", image: "luxury-hotel-night.jpg" }
      ]
    },
    pricing: {
      title: "Incluye y No Incluye",
      included: [
        "Guía profesional de habla inglesa",
        "Tickets de tren: Vistadome (ida) y Hiram Bingham (retorno)",
        "Todas las comidas preparadas en el lugar por chef privado",
        "Transporte terrestre privado",
        "Entradas y permisos para Machu Picchu",
        "Kit de primeros auxilios y balón de oxígeno"
      ],
      notIncluded: [
        "Bastones de trekking",
        "Alojamiento adicional en Cusco",
        "Seguro de viaje (recomendado)",
        "Propinas y gastos personales"
      ]
    },
    images: [
      { alt: "Cascada de Perolniyoc", src: "perolniyoc.jpg", width: 800 },
      { alt: "Vista desde Inti Punku", src: "inti-punku.jpg", width: 800 },
      { alt: "Machu Picchu desde la cima", src: "machu-picchu-top.jpg", width: 800 },
      { alt: "Hotel de lujo en Aguas Calientes", src: "luxury-hotel-aguas-calientes.jpg", width: 800 }
    ]
    },
      {
        id: 9,
        title: "Choquequirao de Lujo",
        subtitle: "Una travesía épica a la última ciudad inca escondida, combinando aventura y confort",
        days: 9,
        nights: 8,
        price: 3200,
        mapUrl: [
          { name: "Cusco", lat: -13.532, lng: -71.967, day: 1 },
          { name: "Capuliyoc", lat: -13.308, lng: -72.876, day: 2 },
          { name: "Playa Rosalinas", lat: -13.315, lng: -72.872, day: 3 },
          { name: "Choquequirao", lat: -13.396, lng: -72.874, day: 4 },
          { name: "Maizal", lat: -13.370, lng: -72.879, day: 5 },
          { name: "Yanama", lat: -13.388, lng: -72.921, day: 6 },
          { name: "Totora", lat: -13.400, lng: -72.950, day: 7 },
          { name: "Lucmabamba", lat: -13.413, lng: -72.978, day: 8 },
          { name: "Machu Picchu", lat: -13.1631, lng: -72.5450, day: 9 }
        ],
        description: {
          highlights: [
            "Exploración profunda de Choquequirao, la hermana sagrada de Machu Picchu",
            "Caminata a través de paisajes andinos, valles profundos y nevados impresionantes",
            "Experiencia de lujo con campamentos exclusivos y gastronomía gourmet"
          ],
          text: "Descubre Choquequirao en una expedición de lujo, cruzando impresionantes paisajes andinos y llegando a la enigmática ciudadela inca antes de finalizar en Machu Picchu.",
          itinerary: [
            { dayTitle: "Día 1", daySubtitle: "Cusco - Capuliyoc", dayDescription: "Salida de Cusco hacia Capuliyoc, donde inicia la caminata con vistas espectaculares del cañón del Apurímac." },
            { dayTitle: "Día 2", daySubtitle: "Capuliyoc - Playa Rosalinas", dayDescription: "Descenso al río Apurímac y ascenso hacia Playa Rosalinas, donde el campamento de lujo espera." },
            { dayTitle: "Día 3", daySubtitle: "Playa Rosalinas - Choquequirao", dayDescription: "Ascenso a Choquequirao, exploración privada del sitio arqueológico y campamento de lujo." },
            { dayTitle: "Día 4", daySubtitle: "Choquequirao - Maizal", dayDescription: "Caminata desafiante hacia Maizal con vistas impresionantes de los Andes." },
            { dayTitle: "Día 5", daySubtitle: "Maizal - Yanama", dayDescription: "Paso por antiguos caminos incas y campamento en Yanama." },
            { dayTitle: "Día 6", daySubtitle: "Yanama - Totora", dayDescription: "Atravesando el paso más alto de la caminata con vistas a los nevados de Salkantay." },
            { dayTitle: "Día 7", daySubtitle: "Totora - Lucmabamba", dayDescription: "Descenso a climas tropicales con plantaciones de café y frutas." },
            { dayTitle: "Día 8", daySubtitle: "Lucmabamba - Aguas Calientes", dayDescription: "Última caminata hacia Aguas Calientes con tiempo libre para explorar." },
            { dayTitle: "Día 9", daySubtitle: "Machu Picchu - Cusco", dayDescription: "Exploración guiada de Machu Picchu antes de regresar a Cusco en tren de lujo." }
          ]
        },
        sampleJourney: [
          {
            dayTitle: "Día 1",
            daySubtitle: "Cusco - Capuliyoc",
            dayDescription: "Salida en transporte privado a Capuliyoc, donde inicia la caminata con almuerzo gourmet y vistas panorámicas.",
            accommodations: []
          },
          {
            dayTitle: "Día 8",
            daySubtitle: "Lucmabamba - Aguas Calientes",
            dayDescription: "Última caminata hacia Aguas Calientes con cena en restaurante exclusivo y hotel de lujo.",
            accommodations: [{ stars: 5, title: "Hotel de Lujo en Aguas Calientes", image: "luxury-hotel-aguas-calientes.jpg", location: "Aguas Calientes, Perú" }]
          }
        ],
        customOptions: {
          description: "Opciones adicionales para mejorar tu experiencia",
          packages: [
            { title: "Ascenso a Huayna Picchu", image: "huayna-picchu.jpg" },
            { title: "Noche adicional en hotel de lujo", image: "luxury-hotel-night.jpg" }
          ]
        },
        pricing: {
          title: "Incluye y No Incluye",
          included: [
            "Guía profesional de habla inglesa",
            "Tickets de tren: Vistadome (ida) y Hiram Bingham (retorno)",
            "Todas las comidas preparadas en el lugar por chef privado",
            "Transporte terrestre privado",
            "Entradas y permisos para Machu Picchu y Choquequirao",
            "Kit de primeros auxilios y balón de oxígeno"
          ],
          notIncluded: [
            "Bastones de trekking",
            "Alojamiento adicional en Cusco",
            "Seguro de viaje (recomendado)",
            "Propinas y gastos personales"
          ]
        },
        images: [
          { alt: "Vista de Choquequirao", src: "choquequirao.jpg", width: 800 },
          { alt: "Paisaje del Cañón del Apurímac", src: "apurimac-canyon.jpg", width: 800 },
          { alt: "Machu Picchu al amanecer", src: "machu-picchu-sunrise.jpg", width: 800 },
          { alt: "Hotel de lujo en Aguas Calientes", src: "luxury-hotel-aguas-calientes.jpg", width: 800 }
        ]
      },
      {
        id: 10,
        title: "Camino Inca de Lujo",
        subtitle: "Una experiencia inolvidable recorriendo el legendario Camino Inca con servicios de lujo",
        days: 4,
        nights: 3,
        price: 2500,
        mapUrl: [
          { name: "Cusco", lat: -13.532, lng: -71.967, day: 1 },
          { name: "Km 82", lat: -13.299, lng: -72.183, day: 1 },
          { name: "Wayllabamba", lat: -13.274, lng: -72.166, day: 1 },
          { name: "Pacaymayo", lat: -13.271, lng: -72.127, day: 2 },
          { name: "Phuyupatamarca", lat: -13.236, lng: -72.114, day: 3 },
          { name: "Machu Picchu", lat: -13.1631, lng: -72.5450, day: 4 }
        ],
        description: {
          highlights: [
            "Caminata por el legendario Camino Inca",
            "Exploración de sitios arqueológicos impresionantes",
            "Servicio de campamento de lujo con duchas calientes y masajes",
            "Visita guiada exclusiva a Machu Picchu"
          ],
          text: "Descubre la magia del Camino Inca con una experiencia de lujo. Disfruta de una caminata desafiante con el máximo confort, mientras recorres paisajes impresionantes y llegas a la Ciudad Perdida de los Incas.",
          itinerary: [
            { dayTitle: "Día 1", daySubtitle: "Cusco - Wayllabamba", dayDescription: "Inicio de la caminata en el Km 82. Almuerzo en Tarayoc y campamento de lujo en Wayllabamba con duchas calientes y masajes." },
            { dayTitle: "Día 2", daySubtitle: "Wayllabamba - Pacaymayo", dayDescription: "Ascenso al Paso Warmiwañusca. Campamento en Pacaymayo con cena gourmet y descanso en tiendas climatizadas." },
            { dayTitle: "Día 3", daySubtitle: "Pacaymayo - Phuyupatamarca", dayDescription: "Exploración de los sitios arqueológicos de Runkurakay, Sayacmarca y Chaquicocha. Campamento en Phuyupatamarca." },
            { dayTitle: "Día 4", daySubtitle: "Phuyupatamarca - Machu Picchu - Cusco", dayDescription: "Descenso a Wiñaywayna y llegada a la Puerta del Sol. Visita guiada en Machu Picchu y retorno a Cusco." }
          ]
        },
        sampleJourney: [
          {
            dayTitle: "Día 1",
            daySubtitle: "Cusco - Wayllabamba",
            dayDescription: "Traslado al Km 82 y caminata hacia Wayllabamba con almuerzo gourmet. Campamento con duchas calientes y masajes relajantes.",
            accommodations: []
          },
          {
            dayTitle: "Día 2",
            daySubtitle: "Wayllabamba - Pacaymayo",
            dayDescription: "Ascenso al Paso Warmiwañusca con vistas impresionantes. Descenso a Pacaymayo y campamento de lujo.",
            accommodations: []
          },
          {
            dayTitle: "Día 3",
            daySubtitle: "Pacaymayo - Phuyupatamarca",
            dayDescription: "Visita a Runkurakay y Sayacmarca. Caminata a Phuyupatamarca con campamento de lujo y cena gourmet.",
            accommodations: []
          },
          {
            dayTitle: "Día 4",
            daySubtitle: "Phuyupatamarca - Machu Picchu - Cusco",
            dayDescription: "Visita guiada en Machu Picchu. Tren de retorno y traslado privado a Cusco.",
            accommodations: []
          }
        ],
        customOptions: {
          description: "Opciones adicionales para mejorar tu experiencia",
          packages: [
            { title: "Ascenso a Huayna Picchu", image: "huayna-picchu.jpg" },
            { title: "Noche adicional en hotel de lujo", image: "luxury-hotel-night.jpg" }
          ]
        },
        pricing: {
          title: "Incluye y No Incluye",
          included: [
            "Guía profesional de habla inglesa",
            "03 noches de campamento de lujo",
            "Entradas y permisos para el Camino Inca y Machu Picchu",
            "Tickets de tren y transporte privado",
            "Duchas calientes y sesiones de masajes",
            "Todas las comidas gourmet preparadas por chef privado",
            "Kit de primeros auxilios y balón de oxígeno"
          ],
          notIncluded: [
            "Entrada a Huayna Picchu (opcional)",
            "Bastones de trekking",
            "Seguro de viaje (recomendado)",
            "Propinas y gastos personales"
          ]
        },
        images: [
          { alt: "Camino Inca", src: "camino-inca.jpg", width: 800 },
          { alt: "Vista de Machu Picchu", src: "machu-picchu.jpg", width: 800 },
          { alt: "Campamento de lujo", src: "luxury-camp.jpg", width: 800 }
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
