import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/common/langHelper'

const strings = new LocalizedStrings({
  fr: {
    NEW_SUPPLIER: "Nouveau fournisseur",
    SUPPLIER: "fournisseur",
    SUPPLIERS: "fournisseurs",
  },
  en: {
    NEW_SUPPLIER: "New supplier",
    SUPPLIER: "supplier",
    SUPPLIERS: "suppliers",
  },
<<<<<<< HEAD
  de: {
    NEW_SUPPLIER: "Neuer Dienstleister",
    SUPPLIER: "Dienstleister",
    SUPPLIERS: "Lieferanten",
  },
});
=======
  es: {
    NEW_SUPPLIER: 'Nuevo proveedor',
    SUPPLIER: 'proveedor',
    SUPPLIERS: 'proveedores',
  },
})
>>>>>>> origin/main

langHelper.setLanguage(strings);
export { strings };
