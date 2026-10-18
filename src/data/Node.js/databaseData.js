export const databaseData = {
  id: 'database-mongodb',
  title: '5. Database, MongoDB Atlas va Mongoose',
  heading: 'Database, MongoDB Atlas va Mongoose',
  subheading: 'Backend dasturlashda ma\'lumotlarni professional tarzda saqlash va boshqarish.',
  sections: [
    {
      type: 'list',
      title: '1. Database Nima va Nega JSON yetarli emas?',
      text: 'Database - bu ma\'lumotlarni saqlash, qidirish va boshqarish uchun mo\'ljallangan maxsus tizim. Kichik loyihalar uchun users.json ishlatsa bo\'ladi, lekin katta loyihalar uchun u mos kelmaydi.',
      points: [
        'Sekin ishlaydi: Fayl katta bo\'lsa, har safar hammasini o\'qiydi va sekinlashadi.',
        'Qidirish qiyin: JSON ichidan qidirish uchun maxsus vosita yo\'q, oddiy loop yozish kerak.',
        'Ko\'p foydalanuvchi: Bir vaqtda ikki kishi yozsa, ma\'lumotlar buzilishi mumkin.',
        'Xavfsizlik past: JSON fayl oddiy matn bo\'lib, parol yoki huquq tizimi yo\'q.'
      ]
    },
    {
      type: 'list',
      title: '2. MongoDB Asoslari',
      text: 'MongoDB - ma\'lumotlar JSON ga o\'xshash formatda (BSON) saqlanadigan ma\'lumotlar bazasi.',
      points: [
        'Database: Eng yuqori daraja (masalan, school).',
        'Collection: Jadvalga o\'xshash tuzilma (masalan, students).',
        'Document: Har bir yozuv, alohida JSON obyekt.'
      ]
    },
    {
      type: 'list',
      title: '3. MongoDB Atlas - Cloud Database',
      text: 'MongoDB Atlas - bu internetda joylashgan MongoDB bazasi bo\'lib, hech qanday o\'rnatishni (installation) talab qilmaydi.',
      points: [
        'Afzalliklari: Bepul tarif (free tier) mavjud, istalgan joydan ishlatish mumkin, o\'rganish oson.',
        'Cluster yaratish bosqichlari: Hisob yaratish, Cluster yaratish, DB foydalanuvchi, Tarmoq ruxsati (Network access - 0.0.0.0/0) va Connection string olish.'
      ]
    },
    {
      type: 'code',
      title: '4. Mongoose va Databasega Ulanish',
      text: 'Mongoose - bu Node.js va MongoDB o\'rtasidagi ko\'prik vazifasini bajaruvchi kutubxona. U uchta asosiy qismdan iborat: Ulanish (connect), Schema (tuzilma) va Model (ma\'lumotlar bilan ishlash).',
      code: 'const mongoose = require("mongoose");\n\nasync function connectDB() {\n  try {\n    await mongoose.connect("mongodb+srv://admin:admin123@cluster0.xxxxx.mongodb.net/myapp");\n    console.log("MongoDB Atlas connected");\n  } catch (error) {\n    console.log("Database connection error");\n    process.exit(1);\n  }\n}\n\nmodule.exports = connectDB;'
    },
    {
      type: 'code',
      title: '5. Schema va Model Yaratish',
      text: 'Schema ma\'lumotlar tuzilmasini belgilaydi, Model esa ma\'lumot saqlash va boshqarish uchun ishlatiladi.',
      code: 'const mongoose = require("mongoose");\n\nconst studentSchema = new mongoose.Schema({\n  name: String,\n  age: Number,\n  course: String\n});\n\nconst Student = mongoose.model("Student", studentSchema);\n\nconst student = new Student({\n  name: "Ali",\n  age: 22,\n  course: "Backend"\n});\n\tawait student.save();'
    },
    {
      type: 'code',
      title: '6. Database dan Ma\'lumot O\'qish',
      text: 'find() kolleksiyadagi barcha hujjatlarni qaytaradi, findById() esa ID bo\'yicha bitta hujjatni topadi.',
      code: '// Barchasini olish\napp.get("/students", async (req, res) => {\n  const students = await Student.find();\n  res.json(students);\n});\n\n// Bittasini olish\napp.get("/students/:id", async (req, res) => {\n  const student = await Student.findById(req.params.id);\n  res.json(student);\n});'
    }
  ]
};