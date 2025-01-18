import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/common/langHelper'

const strings = new LocalizedStrings({
  fr: {
    NO_MATCH: "Rien à voir ici !",
  },
  en: {
    NO_MATCH: "Nothing to see here!",
  },
<<<<<<< HEAD
  de: {
    NO_MATCH: "Hier gibt es nichts zu sehen!",
  },
});
=======
  es: {
    NO_MATCH: '¡Nada que ver aquí!',
  },
})
>>>>>>> origin/main

langHelper.setLanguage(strings);
export { strings };
