import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/common/langHelper'

const strings = new LocalizedStrings({
  fr: {
    NEW_BOOKING: "Nouvelle réservation",
  },
  en: {
    NEW_BOOKING: "New Booking",
  },
  de: {
    NEW_BOOKING: "Neue Buchung",
  },
});

langHelper.setLanguage(strings);
export { strings };
