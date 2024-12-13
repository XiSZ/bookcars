import LocalizedStrings from "react-localization";
import * as langHelper from "@/common/langHelper";

const strings = new LocalizedStrings({
  fr: {
    PICK_UP_LOCATION: "Lieu de prise en charge",
    DROP_OFF_LOCATION: "Lieu de restitution",
  },
  en: {
    PICK_UP_LOCATION: "Pick-up location",
    DROP_OFF_LOCATION: "Drop-off location",
  },
  de: {
    PICK_UP_LOCATION: "Abholort",
    DROP_OFF_LOCATION: "Rückgabeort",
  },
});

langHelper.setLanguage(strings);
export { strings };
