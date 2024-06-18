import LocalizedStrings from "react-localization";
import * as langHelper from "../common/langHelper";

const strings = new LocalizedStrings({
  fr: {
    TOTAL: "Total :",
    DELETE_BOOKING: "Êtes-vous sûr de vouloir supprimer cette réservation ?",
  },
  en: {
    TOTAL: "Total:",
    DELETE_BOOKING: "Are you sure you want to delete this booking?",
  },
  de: {
    TOTAL: "Gesamt:",
    DELETE_BOOKING: "Möchten Sie diese Buchung wirklich löschen?",
  },
});

langHelper.setLanguage(strings);
export { strings };
