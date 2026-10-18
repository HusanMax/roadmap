export const domData = {
  id: 'dom-intro',
  title: '12. DOM (Document Object Model)',
  heading: 'DOM Intro - Document Object Model',
  subheading: 'HTML sahifangizni JavaScript orqali boshqarish va o\'zgartirish usuli.',
  sections: [
    {
      type: 'list',
      title: '1. DOM Nima?',
      text: 'DOM (Document Object Model) - bu HTML sahifani JavaScript orqali boshqarish usuli. HTML hujjatini JavaScript obyektlari daraxti sifatida ifodalaydi.',
      points: [
        'Asosiy g\'oya: HTML sahifa JavaScript orqali o\'zgartiriladi va boshqariladi.',
        'Nima uchun kerak?: DOM orqali sahifadagi barcha elementlarni topish, ularning matnini o\'zgartirish, yangi elementlar yaratish va foydalanuvchi harakatlari bilan ishlash mumkin.',
        'Bog\'liqlik: HTML - sahifaning tuzilishi (structure), JavaScript - o\'zaro ta\'siri (interaction). DOM ikkalasini bog\'laydi.'
      ]
    },
    {
      type: 'list',
      title: '2. DOM Tree - Daraxt Tuzilishi',
      text: 'HTML hujjat DOM da daraxt strukturasi sifatida ifodalanadi. Har bir HTML elementi daraxtning bir tuguni (node) bo\'lib, ota-element va farzand-elementlarga ega.',
      points: [
        'Tugun (Node): Har bir HTML elementi DOM daraxtidagi bitta tugun hisoblanadi.',
        'Ota/Farzand: Elementlar o\'rtasida ierarxik munosabat mavjud - ota element farzand elementga ega.',
        'O\'zaro ta\'sir: DOM daraxti orqali istalgan elementni topish va o\'zgartirish mumkin.'
      ]
    },
    {
      type: 'code',
      title: '3. getElementById - ID Orqali Topish',
      text: 'Har qanday HTML elementga id atributi qo\'yish mumkin. Bu atribut yordamida JavaScript orqali elementni tez topish va o\'zgartirish imkoniyati beriladi. Eslatma: Har bir id noyob bo\'lishi kerak.',
      code: 'const el = document.getElementById("title");\nconsole.log(el);'
    },
    {
      type: 'code',
      title: '4. querySelector - CSS Selektorlari',
      text: 'Bu getElementById dan ko\'ra moslashuvchanroq usul. CSS selektorlari yordamida elementlarni tanlash mumkin - class, id, teg nomi yoki boshqa atributlar orqali.',
      code: '// ID bilan tanlash (# bilan)\nconst el1 = document.querySelector("#title");\n// Class bilan tanlash (. bilan)\nconst el2 = document.querySelector(".text");\n// Teg bilan tanlash\nconst el3 = document.querySelector("p");'
    },
    {
      type: 'code',
      title: '5. textContent - Matnni O\'zgartirish',
      text: 'textContent xususiyati elementning faqat matnini olish yoki o\'zgartirish uchun ishlatiladi. Bu xavfsiz usul, chunki u HTML ni tahlil qilmaydi va XSS hujumlardan himoya beradi.',
      code: 'const el = document.querySelector("p");\nel.textContent = "Yangi matn";\nconst text = el.textContent;\nconsole.log(text);'
    },
    {
      type: 'code',
      title: '6. innerHTML - HTML ni Kiritish',
      text: 'innerHTML xususiyati element ichiga HTML kodini kiritish uchun ishlatiladi. Bu textContent dan farqli o\'laroq, HTML teglarini tahlil qiladi va ularni renderlaydi. Ehtiyot bo\'ling: XSS hujumlari uchun ehtimoli mavjud.',
      code: 'el.innerHTML = "<b>Qalin matn</b>";'
    },
    {
      type: 'code',
      title: '7. createElement - Yangi Element Yaratish',
      text: 'document.createElement() usuli yangi HTML elementi yaratish uchun ishlatiladi. Bu element avvalo faqat xotirada yaratiladi va sahifaga ko\'rinmaydi.',
      code: 'const div = document.createElement("div");\ndiv.textContent = "Hello";\ndiv.className = "container";\ndocument.body.append(div);'
    },
    {
      type: 'code',
      title: '8. append - Elementni Qo\'shish',
      text: 'append usuli yaratilgan elementni DOM daraxtiga qo\'shish uchun ishlatiladi. Boshqa usullar: prepend (boshiga qo\'shish), appendChild (oxiriga qo\'shish), insertBefore (boshqa elementdan oldin qo\'shish).',
      code: 'document.body.append(div);\nconst ul = document.querySelector("ul");\nul.append(div);\nul.append(div1, div2, div3);'
    },
    {
      type: 'code',
      title: '9. Haqiqiy Misol va Interaktivlik',
      text: 'DOM usullarini birlashtirib, massivdagi ma\'lumotlar asosida dinamik ro\'yxat yaratish va tugma bosish orqali interaktivlik qo\'shish.',
      code: 'const users = ["Ali", "Sara", "John"];\nconst ul = document.querySelector("ul");\nusers.forEach(user => {\n  const li = document.createElement("li");\n  li.textContent = user;\n  ul.append(li);\n});\n\nconst btn = document.querySelector("button");\nbtn.onclick = () => {\n  const p = document.createElement("p");\n  p.textContent = "Button clicked";\n  document.body.append(p);\n};'
    }
  ]
};