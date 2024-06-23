import LocalizedStrings from "react-localization";
import * as langHelper from "../common/langHelper";

const strings = new LocalizedStrings({
  fr: {
    SELECT_PICK_UP_LOCATION: "Choisir comme lieu de prise en charge",
    SELECT_DROP_OFF_LOCATION: "Choisir comme lieu de restitution",
  },
  en: {
    SELECT_PICK_UP_LOCATION: "Set as Pick-up Location",
    SELECT_DROP_OFF_LOCATION: "Set as Drop-off Location",
  },
  de: {
    SELECT_PICK_UP_LOCATION: "Als Abholort festlegen",
    SELECT_DROP_OFF_LOCATION: "Als Rückgabeort festlegen",
  },
});

langHelper.setLanguage(strings);
export { strings };
