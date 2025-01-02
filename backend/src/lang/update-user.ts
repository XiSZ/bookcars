import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/common/langHelper'

const strings = new LocalizedStrings({
  fr: {
    UPDATE_USER_HEADING: "Modification de l'utilisateur",
  },
  en: {
    UPDATE_USER_HEADING: "User update",
  },
  de: {
    UPDATE_USER_HEADING: "Benutzeraktualisierung",
  },
});

langHelper.setLanguage(strings);
export { strings };
