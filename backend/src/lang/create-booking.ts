import LocalizedStrings from "react-localization";
import * as langHelper from "../common/langHelper";

const strings = new LocalizedStrings({
  fr: {
    NEW_BOOKING_HEADING: "Nouvelle réservation",
  },
  en: {
    NEW_BOOKING_HEADING: "New booking",
  },
  de: {
    NEW_BOOKING_HEADING: "Neue Buchung",
  },
});

langHelper.setLanguage(strings);
export { strings };
