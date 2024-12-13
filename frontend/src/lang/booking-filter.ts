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
  es: {
    PICK_UP_LOCATION: "Lugar de recogida",
    DROP_OFF_LOCATION: "Lugar de devolución",
  },
  de: {
    PICK_UP_LOCATION: "Abholstandort",
    DROP_OFF_LOCATION: "Rückgabestandort",
  },
});

langHelper.setLanguage(strings);
export { strings };
