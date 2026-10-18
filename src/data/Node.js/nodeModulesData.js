export const nodeModulesData = {
  id: 'node-modules',
  title: '2. Node.js Asosiy Modullari (Core Modules)',
  heading: 'Node.js Asosiy Modullari',
  subheading: 'Node.js da dastlab mavjud bo\'lgan va npm orqali o\'rnatish shart bo\'lmagan Core Modullar.',
  sections: [
    {
      type: 'list',
      title: '1. Core Modules Nima?',
      text: 'Node.js da ba\'zi modullar dastlab mavjud bo\'ladi va ularni ishlatish uchun npm orqali o\'rnatish shart emas. Bu modullar Core Modules deb ataladi va backend dasturlashning asosini tashkil etadi.',
      points: [
        'path: Fayl va papka yo\'llari bilan ishlash.',
        'events: Event-driven dasturlash uchun.',
        'fs: Fayllar bilan o\'qish, yozish, o\'chirish.',
        'http: Server yaratish va HTTP so\'rovlari.'
      ]
    },
    {
      type: 'code',
      title: '2. Path Module - Yo\'llar bilan Ishlash',
      text: 'path module fayl va papka yo\'llari bilan ishlash uchun ishlatiladi. Platformaga qarab to\'g\'ri yo\'lni yaratishga yordam beradi. JSON ma\'lumotlar faylini o\'qish va upload papkaga yo\'l yaratishda qo\'llaniladi.',
      code: 'const path = require("path");\n\nconst configPath = path.join(__dirname, "config", "settings.json");\nconst dataPath = path.join(__dirname, "data", "users.json");\n\nconsole.log(configPath); // Output: /project/config/settings.json'
    },
    {
      type: 'list',
      title: '3. Muhim Path Metodlari',
      text: 'Path moduli yordamida fayl yo\'llarini qismlarga ajratish va tahlil qilish mumkin.',
      points: [
        'path.basename(): Fayl nomini olish (path.basename("/users/data.txt") -> "data.txt").',
        'path.extname(): Fayl kengaytmasini olish (path.extname("/users/data.txt") -> ".txt").',
        'path.dirname(): Papka yo\'lini olish (path.dirname("/users/data.txt") -> "/users").'
      ]
    },
    {
      type: 'code',
      title: '4. FS Module - Fayl Tizimi (Yaratish)',
      text: 'fs (File System) module fayllar bilan ishlash uchun ishlatiladi: yaratish, o\'qish, yangilash va o\'chirish. Log fayllarini yaratish, ma\'lumotlar bazasi sifatida JSON fayllar va upload qilingan fayllar bilan ishlashda kerak bo\'ladi.',
      code: 'const fs = require("fs");\n\nfs.writeFile(\n  "test.txt",\n  "Hello Node.js",\n  (err) => {\n    if (err) throw err;\n    console.log("Fayl yaratildi!");\n  }\n);'
    },
    {
      type: 'code',
      title: '5. FS - O\'qish va O\'chirish',
      text: 'fs.readFile() faylni o\'qish va uning kontentini olish uchun, fs.unlink() esa faylni tizimdan butunlay o\'chirish uchun ishlatiladi.',
      code: '// Faylni o\'qish\nfs.readFile("users.json", "utf8", (err, data) => {\n  if (err) throw err;\n  console.log(data); // JSON ma\'lumotlar\n});\n\n// Faylni o\'chirish\nfs.unlink("old-file.txt", (err) => {\n  if (err) throw err;\n  console.log("Fayl o\'chirildi!");\n});'
    },
    {
      type: 'code',
      title: '6. HTTP Module - Server Yaratish',
      text: 'http module yordamida TCP/IP protokolida ishlovchi web server yaratish mumkin. Bu Node.js ning eng muhim modullaridan biri bo\'lib, web server, API endpointlar va real-time ilovalarda ishlatiladi.',
      code: 'const http = require("http");\n\nconst server = http.createServer((req, res) => {\n  res.write("Hello Server!");\n  res.end();\n});\n\nserver.listen(3000, () => {\n  console.log("Server ishlayapti: http://localhost:3000");\n});'
    },
    {
      type: 'code',
      title: '7. Routing va HTTP Metodlari',
      text: 'req.url foydalanuvchi qaysi sahifani so\'raganini aniqlash uchun ishlatiladi. req.method esa so\'rov turini (GET, POST, PUT, DELETE) aniqlab, mos amallarni bajarish imkonini beradi.',
      code: 'const server = http.createServer((req, res) => {\n  if (req.url === "/") {\n    res.write("Bosh sahifa");\n  } else if (req.url === "/about") {\n    res.write("Biz haqimizda");\n  }\n  res.end();\n});'
    },
    {
      type: 'list',
      title: '8. HTTP Metodlari Turlari',
      text: 'RESTful API yaratishda asosiy HTTP metodlari qo\'llaniladi:',
      points: [
        'GET: Ma\'lumotni o\'qish va olish (GET /users).',
        'POST: Yangi ma\'lumot yaratish (POST /users).',
        'PUT: Mavjud ma\'lumotni yangilash (PUT /users/1).',
        'DELETE: Ma\'lumotni o\'chirish (DELETE /users/1).'
      ]
    },
    {
      type: 'tasks',
      title: '9. Amaliy Topshiriqlar',
      tasks: [
        'Path modulidan foydalanish: path.join() yordamida data/users.json fayliga to\'g\'ri yo\'l yarating.',
        'Fayl yaratish: fs.writeFile() yordamida log.txt faylini yarating va unga "Server started" matnini yozing.',
        'Faylni o\'qish: fs.readFile() yordamida yaratgan faylingiz kontentini o\'qing va konsolga chop eting.',
        'HTTP server yaratish: HTTP modulidan foydalanib 3000-portda server yarating va uni ishga tushirishda "Server running" xabari chop etsin.',
        'Routing qo\'shish: req.url orqali / va /about yo\'llarini boshqaring, har bir yo\'lga mos xabar chop eting.'
      ]
    }
  ]
};