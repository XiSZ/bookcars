import LocalizedStrings from "react-localization";
import * as langHelper from "../common/langHelper";

const strings = new LocalizedStrings({
  fr: {
    PICKUP_LOCATION: "Lieu de prise en charge",
    DROP_OFF_LOCATION: "Lieu de restitution",
  },
  en: {
    PICKUP_LOCATION: "Pickup location",
    DROP_OFF_LOCATION: "Drop-off location",
  },
  de: {
    PICKUP_LOCATION: "Abholort",
    DROP_OFF_LOCATION: "Rückgabeort",
  },
});

langHelper.setLanguage(strings);
export { strings };
