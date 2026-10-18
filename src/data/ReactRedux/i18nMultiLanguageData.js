export const i18nMultiLanguageData = {
  id: 'react-i18next',
  title: '6. i18next - React Ilovalarida Ko\'p Tillilik',
  heading: 'i18next - React Ilovalarida Ko\'p Tillilik',
  subheading: 'React ilovalarini bir nechta tilda ishlatish uchun professional yechim. i18n - internationalization so\'zi.',
  sections: [
    {
      type: 'comparison',
      title: '1. i18next Nima va Nima Uchun Kerak?',
      text: 'i18next kutubxonasi yordamida saytni O\'zbek, English va Русский tillarida ishlatishni o\'rganamiz. Foydalanuvchi saytga kirganda o\'z tilida ko\'rish imkoniyatiga ega bo\'ladi. Masalan: Netflix, Telegram, Instagram, Facebook barchasi i18n texnologiyasidan foydalanadi.',
      cards: [
        { title: 'i18next', subtitle: 'Translation engine', desc: 'Tarjimalarni boshqaruvchi asosiy dvigatel, barcha tillarni yuklash va boshqarish vazifasini bajaradi.' },
        { title: 'react-i18next', subtitle: 'React integration', desc: 'useTranslation hook va t() funksiyasini taqdim etadi.' },
        { title: 'Ko\'p tillilik', subtitle: 'Global foydalanuvchilar', desc: 'Ilovani turli tillarga moslashtirish imkonini beradi.' }
      ],
      actionsTitle: 'Asosiy afzalliklari:',
      actions: [
        'Foydalanuvchiga o\'z ona tilida qulaylik yaratish',
        'Mashhur global ilovalar kabi professional yondashuv',
        'Dinamik ravishda tilni o\'zgartirish imkoniyati',
        'Oxirgi tanlangan tilni eslab qolish (localStorage)'
      ]
    },
    {
      type: 'code',
      title: '2. Package larni O\'rnatish',
      text: 'Loyihaga i18next va uning React integratsiyasini o\'rnatish uchun quyidagi buyruq ishlatiladi:',
      code: `npm install i18next react-i18next`
    },
    {
      type: 'list',
      title: '3. Loyiha Tuzilishi (Folder Structure)',
      text: 'Barcha tarjimalar locales papkasida, konfiguratsiya esa i18n.js faylida joylashadi.',
      points: [
        'src/locales/en/translation.json - Ingliz tili uchun tarjimalar.',
        'src/locales/uz/translation.json - O\'zbek tili uchun tarjimalar.',
        'src/locales/ru/translation.json - Rus tili uchun tarjimalar.',
        'i18n.js - Barcha tillarni ulaydigan asosiy konfiguratsiya fayli.'
      ]
    },
    {
      type: 'code',
      title: '4. Translation JSON Fayllari',
      text: 'Har bir til uchun alohida translation.json fayli yaratiladi. Key\'lar hamma fayllarda bir xil bo\'lishi shart - faqat value\'lar o\'zgaradi.',
      code: `// en/translation.json
{
  "library": "LIBRARY",
  "home": "Home",
  "books": "Books",
  "logout": "Logout"
}

// uz/translation.json
{
  "library": "KUTUBXONA",
  "home": "Bosh sahifa",
  "books": "Kitoblar",
  "logout": "Chiqish"
}

// ru/translation.json
{
  "library": "БИБЛИОТЕКА",
  "home": "Главная",
  "books": "Книги",
  "logout": "Выход"
}`
    },
    {
      type: 'code',
      title: '5. i18n.js Konfiguratsiyasi',
      text: 'Bu fayl barcha tillarni i18next tizimiga ulaydi va default tilni belgilaydi.',
      code: `import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en/translation.json";
import uz from "./locales/uz/translation.json";
import ru from "./locales/ru/translation.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      uz: { translation: uz },
      ru: { translation: ru }
    },
    lng: localStorage.getItem("language") || "uz",
    fallbackLng: "uz"
  });

export default i18n;`
    },
    {
      type: 'list',
      title: '6. i18n.js Tahlili – Qadam Ba-qadam',
      text: 'Konfiguratsiya to\'rt bosqichda amalga oshiriladi:',
      points: [
        'Import qilish: i18next va initReactI18next import qilinadi.',
        'Tarjimalarni yuklash: en, uz, ru JSON fayllari import qilinadi.',
        'Init sozlamalari: resources, lng va fallbackLng o\'rnatiladi.',
        'Eksport: Sozlangan i18n instance eksport qilinadi.',
        'LocalStorage integratsiyasi: localStorage.getItem("language") || "uz" orqali foydalanuvchi tanlagan til eslab qolinadi.'
      ]
    },
    {
      type: 'code',
      title: '7. React ga Ulash (main.jsx)',
      text: 'main.jsx faylida i18n.js ni bitta marta import qilish kifoya. Shundan so\'ng butun React application tarjima tizimini ishlatishi mumkin.',
      code: `import React from "react";
import ReactDOM from "react-dom/client";
import "./i18n"; // ← Shu yerda!
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`
    },
    {
      type: 'code',
      title: '8. useTranslation Hook va t() Funksiyasi',
      text: 'useTranslation hooki yordamida component ichida t() funksiyasi chaqiriladi va key nomlari orqali mos tildagi tarjimalar olinadi.',
      code: `import { useTranslation } from "react-i18next";

function Navbar() {
  const { t } = useTranslation();

  return (
    <nav>
      <h1>{t("library")}</h1>
      <a>{t("home")}</a>
      <a>{t("books")}</a>
      <button>{t("logout")}</button>
    </nav>
  );
}`
    },
    {
      type: 'code',
      title: '9. Tilni O\'zgartirish – changeLanguage()',
      text: 'Foydalanuvchi til tugmasini bosganda changeLanguage() funksiyasi ishga tushadi va til darhol o\'zgarib, localStorage\'ga saqlanadi.',
      code: `function changeLanguage(lang) {
  i18n.changeLanguage(lang);
  localStorage.setItem("language", lang);
}

// Tugmalar orqali ishlatish:
<button onClick={() => changeLanguage("uz")}>UZ</button>
<button onClick={() => changeLanguage("en")}>EN</button>
<button onClick={() => changeLanguage("ru")}>RU</button>`
    },
    {
      type: 'list',
      title: '10. Navbar Integratsiyasi va To\'liq Flow',
      text: 'Til o\'zgarganda Navbar avtomatik qayta render bo\'ladi va quyidagi sikl bajariladi:',
      points: [
        'Til tugmasi bosiladi (masalan, EN).',
        'changeLanguage("en") funksiyasi chaqiriladi.',
        'i18next yangilanadi va yangi til aktiv bo\'ladi.',
        'Navbar qayta render bo\'lib, English matnlar ko\'rinadi.',
        'Tanlangan til localStorage\'ga saqlanib, sahifa refresh bo\'lsa ham saqlanib qoladi.'
      ]
    },
    {
      type: 'tasks',
      title: '11. Amaliyot Topshiriqlari',
      tasks: [
        'Loyihaga i18next va react-i18next kutubxonalarini o\'rnating',
        'Locales papkasi ichida en, uz va ru uchun translation.json fayllarini yarating',
        'i18n.js konfiguratsiya faylini yozib, localStorage va fallback tilni sozlang',
        'main.jsx faylida i18n ni import qilib butun ilovaga ulang',
        'Navbar va sahifalarda useTranslation hook\'idan foydalanib t() funksiyasini qo\'llang va changeLanguage orqali tilni almashtirishni sinab ko\'ring'
      ]
    }
  ]
};