import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/common/langHelper'

const strings = new LocalizedStrings({
  fr: {
<<<<<<< HEAD
    ANDROID_AUTO: "Android Auto",
    APPLE_CAR_PLAY: "Apple Car Play",
    BLUETOOTH: "Bluetooth",
    TOUCHSCEEN: "Écran tactile",
  },
  en: {
    ANDROID_AUTO: "Android Auto",
    APPLE_CAR_PLAY: "Apple Car Play",
    BLUETOOTH: "Bluetooth",
    TOUCHSCEEN: "Touchscreen",
=======
    ANDROID_AUTO: 'Android Auto',
    APPLE_CAR_PLAY: 'Apple Car Play',
    BLUETOOTH: 'Bluetooth',
    TOUCHSCREEN: 'Écran tactile',
  },
  en: {
    ANDROID_AUTO: 'Android Auto',
    APPLE_CAR_PLAY: 'Apple Car Play',
    BLUETOOTH: 'Bluetooth',
    TOUCHSCREEN: 'Touchscreen',
  },
  es: {
    ANDROID_AUTO: 'Android Auto',
    APPLE_CAR_PLAY: 'Apple Car Play',
    BLUETOOTH: 'Bluetooth',
    TOUCHSCREEN: 'Pantalla táctil',
>>>>>>> origin/main
  },
  de: {
    ANDROID_AUTO: "Android Auto",
    APPLE_CAR_PLAY: "Apple Car Play",
    BLUETOOTH: "Bluetooth",
    TOUCHSCEEN: "Touchscreen",
  },
});

langHelper.setLanguage(strings);
export { strings };
