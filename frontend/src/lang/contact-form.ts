import LocalizedStrings from "react-localization";
import * as langHelper from "../common/langHelper";

const strings = new LocalizedStrings({
  fr: {
    CONTACT_HEADING: "Contact",
    SUBJECT: "Objet",
    MESSAGE: "Message",
    SEND: "Envoyer",
    MESSAGE_SENT: "Message envoyé",
  },
  en: {
    CONTACT_HEADING: "Contact",
    SUBJECT: "Subject",
    MESSAGE: "Message",
    SEND: "Send",
    MESSAGE_SENT: "Message sent",
  },
  de: {
    CONTACT_HEADING: "Kontakt",
    SUBJECT: "Betreff",
    MESSAGE: "Nachricht",
    SEND: "Senden",
    MESSAGE_SENT: "Nachricht gesendet",
  },
});

langHelper.setLanguage(strings);
export { strings };
