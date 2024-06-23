import LocalizedStrings from "react-localization";
import * as langHelper from "../common/langHelper";

const strings = new LocalizedStrings({
  fr: {
    PICK_UP_DATE: "Date de prise en charge",
    DROP_OFF_DATE: "Date de retour",
    DROP_OFF: "Restituer au même endroit",
    COVER: "Les meilleurs agences de location de voitures",
    SUPPLIERS_TITLE: "Vous Connecter aux plus Grandes Enseignes",
    MAP_TITLE: "Carte des Agences de Location de Voitures",
    MAP_PICK_UP_SELECTED: "Lieu de prise en charge sélectionné",
    MAP_DROP_OFF_SELECTED: "Lieu de restitution sélectionné",
  },
  en: {
    PICK_UP_DATE: "Pick-up Date",
    DROP_OFF_DATE: "Drop-off Date",
    DROP_OFF: "Return to same location",
    COVER: "Top Car Rental Companies",
    SUPPLIERS_TITLE: "Connecting you to the Biggest Brands",
    MAP_TITLE: "Map of Car Rental Locations",
    MAP_PICK_UP_SELECTED: "Pick-up Location selected",
    MAP_DROP_OFF_SELECTED: "Drop-off Location selected",
  },
  de: {
    PICK_UP_DATE: "Abholdatum",
    DROP_OFF_DATE: "Rückgabedatum",
    DROP_OFF: "Zurück zum selben Ort",
    COVER: "Top Autovermietungen",
    SUPPLIERS_TITLE: "Bei den besten buchen",
    MAP_TITLE: "Karte der Autovermietungsstandorte",
    MAP_PICK_UP_SELECTED: "Abholort ausgewählt",
    MAP_DROP_OFF_SELECTED: "Rückgabeort ausgewählt",
  },
});
langHelper.setLanguage(strings);
export { strings };
