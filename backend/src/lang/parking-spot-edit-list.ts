import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/common/langHelper'

const strings = new LocalizedStrings({
  fr: {
    NEW_PARKING_SPOT: "Nouvelle place de parking",
  },
  en: {
    NEW_PARKING_SPOT: "New parking spot",
  },
<<<<<<< HEAD
  de: {
    NEW_PARKING_SPOT: "Neuer Parkplatz",
  },
});
=======
  es: {
    NEW_PARKING_SPOT: 'Nueva plaza de aparcamiento',
  },
})
>>>>>>> origin/main

langHelper.setLanguage(strings);
export { strings };
