import LocalizedStrings from 'localized-strings'
import env from '@/config/env.config'
import * as langHelper from '@/utils/langHelper'

const strings = new LocalizedStrings({
  fr: {
    CREATE_SUPPLIER_HEADING: "Nouveau fournisseur",
    INVALID_SUPPLIER_NAME: "Ce fournisseur existe déjà.",
    SUPPLIER_IMAGE_SIZE_ERROR: `L'image doit être au format ${env.SUPPLIER_IMAGE_WIDTH}x${env.SUPPLIER_IMAGE_HEIGHT}`,
    RECOMMENDED_IMAGE_SIZE: `Taille d'image recommandée : ${env.SUPPLIER_IMAGE_WIDTH}x${env.SUPPLIER_IMAGE_HEIGHT}`,
  },
  en: {
    CREATE_SUPPLIER_HEADING: "New supplier",
    INVALID_SUPPLIER_NAME: "This supplier already exists.",
    SUPPLIER_IMAGE_SIZE_ERROR: `The image must be in the format ${env.SUPPLIER_IMAGE_WIDTH}x${env.SUPPLIER_IMAGE_HEIGHT}`,
    RECOMMENDED_IMAGE_SIZE: `Recommended image size: ${env.SUPPLIER_IMAGE_WIDTH}x${env.SUPPLIER_IMAGE_HEIGHT}`,
  },
<<<<<<< HEAD
  de: {
    CREATE_SUPPLIER_HEADING: "Neuer Dienstleister",
    INVALID_SUPPLIER_NAME: "Dieser Dienstleister existiert bereits.",
    SUPPLIER_IMAGE_SIZE_ERROR: `Das Bild muss im Format ${env.SUPPLIER_IMAGE_WIDTH}x${env.SUPPLIER_IMAGE_HEIGHT} sein`,
    RECOMMENDED_IMAGE_SIZE: `Empfohlene Bildgröße: ${env.SUPPLIER_IMAGE_WIDTH}x${env.SUPPLIER_IMAGE_HEIGHT}`,
  },
});
=======
  es: {
    CREATE_SUPPLIER_HEADING: 'Nuevo proveedor',
    INVALID_SUPPLIER_NAME: 'Este proveedor ya existe.',
    SUPPLIER_IMAGE_SIZE_ERROR: `La imagen debe tener el formato ${env.SUPPLIER_IMAGE_WIDTH}x${env.SUPPLIER_IMAGE_HEIGHT}`,
    RECOMMENDED_IMAGE_SIZE: `Tamaño de imagen recomendado: ${env.SUPPLIER_IMAGE_WIDTH}x${env.SUPPLIER_IMAGE_HEIGHT}`,
  },
})
>>>>>>> origin/main

langHelper.setLanguage(strings);
export { strings };
