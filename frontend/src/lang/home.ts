import LocalizedStrings from "localized-strings";
import * as langHelper from "@/common/langHelper";
import env from "@/config/env.config";

const strings = new LocalizedStrings({
  fr: {
    PICK_UP_DATE: "Date de prise en charge",
    DROP_OFF_DATE: "Date de retour",
    DROP_OFF: "Restituer au même endroit",
    COVER: "Les meilleurs agences de location de voitures",
    SUPPLIERS_TITLE: "Vous Connecter aux plus Grandes Enseignes",
    MAP_TITLE: "Carte des Agences de Location de Voitures",
    MAP_PICK_UP_SELECTED: "Lieu de prise en charge sélectionné",
    MAP_DROP_OFF_SELECTED: "Lieu de restitution sélectionné",
    DESTINATIONS_TITLE: "Parcourir par destinations",
    CAR_SIZE_TITLE: "Consulter nos tailles de voitures",
    CAR_SIZE_TEXT:
      "Nos véhicules sont disponibles en trois tailles principales.",
    MINI: "MINI",
    MIDI: "MIDI",
    MAXI: "MAXI",
    SEARCH_FOR_CAR: "Rechercher une voiture",
    TITLE: "Les meilleures offres de location de voitures",
    SUBTITLE: "Comparez nos prix et réservez votre voiture dès aujourd'hui !",
    WHY_TITLE:
      "Réservez avec nous dès aujourd'hui et conduisez en toute confiance !",
    WHY_SERVICE_TITLE: "Service",
    WHY_SERVICE: "Assistance routière 24h/24 pour une tranquillité d'esprit.",
    WHY_CHARGES_TITLE: "Pas de frais cachés",
    WHY_CHARGES: "Ce que vous voyez est ce que vous payez.",
    WHY_FLEET_TITLE: "Flotte distinctive",
    WHY_FLEET:
      "Choisissez parmi une large sélection de véhicules haut de gamme et fiables.",
    WHY_MILEAGE_TITLE: "Kilométrage illimité",
    WHY_MILEAGE: "Explorez les villes et au-delà sans limites.",
    WHY_MILEAGE_ASTERISK: "* s'applique lorsque cela est indiqué",
    SERVICES_TITLE: "Qu'est-ce qui nous différencie ?",
    SERVICES_FLEET_TITLE: "Large gamme de véhicules",
    SERVICES_FLEET:
      "Des voitures citadines compactes aux SUV de luxe, notre flotte distinctive répond à tous les besoins de voyage. Que ce soit pour les affaires ou les loisirs, nous avons la voiture parfaite pour votre voyage.",
    SERVICES_FLEXIBLE_TITLE: "Prise en charge et restitution flexibles",
    SERVICES_FLEXIBLE:
      "Grâce à nos emplacements pratiques et à nos horaires flexibles, nous facilitons la location d'une voiture. Que vous arriviez dans une ville ou dans un aéroport international, votre véhicule sera prêt quand vous l'êtes.",
    SERVICES_PRICES_TITLE: "Excellents prix",
    SERVICES_PRICES:
      "Nous proposons des tarifs compétitifs sur tous les véhicules, vous assurant d'obtenir des voitures de qualité supérieure à des prix imbattables. Pas besoin de faire de compromis - obtenez un excellent rapport qualité-prix à chaque fois.",
    SERVICES_BOOKING_ONLINE_TITLE: "Réservation en ligne facile",
    SERVICES_BOOKING_ONLINE:
      "'Évitez les files d'attente et réservez votre location de voiture en quelques minutes via notre plateforme en ligne conviviale. Comparez les options, personnalisez votre location et sécurisez votre véhicule sans effort.",
    SERVICE_INSTANT_BOOKING_TITLE: "Réservation instantanée",
    SERVICE_INSTANT_BOOKING:
      "Pas d'attente ! Une fois que vous avez choisi votre véhicule et effectué votre réservation, vous recevrez une confirmation immédiate, garantissant un processus de location fluide et sans tracas.",
    SERVICES_SUPPORT_TITLE: "Assistance client 24h/24 et 7j/7",
    SERVICES_SUPPORT:
      "Que vous réserviez un véhicule, que vous ayez besoin d'assistance sur la route ou que vous ayez des questions, notre équipe d'assistance dédiée est disponible 24 heures sur 24.",
    CUSTOMER_CARE_TITLE: `Service client ${env.WEBSITE_NAME}`,
    CONTACT_US: "Nous Contacter",
    CUSTOMER_CARE_SUBTITLE: "Toujours là pour vous aider",
    CUSTOMER_CARE_TEXT: `Chez ${env.WEBSITE_NAME}, nous nous engageons à fournir une assistance rapide et fiable pour garantir que votre expérience de location de voiture soit fluide et agréable du début à la fin.`,
    CUSTOMER_CARE_ASSISTANCE: "Assistance routière 24h/24 et 7j/7",
    CUSTOMER_CARE_MODIFICATION: "Demandes de renseignements et modifications",
    CUSTOMER_CARE_GUIDANCE: "Guide pour la sélection du véhicule",
    CUSTOMER_CARE_SUPPORT: "Conseils et assistance",
  },
  de: {
    PICK_UP_DATE: "Abholdatum",
    DROP_OFF_DATE: "Rückgabedatum",
    DROP_OFF: "Zurück zum selben Ort",
    COVER: "Top Autovermietungen",
    SUPPLIERS_TITLE: "Bei den besten buchen",
    MAP_TITLE: "Karte der Autovermietungsstandorte",
    MAP_PICK_UP_SELECTED: "Abholort ausgewählt",
    MAP_DROP_OFF_SELECTED: "Rückgabeort ausgewählt",
  },
  en: {
    PICK_UP_DATE: "Pick-up Date",
    DROP_OFF_DATE: "Drop-off Date",
    DROP_OFF: "Return to same location",
    COVER: "Top Car Rental Companies",
    SUPPLIERS_TITLE: "Connecting you to the Biggest Brands",
    MAP_TITLE: "Map of Car Rental Locations",
    MAP_PICK_UP_SELECTED: "Pick-up Location selected",
    MAP_DROP_OFF_SELECTED: "Drop-off Location selected",
    DESTINATIONS_TITLE: "Browse by Destinations",
    CAR_SIZE_TITLE: "Meet Some of Our Car sizes",
    CAR_SIZE_TEXT: "Our vehicles come in three main sizes.",
    MINI: "MINI",
    MIDI: "MIDI",
    MAXI: "MAXI",
    SEARCH_FOR_CAR: "Search for a car",
    TITLE: "Top Car Rental Deals",
    SUBTITLE: "Compare our prices and book your car today!",
    WHY_TITLE: "Book with us today and drive with confidence!",
    WHY_SERVICE_TITLE: "Service",
    WHY_SERVICE: "24-Hour Roadside Assistance for peace of mind.",
    WHY_CHARGES_TITLE: "No Hidden Charges",
    WHY_CHARGES: "What you see is what you pay.",
    WHY_FLEET_TITLE: "Distinctive fleet",
    WHY_FLEET: "Choose from a wide selection of premium and reliable vehicles.",
    WHY_MILEAGE_TITLE: "Unlimited Mileage",
    WHY_MILEAGE: "Explore cities and beyond without limits.",
    WHY_MILEAGE_ASTERISK: "*applies when noted",
    SERVICES_TITLE: "What Makes Us Different?",
    SERVICES_FLEET_TITLE: "Wide Range Of Vehicles",
    SERVICES_FLEET:
      "From compact city cars to luxury SUVs, our distinctive fleet caters to every travel need. Whether it's business or leisure, we have the perfect car for your trip.",
    SERVICES_FLEXIBLE_TITLE: "Flexible Pick-Up & Drop-Off",
    SERVICES_FLEXIBLE:
      "Offering convenient locations and flexible scheduling, we make renting a car hassle-free. Whether you're arriving a city or an International Airport, your vehicle will be ready when you are.",
    SERVICES_PRICES_TITLE: "Excellent Prices",
    SERVICES_PRICES:
      "We offer competitive rates on all vehicles, ensuring you get top-quality cars at unbeatable prices. No need to compromise - get great value for your money every time.",
    SERVICES_BOOKING_ONLINE_TITLE: "Easy Online Booking",
    SERVICES_BOOKING_ONLINE:
      "Skip the lines and book your car rental in minutes through our user-friendly online platform. Compare options, customize your rental, and secure your vehicle effortlessly.",
    SERVICE_INSTANT_BOOKING_TITLE: "Instant Booking",
    SERVICE_INSTANT_BOOKING:
      "No waiting around! Once you choose your vehicle and complete your booking, you'll receive an immediate confirmation, ensuring a smooth and hassle-free rental process.",
    SERVICES_SUPPORT_TITLE: "24/7 Customer Support",
    SERVICES_SUPPORT:
      "Whether you're booking a vehicle, need assistance on the road, or have any questions, our dedicated support team is available around the clock.",
    CUSTOMER_CARE_TITLE: `${env.WEBSITE_NAME} Customer Care`,
    CONTACT_US: "Contact Us",
    CUSTOMER_CARE_SUBTITLE: "Always Here to Help",
    CUSTOMER_CARE_TEXT:
      "At BookCars, we're dedicated to providing prompt and reliable support to ensure your car rental experience is smooth and enjoyable from start to finish.",
    CUSTOMER_CARE_ASSISTANCE: "24/7 Roadside Assistance",
    CUSTOMER_CARE_MODIFICATION: "Inquiries and Modifications",
    CUSTOMER_CARE_GUIDANCE: "Vehicle Selection Guidance",
    CUSTOMER_CARE_SUPPORT: "Advice and Support",
  },
  es: {
    PICK_UP_DATE: "Fecha de recogida",
    DROP_OFF_DATE: "Fecha de devolución",
    DROP_OFF: "Devolver en el mismo lugar",
    COVER: "Las mejores empresas de alquiler de coches",
    SUPPLIERS_TITLE: "Conectándote con las marcas más grandes",
    MAP_TITLE: "Mapa de ubicaciones de alquiler de coches",
    MAP_PICK_UP_SELECTED: "Ubicación de recogida seleccionada",
    MAP_DROP_OFF_SELECTED: "Ubicación de devolución seleccionada",
    DESTINATIONS_TITLE: "Buscar por destinos",
    CAR_SIZE_TITLE: "Descubre algunos de nuestros tamaños de coches",
    CAR_SIZE_TEXT:
      "Nuestros vehículos están disponibles en tres tamaños principales.",
    MINI: "MINI",
    MIDI: "MIDI",
    MAXI: "MAXI",
    SEARCH_FOR_CAR: "Buscar un coche",

    TITLE: "Las mejores ofertas de alquiler de coches",
    SUBTITLE: "¡Compare nuestros precios y reserve su coche hoy mismo!",
    WHY_TITLE: "¡Reserve con nosotros hoy y conduzca con confianza!",
    WHY_SERVICE_TITLE: "Servicio",
    WHY_SERVICE: "Asistencia en carretera las 24 horas para su tranquilidad.",
    WHY_CHARGES_TITLE: "Sin cargos ocultos",
    WHY_CHARGES: "Lo que ve es lo que paga.",
    WHY_FLEET_TITLE: "Flota distintiva",
    WHY_FLEET:
      "Elija entre una amplia selección de vehículos premium y confiables.",
    WHY_MILEAGE_TITLE: "Kilometraje ilimitado",
    WHY_MILEAGE: "Explore ciudades y más allá sin límites.",
    WHY_MILEAGE_ASTERISK: "*se aplica cuando se indica",
    SERVICES_TITLE: "Lo que nos distingue ¿Diferente?",
    SERVICES_FLEET_TITLE: "Amplia gama de vehículos",
    SERVICES_FLEET:
      "Desde coches urbanos compactos hasta SUV de lujo, nuestra distintiva flota satisface todas las necesidades de viaje. Ya sea por negocios o por placer, tenemos el coche perfecto para su viaje.",
    SERVICES_FLEXIBLE_TITLE: "Recogida y devolución flexibles",
    SERVICES_FLEXIBLE:
      "Ofrecemos ubicaciones convenientes y horarios flexibles, para que alquilar un coche sea una experiencia sin complicaciones. Tanto si llega a una ciudad como a un aeropuerto internacional, su vehículo estará listo cuando usted lo esté.",
    SERVICES_PRICES_TITLE: "Precios excelentes",
    SERVICES_PRICES:
      "Ofrecemos tarifas competitivas en todos los vehículos, lo que garantiza que obtendrá automóviles de la mejor calidad a precios inmejorables. No es necesario que haga concesiones: obtenga una excelente relación calidad-precio en todo momento.",
    SERVICES_BOOKING_ONLINE_TITLE: "Reserva en línea sencilla",
    SERVICES_BOOKING_ONLINE:
      "Evite las colas y reserve su alquiler de automóvil en minutos a través de nuestra plataforma en línea fácil de usar. Compare opciones, personalice su alquiler y asegure su vehículo sin esfuerzo.",
    SERVICE_INSTANT_BOOKING_TITLE: "Reserva instantánea",
    SERVICE_INSTANT_BOOKING:
      "¡Sin esperas! Una vez que elijas tu vehículo y completes tu reserva, recibirás una confirmación inmediata, lo que garantiza un proceso de alquiler sin complicaciones y sin complicaciones.",
    SERVICES_SUPPORT_TITLE:
      "Atención al cliente las 24 horas, los 7 días de la semana",
    SERVICES_SUPPORT:
      "Ya sea que estés reservando un vehículo, necesites asistencia en la carretera o tengas alguna pregunta, nuestro equipo de soporte dedicado está disponible las 24 horas.",
    CUSTOMER_CARE_TITLE: `Atención al cliente de ${env.WEBSITE_NAME}`,
    CONTACT_US: "Contáctanos",
    CUSTOMER_CARE_SUBTITLE: "Siempre aquí para ayudar",
    CUSTOMER_CARE_TEXT: `En ${env.WEBSITE_NAME}, nos dedicamos a brindar asistencia rápida y confiable para garantizar que su experiencia de alquiler de automóviles sea fluida y placentera de principio a fin`,
    CUSTOMER_CARE_ASSISTANCE:
      "Asistencia en carretera las 24 horas, los 7 días de la semana",
    CUSTOMER_CARE_MODIFICATION: "Consultas y modificaciones",
    CUSTOMER_CARE_GUIDANCE: "Orientación para la selección de vehículos",
    CUSTOMER_CARE_SUPPORT: "Asesoramiento y asistencia",
  },
});
langHelper.setLanguage(strings);
export { strings };
