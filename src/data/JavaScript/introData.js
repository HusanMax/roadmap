export const introData = {
  id: 'intro',
  title: '1. JavaScript intro',
  heading: 'JavaScript asoslari',
  subheading: 'Interaktiv va dinamik veb-sahifalar yaratishning eng kuchli dasturlash tili',
  sections: [
    {
      type: 'comparison',
      title: "1. JavaScript nima?",
      text: "Veb-sahifalarni jonlantiradi: JavaScript - veb-sahifalarga interfaollik qo'shish uchun ishlatiladigan dasturlash tili. U HTML va CSS bilan birgalikda ishlaydi.",
      cards: [
        { title: "HTML", subtitle: "Hypertext Markup Language", desc: "Veb-sahifaning fundamental strukturasini yaratadi." },
        { title: "CSS", subtitle: "Cascading Style Sheet", desc: "Kontent layoutini va dizayn ko'rinishini boshqaradi." },
        { title: "JavaScript", subtitle: "Interactive Script", desc: "Interaktivlik qo'shadi va murakkab funksiyalarni boshqaradi." }
      ],
      actionsTitle: "JavaScript nima qiladi?",
      actions: [
        "Foydalanuvchi bosishlari bilan ishlash",
        "Formalarni tekshirish",
        "Yangi kontent yaratish",
        "Server bilan muloqot qilish"
      ]
    },
    {
      type: 'list',
      title: "2. JavaScript Engine",
      text: "JavaScriptni browser to'g'ridan-to'g'ri o'qiy olmaydi, shuning uchun maxsus dastur (Engine) kodni mashina tushunadigan ko'rinishga o'tkazadi.",
      points: [
        "V8 - Chrome va Node.js uchun",
        "SpiderMonkey - Firefox uchun",
        "JavaScriptCore - Safari uchun"
      ]
    },
    {
      type: 'rule',
      title: "3. O'zgaruvchilar: let, const, var",
      points: [
        "let - Qiymati o'zgaradigan o'zgaruvchi uchun (let name = 'Ali');",
        "const - Qiymati o'zgarmaydigan konstanta uchun (const PI = 3.14);",
        "var - Eski usul (ES5 gacha ishlatilgan, tavsiya etilmaydi)"
      ],
      rule: "Qoida: Har doim const dan foydalaning, agar qiymat o'zgarsa let ni ishlating. var ni foydalanmang!"
    },
    {
      type: 'list',
      title: "4. Ma'lumot turlari",
      text: "Ma'lumot turlari JavaScript da juda muhim — ular kod qanday ishlashini aniqlaydi!",
      points: [
        "String (Matn): 'Salom', 'JavaScript' - qo'shtirnoq ichida yoziladi",
        "Number (Son): 42, 3.14, -5 - butun va o'nlik sonlar",
        "Boolean (Mantiqiy): true (rost) yoki false (yolg'on)",
        "Undefined (Aniqlanmagan): O'zgaruvchi e'lon qilingan, lekin qiymat yo'q",
        "Null (Bo'sh): Maqsadli ravishda bo'sh qiymatni ko'rsatish"
      ]
    },
    {
      type: 'list',
      title: "5. Interfaol funksiyalar: alert, prompt, confirm",
      points: [
        "alert() - Foydalanuvchiga xabar ko'rsatadi",
        "prompt() - Foydalanuvchidan ma'lumot so'raydi (har doim string qaytaradi!)",
        "confirm() - Ha yoki Yo'q savolini beradi (true / false qaytaradi)"
      ]
    },
    {
      type: 'list',
      title: "6. typeof va Turlarni o'zgartirish",
      text: "typeof operatori qiymat turini aniqlash uchun ishlatiladi.",
      points: [
        "typeof 'salom' // 'string'",
        "typeof 42 // 'number'",
        "Prompt orqali o'qilgan sonni songa o'zgartirish uchun Number() yoki parseInt() dan foydalaniladi."
      ]
    },
    {
      type: 'list',
      title: "7. Matematik va taqqoslash operatorlari",
      text: "Matematik va taqqoslash operatorlari.",
      points: [
        "Matematik operatorlar: +, -, *, /, %, **",
        "Taqqoslash operatorlari: >, <, >=, <=",
        "Tenglik operatorlari: == va === (qiymat va turni birga tekshiradigan === ishlatish tavsiya etiladi)"
      ]
    },
    {
      type: 'playground',
      lang: 'js',
      title: "Tajriba: o'zgaruvchilar bilan o'ynang",
      text: "Qiymatlarni o'zgartiring va natija qanday o'zgarishini ko'ring. O'zingiz yangi o'zgaruvchi qo'shib ham ko'ring.",
      code: `const ism = "Ali";
let yosh = 22;
const shahar = "Toshkent";

console.log("Salom, " + ism + "!");
console.log(ism + " " + yosh + " yoshda, " + shahar + "da yashaydi.");

yosh = yosh + 1;
console.log("Keyingi yil:", yosh);`
    },
    {
      type: 'challenge',
      lang: 'js',
      title: 'Mini vazifa: kafedagi hisob-kitob',
      story: "Siz kichik kafe uchun dastur yozyapsiz. Mijoz 3 ta choy (har biri 12 000 so'm) va 2 ta non (har biri 4 500 so'm) buyurdi.",
      task: "Har bir mahsulot narxini narx*soni ko'rinishida hisoblab, umumiy summani jami o'zgaruvchisiga yozing.",
      starter: `const choyNarxi = 12000;
const nonNarxi = 4500;

// Quyida jami ni hisoblang
const jami = 0;

console.log("Jami to'lov:", jami);`,
      tests: [
        { name: "jami 45000 ga teng bo'lsin", expr: 'jami === 45000' }
      ],
      hint: "jami = choyNarxi * 3 + nonNarxi * 2 ko'rinishida yozing.",
      solution: `const jami = choyNarxi * 3 + nonNarxi * 2;`
    },
    {
      type: 'tasks',
      title: "8. Amaliyot Topshiriqlari",
      tasks: [
        "Xush kelibsiz xabar: Ismni so'rang va alert orqali chiqaring",
        "Ikkita sonni qo'shish: Number() yordamida yig'indini hisoblang",
        "Tasdiq so'rovi: confirm yordamida savol bering",
        "typeof tekshirish: Har xil qiymatlarning turini aniqlang",
        "=== bilan solishtirish: 12 va '12' ni solishtiring",
        "Matematik amallar: 15 va 4 sonlari uchun operatorlarni sinab ko'ring"
      ]
    }
  ]
};