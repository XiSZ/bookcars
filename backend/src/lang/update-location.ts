import LocalizedStrings from "react-localization";
import * as langHelper from "../common/langHelper";

const strings = new LocalizedStrings({
  fr: {
    UPDATE_LOCATION: "Modification du lieu",
    LOCATION_UPDATED: "Lieu modifié avec succès.",
  },
  en: {
    UPDATE_LOCATION: "Location update",
    LOCATION_UPDATED: "Location updated successfully.",
  },
  de: {
    UPDATE_LOCATION: "Standort aktualisieren",
    LOCATION_UPDATED: "Standort erfolgreich aktualisiert.",
  },
});

langHelper.setLanguage(strings);
export { strings };
