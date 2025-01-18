import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/common/langHelper'

const strings = new LocalizedStrings({
  fr: {
    NEW_LOCATION_HEADING: "Nouveau lieu",
    LOCATION_NAME: "Lieu",
    INVALID_LOCATION: "Ce lieu existe déjà.",
    LOCATION_CREATED: "Lieu créé avec succès.",
    COUNTRY: "Pays",
    PARKING_SPOTS: "Places de parking",
  },
  en: {
    NEW_LOCATION_HEADING: "New location",
    LOCATION_NAME: "Location",
    INVALID_LOCATION: "This location already exists.",
    LOCATION_CREATED: "Location created successfully.",
    COUNTRY: "Country",
    PARKING_SPOTS: "Parking spots",
  },
<<<<<<< HEAD
  de: {
    NEW_LOCATION_HEADING: "Neuer Standort",
    LOCATION_NAME: "Ort",
    INVALID_LOCATION: "Dieser Standort existiert bereits.",
    LOCATION_CREATED: "Standort erfolgreich erstellt.",
    COUNTRY: "Land",
    PARKING_SPOTS: "Parkplätze",
  },
});
=======
  es: {
    NEW_LOCATION_HEADING: 'Nuevo lugar',
    LOCATION_NAME: 'Lugar',
    INVALID_LOCATION: 'Este lugar ya existe.',
    LOCATION_CREATED: 'Lugar creado con éxito.',
    COUNTRY: 'País',
    PARKING_SPOTS: 'Plazas de aparcamiento',
  },
})
>>>>>>> origin/main

langHelper.setLanguage(strings);
export { strings };
