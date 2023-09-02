module.exports = {
  "locales": ["en", "ar"],
  "defaultLocale": "ar",
  "pages": {
    "*": ["common", "home"],
    "/[lang]": ["common", "home"],
    "/[lang]/*": ["common", "home"]
  },
  /*"loadLocaleFrom": (lang, ns) => import(`./locales/${lang}/${ns}.json`).then((m) => m.default),*/
}