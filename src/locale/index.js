import { createI18n } from "vue-i18n";

import en from "./en";
import ru from "./ru";
import kz from "./kz";

const messages = {
  en,
  ru,
  kz
};

export default createI18n({
  fallbackLocale: "en",
  messages,
  silentTranslationWarn: true,
  silentFallbackWarn: true
});
