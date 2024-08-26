import LocalizedStrings from "react-localization";
import * as langHelper from "../common/langHelper";

const strings = new LocalizedStrings({
  fr: {
    NEW_SUPPLIER: "Nouveau fournisseur",
    SUPPLIER: "fournisseur",
    SUPPLIERS: "fournisseurs",
  },
  en: {
    NEW_SUPPLIER: "New supplier",
    SUPPLIER: "supplier",
    SUPPLIERS: "suppliers",
  },
  de: {
    NEW_SUPPLIER: "Neuer Dienstleister",
    SUPPLIER: "Dienstleister",
    SUPPLIERS: "Lieferanten",
  },
});

langHelper.setLanguage(strings);
export { strings };
