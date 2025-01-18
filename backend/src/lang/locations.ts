import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/common/langHelper'

const strings = new LocalizedStrings({
  fr: {
    NEW_LOCATION: "Nouveau lieu",
    DELETE_LOCATION: "Êtes-vous sûr de vouloir supprimer ce lieu ?",
    CANNOT_DELETE_LOCATION:
      "Ce lieu ne peut pas être supprimé car il est lié à des voitures.",
    EMPTY_LIST: "Pas de lieux.",
    LOCATION: "lieu",
    LOCATIONS: "lieux",
  },
  en: {
    NEW_LOCATION: "New location",
    DELETE_LOCATION: "Are you sure you want to delete this location?",
    CANNOT_DELETE_LOCATION:
      "This location cannot be deleted because it is related to cars.",
    EMPTY_LIST: "No locations.",
    LOCATION: "location",
    LOCATIONS: "locations",
  },
<<<<<<< HEAD
  de: {
    NEW_LOCATION: "Neuer Standort",
    DELETE_LOCATION: "Möchten Sie diesen Standort wirklich löschen?",
    CANNOT_DELETE_LOCATION:
      "Dieser Standort kann nicht gelöscht werden, da er mit Autos verknüpft ist.",
    EMPTY_LIST: "Keine Standorte.",
    LOCATION: "Standort",
    LOCATIONS: "Standorte",
  },
});
=======
  es: {
    NEW_LOCATION: 'Nuevo lugar',
    DELETE_LOCATION: '¿Estás seguro de que quieres eliminar este lugar?',
    CANNOT_DELETE_LOCATION: 'Este lugar no puede ser eliminado porque está relacionado con coches.',
    EMPTY_LIST: 'No hay lugares.',
    LOCATION: 'lugar',
    LOCATIONS: 'lugares',
  },
})
>>>>>>> origin/main

langHelper.setLanguage(strings);
export { strings };
