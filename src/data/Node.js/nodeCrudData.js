export const nodeCrudData = {
  id: 'node-crud-api',
  title: '3. Node.js yordamida Oddiy CRUD API',
  heading: 'Simple CRUD API with Node.js',
  subheading: 'http va fs modullari yordamida hech qanday framework ishlatmasdan oddiy CRUD server quramiz.',
  sections: [
    {
      type: 'list',
      title: '1. CRUD nima va nima quramiz?',
      text: 'CRUD - ma\'lumot bilan ishlashning 4 ta asosiy amali. Bu darsda users.json faylida foydalanuvchilarni saqlaydigan oddiy server yozamiz. Hech qanday framework kerak emas.',
      points: [
        'C - Create: yangi ma\'lumot qo\'shish (POST)',
        'R - Read: ma\'lumotni o\'qish (GET)',
        'U - Update: ma\'lumotni yangilash (PUT)',
        'D - Delete: ma\'lumotni o\'chirish (DELETE)'
      ]
    },
    {
      type: 'list',
      title: '2. Loyiha qanday ishlaydi?',
      text: 'Server so\'rovni qabul qiladi, users.json bilan ishlaydi va javob qaytaradi. Barcha foydalanuvchilar shu faylda saqlanadi.',
      points: [
        'HTTP server yaratadi',
        'users.json dan foydalanuvchilarni o\'qiydi',
        'Yangi foydalanuvchi qo\'shadi',
        'Mavjud foydalanuvchini yangilaydi',
        'Foydalanuvchini o\'chiradi'
      ]
    },
    {
      type: 'code',
      title: '3. Ma\'lumotlar bazasi: users.json',
      text: 'Bizning "baza" - oddiy JSON fayl. Loyiha papkasida users.json yarating. Boshida bo\'sh massiv bo\'lsin, yoki quyidagi namuna bilan boshlang. Har bir foydalanuvchida noyob id bo\'lishi shart.',
      code: `[
  {
    "id": 1,
    "name": "Husan",
    "age": 20,
    "city": "Tashkent"
  },
  {
    "id": 2,
    "name": "Aziza",
    "age": 22,
    "city": "Samarkand"
  }
]`
    },
    {
      type: 'code',
      title: '4. Modullarni import qilish',
      text: 'Node.js ichida o\'rnatilgan (built-in) modullar bor, ularni alohida o\'rnatish shart emas. http - server yaratish uchun, fs - fayl bilan ishlash uchun.',
      code: `const http = require("http");
const fs = require("fs");

const PORT = 8000;
const DB_FILE = "users.json";`
    },
    {
      type: 'code',
      title: '5. Yordamchi funksiyalar',
      text: 'Bir xil kodni har safar yozmaslik uchun 3 ta kichik funksiya yozamiz: bazani o\'qish, bazaga yozish va javob yuborish. Fayl JSON formatda, 2 ta probel bilan chiroyli saqlanadi.',
      code: `function readUsers(callback) {
  fs.readFile(DB_FILE, "utf8", (err, data) => {
    if (err) return callback(err);
    callback(null, JSON.parse(data || "[]"));
  });
}

function writeUsers(users, callback) {
  fs.writeFile(DB_FILE, JSON.stringify(users, null, 2), callback);
}

function sendJson(response, status, payload) {
  response.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
  response.end(JSON.stringify(payload));
}

function getBody(request, callback) {
  let body = "";
  request.on("data", chunk => {
    body += chunk;
  });
  request.on("end", () => callback(JSON.parse(body)));
}`
    },
    {
      type: 'code',
      title: '6. Server yaratish',
      text: 'http.createServer() har safar so\'rov kelganda ishlaydi. request - clientdan kelgan so\'rov (URL, method, body), response - serverdan qaytadigan javob.',
      code: `const server = http.createServer((request, response) => {
  // Routing shu yerda bo'ladi
});

server.listen(PORT, () => {
  console.log("Server running on http://localhost:" + PORT);
});`
    },
    {
      type: 'code',
      title: '7. Home route (bosh sahifa)',
      text: 'Routing - request.url va request.method ni tekshirib, qaysi yo\'l uchun qaysi kod ishlashini aniqlash. Status 200 - "hammasi yaxshi" degani.',
      code: `if (request.url === "/") {
  return sendJson(response, 200, { message: "Home Page" });
}`
    },
    {
      type: 'code',
      title: '8. GET /users - ma\'lumot o\'qish',
      text: 'GET serverdan ma\'lumot so\'rash uchun ishlatiladi. users.json o\'qilib, clientga JSON ko\'rinishida yuboriladi.',
      code: `if (request.method === "GET" && request.url === "/users") {
  return readUsers((err, users) => {
    if (err) return sendJson(response, 500, { error: "Faylni o'qib bo'lmadi" });
    sendJson(response, 200, users);
  });
}`
    },
    {
      type: 'code',
      title: '9. POST /users - yangi foydalanuvchi qo\'shish',
      text: 'Client ma\'lumotni body orqali yuboradi. Uni request.on("data") va request.on("end") bilan yig\'ib olamiz, keyin users.json ga yozamiz. Muvaffaqiyatli yaratilsa status 201 qaytadi.',
      code: `if (request.method === "POST" && request.url === "/users") {
  return getBody(request, newUser => {
    readUsers((err, users) => {
      if (err) return sendJson(response, 500, { error: "Faylni o'qib bo'lmadi" });
      users.push(newUser);
      writeUsers(users, () => {
        sendJson(response, 201, { message: "User added", user: newUser });
      });
    });
  });
}`
    },
    {
      type: 'code',
      title: '10. PUT /users - foydalanuvchini yangilash',
      text: 'Berilgan id bo\'yicha foydalanuvchini topib, ma\'lumotlarini yangisi bilan almashtiramiz. Topilmasa status 404 qaytadi.',
      code: `if (request.method === "PUT" && request.url === "/users") {
  return getBody(request, updatedUser => {
    readUsers((err, users) => {
      if (err) return sendJson(response, 500, { error: "Faylni o'qib bo'lmadi" });
      const exists = users.some(user => user.id === updatedUser.id);
      if (!exists) return sendJson(response, 404, { error: "User topilmadi" });
      const result = users.map(user => user.id === updatedUser.id ? updatedUser : user);
      writeUsers(result, () => {
        sendJson(response, 200, { message: "User updated", user: updatedUser });
      });
    });
  });
}`
    },
    {
      type: 'code',
      title: '11. DELETE /users - foydalanuvchini o\'chirish',
      text: 'Berilgan id ga mos foydalanuvchini filter yordamida massivdan olib tashlaymiz.',
      code: `if (request.method === "DELETE" && request.url === "/users") {
  return getBody(request, ({ id }) => {
    readUsers((err, users) => {
      if (err) return sendJson(response, 500, { error: "Faylni o'qib bo'lmadi" });
      const result = users.filter(user => user.id !== id);
      if (result.length === users.length) {
        return sendJson(response, 404, { error: "User topilmadi" });
      }
      writeUsers(result, () => {
        sendJson(response, 200, { message: "User deleted", id });
      });
    });
  });
}`
    },
    {
      type: 'code',
      title: '12. Noma\'lum yo\'l (404)',
      text: 'Hech qaysi route mos kelmasa, oxirida 404 qaytaramiz. Bu kod barcha if bloklaridan keyin, createServer ichida turadi.',
      code: `sendJson(response, 404, { error: "Route topilmadi" });`
    },
    {
      type: 'code',
      title: '13. Serverni tekshirish',
      text: 'Serverni node server.js bilan ishga tushiring. Boshqa terminalda curl bilan har bir amalni sinab ko\'ring (yoki Postman / Thunder Client ishlating).',
      code: `# Hamma foydalanuvchilar
curl http://localhost:8000/users

# Yangi foydalanuvchi qo'shish
curl -X POST http://localhost:8000/users \\
  -H "Content-Type: application/json" \\
  -d '{"id": 3, "name": "Ali", "age": 19, "city": "Bukhara"}'

# Yangilash
curl -X PUT http://localhost:8000/users \\
  -H "Content-Type: application/json" \\
  -d '{"id": 3, "name": "Ali", "age": 20, "city": "Bukhara"}'

# O'chirish
curl -X DELETE http://localhost:8000/users \\
  -H "Content-Type: application/json" \\
  -d '{"id": 3}'`
    },
    {
      type: 'list',
      title: '14. Eslab qoling',
      text: 'Bu o\'quv loyihasi. Haqiqiy loyihada boshqacha yondashuv kerak bo\'ladi.',
      points: [
        'Haqiqiy loyihalarda JSON fayl o\'rniga MongoDB yoki PostgreSQL ishlatiladi',
        'id ni client emas, server o\'zi yaratishi kerak (masalan Date.now())',
        'Keyingi qadam: Express.js bilan shu API ni qayta yozish',
        'Status kodlar: 200 OK, 201 Created, 404 Not Found, 500 Server Error'
      ]
    }
  ]
};