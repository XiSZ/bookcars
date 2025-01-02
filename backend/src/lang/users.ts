import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/common/langHelper'

const strings = new LocalizedStrings({
  fr: {
    NEW_USER: "Nouvel utilisateur",
  },
  en: {
    NEW_USER: "New user",
  },
  de: {
    NEW_USER: "Neuer Benutzer",
  },
});

langHelper.setLanguage(strings);
export { strings };
