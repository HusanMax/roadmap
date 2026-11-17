export const projectStructureData = {
  id: 'project-structure',
  title: '6. Professional Backend Structure (MVC Arxitekturasi)',
  heading: 'Professional Backend Structure',
  subheading: 'Backend dasturlashda kodni papkalarga to\'g\'ri joylashtirish va professional arxitektura qurish.',
  sections: [
    {
      type: 'list',
      title: '1. Hammasi Bitta Faylda — Muammo',
      text: 'Oldingi darslarda barcha kodlar bitta app.js faylida yozilgan edi. Routes, database logic, schema, validation hammasi bir joyda.',
      points: [
        'Debug qiyin: Xatolikni topish uchun butun faylni ko\'rish kerak.',
        'Team uchun noqulay: Bir vaqtda bir xil faylda ishlash conflict chiqaradi.',
        'O\'sish cheklangan: Katta loyihalarda bitta fayl boshqarib bo\'lmaydi.'
      ]
    },
    {
      type: 'list',
      title: '2. Project Structure Nima?',
      text: 'Project structure - bu kodni papkalarga to\'g\'ri joylashtirish. Har bir papka o\'z vazifasiga ega, bu esa kodni o\'qish va boshqarishni osonlashtiradi.',
      points: [
        'config/: Database ulanishi va sozlamalar.',
        'models/: Data tuzilmasi va schema.',
        'controllers/: Business logic va database operatsiyalari.',
        'routes/: API endpoints va URL mapping.'
      ]
    },
    {
      type: 'code',
      title: '3. Model Nima?',
      text: 'Model - database bilan ishlaydigan asosiy obyekt. U data tuzilmasini (schema) belgilab, MongoDB collection bilan muloqot qiladi.',
      code: 'const mongoose = require("mongoose");\n\nconst bookSchema = new mongoose.Schema({\n  title: String,\n  author: String,\n  pages: Number\n});\n\nmodule.exports = mongoose.model("Book", bookSchema);'
    },
    {
      type: 'list',
      title: 'Model Tarkibiy Qismlari',
      text: 'Model fayli quyidagi asosiy qismlardan iborat:',
      points: [
        'Schema: Data maydonlarini va turlarini belgilaydi.',
        'Collection: MongoDB dagi "Books" jadvali bilan bog\'lanadi.',
        'Export: Boshqa fayllar import qilib ishlatadi.'
      ]
    },
    {
      type: 'code',
      title: '4. Controller Nima?',
      text: 'Controller - bu business logic joylashgan fayl. Request kelganda nima qilish kerakligini shu yerda yozamiz: database dan ma\'lumot olish, saqlash yoki o\'chirish.',
      code: 'const Book = require("../models/Book");\n\nexports.getBooks = async (req, res) => {\n  const books = await Book.find();\n  res.json(books);\n};\n\nexports.createBook = async (req, res) => {\n  const book = await Book.create(req.body);\n  res.status(201).json(book);\n};'
    },
    {
      type: 'list',
      title: 'Controller Qanday Ishlaydi?',
      text: 'Controller - route va model o\'rtasidagi ko\'prik:',
      points: [
        'request: clientdan ma\'lumot qabul qiladi.',
        'Model orqali database bilan ishlaydi.',
        'response: natijani clientga qaytaradi.'
      ]
    },
    {
      type: 'code',
      title: '5. Route Nima?',
      text: 'Route - bu API endpoint. U URL manzilini HTTP method bilan birga controller funksiyasiga bog\'laydi. Client qaysi URL ga so\'rov yuborsa, route uni to\'g\'ri controller ga yo\'naltiradi.',
      code: 'const express = require("express");\nconst router = express.Router();\nconst bookController = require("../controllers/bookController");\n\nrouter.get("/books", bookController.getBooks);\nrouter.post("/books", bookController.createBook);\n\nmodule.exports = router;'
    },
    {
      type: 'list',
      title: 'Route Xususiyatlari',
      text: 'Route controller ni chaqiradi - o\'zi hech narsa hisoblamaydi:',
      points: [
        'URL: /books.',
        'HTTP Method: GET yoki POST.',
        'Controller: bookController.getBooks / bookController.createBook.'
      ]
    },
    {
      type: 'code',
      title: '6. Routes ni App ga Ulash',
      text: 'app.js - barcha qismlarni birlashtiruvchi markaziy fayl. U database ga ulanadi va route larni server ga ro\'yxatdan o\'tkazadi.',
      code: 'const express = require("express");\nconst connectDB = require("./config/db");\nconst bookRoutes = require("./routes/bookRoutes");\n\nconst app = express();\n\napp.use(express.json());\nconnectDB();\n\napp.use("/api", bookRoutes);\n\napp.listen(3000, () => {\n  console.log("Server is running on 3000");\n});'
    },
    {
      type: 'list',
      title: 'app.js Vazifalari',
      text: 'App.js fayli quyidagi vazifalarni bajaradi:',
      points: [
        'Middleware: express.json() JSON request larni o\'qiydi.',
        'Database: connectDB() - MongoDB ga ulanadi.',
        'Routes: app.use() route larni server ga ulaydi.',
        'Listen: Server 3000-portda so\'rovlarni kutadi.'
      ]
    },
    {
      type: 'list',
      title: '7. Request Flow - Backend Ish Jarayoni',
      text: 'Client so\'rov yuborganidan javob olguncha, ma\'lumot bir necha qatlamdan o\'tadi. Har bir qatlam o\'z vazifasini bajarib, keyingisiga uzatadi:',
      points: [
        'Client: HTTP so\'rov yuboradi.',
        'Router: URL va metodni moslashtiradi.',
        'Controller: Biznes logikasini bajaradi.',
        'Model: Ma\'lumotlar bazasini so\'raydi.',
        'MongoDB: Data qaytaradi va zanjirga uzatadi.'
      ]
    },
    {
      type: 'list',
      title: '8. Professional Backend Structure',
      text: 'Barcha qismlarni birlashtirgan holda - bu real backend loyiha ko\'rinishi. Har bir fayl o\'z o\'rnida, har bir papka o\'z vazifasida:',
      points: [
        'config/db.js: MongoDB connection - bir marta yoziladi, hamma joyda ishlaydi.',
        'models/Book.js: Schema va Model - database tuzilmasini belgilaydi.',
        'controllers/bookController.js: Business logic - CRUD operatsiyalari shu yerda.',
        'routes/bookRoutes.js: API endpoints - URL va controller ni bog\'laydi.'
      ]
    }
  ]
};