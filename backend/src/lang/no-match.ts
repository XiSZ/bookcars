import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/common/langHelper'

const strings = new LocalizedStrings({
  fr: {
    NO_MATCH: "Rien à voir ici !",
  },
  en: {
    NO_MATCH: "Nothing to see here!",
  },
  de: {
    NO_MATCH: "Hier gibt es nichts zu sehen!",
  },
});

langHelper.setLanguage(strings);
export { strings };
