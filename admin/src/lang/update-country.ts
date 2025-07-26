import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/utils/langHelper'

const strings = new LocalizedStrings({
  fr: {
    UPDATE_COUNTRY: "Modification du pays",
    COUNTRY_UPDATED: "Pays modifié avec succès.",
  },
  en: {
    UPDATE_COUNTRY: "Country update",
    COUNTRY_UPDATED: "Country updated successfully.",
  },
<<<<<<< HEAD
  de: {
    UPDATE_COUNTRY: "Land aktualisieren",
    COUNTRY_UPDATED: "Land erfolgreich aktualisiert.",
  },
});
=======
  es: {
    UPDATE_COUNTRY: 'Actualización del país',
    COUNTRY_UPDATED: 'País actualizado correctamente.',
  },
})
>>>>>>> origin/main

langHelper.setLanguage(strings);
export { strings };
