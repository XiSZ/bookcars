import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/utils/langHelper'

const strings = new LocalizedStrings({
  fr: {
    UPDATE_USER_HEADING: "Modification de l'utilisateur",
  },
  en: {
    UPDATE_USER_HEADING: "User update",
  },
<<<<<<< HEAD
  de: {
    UPDATE_USER_HEADING: "Benutzeraktualisierung",
  },
});
=======
  es: {
    UPDATE_USER_HEADING: 'Actualización del usuario',
  },
})
>>>>>>> origin/main

langHelper.setLanguage(strings);
export { strings };
