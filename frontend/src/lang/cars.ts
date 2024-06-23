import LocalizedStrings from 'react-localization'
import * as langHelper from '../common/langHelper'
import env from '../config/env.config'
import * as UserService from '../services/UserService'

const language = UserService.getLanguage()
const isUS = language === 'en' && env.CURRENCY === '$'

const strings = new LocalizedStrings({
  fr: {
    NEW_CAR: "Nouvelle voiture",
    DELETE_CAR: "Êtes-vous sûr de vouloir supprimer cette voiture ?",
    FUEL_POLICY: "Politique carburant",
    DIESEL: "Diesel",
    GASOLINE: "Essence",
    ELECTRIC: "Électrique",
    HYBRID: "Hybride",
    PLUG_IN_HYBRID: "Hybride rechargeable",
    UNKNOWN: "Non spécifié",
    DIESEL_SHORT: "D",
    GASOLINE_SHORT: "E",
    ELECTRIC_SHORT: "ELEC",
    HYBRID_SHORT: "H",
    PLUG_IN_HYBRID_SHORT: "HR",
    GEARBOX_MANUAL: "Manuelle",
    GEARBOX_AUTOMATIC: "Automatique",
    GEARBOX_MANUAL_SHORT: "M",
    GEARBOX_AUTOMATIC_SHORT: "A",
    FUEL_POLICY_LIKE_FOR_LIKE: "Plein/Plein",
    FUEL_POLICY_FREE_TANK: "Plein inclus",
    DIESEL_TOOLTIP: "Cette voiture a un moteur diesel",
    GASOLINE_TOOLTIP: "Cette voiture a un moteur essence",
    ELECTRIC_TOOLTIP: "Cette voiture est électrique",
    HYBRID_TOOLTIP: "Cette voiture est hybride",
    PLUG_IN_HYBRID_TOOLTIP: "Cette voiture est hybride rechargeable",
    GEARBOX_MANUAL_TOOLTIP: "Cette voiture a une transmission manuelle",
    GEARBOX_AUTOMATIC_TOOLTIP: "Cette voiture a une transmission automatique",
    SEATS_TOOLTIP_1: "Cette voiture a ",
    SEATS_TOOLTIP_2: "sièges",
    DOORS_TOOLTIP_1: "Cette voiture a ",
    DOORS_TOOLTIP_2: "portes",
    AIRCON_TOOLTIP: "Cette voiture a de la climatisation",
    FUEL_POLICY_LIKE_FOR_LIKE_TOOLTIP:
      "Cette voiture est fournie avec du carburant dans le réservoir et doit être rendu avec la même quantité de carburant.",
    FUEL_POLICY_FREE_TANK_TOOLTIP: "Le prix inclut un plein de carburant",
    MILEAGE: "Kilométrage",
    MILEAGE_UNIT: "KM/jour",
    UNLIMITED: "Illimité",
    LIMITED: "Limité",
    CANCELLATION: "Annulation",
    CANCELLATION_TOOLTIP:
      "La réservation peut être annulée avant la date de commencement de la location.",
    AMENDMENTS: "Modifications",
    AMENDMENTS_TOOLTIP:
      "La réservation peut être modifiée avant la date de commencement de la location.",
    THEFT_PROTECTION: "Protection contre le vol",
    THEFT_PROTECTION_TOOLTIP:
      "La location peut inclure une protection contre le vol.",
    COLLISION_DAMAGE_WAVER: "Couverture en cas de collision",
    COLLISION_DAMAGE_WAVER_TOOLTIP:
      "La location peut inclure une couverture en cas de collision.",
    FULL_INSURANCE: "Assurance Tous Risques",
    FULL_INSURANCE_TOOLTIP:
      "La location peut inclure une couverture en cas de collision, de dommages et vol du véhicule.",
    ADDITIONAL_DRIVER: "Conducteur supplémentaire",
    INCLUDED: "Inclus",
    UNAVAILABLE: "Indisponible",
    CAR_AVAILABLE: "Disponible à la location",
    CAR_AVAILABLE_TOOLTIP: "Cette voiture est disponible pour la location.",
    CAR_UNAVAILABLE: "Indisponible pour la location",
    CAR_UNAVAILABLE_TOOLTIP:
      "Cette voiture n'est pas disponible pour la location.",
    VIEW_CAR: "Voir cette voiture",
    EMPTY_LIST: "Pas de voitures.",
    BOOK: "Réserver",
    PRICE_DAYS_PART_1: "Prix pour",
    PRICE_DAYS_PART_2: "jour",
    PRICE_PER_DAY: "Prix par jour :",
    GEARBOX: "Transmission",
    ENGINE: "Moteur",
    DEPOSIT: "Dépôt de garantie",
    LESS_THAN_VALUE_1: `Moins de ${isUS ? env.CURRENCY : ""}${
      env.DEPOSIT_FILTER_VALUE_1
    }${!isUS ? ` ${env.CURRENCY}` : ""}`,
    LESS_THAN_VALUE_2: `Moins de ${isUS ? env.CURRENCY : ""}${
      env.DEPOSIT_FILTER_VALUE_2
    }${!isUS ? ` ${env.CURRENCY}` : ""}`,
    LESS_THAN_VALUE_3: `Moins de ${isUS ? env.CURRENCY : ""}${
      env.DEPOSIT_FILTER_VALUE_3
    }${!isUS ? ` ${env.CURRENCY}` : ""}`,
  },
  en: {
    NEW_CAR: "New car",
    DELETE_CAR: "Are you sure you want to delete this car?",
    FUEL_POLICY: "Fuel policy",
    DIESEL: "Diesel",
    GASOLINE: "Gasoline",
    ELECTRIC: "Electric",
    HYBRID: "Hybrid",
    PLUG_IN_HYBRID: "Plug-in hybrid",
    UNKNOWN: "Not specified",
    DIESEL_SHORT: "D",
    GASOLINE_SHORT: "G",
    ELECTRIC_SHORT: "E",
    HYBRID_SHORT: "H",
    PLUG_IN_HYBRID_SHORT: "PH",
    GEARBOX_MANUAL: "Manual",
    GEARBOX_AUTOMATIC: "Automatic",
    GEARBOX_MANUAL_SHORT: "M",
    GEARBOX_AUTOMATIC_SHORT: "A",
    FUEL_POLICY_LIKE_FOR_LIKE: "Like for Like",
    FUEL_POLICY_FREE_TANK: "Free tank",
    DIESEL_TOOLTIP: "This car has a diesel engine",
    GASOLINE_TOOLTIP: "This car has a gasoline engine",
    ELECTRIC_TOOLTIP: "This car is electric",
    HYBRID_TOOLTIP: "This car is hybrid",
    PLUG_IN_HYBRID_TOOLTIP: "This car is plug-in hybrid",
    GEARBOX_MANUAL_TOOLTIP: "This car has a manual gearbox",
    GEARBOX_AUTOMATIC_TOOLTIP: "This car has an automatic gearbox",
    SEATS_TOOLTIP_1: "This car has ",
    SEATS_TOOLTIP_2: "seats",
    DOORS_TOOLTIP_1: "This car has ",
    DOORS_TOOLTIP_2: "doors",
    AIRCON_TOOLTIP: "This car has aircon",
    FUEL_POLICY_LIKE_FOR_LIKE_TOOLTIP:
      "This car is supplied with fuel and must be returned with the same amount of fuel.",
    FUEL_POLICY_FREE_TANK_TOOLTIP: "The price includes a full tank of fuel.",
    MILEAGE: "Mileage",
    MILEAGE_UNIT: "KM/day",
    UNLIMITED: "Unlimited",
    LIMITED: "Limited",
    CANCELLATION: "Cancellation",
    CANCELLATION_TOOLTIP:
      "The booking can be canceled before the start date of the rental.",
    AMENDMENTS: "Amendments",
    AMENDMENTS_TOOLTIP:
      "The booking can be modified before the start date of the rental.",
    THEFT_PROTECTION: "Theft protection",
    THEFT_PROTECTION_TOOLTIP: "Rental may include theft protection.",
    COLLISION_DAMAGE_WAVER: "Collision damage waiver",
    COLLISION_DAMAGE_WAVER_TOOLTIP:
      "Rental may include collision damage waiver.",
    FULL_INSURANCE: "Full insurance",
    FULL_INSURANCE_TOOLTIP:
      "The rental may include collision damage waiver and theft protection of the vehicle.",
    ADDITIONAL_DRIVER: "Additional driver",
    INCLUDED: "Included",
    UNAVAILABLE: "Unavailable",
    CAR_AVAILABLE: "Available for rental",
    CAR_AVAILABLE_TOOLTIP: "This car is available for rental.",
    CAR_UNAVAILABLE: "Unavailable for rental",
    CAR_UNAVAILABLE_TOOLTIP: "This car is unavailable for rental.",
    VIEW_CAR: "View this car",
    EMPTY_LIST: "No cars.",
    BOOK: "Choose this car",
    PRICE_DAYS_PART_1: "Price for",
    PRICE_DAYS_PART_2: "day",
    PRICE_PER_DAY: "Price per day:",
    GEARBOX: "Gearbox",
    ENGINE: "Engine",
    DEPOSIT: "Deposit at pick-up",
    LESS_THAN_VALUE_1: `Less than ${isUS ? env.CURRENCY : ""}${
      env.DEPOSIT_FILTER_VALUE_1
    }${!isUS ? ` ${env.CURRENCY}` : ""}`,
    LESS_THAN_VALUE_2: `Less than ${isUS ? env.CURRENCY : ""}${
      env.DEPOSIT_FILTER_VALUE_2
    }${!isUS ? ` ${env.CURRENCY}` : ""}`,
    LESS_THAN_VALUE_3: `Less than ${isUS ? env.CURRENCY : ""}${
      env.DEPOSIT_FILTER_VALUE_3
    }${!isUS ? ` ${env.CURRENCY}` : ""}`,
  },
  de: {
    NEW_CAR: "Neues Auto",
    DELETE_CAR: "Möchten Sie dieses Auto wirklich löschen?",
    FUEL_POLICY: "Kraftstoffpolitik",
    DIESEL: "Diesel",
    GASOLINE: "Benzin",
    ELECTRIC: "Elektrisch",
    HYBRID: "Hybrid",
    PLUG_IN_HYBRID: "Plug-in-Hybrid",
    UNKNOWN: "Nicht spezifiziert",
    DIESEL_SHORT: "D",
    GASOLINE_SHORT: "B",
    ELECTRIC_SHORT: "E",
    HYBRID_SHORT: "H",
    PLUG_IN_HYBRID_SHORT: "PH",
    GEARBOX_MANUAL: "Manuell",
    GEARBOX_AUTOMATIC: "Automatisch",
    GEARBOX_MANUAL_SHORT: "M",
    GEARBOX_AUTOMATIC_SHORT: "A",
    FUEL_POLICY_LIKE_FOR_LIKE: "Gleich für Gleich",
    FUEL_POLICY_FREE_TANK: "Freier Tank",
    DIESEL_TOOLTIP: "Dieses Auto hat einen Dieselmotor",
    GASOLINE_TOOLTIP: "Dieses Auto hat einen Benzinmotor",
    ELECTRIC_TOOLTIP: "Dieses Auto ist elektrisch",
    HYBRID_TOOLTIP: "Dieses Auto ist ein Hybrid",
    PLUG_IN_HYBRID_TOOLTIP: "Dieses Auto ist ein Plug-in-Hybrid",
    GEARBOX_MANUAL_TOOLTIP: "Dieses Auto hat ein manuelles Getriebe",
    GEARBOX_AUTOMATIC_TOOLTIP: "Dieses Auto hat ein automatisches Getriebe",
    SEATS_TOOLTIP_1: "Dieses Auto hat ",
    SEATS_TOOLTIP_2: "Sitze",
    DOORS_TOOLTIP_1: "Dieses Auto hat ",
    DOORS_TOOLTIP_2: "Türen",
    AIRCON_TOOLTIP: "Dieses Auto hat eine Klimaanlage",
    FUEL_POLICY_LIKE_FOR_LIKE_TOOLTIP:
      "Dieses Auto wird mit Kraftstoff geliefert und muss mit derselben Menge Kraftstoff zurückgegeben werden.",
    FUEL_POLICY_FREE_TANK_TOOLTIP:
      "Der Preis beinhaltet einen vollen Tank Kraftstoff.",
    MILEAGE: "Kilometerstand",
    MILEAGE_UNIT: "KM/Tag",
    UNLIMITED: "Unbegrenzt",
    LIMITED: "Begrenzt",
    CANCELLATION: "Stornierung",
    CANCELLATION_TOOLTIP:
      "Die Buchung kann vor dem Mietbeginndatum storniert werden.",
    AMENDMENTS: "Änderungen",
    AMENDMENTS_TOOLTIP:
      "Die Buchung kann vor dem Mietbeginndatum geändert werden.",
    THEFT_PROTECTION: "Diebstahlschutz",
    THEFT_PROTECTION_TOOLTIP: "Die Miete kann Diebstahlschutz enthalten.",
    COLLISION_DAMAGE_WAVER: "Kollisionsschadensverzicht",
    COLLISION_DAMAGE_WAVER_TOOLTIP:
      "Die Miete kann einen Kollisionsschadensverzicht enthalten.",
    FULL_INSURANCE: "Vollkaskoversicherung",
    FULL_INSURANCE_TOOLTIP:
      "Die Miete kann einen Kollisionsschadensverzicht und Diebstahlschutz des Fahrzeugs enthalten.",
    ADDITIONAL_DRIVER: "Zusätzlicher Fahrer",
    INCLUDED: "Inklusive",
    UNAVAILABLE: "Nicht verfügbar",
    CAR_AVAILABLE: "Verfügbar zur Miete",
    CAR_AVAILABLE_TOOLTIP: "Dieses Auto ist verfügbar zur Miete.",
    CAR_UNAVAILABLE: "Nicht verfügbar zur Miete",
    CAR_UNAVAILABLE_TOOLTIP: "Dieses Auto ist nicht verfügbar zur Miete.",
    VIEW_CAR: "Dieses Auto ansehen",
    EMPTY_LIST: "Keine Autos.",
    BOOK: "Dieses Auto wählen",
    PRICE_DAYS_PART_1: "Preis für",
    PRICE_DAYS_PART_2: "Tag",
    PRICE_PER_DAY: "Preis pro Tag:",
    GEARBOX: "Getriebe",
    ENGINE: "Motor",
    DEPOSIT: "Kaution bei Abholung",
    LESS_THAN_VALUE_1: `Weniger als ${isUS ? env.CURRENCY : ""}${
      env.DEPOSIT_FILTER_VALUE_1
    }${!isUS ? ` ${env.CURRENCY}` : ""}`,
    LESS_THAN_VALUE_2: `Weniger als ${isUS ? env.CURRENCY : ""}${
      env.DEPOSIT_FILTER_VALUE_2
    }${!isUS ? ` ${env.CURRENCY}` : ""}`,
    LESS_THAN_VALUE_3: `Weniger als ${isUS ? env.CURRENCY : ""}${
      env.DEPOSIT_FILTER_VALUE_3
    }${!isUS ? ` ${env.CURRENCY}` : ""}`,
  },
});

langHelper.setLanguage(strings);
export { strings };
