import LocalizedStrings from 'localized-strings'
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
    CVV_NOT_VALID: 'Code de sécurité non valide',
    BOOK: 'Réserver',
    SIGN_IN: 'Se connecter ?',
    SECURE_PAYMENT_INFO: 'Vos données sont protégées par le paiement sécurisé SSL.',
    SUCCESS: 'Votre paiement a été effectué avec succès. Nous vous avons envoyé un e-mail de confirmation.',
    PAY_LATER_SUCCESS: 'Votre réservation a été effectuée avec succès. Nous vous avons envoyé un e-mail de confirmation.',
    PAYMENT_OPTIONS: 'Options de paiement',
    PAY_LATER: 'Payer plus tard',
    PAY_LATER_INFO: 'Modification et annulation gratuites',
    PAY_ONLINE: 'Payer en ligne',
    PAY_ONLINE_INFO: 'Modification et annulation sous conditions',
    PAYMENT_FAILED: 'Paiement échoué.',
    CHECKING: 'Vérification en cours...',
    LICENSE_REQUIRED: 'Permis de conduire requis',
    PRICE_FOR: 'Pix pour',
    DAY: 'jour',
    PICK_UP_CHECKLIST_TITLE: 'Tout sur votre prise en charge',
    PICK_UP_CHECKLIST_ARRIVE_ON_TIME_TITLE: "Arrivez à l'heure",
    PICK_UP_CHECKLIST_ARRIVE_ON_TIME_CONTENT: "Les sociétés de location de voitures vous permettent uniquement de récupérer les clés à l'heure de prise en charge qui vous a été assignée. Votre voiture vous est généralement garantie pendant une durée limitée après l'heure de prise en charge prévue. Ensuite, elle sera probablement proposée à un autre client.",
    PICK_UP_CHECKLIST_DOCUMENTS_TITLE: 'Ce dont vous avez besoin',
    PICK_UP_CHECKLIST_DOCUMENTS_CONTENT: "Lors de la prise en charge du véhicule, vous aurez besoin d'un passeport ou une carte d'identité et un permis de conduire.",
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
    LICENSE_REQUIRED: "Driver's license required",
    PRICE_FOR: 'Price for',
    DAY: 'day',
    PICK_UP_CHECKLIST_TITLE: 'Your pick-up checklist',
    PICK_UP_CHECKLIST_ARRIVE_ON_TIME_TITLE: 'Arrive on time',
    PICK_UP_CHECKLIST_ARRIVE_ON_TIME_CONTENT: "Rental companies only allow you to get your keys at your allocated pick-up time, they'll usually hold your car for a limited time after you're due to pick it up - then it's likely to be passed to another customer.",
    PICK_UP_CHECKLIST_DOCUMENTS_TITLE: 'What you bring with you',
    PICK_UP_CHECKLIST_DOCUMENTS_CONTENT: "When you pick the car up, you'll need a passport or national ID card and a driver's license.",
  },
  es: {
    BOOKING_HEADING: 'Reservar ahora',
    BOOKING_OPTIONS: 'Tus opciones de reserva',
    BOOKING_DETAILS: 'Tus detalles de reserva',
    DAYS: 'Días',
    CAR: 'Coche',
    SUPPLIER: 'Proveedor',
    COST: 'Total',
    DRIVER_DETAILS: 'Detalles del conductor principal',
    EMAIL_INFO: 'Recibirás un correo de confirmación en esta dirección.',
    PHONE_INFO: 'Si necesitamos contactarte de urgencia.',
    PAYMENT: 'Pago seguro',
    CARD_NUMBER: 'Número de tarjeta',
    CARD_NUMBER_NOT_VALID: 'Número de tarjeta no válido',
    CARD_EXPIRY_NOT_VALID: 'Fecha de caducidad no válida',
    CVV_NOT_VALID: 'Código de seguridad no válido',
    BOOK: 'Reservar',
    SIGN_IN: '¿Iniciar sesión?',
    SECURE_PAYMENT_INFO: 'Tus datos están protegidos por un pago seguro SSL.',
    SUCCESS: 'Tu pago se realizó con éxito. Te hemos enviado un correo de confirmación.',
    PAY_LATER_SUCCESS: 'Tu reserva se ha realizado con éxito. Te hemos enviado un correo de confirmación.',
    PAYMENT_OPTIONS: 'Opciones de pago',
    PAY_LATER: 'Pagar más tarde',
    PAY_LATER_INFO: 'Modificaciones y cancelación gratuitas',
    PAY_ONLINE: 'Pagar en línea',
    PAY_ONLINE_INFO: 'Modificaciones y cancelación bajo condiciones',
    PAYMENT_FAILED: 'El pago falló.',
    CHECKING: 'Verificación en curso...',
    LICENSE_REQUIRED: 'Se requiere licencia de conducir',
    PRICE_FOR: 'Precio por',
    DAY: 'día',
    PICK_UP_CHECKLIST_TITLE: 'Lo que no se te puede olvidar para la recogida',
    PICK_UP_CHECKLIST_ARRIVE_ON_TIME_TITLE: 'Sé puntual',
    PICK_UP_CHECKLIST_ARRIVE_ON_TIME_CONTENT: 'Las empresas de alquiler solo te dan las llaves a la hora de recogida asignada. Normalmente, te reservarán el coche durante un tiempo limitado una vez transcurrida la hora prevista para recogerlo. Después, es probable que se lo alquilen a otro cliente.',
    PICK_UP_CHECKLIST_DOCUMENTS_TITLE: 'Qué llevar contigo',
    PICK_UP_CHECKLIST_DOCUMENTS_CONTENT: 'A la hora de recoger el vehículo deberás facilitar el pasaporte o el documento nacional de identidad y Todos los conductores deberán presentar su permiso de conducir.',
  },
})

langHelper.setLanguage(strings)
export { strings }
