import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/common/langHelper'

const strings = new LocalizedStrings({
  fr: {
    SEATS: "Sièges",
    TWO: "2 sièges",
    FOUR: "4 sièges",
    FIVE: "5 sièges",
    FIVE_PLUS: "5+ sièges",
  },
  en: {
    SEATS: "Seats",
    TWO: "2 seats",
    FOUR: "4 seats",
    FIVE: "5 seats",
    FIVE_PLUS: "5+ seats",
  },
  de: {
    SEATS: "Sitze",
    TWO: "2 Sitze",
    FOUR: "4 Sitze",
    FIVE: "5 Sitze",
    FIVE_PLUS: "5+ Sitze",
  },
});

langHelper.setLanguage(strings);
export { strings };
