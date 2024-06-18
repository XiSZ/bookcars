import LocalizedStrings from "react-localization";
import * as langHelper from "../common/langHelper";

const strings = new LocalizedStrings({
  fr: {
    SIGN_IN_HEADING: "Connexion",
    SIGN_IN: "Se connecter",
    SIGN_UP: "S'inscrire",
    ERROR_IN_SIGN_IN: "E-mail ou mot de passe incorrect.",
    IS_BLACKLISTED: "Votre compte est suspendu.",
    RESET_PASSWORD: "Mot de passe oublié ?",
    STAY_CONNECTED: "Rester connecté",
  },
  en: {
    SIGN_IN_HEADING: "Sign in",
    SIGN_IN: "Sign in",
    SIGN_UP: "Sign up",
    ERROR_IN_SIGN_IN: "Incorrect email or password.",
    IS_BLACKLISTED: "Your account is suspended.",
    RESET_PASSWORD: "Forgot password?",
    STAY_CONNECTED: "Stay connected",
  },
  de: {
    SIGN_IN_HEADING: "Einloggen",
    SIGN_IN: "Einloggen",
    SIGN_UP: "Anmelden",
    ERROR_IN_SIGN_IN: "Falsche E-Mail oder Passwort.",
    IS_BLACKLISTED: "Ihr Konto ist gesperrt.",
    RESET_PASSWORD: "Passwort vergessen?",
    STAY_CONNECTED: "Verbunden bleiben",
  },
});

langHelper.setLanguage(strings);
export { strings };
