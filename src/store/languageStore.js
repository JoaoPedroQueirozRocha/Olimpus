import english from "../languages/en.json";
import portuguese from "../languages/pt.json";

export const languageStore = {
    en: english,
    pt: portuguese,
};

export const i18nOptions = {
    locale: "pt",
    fallbackLocale: "en",
    messages: languageStore,
    legacy: false,
    useScope: "global",
};
