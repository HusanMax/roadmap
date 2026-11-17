export const loopsData = {
  id: 'loops',
  title: '3. JavaScript Looplar',
  heading: 'JavaScript Looplar',
  subheading: 'Qayta takrorlash uchun dasturlashda Looplar nima va ularni qanday ishlatamiz?',
  sections: [
    {
      type: 'list',
      title: '1. Loop nima va u nima uchun kerak?',
      text: 'Loop (aylanma) - bu kodni bir necha marta qayta bajarish uchun ishlatiladigan dasturlash konstruksiyasi.',
      points: [
        'Qayta takrorlanadigan vazifalarni avtomatlashtirish',
        'Array va ob\'ektlar bo\'ylab harakatlanish',
        'Foydalanuvchi kiritishini kutilayotgan vaqt',
        'Ma\'lumotlar bazasi yozuvlarini boshqarish'
      ]
    },
    {
      type: 'code',
      title: '2. while Loop',
      text: 'Loop boshlanishidan oldin shart tekshiriladi va agar true bo\'lsa, kod bajariladi.',
      code: 'let i = 0;\nwhile (i < 5) {\n  console.log(i);\n  i++;\n}'
    },
    {
      type: 'code',
      title: '3. do...while Loop',
      text: 'do...while kodni avval bajaradi, keyin shartni tekshiradi - shuning uchun kamida bitta marta ishlaydi.',
      code: 'let i = 0;\ndo {\n  console.log(i);\n  i++;\n} while (i < 3);'
    },
    {
      type: 'code',
      title: '4. for Loop',
      text: 'Boshlanish, shart va qadam qismlaridan iborat takrorlash operatori.',
      code: 'for (let i = 0; i < 5; i++) {\n  console.log(i);\n}'
    },
    {
      type: 'code',
      title: '5. Array bo\'ylab aylanish',
      text: 'Array elementlari ustidan for loop yordamida yurib chiqish.',
      code: 'let ismlar = [\'Ali\', \'Vali\', \'Soli\'];\nfor (let i = 0; i < ismlar.length; i++) {\n  console.log(ismlar[i]);\n}'
    },
    {
      type: 'code',
      title: '6. Ob\'ektlar bo\'ylab aylanish',
      text: 'Ob\'ektlar kalitlari bo\'ylab aylanish uchun for...in loop ishlatiladi.',
      code: 'let foydalanuvchi = {\n  ism: \'Ali\',\n  yosh: 25,\n  shahar: \'Toshkent\'\n};\nfor (let kalit in foydalanuvchi) {\n  console.log(kalit + \': \' + foydalanuvchi[kalit]);\n}'
    },
    {
      type: 'code',
      title: '7. break va continue',
      text: 'break loopni to\'xtatadi, continue esa joriy takrorlashni o\'tkazib yuboradi.',
      code: 'for (let i = 0; i < 10; i++) {\n  if (i === 5) break;\n  console.log(i);\n}'
    },
    {
      type: 'challenge',
      lang: 'js',
      title: 'Mini vazifa: savat summasi',
      story: "Onlayn do'konda mijozning savatidagi mahsulot narxlari massivda turibdi. Umumiy summani chiqarish kerak.",
      task: "for...of sikli bilan narxlar massividagi barcha qiymatlarni jami ga qo'shing.",
      starter: `const narxlar = [12000, 8500, 15000, 4000];
let jami = 0;

// sikl yozing

console.log("Jami:", jami);`,
      tests: [
        { name: "jami 39500 bo'lsin", expr: 'jami === 39500' }
      ],
      hint: 'for (const narx of narxlar) { jami += narx; }',
      solution: `for (const narx of narxlar) {
  jami += narx;
}`
    },
    {
      type: 'playground',
      lang: 'js',
      title: "Tajriba: ko'paytirish jadvali",
      text: "Sonni o'zgartirib, boshqa jadvalni chiqaring. Siklni 12 gacha cho'zing.",
      code: `const son = 7;

for (let i = 1; i <= 10; i++) {
  console.log(son + " x " + i + " = " + son * i);
}`
    },
    {
      type: 'tasks',
      title: '8. Amaliyot Mashqlari',
      tasks: [
        'while loop bilan 1 dan 10 gacha sonlarni chop etish',
        'do...while bilan "Salom!" xabarini chop etish',
        'Massiv elementlarini for loop yordamida chiqarish',
        'Massiv uzunligini sanash',
        'Ob\'ektni for...in loop bilan aylanish',
        'break bilan to\'xtatish',
        'continue bilan o\'tkazib yuborish',
        'Nested loop yordamida jadval yaratish'
      ]
    }
  ]
};