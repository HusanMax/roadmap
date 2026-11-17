# Roadmap — o'quv qo'llanma (React + Vite)

Dasturlash mavzulari bo'yicha interaktiv roadmap. Har bir yo'nalish alohida sahifa, mavzular esa `src/data` ichida ma'lumot fayllari sifatida saqlanadi.

## Ishga tushirish

```bash
npm install
npm run dev     # development server
npm run build   # production build
npm run lint    # oxlint
```

## Loyiha tuzilmasi

```
src/
├── components/
│   ├── RoadmapMain.jsx      # bosh sahifa (yo'nalishlar ro'yxati)
│   └── TopicTemplate.jsx    # mavzu uchun umumiy shablon
├── pages/                   # har bir yo'nalish uchun sahifa
│   ├── HtmlCssPage.jsx
│   ├── JavaScriptPage.jsx
│   ├── NodeJsPage.jsx
│   ├── NestJsPage.jsx
│   ├── PostgreSQLPage.jsx
│   └── ReactReduxPage.jsx
└── data/                    # mavzu ma'lumotlari (yo'nalish bo'yicha papkalar)
    ├── HtmlCss/
    ├── JavaScript/
    ├── NodeJS/
    ├── NestJS/
    ├── PostgreSQL/
    └── ReactRedux/
```

Har bir `data/<Yo'nalish>/` papkasida `AllData.js` bor — u shu yo'nalishdagi barcha mavzu fayllarini bitta ro'yxatga yig'adi va sahifaga uzatadi. Yangi mavzu qo'shish: mavzu faylini shu papkaga yarating va `AllData.js` ga qo'shing.

## O'zgarishlar tarixi

### 2026-11-17 (HTML / CSS yo'nalishi)
- **Qo'shildi:** `src/data/HtmlCss/` — 10 ta mavzu: HTML asoslari, matn/havola/rasm/ro'yxat, jadval va formalar, semantik HTML, CSS asoslari, Box Model, Flexbox, Grid, responsive dizayn, position/transition/animation.
- **Qo'shildi:** `HtmlCssPage.jsx` va `TopicTemplate` da to'q sariq `html` mavzusi; roadmapdagi "HTML / CSS" tugmasi endi sahifani ochadi.

### 2026-11-17 (kod bloklari)
- **Qo'shildi:** `src/components/CodeBlock.jsx` — misol kodlar endi VS Code (Dark+) uslubida: yorqin sintaksis ranglari (`prism-react-renderer`, o'zimiz sozlagan Dark+ mavzusi), qator raqamlari, sarlavha paneli, til nomi va "nusxalash" tugmasi. Til (JS/TS/SQL/Terminal/HTML/JSON) kod matniga qarab avtomatik aniqlanadi; kerak bo'lsa mavzu ma'lumotida `lang: 'sql'` deb berish mumkin.
- **O'zgardi:** `TopicTemplate.jsx` dagi eski regex asosidagi bo'yash olib tashlandi, o'rniga `CodeBlock` ishlatiladi.

### 2026-11-17
- **O'zgardi:** `src/data/Node.js/` papkasi `src/data/NodeJS/` deb qayta nomlandi (nuqtali papka nomi import/yo'l muammolarini keltirib chiqarardi).
- **O'zgardi:** `AllNodeData.js` → `AllData.js` — barcha yo'nalishlarda (JavaScript, NestJS, PostgreSQL, ReactRedux) bir xil nom.
- **O'zgardi:** `NodeJsPage.jsx` dagi import yangi yo'lga moslandi.
- **Tuzatildi:** `nestjsAuthorizationGuideData.js` va `nestjsDatabaseRelationshipsGuideData.js` dagi sintaksis xatolari (matn ichidagi qo'shtirnoqlar escape qilindi) — oldin `npm run build` shu sabab yiqilardi.
- **Qo'shildi:** README — loyiha tuzilmasi va ishga tushirish yo'riqnomasi.

### Avval qo'shilganlar (1–10-mavzular)
- JavaScript: kirish, shartlar, sikllar, massivlar, funksiyalar, DOM, OOP, Map/Set, destructuring, xatolarni boshqarish, localStorage va boshqalar.
- Node.js: kirish, Express, CRUD, JWT, OTP, MongoDB/Mongoose, validatsiya va xavfsizlik, loyiha tuzilmasi.
- NestJS: autentifikatsiya, avtorizatsiya, JWT, validatsiya, Swagger, fayl yuklash, PDF, Prisma + PostgreSQL.
- PostgreSQL: asoslar, constraint va JOIN, ilg'or mavzular.
- React + Redux: hooks, router, React Query, TypeScript, Redux, i18n, auth tizimi, UI kutubxonalari.
