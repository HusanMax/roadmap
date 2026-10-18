export const validationSecurityData = {
  id: 'validation-security',
  title: '9. Validation va Security Express da (Zod va bcrypt)',
  heading: 'Validation va Security Express da',
  subheading: 'Zod va bcrypt yordamida foydalanuvchi ma\'lumotlarini tekshirish va himoya qilish - Register va Login endpointlarini quramiz.',
  sections: [
    {
      type: 'list',
      title: '1. Muammo va Yechim',
      text: 'Backend dasturlashda validation va security larning yo\'qligi jiddiy xavfsizlik muammolarini keltirib chiqaradi.',
      points: [
        'Validation yo\'q: Noto\'g\'ri ma\'lumotlar kirishi va server xatolari kelib chiqishi.',
        'Hashing yo\'q: Parol ochiq holda saqlanishi, database buzilsa barcha parollar o\'qilishi.',
        'Zod va bcrypt yechimi: Professional va xavfsiz authentication (autentifikatsiya) tizimini qurish.'
      ]
    },
    {
      type: 'list',
      title: '2. Nima uchun Validation va Security muhim?',
      text: 'Xavfsizlik qoidalariga rioya qilmaslik quyidagi xavflarni keltirib chiqaradi:',
      points: [
        'Validation bo\'lmasa: Noto\'g\'ri email qabul qilinadi, bo\'sh maydonlar bazaga yoziladi, xavfsiz bo\'lmagan parollar o\'tadi va server kutilmagan xatolarga duch keladi.',
        'Hashing bo\'lmasa: Parol bazada ochiq holda saqlanadi, ma\'lumotlar bazasi buzilsa barcha parollar oshkor bo\'ladi va foydalanuvchilar xavfsizligi yo\'qoladi.',
        'Muhim qoida: Hech qachon parolni oddiy matn (plain text) sifatida saqlamang!'
      ]
    },
    {
      type: 'code',
      title: '3. Zod Nima va Qanday Ishlaydi?',
      text: 'Zod - bu foydalanuvchi yuborgan ma\'lumotni tekshiruvchi validation kutubxonasi. Schema ma\'lumot tuzilmasi va qoidalarini belgilaydi.',
      code: 'const { z } = require("zod");\n\n// O\'rnatish: npm install zod\n\nconst schema = z.object({\n  name: z.string(),\n  email: z.string()\n});\n\n// Ma\'lumotni tekshirish\nconst result = schema.safeParse({\n  name: "Ali",\n  email: "ali@mail.com"\n});\n\nconsole.log(result.success); // true'
    },
    {
      type: 'list',
      title: '4. Register Validation Schema',
      text: 'Register endpointi uchun validators/userValidator.js faylida schema yaratamiz. Har bir maydon o\'z qoidasiga ega:',
      points: [
        'ism: z.string().min(2) - Kamida 2 ta harf bo\'lishi shart.',
        'yosh: z.number().min(1) - Musbat son bo\'lishi shart.',
        'email: z.string().email() - To\'g\'ri email formati (user@mail.com).',
        'password: z.string().min(6) - Kamida 6 ta belgi bo\'lishi shart.'
      ]
    },
    {
      type: 'code',
      title: '5. safeParse() bilan Validation',
      text: 'safeParse() ma\'lumotni tekshiradi va natijani qaytaradi. Agar validatsiyadan o\'tmasa, 400 status kodi bilan xato xabari qaytariladi.',
      code: 'const registerSchema = require("../validators/userValidator");\n\nexports.registerUser = async (req, res) => {\n  const validation = registerSchema.safeParse(req.body);\n  \n  if (!validation.success) {\n    return res.status(400).json({\n      message: validation.error.errors\n    });\n  }\n  \n  // Keyingi qadam: hashing...\n};'
    },
    {
      type: 'code',
      title: '6. Password Hashing — bcrypt',
      text: 'Hashing - parolni o\'qib bo\'lmaydigan ko\'rinishga o\'tkazish. Bir tomonlama ishlaydi: hash\'dan asl parolni tiklab bo\'lmaydi. Salt rounds hashing qanchalik murakkab bo\'lishini belgilaydi.',
      code: 'const bcrypt = require("bcrypt");\n\n// O\'rnatish: npm install bcrypt\n\nconst password = "123456";\n\n// Hash yaratish (saltRounds = 10)\nconst hashedPassword = await bcrypt.hash(password, 10);\nconsole.log(hashedPassword); // $2b$10$asdjkhfksjdfhksjdfh...'
    },
    {
      type: 'code',
      title: '7. Register Controller — To\'liq Kod',
      text: 'Register endpoint validatsiyadan o\'tgach, parolni hash qiladi va yangi foydalanuvchini bazaga saqlaydi.',
      code: 'exports.registerUser = async (req, res) => {\n  try {\n    const validation = registerSchema.safeParse(req.body);\n    if (!validation.success) {\n      return res.status(400).json({\n        message: validation.error.errors\n      });\n    }\n    \n    const { ism, yosh, email, password } = req.body;\n    \n    const existingUser = await User.findOne({ email });\n    if (existingUser) {\n      return res.status(400).json({\n        message: "User already exists"\n      });\n    }\n    \n    const hashedPassword = await bcrypt.hash(password, 10);\n    \n    const newUser = await User.create({\n      ism,\n      yosh,\n      email,\n      password: hashedPassword\n    });\n    \n    res.status(201).json({\n      message: "User registered",\n      user: newUser\n    });\n  } catch (error) {\n    console.log(error);\n    res.status(500).json({\n      message: "Server error"\n    });\n  }\n};'
    },
    {
      type: 'code',
      title: '8. Login va Password Comparison',
      text: 'Login jarayonida foydalanuvchi email va parol yuboradi. Server foydalanuvchini topadi va bcrypt.compare() yordamida parollarni solishtiradi.',
      code: '// 1. User ni topish\nconst user = await User.findOne({ email: req.body.email });\n\n// 2. Password solishtirish\nconst isMatch = await bcrypt.compare(\n  req.body.password, // kiritilgan parol\n  user.password      // bazadagi hash\n);\n\n// isMatch: true yoki false'
    },
    {
      type: 'code',
      title: '9. Login Controller — To\'liq Kod va Status Kodlar',
      text: 'Login jarayonidagi xatolar va muvaffaqiyatli holatlar uchun tegishli status kodlar qaytariladi.',
      code: 'exports.loginUser = async (req, res) => {\n  try {\n    const validation = loginSchema.safeParse(req.body);\n    if (!validation.success) {\n      return res.status(400).json({\n        message: validation.error.errors\n      });\n    }\n    \n    const { email, password } = req.body;\n    const user = await User.findOne({ email });\n    \n    if (!user) {\n      return res.status(404).json({ message: "User not found" }); // 404 Not Found\n    }\n    \n    const isMatch = await bcrypt.compare(password, user.password);\n    if (!isMatch) {\n      return res.status(401).json({ message: "Wrong password" }); // 401 Unauthorized\n    }\n    \n    res.status(200).json({ message: "Login successful" }); // 200 OK\n  } catch (error) {\n    console.log(error);\n    res.status(500).json({ message: "Server error" }); // 500 Server Error\n  }\n};'
    },
    {
      type: 'list',
      title: '10. To\'liq Request Flow — Xulosa',
      text: 'Professional backend autentifikatsiya tizimining ishlash tartibi:',
      points: [
        'POST /register: User ma\'lumot yuboradi -> Zod validation tekshiradi -> bcrypt parolni hash qiladi -> Bazaga yoziladi (201 Created).',
        'POST /login: User credential yuboradi -> findOne() orqali user topiladi -> bcrypt.compare() parolni solishtiradi -> Muvaffaqiyatli (200 OK).'
      ]
    }
  ]
};