import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/utils/langHelper'

const strings = new LocalizedStrings({
  fr: {
    NEW_BOOKING: "Nouvelle réservation",
  },
  en: {
    NEW_BOOKING: "New Booking",
  },
<<<<<<< HEAD
  de: {
    NEW_BOOKING: "Neue Buchung",
  },
});
=======
  es: {
    NEW_BOOKING: 'Nueva reserva',
  },
})
>>>>>>> origin/main

langHelper.setLanguage(strings);
export { strings };
