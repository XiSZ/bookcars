import LocalizedStrings from 'react-localization'
import * as langHelper from '@/common/langHelper'

const strings = new LocalizedStrings({
  fr: {
    PICK_UP_DATE: "Date de prise en charge",
    DROP_OFF_DATE: "Date de retour",
    DROP_OFF: "Restituer au même endroit",
  },
  en: {
    PICK_UP_DATE: "Pick-up Date",
    DROP_OFF_DATE: "Drop-off Date",
    DROP_OFF: "Return to same location",
  },
  de: {
    PICK_UP_DATE: "Abholdatum",
    DROP_OFF_DATE: "Rückgabedatum",
    DROP_OFF: "Zurück zum selben Ort",
  },
});

langHelper.setLanguage(strings);
export { strings };
