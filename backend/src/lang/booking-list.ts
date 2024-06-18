import LocalizedStrings from "react-localization";
import * as langHelper from "../common/langHelper";

const strings = new LocalizedStrings({
  fr: {
    CAR: "Voiture",
    SUPPLIER: "Fournisseur",
    DRIVER: "Conducteur",
    PRICE: "Prix",
    STATUS: "Statut",
    UPDATE_SELECTION: "Modifier la sélection",
    DELETE_SELECTION: "Supprimer la sélection",
    UPDATE_STATUS: "Modification du statut",
    NEW_STATUS: "Nouveau statut",
    DELETE_BOOKING: "Êtes-vous sûr de vouloir supprimer cette réservation ?",
    DELETE_BOOKINGS:
      "Êtes-vous sûr de vouloir supprimer les réservations sélectionnées ?",
    EMPTY_LIST: "Pas de réservations.",
    DAYS: "Jours",
    COST: "Total",
  },
  en: {
    CAR: "Car",
    SUPPLIER: "Supplier",
    DRIVER: "Driver",
    PRICE: "Price",
    STATUS: "Status",
    UPDATE_SELECTION: "Edit selection",
    DELETE_SELECTION: "Delete selection",
    UPDATE_STATUS: "Status modification",
    NEW_STATUS: "New status",
    DELETE_BOOKING: "Are you sure you want to delete this booking?",
    DELETE_BOOKINGS: "Are you sure you want to delete the selected bookings?",
    EMPTY_LIST: "No bookings.",
    DAYS: "Days",
    COST: "COST",
  },
  de: {
    CAR: "Auto",
    SUPPLIER: "Dienstleister",
    DRIVER: "Fahrer",
    PRICE: "Preis",
    STATUS: "Status",
    UPDATE_SELECTION: "Auswahl bearbeiten",
    DELETE_SELECTION: "Auswahl löschen",
    UPDATE_STATUS: "Statusänderung",
    NEW_STATUS: "Neuer Status",
    DELETE_BOOKING: "Möchten Sie diese Buchung wirklich löschen?",
    DELETE_BOOKINGS: "Möchten Sie die ausgewählten Buchungen wirklich löschen?",
    EMPTY_LIST: "Keine Buchungen.",
    DAYS: "Tage",
    COST: "Gesamtkosten",
  },
});

langHelper.setLanguage(strings);
export { strings };
