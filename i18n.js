module.exports = {
  "locales": ["en", "ar"],
  "defaultLocale": "ar",
  "pages": {
    "*": ["common"],
    "/[lang]": ["common"],
    "/[lang]/*": ["common"]
  },
  "loadLocaleFrom": (lang, ns) => import(`./locales/${lang}/${ns}.json`).then((m) => m.default),
}