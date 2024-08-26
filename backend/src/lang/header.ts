import LocalizedStrings from "react-localization";
import * as langHelper from "../common/langHelper";

const strings = new LocalizedStrings({
  fr: {
    DASHBOARD: "Tableau de bord",
    HOME: "Accueil",
    COMPANIES: "Fournisseurs",
    LOCATIONS: "Lieux",
    CARS: "Voitures",
    USERS: "Utilisateurs",
    ABOUT: "À propos",
    TOS: "Conditions d'utilisation",
    CONTACT: "Contact",
    LANGUAGE: "Langue",
    SETTINGS: "Paramètres",
    SIGN_OUT: "Déconnexion",
    COUNTRIES: "Pays",
  },
  en: {
    DASHBOARD: "Dashboard",
    HOME: "Home",
    COMPANIES: "Suppliers",
    LOCATIONS: "Locations",
    CARS: "Cars",
    USERS: "Users",
    ABOUT: "About",
    TOS: "Terms of Service",
    CONTACT: "Contact",
    LANGUAGE: "Language",
    SETTINGS: "Settings",
    SIGN_OUT: "Sign out",
    COUNTRIES: "Countries",
  },
  de: {
    DASHBOARD: "Dashboard",
    HOME: "Startseite",
    COMPANIES: "Lieferanten",
    LOCATIONS: "Standorte",
    CARS: "Autos",
    USERS: "Benutzer",
    ABOUT: "Über",
    TOS: "Nutzungsbedingungen",
    CONTACT: "Kontakt",
    LANGUAGE: "Sprache",
    SETTINGS: "Einstellungen",
    SIGN_OUT: "Abmelden",
    COUNTRIES: "Länder",
  },
});

langHelper.setLanguage(strings);
export { strings };
