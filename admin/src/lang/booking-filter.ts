import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/utils/langHelper'

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

  es: {
    PICK_UP_LOCATION: 'Lugar de recogida',
    DROP_OFF_LOCATION: 'Lugar de entrega',
  },
})

langHelper.setLanguage(strings);
export { strings };
