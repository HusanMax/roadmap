export const conditionsData = {
  id: 'conditions',
  title: '2. Js Conditions',
  heading: 'Shart Operatorlari',
  subheading: "JavaScript-da shartli mantiqni o'rganish",
  sections: [
    {
      type: 'list',
      title: "1. Shart Operatorlari Nima?",
      text: "Dasturlashda shart operatorlari dasturga ma'lum shartlar asosida qaror qabul qilishga imkon beradi. Bu - dastur mantiqining asosi.",
      points: [
        "if, if-else, else if",
        "Logical operators: &&, ||, !",
        "Switch statement",
        "Ternary operator"
      ]
    },
    {
      type: 'code',
      title: "2. if Operatori",
      text: "Shart bajarilganda kodni bajarish uchun ishlatiladi. Shart true yoki false qaytarishi kerak.",
      code: "let age = 16;\nif (age >= 18) {\n  console.log('Siz ovoz berishingiz mumkin');\n}"
    },
    {
      type: 'code',
      title: "3. if / else va else if",
      text: "Ko'plab shartlar uchun ketma-ket tekshirish. Shartlar yuqoridan pastga tekshiriladi, birinchi mos kelgani bajariladi.",
      code: "let score = 85;\nif (score >= 90) {\n  console.log('A');\n} else if (score >= 80) {\n  console.log('B');\n} else {\n  console.log('C');\n}"
    },
    {
      type: 'falsyTruthy',
      title: "4. Truthy va Falsy Qiymatlar",
      falsy: ["false", "0 (nol)", "'' (bo'sh string)", "null", "undefined", "NaN"],
      truthy: ["'0', 'false' (string)", "[], {} (bo'sh array/object)", "1, -1, 100 (noldan farqli son)", "'hello'"]
    },
    {
      type: 'list',
      title: "5. Logical Operatorlar",
      points: [
        "&& (AND) - Har ikkala shart true bo'lishi kerak",
        "|| (OR) - Kamida bitta shart true bo'lishi kerak",
        "! (NOT) - Shartni teskarisiga o'zgartiradi"
      ]
    },
    {
      type: 'code',
      title: "6. switch / case Operatori",
      text: "Bir nechta qiymatlar bilan solishtirish uchun ishlatiladi.",
      code: "let day = 'Monday';\nswitch (day) {\n  case 'Monday':\n    console.log('Dushanba');\n    break;\n  default:\n    console.log('Boshqa kun');\n}"
    },
    {
      type: 'tasks',
      title: "7. Amaliyot: Mashqlar",
      tasks: [
        "Yosh tekshirish: 18 yoshdan katta/kichikligini aniqlash",
        "Baholash tizimi: 90+ = A, 80-89 = B, 70-79 = C va h.k.",
        "Login tekshirish: login va aktivlikni tekshirish",
        "Truthy/Falsy qiymatlarni aniqlash",
        "Hafta kunlari: switch yordamida aniqlash",
        "Ternary ga o'tkazish: score >= 50 shartini yozish",
        "Operator tanlash: &&, || yoki ?? larni ishlatish"
      ]
    }
  ]
};