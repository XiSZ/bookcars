import LocalizedStrings from "react-localization";
import * as langHelper from "../common/langHelper";

const strings = new LocalizedStrings({
  fr: {
    EMPTY_LIST: "Pas de fournisseurs.",
    VIEW_SUPPLIER: "Voir le profil de ce fournisseur",
    DELETE_SUPPLIER:
      "Êtes-vous sûr de vouloir supprimer ce fournisseur et toutes ses données ?",
  },
  en: {
    EMPTY_LIST: "No suppliers.",
    VIEW_SUPPLIER: "View supplier profile",
    DELETE_SUPPLIER:
      "Are you sure you want to delete this supplier and all its data?",
  },
  de: {
    EMPTY_LIST: "Keine Lieferanten.",
    VIEW_SUPPLIER: "Lieferantenprofil anzeigen",
    DELETE_SUPPLIER:
      "Möchten Sie diesen Lieferanten und alle seine Daten wirklich löschen?",
  },
});

langHelper.setLanguage(strings);
export { strings };
