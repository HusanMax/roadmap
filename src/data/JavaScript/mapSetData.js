export const mapSetData = {
  id: 'map-set',
  title: '7. ES6 Map va Set',
  heading: 'ES6: Nega Map va Set?',
  subheading: 'Array va Object cheklovlarini bartaraf etuvchi ES6 tuzilmalari: Map va Set.',
  sections: [
    {
      type: 'list',
      title: '1. Asosiy Cheklovlar va ES6 Yondashuvi',
      text: 'Array va Object ba\'zi cheklovlarga ega: takroriy elementlar, kalit turlari (Object-da faqat string/symbol), va qidiruv amallari nisbatan sekin. ES6 Map va Set ushbu muammolarni bartaraf etish uchun kiritildi.',
      points: [
        'Array: takroriy elementlar mavjud; Object: kalitlar faqat string yoki symbol.',
        'Ikkalasi ham katta miqdordagi qidiruv amallari uchun optimallashtirilmagan.',
        'Set - noyob elementlar to\'plami (uniqueness), Map - moslashuvchan kalitlar (flexible keys) va tartib saqlash.',
        'Real hayotdagi misol: Ro\'yxatda takroriy userIDs bo\'lsa, serverga ortiqcha so\'rovlar ketadi - Set bu vaziyatni tez va oson hal qiladi.'
      ]
    },
    {
      type: 'code',
      title: '2. Set: Tushuncha va Qoida',
      text: 'Set - bu ES6 to\'plami: har bir element faqat bir marta mavjud bo\'ladi (uniqueness). Qo\'shilgan tartib (insertion order) saqlanadi.',
      code: 'const s = new Set([1, 2, 2, "a", "a"]);\nconsole.log(s); // Set {1, 2, "a"}\n// Takroriy elementlar avtomatik bloklanadi, NaN qiymatlari bir xil deb hisoblanadi.'
    },
    {
      type: 'code',
      title: '3. Set Metodlari va Iteratsiya',
      text: 'Set bilan ishlash uchun asosiy metodlar mavjud. Set iterable bo\'lib, for...of bilan aylantirish mumkin.',
      code: 'const s = new Set();\ns.add("apple");\nconsole.log(s.has("apple")); // true\ns.delete("apple");\nconsole.log(s.size); // 0\nfor (const item of new Set([1, 2, 3])) {\n  console.log(item);\n}'
    },
    {
      type: 'code',
      title: '4. Set vs Array - Qachon Qaysi Biri?',
      text: 'Set noyob elementni kafolatlaydi, Array esa tartib va indeks asosida ishlaydi. Agar ko\'p tekshiruvlar bo\'lsa, Set afzal.',
      code: '// Sekinroq (Array includes)\nconst arr = [1, 2, 3];\nconsole.log(arr.includes(2));\n\n// Tezroq (Set has)\nconst s = new Set([1, 2, 3]);\nconsole.log(s.has(2)); // true'
    },
    {
      type: 'code',
      title: '5. Map: Tushuncha va Objectdan Farqi',
      text: 'Map - kalit-qiymat juftliklarini saqlaydigan ES6 tuzilmasi. Uning eng katta afzalligi: kalit sifatida istalgan turdagi qiymatlarni (object, function, primitive) ishlatish mumkin.',
      code: 'const m = new Map();\nconst keyObj = {};\nm.set(keyObj, "value");\nm.set("id", 42);\nconsole.log(m.get("id")); // 42'
    },
    {
      type: 'code',
      title: '6. Map Metodlari va Iteratsiya',
      text: 'Map metodlari va for...of orqali juftliklarni olish.',
      code: 'const roles = new Map([["admin", 1], ["user", 2]]);\nfor (const [role, id] of roles) {\n  console.log(role, id);\n}'
    },
    {
      type: 'code',
      title: '7. Map vs Object - Batafsil Taqqoslash',
      text: 'Map va Object farqlari, size xususiyati va iteratsiya jarayonlari.',
      code: 'const obj = {a: 1};\nconst map = new Map([["a", 1]]);\nconsole.log(Object.keys(obj).length); // 1\nconsole.log(map.size); // 1'
    },
    {
      type: 'challenge',
      lang: 'js',
      title: 'Mini vazifa: takrorlanmaydigan teglar',
      story: "Blog postlarida foydalanuvchilar teglarni takror yozib yuboradi. Teglar ro'yxatini unikal qilish kerak.",
      task: 'Set yordamida teglar massividagi takrorlarni olib tashlab, unikal massivini yarating.',
      starter: `const teglar = ["js", "react", "js", "css", "react", "html"];

const unikal = []; // Set dan foydalaning

console.log(unikal);`,
      tests: [
        { name: 'unikal 4 ta element', expr: 'unikal.length === 4' },
        { name: 'hammasi mavjud', expr: "['js','react','css','html'].every(t => unikal.includes(t))" }
      ],
      hint: 'const unikal = [...new Set(teglar)];',
      solution: `const unikal = [...new Set(teglar)];`
    },
    {
      type: 'playground',
      lang: 'js',
      title: 'Tajriba: Map va Set',
      text: "Yangi qiymat qo'shib ko'ring.",
      code: `const narxlar = new Map();
narxlar.set("olma", 12000);
narxlar.set("banan", 18000);
console.log(narxlar.get("olma"));
console.log(narxlar.has("nok"));

const ranglar = new Set(["qizil", "yashil", "qizil"]);
ranglar.add("ko'k");
console.log(ranglar.size, ranglar);`
    },
    {
      type: 'tasks',
      title: '8. Amaliyot Topshiriqlari',
      tasks: [
        'Set yaratish: Set yarating va ichiga bir xil qiymatlarni bir necha marta qo\'shing.',
        'Set\'da mavjudlikni tekshirish: has() metodi yordamida aniqlang.',
        'Set\'dan element o\'chirish: delete() metodi orqali o\'chiring.',
        'Set orqali aylanish: for...of yordamida chiqarib ko\'ring.',
        'Map yaratish (turli kalitlar bilan): string, number va object ishlating.',
        'Map\'dan qiymat olish: get() orqali qiymatni oling.',
        'Map\'ni aylanish va destructuring: for...of yordamida chiqaring.',
        'Map va Object taqqoslash: farqlarini tahlil qiling.',
        'To\'g\'ri tanlash: duplicate bo\'lmasligi va kalit orqali tez topish.'
      ]
    }
  ]
};