import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/common/langHelper'

const strings = new LocalizedStrings({
  fr: {
    UNAUTHORIZED: "Accès non autorisé",
  },
  en: {
    UNAUTHORIZED: "Unauthorized access",
  },
<<<<<<< HEAD
  de: {
    UNAUTHORIZED: "Unbefugter Zugriff",
  },
});
=======
  es: {
    UNAUTHORIZED: 'Acceso no autorizado',
  },
})
>>>>>>> origin/main

langHelper.setLanguage(strings);
export { strings };
