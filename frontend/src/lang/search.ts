import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/utils/langHelper'

const strings = new LocalizedStrings({
  fr: {
<<<<<<< HEAD
    VIEW_ON_MAP: "Voir sur la carte",
    SHOW_FILTERS: "Afficher les filtres",
    HILE_FILTERS: "Masquer les filtres",
  },
  en: {
    VIEW_ON_MAP: "View on map",
    SHOW_FILTERS: "Show Filters",
    HILE_FILTERS: "Hide Filters",
  },
  es: {
    VIEW_ON_MAP: "Ver en el mapa",
    SHOW_FILTERS: "Mostrar filtros",
    HILE_FILTERS: "Ocultar filtros",
=======
    SHOW_FILTERS: 'Afficher les filtres',
    HILE_FILTERS: 'Masquer les filtres',
  },
  en: {
    SHOW_FILTERS: 'Show Filters',
    HILE_FILTERS: 'Hide Filters',
  },
  es: {
    SHOW_FILTERS: 'Mostrar filtros',
    HILE_FILTERS: 'Ocultar filtros',
>>>>>>> origin/main
  },
  de: {
    VIEW_ON_MAP: "Auf Karte anzeigen",
    SHOW_FILTERS: "Filter anzeigen",
    HILE_FILTERS: "Filter ausblenden",
  },
});

langHelper.setLanguage(strings);
export { strings };
