export const functionsData = {
  id: 'functions',
  title: '4. JavaScript Funksiyalar',
  heading: 'Funksiyalar',
  subheading: 'Funksiyalar nima va ularni qanday ishlatamiz? Declaration, Expression, Arrow functions va boshqalar.',
  sections: [
    {
      type: 'list',
      title: '1. Funksiya Nima?',
      text: 'Funksiya bu ma\'lum bir vazifani bajaradigan kod blokidir. Xuddi kichik bir mashina kabi, unga nimadir bersangiz, u uni qayta ishlaydi va natija beradi.',
      points: [
        'Vazifa Bajaruvchi: Aniq bir vazifani bajaradi.',
        'Qayta Ishlatish Imkoniyati: Kodni takroran yozmasdan bir necha bor chaqirish mumkin.',
        'Kodni Tozalash: Kodimizni tartibli va tushunarli qiladi, xatolarni topishni osonlashtiradi.'
      ]
    },
    {
      type: 'code',
      title: '2. Funksiyani E\'lon qilish (Declaration) va Chaqirish',
      text: 'Funksiyani yaratish uchun function kalit so\'zi ishlatiladi. E\'lon qilingandan so\'ng uni nomi va qavslar orqali chaqiriladi.',
      code: 'function salomBer() {\n  console.log("Assalomu alaykum!");\n}\nsalomBer(); // Natija: Assalomu alaykum!'
    },
    {
      type: 'code',
      title: '3. Parametrlar va Argumentlar',
      text: 'Parametrlar funksiya e\'lon qilinganda qavslar ichida ko\'rsatilgan o\'zgaruvchilar, argumentlar esa chaqirilganda beriladigan haqiqiy qiymatlardir.',
      code: 'function ismBilanSalomlash(ism) {\n  console.log("Assalomu alaykum, " + ism + "!");\n}\nismBilanSalomlash("Ali"); // "Ali" - argument\nismBilanSalomlash("Vali"); // "Vali" - argument'
    },
    {
      type: 'code',
      title: '4. return Statement',
      text: 'return kalit so\'zi funksiyadan natijani tashqariga qaytarish uchun ishlatiladi.',
      code: 'function ikkiSonniQosh(a, b) {\n  return a + b; // Natijani qaytaradi\n}\nlet yigindi = ikkiSonniQosh(5, 3);\nconsole.log(yigindi); // Natija: 8'
    },
    {
      type: 'code',
      title: '5. Funksiya Ifodasi (Function Expression)',
      text: 'Funksiya ifodasi bu funksiyani o\'zgaruvchiga qiymat sifatida belgilashdir. Bu yerda funksiya nomi majburiy emas (anonim bo\'lishi mumkin).',
      code: 'const kopaytirish = function(a, b) {\n  return a * b;\n};\nlet natija = kopaytirish(4, 2);\nconsole.log(natija); // Natija: 8'
    },
    {
      type: 'code',
      title: '6. Arrow Functions',
      text: 'ES6 bilan tanishtirilgan arrow functions funksiyalarni yozishning qisqaroq usulidir.',
      code: 'const salom = () => {\n  console.log("Salom dunyo!");\n};\nsalom();\n\n// Implicit Return\nconst kvadrat = son => son * son;\nconsole.log(kvadrat(5)); // Natija: 25'
    },
    {
      type: 'list',
      title: '7. Boshlang\'ich Xatolar va Ularni Tuzatish',
      text: 'Funksiyalar bilan ishlashda eng ko\'p uchraydigan xatolar:',
      points: [
        'Funksiyani chaqirishni unutish: Nomini qavslar bilan yozish esdan chiqishi.',
        'returnni unutish: Qiymat qaytarish kerak bo\'lganda return ishlatmaslik.',
        'Parametr va argumentlarni chalkashtirish.',
        'Bitta funksiyaga ko\'p vazifa yuklash.'
      ]
    },
    {
      type: 'tasks',
      title: '8. Amaliyot Topshiriqlari',
      tasks: [
        'sayHello nomli funksiya yarating va "Hello World" ni chiqaring.',
        '"name" parameter qabul qilib, "Hello [name]" chiqaring.',
        'Ikki sonni qo\'shib, natijani qaytaradigan funksiya yozing.',
        'Function declaration\'ni function expression ga o\'zgartiring.',
        'Ikki sonni ko\'paytirib qaytaradigan function expression yozing.',
        '"Welcome" matnini chiqaradigan arrow function yozing.',
        'Sonni 2 ga ko\'paytirib qaytaradigan arrow function yozing.',
        'Function expression\'ni arrow function\'ga o\'zgartiring.'
      ]
    }
  ]
};