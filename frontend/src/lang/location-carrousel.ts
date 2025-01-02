import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/common/langHelper'

const strings = new LocalizedStrings({
  fr: {
    SELECT_LOCATION: "Choisir ce lieu",
    AVALIABLE_LOCATION: "lieu disponible",
    AVALIABLE_LOCATIONS: "lieux disponibles",
  },
  en: {
    SELECT_LOCATION: "Select Location",
    AVALIABLE_LOCATION: "available location",
    AVALIABLE_LOCATIONS: "available locations",
  },
  de: {
    SELECT_LOCATION: "Standort auswählen",
    AVALIABLE_LOCATION: "verfügbarer Standort",
    AVALIABLE_LOCATIONS: "verfügbare Standorte",
  },
  es: {
    SELECT_LOCATION: "Seleccionar ubicación",
    AVALIABLE_LOCATION: "ubicación disponible",
    AVALIABLE_LOCATIONS: "ubicaciones disponibles",
  },
});

langHelper.setLanguage(strings);
export { strings };
