import LocalizedStrings from 'react-localization'
import * as langHelper from '@/common/langHelper'

const strings = new LocalizedStrings({
  fr: {
    BOOKING_HEADING: "Réserver Maintenant",
    BOOKING_OPTIONS: "Vos options de réservation",
    BOOKING_DETAILS: "Vos données de réservation",
    DAYS: "Jours",
    CAR: "Voiture",
    SUPPLIER: "Fournisseur",
    COST: "Total",
    DRIVER_DETAILS: "Informations du conducteur principal",
    EMAIL_INFO: "Vous recevrez une confirmation à cette adresse.",
    PHONE_INFO: "Si nous avons besoin de vous contacter d'urgence.",
    PAYMENT: "Paiement sécurisé",
    CARD_NUMBER: "Numéro de carte",
    CARD_NUMBER_NOT_VALID: "Numéro de carte non valide",
    CARD_EXPIRY_NOT_VALID: "Date d'expiration non valide",
    CVV_NOT_VALID: "Code de sécurité non valide",
    BOOK: "Réserver",
    SIGN_IN: "Se connecter ?",
    SECURE_PAYMENT_INFO:
      "Vos données sont protégées par le paiement sécurisé SSL.",
    SUCCESS:
      "Votre paiement a été effectué avec succès. Nous vous avons envoyé un e-mail de confirmation.",
    PAY_LATER_SUCCESS:
      "Votre réservation a été effectuée avec succès. Nous vous avons envoyé un e-mail de confirmation.",
    PAYMENT_OPTIONS: "Options de paiement",
    PAY_LATER: "Payer plus tard",
    PAY_LATER_INFO: "Modification et annulation gratuites",
    PAY_ONLINE: "Payer en ligne",
    PAY_ONLINE_INFO: "Modification et annulation sous conditions",
    PAYMENT_FAILED: "Paiement échoué.",
    CHECKING: "Vérification en cours...",
  },
  en: {
    BOOKING_HEADING: 'Book now',
    BOOKING_OPTIONS: 'Your booking options',
    BOOKING_DETAILS: 'Your booking details',
    DAYS: 'Days',
    CAR: 'Car',
    SUPPLIER: 'Supplier',
    COST: 'COST',
    DRIVER_DETAILS: 'Driver details',
    EMAIL_INFO: 'You will receive a confirmation email at this address.',
    PHONE_INFO: 'If we need to contact you urgently.',
    PAYMENT: 'Secure payment',
    CARD_NUMBER: 'Card Number',
    CARD_NUMBER_NOT_VALID: 'Invalid card number',
    CARD_EXPIRY_NOT_VALID: 'Invalid expiry date',
    CVV_NOT_VALID: 'Invalid Card Validation Code',
    BOOK: 'Book now',
    SIGN_IN: 'Sign in?',
    SECURE_PAYMENT_INFO: 'Your data is protected by SSL secure payment.',
    SUCCESS: 'Your payment was successfully done. We sent you a confirmation email.',
    PAY_LATER_SUCCESS: 'Your booking was successfully done. We sent you a confirmation email.',
    PAYMENT_OPTIONS: 'Payment options',
    PAY_LATER: 'Pay later',
    PAY_LATER_INFO: 'Free amendments and cancellation',
    PAY_ONLINE: 'Pay online',
    PAY_ONLINE_INFO: 'Amendments and cancellation under conditions',
    PAYMENT_FAILED: 'Payment failed.',
    CHECKING: 'Checking in progress...',
  },
  de: {
    BOOKING_HEADING: "Jetzt buchen",
    BOOKING_OPTIONS: "Ihre Buchungsoptionen",
    BOOKING_DETAILS: "Ihre Buchungsdetails",
    DAYS: "Tage",
    CAR: "Auto",
    SUPPLIER: "Dienstleister",
    COST: "KOSTEN",
    DRIVER_DETAILS: "Fahrerdetails",
    EMAIL_INFO: "Sie erhalten eine Bestätigungs-E-Mail an diese Adresse.",
    PHONE_INFO: "Wenn wir Sie dringend kontaktieren müssen.",
    PAYMENT: "Sichere Zahlung",
    CARD_NUMBER: "Kartennummer",
    CARD_NUMBER_NOT_VALID: "Ungültige Kartennummer",
    CARD_EXPIRY_NOT_VALID: "Ungültiges Ablaufdatum",
    CVV_NOT_VALID: "Ungültiger Kartenvalidierungscode",
    BOOK: "Jetzt buchen",
    SIGN_IN: "Anmelden?",
    SECURE_PAYMENT_INFO:
      "Ihre Daten sind durch eine sichere SSL-Zahlung geschützt.",
    SUCCESS:
      "Ihre Zahlung war erfolgreich. Wir haben Ihnen eine Bestätigungs-E-Mail gesendet.",
    PAY_LATER_SUCCESS:
      "Ihre Buchung war erfolgreich. Wir haben Ihnen eine Bestätigungs-E-Mail gesendet.",
    PAYMENT_OPTIONS: "Zahlungsoptionen",
    PAY_LATER: "Später bezahlen",
    PAY_LATER_INFO: "Kostenlose Änderungen und Stornierungen",
    PAY_ONLINE: "Online bezahlen",
    PAY_ONLINE_INFO: "Änderungen und Stornierungen unter Bedingungen",
    PAYMENT_FAILED: "Zahlung fehlgeschlagen.",
    CHECKING: "Überprüfung läuft...",
  },
});

langHelper.setLanguage(strings);
export { strings };
