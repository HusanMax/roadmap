export const expressData = {
  id: 'express-backend',
  title: '4. Express.js: Backend Qurishni Osonlashtiruvchi Framework',
  heading: 'Express.js - Backend Qurishni Osonlashtiruvchi Framework',
  subheading: 'Node.js da server yozishni soddalashtiruvchi framework, routing, middleware va request handling.',
  sections: [
    {
      type: 'list',
      title: '1. Express.js Nima?',
      text: 'Node.js da server yozish ko\'p kod talab qiladi. Express esa routing, middleware va request handling ni soddalashtirib, kamroq kod bilan ko\'proq ish qilishga yordam beradi.',
      points: [
        'Server yozishni osonlashtiradi.',
        'Routing va middleware boshqaruvini taqdim etadi.',
        'Kamroq kod bilan ko\'proq natija beradi.'
      ]
    },
    {
      type: 'code',
      title: '2. Express O\'rnatish va Server Yaratish',
      text: 'Express paketini o\'rnatish va asosiy server instanceni yaratish.',
      code: 'npm install express\n\nconst express = require("express");\nconst app = express();\n\napp.listen(8000, () => {\n  console.log("Server running on port 8000");\n});'
    },
    {
      type: 'code',
      title: '3. Birinchi Route - Bosh Sahifa',
      text: 'Express da route yaratish juda sodda. app.get() orqali GET so\'rovini ushlab, javob yuboramiz.',
      code: 'app.get("/", (req, res) => {\n  res.send("Home Page");\n});'
    },
    {
      type: 'code',
      title: '4. JSON Body - Muhim Middleware',
      text: 'POST va PUT so\'rovlarida kelayotgan ma\'lumotni o\'qish uchun express.json() middleware ni yoqish shart. Barcha routelardan OLDIN yozilishi kerak.',
      code: 'app.use(express.json());\n\napp.post("/users", (req, res) => {\n  console.log(req.body);\n});'
    },
    {
      type: 'code',
      title: '5. GET /users - Foydalanuvchilarni O\'qish',
      text: 'fs moduli yordamida users.json faylini o\'qib clientga yuborish.',
      code: 'const fs = require("fs");\n\napp.get("/users", (req, res) => {\n  fs.readFile("users.json", "utf8", (err, data) => {\n    if (err) {\n      return res.send("Error reading file");\n    }\n    res.send(data);\n  });\n});'
    },
    {
      type: 'code',
      title: '6. POST /users - Yangi Foydalanuvchi Qo\'shish',
      text: 'Kelgan yangi user ma\'lumotini (req.body) arrayga qo\'shib faylga saqlash.',
      code: 'app.post("/users", (req, res) => {\n  const newUser = req.body;\n  fs.readFile("users.json", "utf8", (err, data) => {\n    const users = JSON.parse(data);\n    users.push(newUser);\n    fs.writeFile("users.json", JSON.stringify(users), () => {\n      res.send("User added");\n    });\n  });\n});'
    },
    {
      type: 'code',
      title: '7. PUT /users - Foydalanuvchini Yangilash',
      text: 'ID bo\'yicha qidirib, mos kelgan userni yangilangan versiya bilan almashtirish.',
      code: 'app.put("/users", (req, res) => {\n  const updatedUser = req.body;\n  fs.readFile("users.json", "utf8", (err, data) => {\n    let users = JSON.parse(data);\n    users = users.map(user => user.id === updatedUser.id ? updatedUser : user);\n    fs.writeFile("users.json", JSON.stringify(users), () => {\n      res.send("User updated");\n    });\n  });\n});'
    },
    {
      type: 'code',
      title: '8. DELETE /users - Foydalanuvchini O\'chirish',
      text: 'filter() yordamida berilgan ID ga mos kelmagan userlarni saqlab, qolganini o\'chirish.',
      code: 'app.delete("/users", (req, res) => {\n  const { id } = req.body;\n  fs.readFile("users.json", "utf8", (err, data) => {\n    let users = JSON.parse(data);\n    users = users.filter(user => user.id !== id);\n    fs.writeFile("users.json", JSON.stringify(users), () => {\n      res.send("User deleted");\n    });\n  });\n});'
    },
    {
      type: 'code',
      title: '9. Fallback Route - Topilmagan Sahifa',
      text: 'Barcha routelardan KEYIN yoziladi. Agar foydalanuvchi mavjud bo\'lmagan route ga so\'rov yuborsa, "Not found" javobini qaytaradi.',
      code: 'app.use((req, res) => {\n  res.send("Not found");\n});'
    }
  ]
};