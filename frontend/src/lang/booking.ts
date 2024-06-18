import LocalizedStrings from "react-localization";
import * as langHelper from "../common/langHelper";

const strings = new LocalizedStrings({
  fr: {
    TOTAL: "Total :",
  },
  en: {
    TOTAL: "Total:",
  },
  de: {
    TOTAL: "Gesamt:",
  },
});

langHelper.setLanguage(strings);
export { strings };
