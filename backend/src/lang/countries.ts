import LocalizedStrings from "react-localization";
import * as langHelper from "../common/langHelper";

const strings = new LocalizedStrings({
  fr: {
    NEW_COUNTRY: "Nouveau pays",
    DELETE_COUNTRY: "Êtes-vous sûr de vouloir supprimer ce pays ?",
    CANNOT_DELETE_COUNTRY:
      "Ce pays ne peut pas être supprimé car il est lié à des lieux.",
    EMPTY_LIST: "Pas de pays.",
    COUNTRY: "pays",
    COUNTRIES: "pays",
  },
  en: {
    NEW_COUNTRY: "New country",
    DELETE_COUNTRY: "Are you sure you want to delete this country?",
    CANNOT_DELETE_COUNTRY:
      "This country cannot be deleted because it is related to locations.",
    EMPTY_LIST: "No countries.",
    COUNTRY: "country",
    COUNTRIES: "countries",
  },
  de: {
    NEW_COUNTRY: "Neues Land",
    DELETE_COUNTRY: "Möchten Sie dieses Land wirklich löschen?",
    CANNOT_DELETE_COUNTRY:
      "Dieses Land kann nicht gelöscht werden, da es mit Orten verknüpft ist.",
    EMPTY_LIST: "Keine Länder.",
    COUNTRY: "Land",
    COUNTRIES: "Länder",
  },
});

langHelper.setLanguage(strings);
export { strings };
