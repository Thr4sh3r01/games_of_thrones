// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        personajes: "Character",
        casas: "Houses",
        cronologia: "Chronology",
        volver: "Back",
        Region: "Region",
        Alianzas: "Alliances",
        Religiones: "Religions",
        Fundacion: "Foundation",
        Apariciones: "",
        Padre: "Parents",
        Descendientes: "Descendant",
        Titulos: "Titles",
        // ... más traducciones en inglés
      },
    },
    es: {
      translation: {
        personajes: "Personajes",
        casas: "Casas",
        cronologia: "Cronologia",
        volver: "Volver",
        Region: "Región",
        Alianzas: "Alianzas",
        Religiones: "Religiones",
        Fundacion: "Fundación",
        Apariciones: "Apariciones",
        Padre: "Padre",
        Descendientes: "Descendientes",
        Titulos: "Titulo",
        // ... más traducciones en español
      },
    },
    // Agrega más idiomas según sea necesario
  },
  lng: "en", // idioma predeterminado
  fallbackLng: "en", // idioma de respaldo si la traducción no está disponible
  interpolation: {
    escapeValue: false, // Evita la escape automático de cadenas traducidas
  },
});

export default i18n;
