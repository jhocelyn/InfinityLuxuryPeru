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
        mapUrl:
          [
            {name:'Machu Picchu',lat:-13.1631,lng:-72.5450,day:1},
            {name:'Arequipa',lat:-16.4090,lng:-71.5375,day:1},
        ],
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
        },
        images: [
          { src: 'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp', alt: 'Vista de Punta Cana con playa y mar', width: 800 },
          { src: 'assets/img/panoramic-view-of-machu-picchu-lost-city-at-archae-2024-07-03-02-44-10-utc_11zon.webp', alt: 'Playa paradisíaca en Cancún', width: 400 },
          { src: 'assets/img/peruvian-women-with-little-alpaca-lamb-2023-11-27-05-13-54-utc_11zon.webp', alt: 'Atardecer en Bali con templos', width: 600 },
          { src: 'assets/img/traveling-in-peru-2024-09-21-23-33-22-utc_11zon.webp', alt: 'Vista de Punta Cana con playa y mar', width: 200 },
          { src: 'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp', alt: 'Vista de Punta Cana con playa y mar', width: 800 }
        ]
      },
      {
        id: 2,
        title: "CAMINO INCA DE LUJO 4 DÍAS / 3 NOCHES",
        subtitle: "Una experiencia única de lujo en el Camino Inca",
        days: 4,
        nights: 3,
        price: 0, // Definir precio
        mapUrl: [
          { name: "Wayllabamba", lat: -13.1963, lng: -72.5125, day: 1 },
          { name: "Pacaymayo", lat: -13.1979, lng: -72.4916, day: 2 },
          { name: "Phuyupatamarca", lat: -13.2008, lng: -72.4779, day: 3 },
          { name: "Machu Picchu", lat: -13.1631, lng: -72.5450, day: 4 }
        ],
        description: {
          highlights: [
            "Caminata guiada de lujo por el Camino Inca",
            "Masajes y duchas calientes en los campamentos",
            "Gastronomía gourmet preparada por chefs especializados",
            "Exploración de sitios arqueológicos impresionantes",
            "Visita a Machu Picchu con guía experto"
          ],
          text: "Disfruta de una experiencia inigualable en el Camino Inca con servicios de lujo, confort y atención personalizada durante toda la travesía.",
          itinerary: [
            {
              dayTitle: "DÍA 1",
              daySubtitle: "CUSCO – WAYLLABAMBA (A, C)",
              dayDescription: "Le damos la bienvenida en nuestro emocionante tour de 4 días, con una salida temprana de su hotel en Cusco. Una vez que haya tomado un desayuno (o tal vez solicitar al hotel, un desayuno para llevar y disfrutar en el camino), nuestro guía experto le dará la bienvenida y lo abordará en su transporte privado en dirección al Km 82, donde se encuentra el comienzo de nuestra caminata. En la ruta, tomaremos un breve descanso en el pintoresco pueblo de Ollantaytambo (2792 metros / 9160.1 pies). Aquí tendremos tiempo para explorar y hacer compras de última hora y también aprovecharemos la oportunidad de usar los baños.\n" +
                "Continuamos nuestro viaje por 40 minutos hasta llegar al Km 82, también conocido como Piscacucho (2675 metros / 8776.3 pies). En esta ubicación, nuestros porteadores y personal de apoyo nos brindarán todo el equipo de campamento organizado y los últimos detalles restantes, con el fin de asegurar de que todos tengamos una experiencia memorable.\n" +
                "Seguiremos los pasos de los incas, mientras se interna en su única aventura en la vida a través de muchos sitios arqueológicos increíbles a lo largo del camino, apreciando la flora y la fauna. Después de hacer el recorrido durante 4 horas aproximadamente, su llegada será al sitio de Tarayoc (2675 metros / 8776.3 pies), donde se servirá el suculento almuerzo, con vistas al hermoso paisaje. Después de disfrutar el almuerzo, le llevará una caminata de 2 horas hacia Wayllabamba (2970 metros / 9744.1 pies), un encantador pueblo donde nuestro campamento de lujo le estará esperando. Antes de disfrutar de la cena, tendrá tiempo para tomar una ducha caliente seguido de un masaje relajante, nuestro terapeuta especializado utilizará unos aceites, esenciales orgánicos, para que usted pueda relajarse alrededor de la naturaleza. Después, visitará la tienda-comedor para disfrutar de la comida especialmente preparada por nuestro cocinero y su mozo estará allí atendiendo a sus necesidades personales. Su tienda-dormitorio estará esperando su presencia, para que pueda disfrutar de la serenidad de la naturaleza y una buena noche de descanso.\n" +
                "Hora de inicio de la caminata: 09:30 am.\n" +
                "Llegada al campamento: 16:30 pm.\n" +
                "Altitud mínima: Km 82 – 2675 msnm / 8776.3 pies.\n" +
                "Altitud máxima: Campamento Wayllabamba – 2970 msnm / 9744.1 pies.\n" +
                "Distancia recorrida: 11 kilómetros /6,8 millas (6 horas caminando aprox.)\n" +
                "Dificultad: Moderada.\n"
            },
            {
              dayTitle: "DÍA 2",
              daySubtitle: "WAYLLABAMBA – PACAYMAYO (D, A, C)",
              dayDescription: "Un desayuno nutritivo le estará esperando tan pronto se despierte, para que podamos comenzar nuestra caminata de 1,5 horas en la dirección al barranco de Ayapata (3328 metros / 10918.7 pies). Escalando sobre el barranco, nos topamos con lo que parece ser un bosque de cuento de hadas, con corrientes de agua cristalina a un lado de la carretera. Continuando con el recorrido, caminaremos otras 3 horas, con breves descansos para recuperar el aliento. Finalmente, llegaremos a Llulluchapampa (3760 metros / 12335.9 pies), donde se servirá un sabroso almuerzo. Esta parte del bosque húmedo andino, es el lugar perfecto para admirar, digerir su comida, así como sus pensamientos, mientras se echa un vistazo al paso de Warmiwañusca, también conocido como el Paso de la Mujer Muerta, debido al hecho de que parece que una mujer está acostada.\n" +
                "Una vez que haya disfrutado admirando la vista, comenzará su próxima parte de la caminata con el fin de llegar al Paso de Warmiwañusca (4215 metros / 13828.7 pies), que tomará 2.5 horas aproximadamente.\n" +
                "Tómese su tiempo con esta caminata, ya que es extenuante, pero muy digno. El ascenso al paso ha sido creado por escalones empedrados, que fueron dispuestos para que las montañas estuvieran protegidas por la erosión. Su guía estará allí para tomar fotografías de su increíble logro en el punto más alto de la caminata. \n" +
                "Comenzando nuestro descenso al barranco de Pacaymayo (3500 metros / 11482.9 pies), durante las siguientes 2 horas, llegará a su campamento. Una vez más, una ducha caliente y una tienda de masajes estarán allí para usted. Es el momento de una deliciosa cena para luego disfrutar de un sueño tranquilo y recuperar energías para el día siguiente.\n" +
                "Hora de despierto: 05:30 am.\t \n" +
                "Llegada al campamento: 17:00 pm.\n" +
                "Altitud mínima: Sitio de Ayapata – 3328 msnm / 10918.7 pies.\n" +
                "Altitud máxima: Paso Warmiwañusca – 4215 msnm / 13828.7 pies.\n" +
                "Distancia recorrida: 9 kilómetros / 5,6 millas (9 horas caminando aprox.)\n" +
                "Dificultad: Desafiante.\n" +
                "Comidas incluidas: Desayuno, snacks, almuerzo, hora del té y cena.\n"
            },
            {
              dayTitle: "DÍA 3",
              daySubtitle: "PACAYMAYO – PHUYUPATAMARCA (D, A, C)",
              dayDescription: "Al despertar tómese el tiempo para refrescarse y disfrutar de un delicioso desayuno, antes de comenzar su caminata de 1 hora a través de las ruinas de Runkurakay, una estructura inca ancestral donde su guía le dará una explicación sobre su significado. Luego, otra hora de caminata, a medida que pasamos por el Segundo Paso de Runkurakay (3955 metros / 12975.7 pies). Usted será capaz de presenciar el camino inca cuesta abajo, una hermosa vista. Después de descender durante una hora, podremos disfrutar de las vistas de un impresionante lago cubierto de largas algas de gran esplendor. Después, llegará a la impresionante ciudad inca de Sayacmarca (3585 metros / 11761.8 pies). Una vez que su guía haya explicado y respondido a sus preguntas, comenzaremos nuestro descenso durante una hora a Chaquicocha (3535 metros / 11597.8 pies), donde encontrará su almuerzo gourmet esperando su llegada.\n" +
                "Una vez que haya almorzado, caminará durante 2,5 horas, a través de un camino maravillosamente conservado, para luego llegar al paso de Phuyupatamarca (3640 metros / 11942.3 pies). A pocos metros sobre un pequeño túnel de piedra, es donde se encuentra su campamento, llamado Phuyupatamarca (3670 metros / 12040.7 pies).\n" +
                "Su llegada será recibida por los impecables servicios de nuestro personal a lo largo de su recorrido del Camino Inca. Mientras, disfrute de una ducha caliente y acompañada de un masaje relajante, es tiempo de degustar de una cena gourmet, servida en nuestra tienda-comedor. Esta será la última noche que pase con el personal de campo, por lo que le sugerimos compartir un brindis con ellos, en agradecimiento por todo el arduo trabajo y esfuerzo que nos brindaron, ya que dejaremos recuerdos nostálgicos y duraderos de esta experiencia. ¡Salud!\n" +
                "Hora de despierto: 05:00 am.\n" +
                "Llegada al campamento: 16:30 pm.\n" +
                "Altitud mínima: Sitio de Chaquicocha – 3535 msnm / 11597.8 pies.\n" +
                "Altitud máxima: Paso Runkurakay – 3955 msnm / 12975.7 pies.\n" +
                "Distancia recorrida: 9 kilómetros /5,6 millas (5,5 horas caminando aprox.)\n" +
                "Dificultad: Moderada.\n" +
                "Comidas incluidas: Desayuno, snacks, almuerzo, hora del té y cena.\n"
            },
            {
              dayTitle: "DÍA 4",
              daySubtitle: "PHUYUPATAMARCA - MACHU PICCHU - CUSCO (D, A)",
              dayDescription: "Para su último día de caminata, se despertará a las 4:30 am con el fin de disfrutar un desayuno saludable y para continuar con la parte final del camino. Al llegar al sitio arqueológico de Wiñaywayna (2650 metros / 8694.2 pies), se le da su nombre por las hermosas orquídeas que crecen en el sitio. Wiñaywayna que significa \"Por Siempre Joven\". Continuando con la caminata, ascenderemos durante 1,5 horas para llegar a la Puerta del Sol o Intipunku (2750 metros /9022.3 pies). Mirar al exterior hacia Machu Picchu, le hará apreciar el recorrdido, ya que recibirá algunas de las mejores vistas. Después de explorar la Puerta del Sol, descenderemos para llegar a Machu Picchu durante una hora.\n" +
                "Finalmente ha llegado a Machu Picchu, una de las Siete Maravillas del Mundo (2430 metros / 7972.4 pies). En su recorrido final, estará acompañado de su guía experto, explicándole los muchos secretos y teorías que envuelve esta ciudadela. Después de su visita guiada, será libre de vagar y tomar algunas hermosas fotografías de esta majestuosa estructura. \n" +
                "Más tarde tomará el bus que sale de regreso a Aguas Calientes, para luego abordar su tren de retorno. A su llegada, nuestro representante, lo trasladará en nuestro vehículo privado y lo llevará a su hotel en Cusco.\n" +
                "Hora de despierto: 04:00 am.\n" +
                "Llegada a Machu Picchu: 11:30 am.\n" +
                "Llegada a Cusco: 21:56 pm.\n" +
                "Altitud mínima: Machu Picchu – 2430 msnm /7972.4 pies.\n" +
                "Altitud máxima: Sitio de Intipunku – 2750 msnm / 9022.3 pies.\n" +
                "Distancia recorrida: 8 kilómetros /4,9 millas (5,5 horas caminando aprox.)\n" +
                "Dificultad: Moderada.\n" +
                "Comidas incluidas: Desayuno, refrigerios.\n"
            }
          ]
        },
        sampleJourney: [],
        customOptions: {
          description: "Opciones adicionales y paquetes relacionados disponibles.",
          packages: []
        },
        pricing: {
          title: "Incluye y No Incluye",
          included: [
            "Caminata de lujo privada",
            "Guía profesional bilingüe",
            "Masajes terapéuticos cada noche",
            "Campamentos de lujo y equipamiento premium",
            "Todas las comidas gourmet",
            "Transporte terrestre privado",
            "Equipo completo de porteadores y staff"
          ],
          notIncluded: [
            "Entrada a Huayna Picchu",
            "Tickets de tren para guías o clientes",
            "Bastones de trekking",
            "Alojamiento en hotel",
            "Seguro de viaje y gastos personales",
            "Propinas"
          ]
        },
        images: [
          { src: 'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp', alt: 'Vista de Punta Cana con playa y mar', width: 800 },
          { src: 'assets/img/panoramic-view-of-machu-picchu-lost-city-at-archae-2024-07-03-02-44-10-utc_11zon.webp', alt: 'Playa paradisíaca en Cancún', width: 400 },
          { src: 'assets/img/peruvian-women-with-little-alpaca-lamb-2023-11-27-05-13-54-utc_11zon.webp', alt: 'Atardecer en Bali con templos', width: 600 },
          { src: 'assets/img/traveling-in-peru-2024-09-21-23-33-22-utc_11zon.webp', alt: 'Vista de Punta Cana con playa y mar', width: 200 },
          { src: 'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp', alt: 'Vista de Punta Cana con playa y mar', width: 800 }
        ]
      },
      {
        id: 3,
        title: "Camino Inca de Lujo 4D/3N: La Experiencia Exclusiva a Machu Picchu",
        subtitle: "Vive una aventura única en los Andes con servicios premium 🚶 Distancia total: 37 km | ⏳ Duración: 4 días / 3 noches | 🏔️ Altitud máxima: 4,215 m",
        days: 5,
        nights: 4,
        price: 1200,
        mapUrl:
          [
            {name:'Machu Picchu',lat:-13.1631,lng:-72.5450,day:1},
            {name:'Arequipa',lat:-16.4090,lng:-71.5375,day:1},
          ],
        description: {
          highlights: [
            "Recorrido por el Centro Histórico de Arequipa",
            "Visita al Monasterio de Santa Catalina",
            "Excursión al Cañón del Colca",
            "Avistamiento de cóndores en Cruz del Cóndor"
          ],
          text: "Descubre el Camino Inca de Lujo, una travesía de 4 días y 3 noches diseñada para viajeros que buscan una experiencia exclusiva, privada y llena de comodidades. Disfruta de campamentos de lujo, gastronomía gourmet, sesiones de relajación y un recorrido histórico que culmina en la majestuosa Machu Picchu.",
          itinerary: [
            {
              dayTitle: "Día 1",
              daySubtitle: "Cusco – Wayllabamba (A, C)",
              dayDescription: "📍 Altitud máxima: 2,970 m | 🚶 Distancia: 11 km | ⏳ Duración: 6 horas | 💪 Dificultad: Moderada\n" +
                "Comenzamos nuestra expedición con un traslado privado desde Cusco hasta el Km 82, el inicio del Camino Inca. Durante la ruta, haremos una parada en el pueblo de Ollantaytambo para disfrutar del encanto andino y realizar compras de última hora.\n" +
                "Desde Piscacucho (2,675 m) iniciaremos la caminata, rodeados de paisajes espectaculares y sitios arqueológicos incas. Después de 4 horas de senderismo, disfrutaremos de un almuerzo gourmet con vista panorámica en Tarayoc.\n" +
                "Continuaremos la caminata por 2 horas más hasta Wayllabamba (2,970 m), donde nuestro campamento de lujo estará listo para recibirnos con:\n" +
                "✔ Ducha caliente y masajes relajantes con aceites esenciales orgánicos.\n" +
                "✔ Cena gourmet con ingredientes frescos de la región.\n" +
                "✔ Tienda-dormitorio climatizada y equipada para un descanso reparador."
            },
            {
              dayTitle: "Día 2",
              daySubtitle: "Wayllabamba – Pacaymayo (D, A, C)",
              dayDescription: "📍 Altitud máxima: 4,215 m | 🚶 Distancia: 9 km | ⏳ Duración: 9 horas | 💪 Dificultad: Desafiante\n" +
                "Después de un desayuno nutritivo, iniciaremos el ascenso hacia el Paso de Warmiwañusca (4,215 m), el punto más alto del Camino Inca. En el trayecto, cruzaremos el bosque nublado andino, observando su flora y fauna única.\n" +
                "En la cima, celebraremos nuestro logro con fotografías espectaculares antes de descender hacia el campamento en Pacaymayo (3,500 m). Aquí te esperan:\n" +
                "✔ Ducha caliente y masajes revitalizantes.\n" +
                "✔ Cena gourmet con productos orgánicos.\n" +
                "✔ Tienda-dormitorio de lujo para un descanso reparador."
            },
            {
              dayTitle: "Día 3",
              daySubtitle: " Pacaymayo – Phuyupatamarca (D, A, C)",
              dayDescription: "📍 Altitud máxima: 3,955 m | 🚶 Distancia: 9 km | ⏳ Duración: 5.5 horas | 💪 Dificultad: Moderada\n" +
                "Este día exploraremos los fascinantes sitios arqueológicos de Runkurakay y Sayacmarca, donde nuestro guía experto revelará los misterios de la arquitectura inca.\n" +
                "Disfrutaremos de un almuerzo exclusivo en Chaquicocha, seguido de una caminata escénica hasta nuestro campamento en Phuyupatamarca (3,670 m).\n" +
                "✔ Brindis especial con pisco sour para celebrar nuestra última noche en el Camino Inca.\n" +
                "✔ Cena gourmet de despedida con el equipo de expedición.\n" +
                "✔ Tienda-dormitorio de lujo con vistas impresionantes.\n"
            },
            {
              dayTitle: "Día 4",
              daySubtitle: "Día 4: Phuyupatamarca – Machu Picchu – Cusco (D, A)",
              dayDescription: "📍 Altitud máxima: 2,750 m | 🚶 Distancia: 8 km | ⏳ Duración: 5.5 horas | 💪 Dificultad: Moderada\n" +
                "Nos despertaremos a las 4:30 am para iniciar el descenso hacia la Puerta del Sol (Intipunku), la entrada sagrada a Machu Picchu. Desde aquí, disfrutaremos de una vista única de la ciudadela al amanecer.\n" +
                "Realizaremos un tour guiado privado por Machu Picchu, explorando sus templos y terrazas mientras nuestro guía experto comparte las historias y secretos de los incas.\n" +
                "✔ Tiempo libre para explorar la ciudadela.\n" +
                "✔ Opción de subir a Huayna Picchu o Montaña Machu Picchu (previa reserva).\n" +
                "✔ Almuerzo gourmet en Aguas Calientes antes del retorno a Cusco en tren de lujo."
            }
          ]
        },
        sampleJourney: [
          {
            dayTitle: "Día 1",
            daySubtitle: "Cusco – Wayllabamba (A, C)",
            dayDescription: "📍 Altitud máxima: 2,970 m | 🚶 Distancia: 11 km | ⏳ Duración: 6 horas | 💪 Dificultad: Moderada\n" +
              "Comenzamos nuestra expedición con un traslado privado desde Cusco hasta el Km 82, el inicio del Camino Inca. Durante la ruta, haremos una parada en el pueblo de Ollantaytambo para disfrutar del encanto andino y realizar compras de última hora.\n" +
              "Desde Piscacucho (2,675 m) iniciaremos la caminata, rodeados de paisajes espectaculares y sitios arqueológicos incas. Después de 4 horas de senderismo, disfrutaremos de un almuerzo gourmet con vista panorámica en Tarayoc.\n" +
              "Continuaremos la caminata por 2 horas más hasta Wayllabamba (2,970 m), donde nuestro campamento de lujo estará listo para recibirnos con:\n" +
              "✔ Ducha caliente y masajes relajantes con aceites esenciales orgánicos.\n" +
              "✔ Cena gourmet con ingredientes frescos de la región.\n" +
              "✔ Tienda-dormitorio climatizada y equipada para un descanso reparador.",
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
            daySubtitle: "Wayllabamba – Pacaymayo (D, A, C)",
            dayDescription: "📍 Altitud máxima: 4,215 m | 🚶 Distancia: 9 km | ⏳ Duración: 9 horas | 💪 Dificultad: Desafiante\n" +
              "Después de un desayuno nutritivo, iniciaremos el ascenso hacia el Paso de Warmiwañusca (4,215 m), el punto más alto del Camino Inca. En el trayecto, cruzaremos el bosque nublado andino, observando su flora y fauna única.\n" +
              "En la cima, celebraremos nuestro logro con fotografías espectaculares antes de descender hacia el campamento en Pacaymayo (3,500 m). Aquí te esperan:\n" +
              "✔ Ducha caliente y masajes revitalizantes.\n" +
              "✔ Cena gourmet con productos orgánicos.\n" +
              "✔ Tienda-dormitorio de lujo para un descanso reparador.",
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
          },
          {
            dayTitle: "Día 3",
            daySubtitle: " Pacaymayo – Phuyupatamarca (D, A, C)",
            dayDescription: "📍 Altitud máxima: 3,955 m | 🚶 Distancia: 9 km | ⏳ Duración: 5.5 horas | 💪 Dificultad: Moderada\n" +
              "Este día exploraremos los fascinantes sitios arqueológicos de Runkurakay y Sayacmarca, donde nuestro guía experto revelará los misterios de la arquitectura inca.\n" +
              "Disfrutaremos de un almuerzo exclusivo en Chaquicocha, seguido de una caminata escénica hasta nuestro campamento en Phuyupatamarca (3,670 m).\n" +
              "✔ Brindis especial con pisco sour para celebrar nuestra última noche en el Camino Inca.\n" +
              "✔ Cena gourmet de despedida con el equipo de expedición.\n" +
              "✔ Tienda-dormitorio de lujo con vistas impresionantes.\n",
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
          },
          {
            dayTitle: "Día 4",
            daySubtitle: "Día 4: Phuyupatamarca – Machu Picchu – Cusco (D, A)",
            dayDescription: "📍 Altitud máxima: 2,750 m | 🚶 Distancia: 8 km | ⏳ Duración: 5.5 horas | 💪 Dificultad: Moderada\n" +
              "Nos despertaremos a las 4:30 am para iniciar el descenso hacia la Puerta del Sol (Intipunku), la entrada sagrada a Machu Picchu. Desde aquí, disfrutaremos de una vista única de la ciudadela al amanecer.\n" +
              "Realizaremos un tour guiado privado por Machu Picchu, explorando sus templos y terrazas mientras nuestro guía experto comparte las historias y secretos de los incas.\n" +
              "✔ Tiempo libre para explorar la ciudadela.\n" +
              "✔ Opción de subir a Huayna Picchu o Montaña Machu Picchu (previa reserva).\n" +
              "✔ Almuerzo gourmet en Aguas Calientes antes del retorno a Cusco en tren de lujo.",
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
            "Tour privado y totalmente personalizado.",
            "3 noches de campamento de lujo con todas las comodidades.",
            "Guía experto en historia y cultura inca.",
            "Sesiones de masajes y duchas calientes en cada campamento",
            "Gastronomía gourmet con ingredientes frescos y orgánicos",
            "Equipos premium: Tiendas climatizadas, camas, edredones y baños privados.",
            "Entradas y permisos para el Camino Inca y Machu Picchu.",
            "Traslados privados y tren de lujo de retorno a Cusco."
          ],
          notIncluded: [
            "Entrada a Huayna Picchu (opcional, previa reserva).",
            "Alojamiento en Cusco antes o después del trekking",
            "Propinas y gastos personales.",
            "Seguro de viaje (altamente recomendado)."
          ]
        },
        images: [
          { src: 'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp', alt: 'Vista de Punta Cana con playa y mar', width: 800 },
          { src: 'assets/img/panoramic-view-of-machu-picchu-lost-city-at-archae-2024-07-03-02-44-10-utc_11zon.webp', alt: 'Playa paradisíaca en Cancún', width: 400 },
          { src: 'assets/img/peruvian-women-with-little-alpaca-lamb-2023-11-27-05-13-54-utc_11zon.webp', alt: 'Atardecer en Bali con templos', width: 600 },
          { src: 'assets/img/traveling-in-peru-2024-09-21-23-33-22-utc_11zon.webp', alt: 'Vista de Punta Cana con playa y mar', width: 200 },
          { src: 'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp', alt: 'Vista de Punta Cana con playa y mar', width: 800 }
        ]
      },

    ],

    cusco: [
      {
        id: 1,
        title: "Machu Picchu Express",
        subtitle: "Una visita rápida a la maravilla del mundo",
        days: 2,
        nights: 1,
        price: 750,
        mapUrl: [{name:'Machu Picchu',lat:-13.1631,lng:-72.5450,day:1}],
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
        pricing: { title: "Incluye", included: ["Boletos de tren", "Entrada a Machu Picchu"], notIncluded: ["Vuelos", "Almuerzos"] },
        images: [
          { src: 'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp', alt: 'Vista de Punta Cana con playa y mar', width: 800 },
          { src: 'assets/img/panoramic-view-of-machu-picchu-lost-city-at-archae-2024-07-03-02-44-10-utc_11zon.webp', alt: 'Playa paradisíaca en Cancún', width: 400 },
          { src: 'assets/img/peruvian-women-with-little-alpaca-lamb-2023-11-27-05-13-54-utc_11zon.webp', alt: 'Atardecer en Bali con templos', width: 600 },
          { src: 'assets/img/traveling-in-peru-2024-09-21-23-33-22-utc_11zon.webp', alt: 'Vista de Punta Cana con playa y mar', width: 200 },
          { src: 'assets/img/incredibly-beatiful-site-of-machu-picchu-2023-11-27-05-12-24-utc_11zon.webp', alt: 'Vista de Punta Cana con playa y mar', width: 800 }
        ]
      },
    ]
  };

  getPackagesByDestination(destino: string): TravelPackage[] {
    return this.paquetesPorDestino[destino] || [];
  }

  getPackageById(destino: string, id: number): TravelPackage | undefined {
    return this.paquetesPorDestino[destino]?.find(p => p.id === id);
  }
}
