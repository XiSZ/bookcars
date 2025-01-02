import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/common/langHelper'

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
    VIEW: "Voir cette réservation",
    UPDATE: "Modifier cette réservation",
    DAYS: "Jours",
    COST: "Total",
    CANCEL: "Annuler cette réservation",
    CANCEL_BOOKING: "Êtes-vous sûr de vouloir annuler cette réservation ?",
    CANCEL_BOOKING_REQUEST_SENT:
      "Votre requête d'annulation a bien été prise en compte. Nous vous contacterons pour finaliser la procédure d'annulation.",
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
    VIEW: "View this booking",
    UPDATE: "Edit this booking",
    DAYS: "Days",
    COST: "Cost",
    CANCEL: "Cancel this booking",
    CANCEL_BOOKING: "Are you sure you want to cancel this booking?",
    CANCEL_BOOKING_REQUEST_SENT:
      "Your cancel request has been submitted. We will contact you to finalize the cancellation procedure.",
  },
  es: {
    CAR: "Coche",
    SUPPLIER: "Proveedor",
    DRIVER: "Conductor",
    PRICE: "Precio",
    STATUS: "Estado",
    UPDATE_SELECTION: "Modificar selección",
    DELETE_SELECTION: "Eliminar selección",
    UPDATE_STATUS: "Modificación del estado",
    NEW_STATUS: "Nuevo estado",
    DELETE_BOOKING: "¿Está seguro de que desea eliminar esta reserva?",
    DELETE_BOOKINGS:
      "¿Está seguro de que desea eliminar las reservas seleccionadas?",
    EMPTY_LIST: "No hay reservas.",
    VIEW: "Ver esta reserva",
    UPDATE: "Modificar esta reserva",
    DAYS: "Días",
    COST: "Total",
    CANCEL: "Cancelar esta reserva",
    CANCEL_BOOKING: "¿Está seguro de que desea cancelar esta reserva?",
    CANCEL_BOOKING_REQUEST_SENT:
      "Su solicitud de cancelación ha sido recibida. Nos pondremos en contacto con usted para finalizar el procedimiento de cancelación.",
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
    VIEW: "Diese Buchung anzeigen",
    UPDATE: "Diese Buchung bearbeiten",
    DAYS: "Tage",
    COST: "KOSTEN",
    CANCEL: "Diese Buchung stornieren",
    CANCEL_BOOKING: "Möchten Sie diese Buchung wirklich stornieren?",
    CANCEL_BOOKING_REQUEST_SENT:
      "Ihre Stornierungsanfrage wurde übermittelt. Wir werden Sie kontaktieren, um das Stornierungsverfahren abzuschließen.",
  },
});

langHelper.setLanguage(strings);
export { strings };
