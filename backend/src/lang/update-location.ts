import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/common/langHelper'

const strings = new LocalizedStrings({
  fr: {
    UPDATE_LOCATION: "Modification du lieu",
    LOCATION_UPDATED: "Lieu modifié avec succès.",
  },
  en: {
    UPDATE_LOCATION: "Location update",
    LOCATION_UPDATED: "Location updated successfully.",
  },
<<<<<<< HEAD
  de: {
    UPDATE_LOCATION: "Standort aktualisieren",
    LOCATION_UPDATED: "Standort erfolgreich aktualisiert.",
  },
});
=======
  es: {
    UPDATE_LOCATION: 'Actualización del lugar',
    LOCATION_UPDATED: 'Lugar actualizado correctamente.',
  },
})
>>>>>>> origin/main

langHelper.setLanguage(strings);
export { strings };
