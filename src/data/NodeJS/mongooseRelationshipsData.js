export const mongooseRelationshipsData = {
  id: 'mongoose-relationships',
  title: '8. Mongoose: Relationships, populate() va aggregate()',
  heading: 'Mongoose: Relationships, populate() va aggregate()',
  subheading: 'Express ilovalarida ma\'lumotlar o\'rtasida munosabatlar yaratish va ularni professional tarzda boshqarish - Mongoose ODM yordamida.',
  sections: [
    {
      type: 'list',
      title: '1. ODM Nima va Nima Uchun Mongoose?',
      text: 'ODM - Object Data Modeling bo\'lib, JavaScript obyektlarini MongoDB hujjatlariga bog\'laydigan vosita hisoblanadi. Mongoose eng mashhur ODM hisoblanadi.',
      points: [
        'Schema yaratish: Ma\'lumot strukturasini belgilash.',
        'Validation: Noto\'g\'ri ma\'lumotlarni to\'sish.',
        'Relationship: Kolleksiyalar o\'rtasida bog\'lanish.',
        'populate va aggregate: Kuchli query (so\'rov) imkoniyatlari.'
      ]
    },
    {
      type: 'code',
      title: '2. Mongoose Schema va Model Yaratish',
      text: 'Mongoose yordamida User sxemasi va modelini yaratish namunasi:',
      code: 'const mongoose = require("mongoose");\n\n// Schema yaratish\nconst UserSchema = new mongoose.Schema({\n  name: {\n    type: String,\n    required: true\n  },\n  email: {\n    type: String,\n    unique: true\n  }\n});\n\n// Model yaratish\nconst User = mongoose.model("User", UserSchema);\n\nmodule.exports = User;'
    },
    {
      type: 'list',
      title: '3. MongoDB da Relationship Nima?',
      text: 'Relationship - bu ikki kolleksiya o\'rtasidagi mantiqiy bog\'lanish bo\'lib, bir hujjat boshqa hujjatga reference (havola) saqlaydi.',
      points: [
        'User va Orders: Foydalanuvchi va uning buyurtmalari.',
        'Student va Courses: Talaba va u yozilgan kurslar.',
        'Doctor va Patients: Shifokor va uning bemorlar ro\'yxati.',
        'Asosiy prinsip: Book hujjati ichida User ning _id si reference sifatida saqlanadi.'
      ]
    },
    {
      type: 'code',
      title: '4. ObjectId va ref bilan Relationship Yaratish',
      text: 'MongoDB da relationship ObjectId orqali yaratiladi. ref xususiyati qaysi model bilan bog\'langanini bildiradi.',
      code: 'const mongoose = require("mongoose");\n\nconst BookSchema = new mongoose.Schema({\n  title: String,\n  author: String,\n  // Relationship field\n  user: {\n    type: mongoose.Schema.Types.ObjectId,\n    ref: "User" // User modeliga bog\'lanish\n  }\n});\n\nmodule.exports = mongoose.model("Book", BookSchema);'
    },
    {
      type: 'list',
      title: '5. Bog\'liq Hujjatlarni Yaratish',
      text: 'Avval ota (parent) hujjat (User) yaratiladi, so\'ng uning _id si reference sifatida bola (child) hujjat (Book) ga saqlanadi.',
      points: [
        '1-qadam: User yaratish (masalan, user._id = "664abc123").',
        '2-qadam: Book yaratish va user maydoniga user._id ni berish.',
        'Ma\'lumotlar bazasidagi holat: Users kolleksiyasida foydalanuvchi ma\'lumotlari, Books kolleksiyasida esa user maydonida faqat ObjectId saqlanadi.'
      ]
    },
    {
      type: 'code',
      title: '6. populate() Nima va Qanday Ishlaydi?',
      text: 'populate() - reference ID o\'rniga to\'liq obyekt ma\'lumotini boshqa kolleksiyadan olib keladi va controller ichida ishlatiladi.',
      code: 'exports.getBooks = async (req, res) => {\n  try {\n    const books = await Book\n      .find()\n      .populate("user"); // sehrli qator\n    res.json(books);\n  } catch (err) {\n    res.status(500).json({ error: err.message });\n  }\n};'
    },
    {
      type: 'list',
      title: '7. populate() — Faqat Kerakli Maydonlar (Select Fields)',
      text: 'Select fields yordamida populate() funksiyasidan foydalanish unumdorlikni oshiradi va xavfsizlikni ta\'minlaydi.',
      points: [
        'Performance: Keraksiz katta ma\'lumotlarni yuklamaslik serverni tezroq ishlatadi.',
        'Xavfsizlik: password kabi maxfiy maydonlarni klientga yubormaslik.',
        'Clean Response: API javobi faqat kerakli ma\'lumotni (masalan, name va email) o\'z ichiga oladi (_id avtomatik keladi).'
      ]
    },
    {
      type: 'list',
      title: '8. aggregate() — Ma\'lumotlarni Tahlil Qilish',
      text: 'aggregate() - ma\'lumotlarni hisoblash, guruhlash va tahlil qilish uchun ishlatiladigan kuchli MongoDB vositasidir.',
      points: [
        'Statistics: Jami foydalanuvchilar, buyurtmalar soni.',
        'Reports: Oylik va yillik hisobotlar, savdo analitikasi.',
        'Dashboard: Admin paneli uchun real vaqt ko\'rsatkichlari.',
        'Pipeline: Bosqichlar ketma-ketligi bo\'lib, ma\'lumot yuqoridan pastga oqib o\'tadi ($match -> $group -> $sort -> $limit).'
      ]
    },
    {
      type: 'code',
      title: '9. aggregate Operators: $match, $group, $sum, $count',
      text: 'Agregatsiya operatorlari yordamida murakkab ma\'lumotlar tahlili amalga oshiriladi:',
      code: '// 1. Muallif bo\'yicha filter va hisoblash\nconst resultMatch = await Book.aggregate([\n  { $match: { author: "Ali" } },\n  { $count: "totalBooks" }\n]);\n\n// 2. Guruhlangan holda yig\'indini hisoblash ($sum)\nconst resultGroup = await Book.aggregate([\n  {\n    $group: {\n      _id: "$author",\n      totalBooks: { $sum: 1 }\n    }\n  }\n]);'
    },
    {
      type: 'list',
      title: '10. populate() vs aggregate() — Muhim Xulosa',
      text: 'Professional backend dasturlashda bu ikki vosita har kuni ishlatiladi:',
      points: [
        'populate(): Relationship dan ma\'lumot olish uchun. ID o\'rniga to\'liq obyekt qaytaradi. Ref va ObjectId bilan ishlaydi.',
        'aggregate(): Hisoblash va tahlil uchun. Pipeline bosqichlari ($match -> $group -> $sum) orqali ishlaydi. Hisobotlar va panel (dashboard) uchun ideal.'
      ]
    },
    {
      type: 'code',
      title: '11. Real Route Misollari',
      text: 'Amaliy loyihalarda ishlatiladigan marshrutlar namunasi:',
      code: '// populate - kitob va egasini ko\'rsatish\nrouter.get("/books", controller.getBooks);\n\n// aggregate - statistika olish\nrouter.get("/books/stats", controller.getStats);'
    }
  ]
};