import LocalizedStrings from "react-localization";
import * as langHelper from "../common/langHelper";

const strings = new LocalizedStrings({
  fr: {
    NEW_LOCATION_HEADING: "Nouveau lieu",
    LOCATION_NAME: "Lieu",
    INVALID_LOCATION: "Ce lieu existe déjà.",
    LOCATION_CREATED: "Lieu créé avec succès.",
  },
  en: {
    NEW_LOCATION_HEADING: "New location",
    LOCATION_NAME: "Location",
    INVALID_LOCATION: "This location already exists.",
    LOCATION_CREATED: "Location created successfully.",
  },
  de: {
    NEW_LOCATION_HEADING: "Neuer Standort",
    LOCATION_NAME: "Ort",
    INVALID_LOCATION: "Dieser Standort existiert bereits.",
    LOCATION_CREATED: "Standort erfolgreich erstellt.",
  },
});

langHelper.setLanguage(strings);
export { strings };
