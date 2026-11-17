export const numbersData = {
  id: 'numbers-strings',
  title: '5. Numbers va Stringlar',
  heading: 'JavaScript: Numbers va Stringlar (Asoslar)',
  subheading: 'Sonlar bilan ishlash, Math obyektlari, string metodlari va callback funksiyalar.',
  sections: [
    {
      type: 'list',
      title: '1. JavaScript Numbers (Asoslar)',
      text: 'JavaScriptda "number" bitta tur hisoblanadi: butun sonlar, o\'nlik kasrlar va manfiylar bir xil turda saqlanadi.',
      points: [
        'Integer (Butun): 5, -3; Decimal (O\'nlik): 3.14; Negative (Manfiy): -10.',
        'Qo\'llanishi: Narxlar (price), miqdor (quantity), reytinglar va hisoblagichlar uchun ishlatiladi.'
      ]
    },
    {
      type: 'code',
      title: '2. toFixed() - Sonni formatlash',
      text: 'toFixed(n) raqamni n ta o\'nlik pozitsiyaga qadar formatlaydi va natijani STRING qaytaradi.',
      code: 'const price = 9.5;\nconst display = price.toFixed(2); // "9.50"'
    },
    {
      type: 'code',
      title: '3. Math.round(), Math.floor(), Math.ceil()',
      text: 'Math obyekti matematik yordamchi funksiyalarni taqdim etadi.',
      code: 'const x = 3.6;\nconsole.log(Math.round(x)); // 4 (eng yaqin butunga)\nconsole.log(Math.floor(x)); // 3 (pastga qarab kesadi)\nconsole.log(Math.ceil(x));  // 4 (yuqoriga qarab oshiradi)'
    },
    {
      type: 'code',
      title: '4. Math.random() va Tasodifiy Sonlar',
      text: 'Math.random() [0, 1) oralig\'ida float qiymat beradi.',
      code: '// 1 dan 10 gacha tasodifiy butun son olish\nconst n = Math.floor(Math.random() * 10) + 1;\nconsole.log(n);'
    },
    {
      type: 'code',
      title: '5. String -> Number Konvertatsiya',
      text: 'Formadan kelgan qiymatlar har doim string bo\'ladi. Ularni songa o\'tkazish uchun Number(), parseInt() va parseFloat() ishlatiladi.',
      code: 'const s = "42px";\nconsole.log(Number(s));      // NaN\nconsole.log(parseInt(s, 10)); // 42'
    },
    {
      type: 'list',
      title: '6. Stringlar (Asoslar) va Immutability',
      text: 'String - belgilar ketma-ketligi bo\'lib, ular immutable (o\'zgarmas) hisoblanadi.',
      points: [
        'Belgilarni qo\'shish + operatori orqali amalga oshiriladi.',
        'Metodlar original stringni o\'zgartirmaydi, doimo yangi string qaytaradi.'
      ]
    },
    {
      type: 'code',
      title: '7. length, toUpperCase va toLowerCase',
      text: '.length string uzunligini qaytaradi, case metodlari esa matn registrini o\'zgartiradi.',
      code: 'const s = "Hello";\nconsole.log(s.length);      // 5\nconsole.log(s.toUpperCase()); // "HELLO"\nconsole.log(s.toLowerCase()); // "hello"'
    },
    {
      type: 'code',
      title: '8. trim(), includes(), slice(), replace()',
      text: 'Matnlarni tozalash va qism ajratish uchun foydali metodlar.',
      code: 'const t = "  hello  ".trim(); // "hello"\nconsole.log("hello world".includes("world")); // true\nconsole.log("abcdef".slice(1, 4)); // "bcd"\nconsole.log("foo bar".replace("bar", "baz")); // "foo baz"'
    },
    {
      type: 'code',
      title: '9. Callback Funksiyalar',
      text: 'Callback funksiya - bu boshqa funksiyaga argument sifatida beriladigan va keyinroq chaqiriladigan funksiya.',
      code: 'setTimeout(function () {\n  console.log("2 sekund o\'tdi");\n}, 2000);'
    },
    {
      type: 'challenge',
      lang: 'js',
      title: 'Mini vazifa: ism formatlash',
      story: "Ro'yxatdan o'tish formasida foydalanuvchilar ismini turlicha yozadi: '  aLI  ', 'VALI'. Bazaga chiroyli shaklda saqlash kerak.",
      task: "formatIsm(ism) funksiyasini yozing: bo'shliqlarni olib tashlab, birinchi harfni katta, qolganini kichik qilib qaytarsin ('  aLI ' → 'Ali').",
      starter: `function formatIsm(ism) {
  // trim, toUpperCase, toLowerCase, slice dan foydalaning
}

console.log(formatIsm("  aLI  "));`,
      tests: [
        { name: "'  aLI ' → 'Ali'", expr: "formatIsm('  aLI ') === 'Ali'" },
        { name: "'VALI' → 'Vali'", expr: "formatIsm('VALI') === 'Vali'" },
        { name: "'hASAN' → 'Hasan'", expr: "formatIsm('hASAN') === 'Hasan'" }
      ],
      hint: 'ism.trim() dan keyin: ism[0].toUpperCase() + ism.slice(1).toLowerCase().',
      solution: `function formatIsm(ism) {
  const toza = ism.trim();
  return toza[0].toUpperCase() + toza.slice(1).toLowerCase();
}`
    },
    {
      type: 'playground',
      lang: 'js',
      title: 'Tajriba: sonlar va matn',
      text: "Sonni yaxlitlash va matn metodlarini sinab ko'ring.",
      code: `const narx = 12345.6789;
console.log(narx.toFixed(2));
console.log(Math.round(narx), Math.floor(narx), Math.ceil(narx));

const gap = "  JavaScript — qiziqarli  ";
console.log(gap.trim().toUpperCase());
console.log(gap.includes("qiziqarli"));
console.log("a,b,c".split(","));`
    },
    {
      type: 'tasks',
      title: '10. Amaliyot Topshiriqlari',
      tasks: [
        'toFixed(2) yordamida narxni formatlash',
        'Math.round() bilan o\'nlikni yaxlitlash',
        '1 dan 10 gacha tasodifiy butun son yaratish',
        'String inputini Number() yoki parseInt() ga o\'tkazish',
        'Parol uzunligini tekshirish (.length < 8)',
        'Matnni toUpperCase() ga o\'tkazish',
        'trim() yordamida bo\'shliqlarni olib tashlash',
        'includes() bilan so\'z mavjudligini tekshirish',
        'Callback qabul qiladigan funksiya yozish',
        'setTimeout bilan callback ishlatish'
      ]
    }
  ]
};