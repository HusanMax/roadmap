export const nodeIntroData = {
  id: 'node-intro',
  title: '1. Node.js ga Kirish',
  heading: 'Node.js ga Kirish',
  subheading: 'Node.js - bu JavaScript\'ni brauzer tashqarisida, server tomonda bajarish imkonini beradigan runtime muhit.',
  sections: [
    {
      type: 'list',
      title: '1. Node.js Nima?',
      text: 'Node.js - bu JavaScript\'ni brauzer tashqarisida, server tomonda bajarish imkonini beradigan runtime muhit. Backend dasturlar, API\'lar va server tomonidagi jarayonlar yozish uchun ishlatiladi.',
      points: [
        'Qayerda ishlatiladi: Backend serverlar, API yaratish, fayl tizimi boshqaruvi.',
        'Kod misoli: console.log(\'Hello from Node.js\');',
        'Real misol: Login tizimi, to\'lov tizimlari, fayllarni yuklash funksiyalari.'
      ]
    },
    {
      type: 'code',
      title: '2. Node.js ni O\'rnatish va Ishga Tushirish',
      text: 'Node.js o\'rnatilgandan keyin terminal orqali JavaScript fayllarni bevosita ishga tushirish mumkin. Serverni ishga tushirish, skriptlarni sinash va backend dasturlarni bajarish uchun ishlatiladi.',
      code: 'node index.js'
    },
    {
      type: 'code',
      title: '3. npm - Node Package Manager',
      text: 'npm - Node.js uchun paket boshqaruvchi dastur. Library va paketlarni o\'rnatish, yangilash va boshqarish uchun ishlatiladi. Express.js, Mongoose, Axios kabi paketlarni o\'rnatishda qo\'llaniladi.',
      code: 'npm init -y\nnpm install express'
    },
    {
      type: 'list',
      title: '4. package.json - Loyiha Konfiguratsiyasi',
      text: 'package.json - loyiha haqida ma\'lumot saqlovchi fayl. Loyiha nomi, versiyasi, bog\'liqliklari va skriptlarni o\'z ichiga oladi.',
      points: [
        'Project ma\'lumotlari: Nomi, versiyasi, muallifi.',
        'Bog\'liqliklar: dependencies va devDependencies.',
        'Scripts: start, dev, build va boshqa komandalar.'
      ]
    },
    {
      type: 'code',
      title: '5. Modullar - Kodni Bo\'lish',
      text: 'Modul - alohida JavaScript fayl bo\'lib, kodni bo\'lish va ulashish uchun ishlatiladi. Bunda har bir fayl mustaqil vazifa bajaradi (masalan, yordamchi funksiyalar, API routelari, autentifikatsiya).',
      code: '// math.js\nconst add = (a, b) => a + b;\nmodule.exports = add;'
    },
    {
      type: 'code',
      title: '6. CommonJS Modul Tizimi',
      text: 'CommonJS modul tizimi require va module.exports dan foydalanadi. Node.js backend dasturlarida va Express.js API routelarida keng qo\'llaniladi.',
      code: '// Export\nconst add = (a, b) => a + b;\nmodule.exports = add;\n\n// Import\nconst add = require(\'./math\');'
    },
    {
      type: 'code',
      title: '7. ES Module - Zamonaviy Yondashuv',
      text: 'ES Module - zamonaviy JavaScript modul tizimi bo\'lib, import va export kalit so\'zlaridan foydalanadi. Diqqat: package.json da "type": "module" qo\'shish kerak.',
      code: 'export const add = (a, b) => a + b;\n\n// Import\nimport { add } from \'./math.js\';'
    },
    {
      type: 'list',
      title: '8. CommonJS vs ES Module Taqqoslanishi',
      text: 'Ikkala modul tizimi ham o\'ziga xos xususiyatlarga ega va ularni bila olish muhim:',
      points: [
        'CommonJS: require() funksiyasi, module.exports, sinxron yuklash, Node.js uchun standart.',
        'ES Module: import/export, dynamic import, asinxron yuklash, zamonaviy standart va yangi loyihalar uchun afzal.'
      ]
    },
    {
      type: 'code',
      title: '9. nodemon – Rivojlanish Asosi',
      text: 'nodemon - development tool bo\'lib, kod o\'zgarganda serverni avtomatik restart qiladi. Backend dasturlarini ishlab chiqish va debugging paytida qo\'lda qayta ishga tushirish ehtiyojini yo\'qotadi.',
      code: 'npm install -g nodemon\nnodemon index.js'
    }
  ]
};