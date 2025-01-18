import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/common/langHelper'

const strings = new LocalizedStrings({
  fr: {
    CREATE_USER_HEADING: "Nouvelle utilisateur",
    BIRTH_DATE: "Date de naissance",
  },
  en: {
    CREATE_USER_HEADING: "New user",
    BIRTH_DATE: "Birth date",
  },
<<<<<<< HEAD
  de: {
    CREATE_USER_HEADING: "Neuer Benutzer",
    BIRTH_DATE: "Geburtsdatum",
  },
});
=======
  es: {
    CREATE_USER_HEADING: 'Nuevo usuario',
    BIRTH_DATE: 'Fecha de nacimiento',
  },
})
>>>>>>> origin/main

langHelper.setLanguage(strings);
export { strings };
