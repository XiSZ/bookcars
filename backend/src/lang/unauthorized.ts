import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/common/langHelper'

const strings = new LocalizedStrings({
  fr: {
    UNAUTHORIZED: "Accès non autorisé",
  },
  en: {
    UNAUTHORIZED: "Unauthorized access",
  },
  de: {
    UNAUTHORIZED: "Unbefugter Zugriff",
  },
});

langHelper.setLanguage(strings);
export { strings };
