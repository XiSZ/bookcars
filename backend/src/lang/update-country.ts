import LocalizedStrings from "react-localization";
import * as langHelper from "../common/langHelper";

const strings = new LocalizedStrings({
  fr: {
    UPDATE_COUNTRY: "Modification du pays",
    COUNTRY_UPDATED: "Pays modifié avec succès.",
  },
  en: {
    UPDATE_COUNTRY: "Country update",
    COUNTRY_UPDATED: "Country updated successfully.",
  },
  de: {
    UPDATE_COUNTRY: "Land aktualisieren",
    COUNTRY_UPDATED: "Land erfolgreich aktualisiert.",
  },
});

langHelper.setLanguage(strings);
export { strings };
