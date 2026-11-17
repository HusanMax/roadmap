export const otpAuthData = {
  id: 'otp-auth-nodemaler',
  title: '10. OTP Authentication va Nodemailer',
  heading: 'OTP Authentication & Nodemailer',
  subheading: 'Express applicationlarda OTP authentication, email yuborish va asosiy authentication tushunchalarini o\'rganamiz - real backend amaliyotlari asosida.',
  sections: [
    {
      type: 'list',
      title: '1. Authentication Asosiy Tushunchalar',
      text: 'Authentication jarayoni uchta asosiy tushunchaga bo\'linadi:',
      points: [
        'Identification: Kim ekanligini aniqlash (masalan, email: user@gmail.com).',
        'Authentication: O\'zini isbotlash (password yoki OTP orqali).',
        'Authorization: Nima qilish mumkinligini aniqlash (masalan, admin panel access).',
        'Har bir request uchun: Email -> identification, OTP -> authentication, Admin panel -> authorization.'
      ]
    },
    {
      type: 'list',
      title: '2. OTP Nima?',
      text: 'OTP - One Time Password (Bir martalik 6 xonali kod) bo\'lib, faqat bir marta ishlatiladi va muddati tugaydi.',
      points: [
        'Email Verification: Yangi hisob ro\'yxatdan o\'tganda emailni tasdiqlash.',
        'Passwordsiz Login: Faqat email orqali tizimga kirish.',
        '2FA (Two-Factor Auth): Qo\'shimcha xavfsizlik qatlami.'
      ]
    },
    {
      type: 'list',
      title: '3. OTP Ishlash Jarayoni (Full Flow)',
      text: 'Har bir qadam backend\'da aniq bir funksiyani bajaradi (generate, store, send va verify) - bu to\'liq authentication sikli hisoblanadi:',
      points: [
        'Elektron pochta: Foydalanuvchi email yuboradi.',
        'OTP yaratish: Server OTP generatsiya qiladi.',
        'Cache saqlash: OTP cache\'da vaqtinchalik saqlanadi.',
        'OTP yuborish: OTP email orqali jo\'natiladi.'
      ]
    },
    {
      type: 'code',
      title: '4. OTP Generate Qilish',
      text: 'OTP - random 6 xonali son. Quyidagi formula har doim 100000 dan 999999 gacha bo\'lgan son hosil qiladi. Math.random() 0 dan 1 gacha float son qaytaradi.',
      code: 'const otp = Math.floor(100000 + Math.random() * 900000);\nconsole.log(otp); // -> 847392'
    },
    {
      type: 'code',
      title: '5. OTP Saqlash - Cache',
      text: 'OTP vaqtinchalik saqlanadi. Oddiy JavaScript object in-memory cache vazifasini bajaradi:',
      code: 'const otpStore = {};\n\n// Saqlash:\notpStore[email] = otp; // -> { "user@gmail.com": 847392 }\n\n// Tekshirish:\nif (otpStore[email] == otp) { ... }\n\n// O\'chirish (bir martadan keyin):\ndelete otpStore[email];'
    },
    {
      type: 'code',
      title: '6. Nodemailer - Email Yuborish Library',
      text: 'Nodemailer - Node.js uchun eng mashhur email yuborish library. Gmail uchun haqiqiy parol emas, App Password ishlatiladi (Google Account -> Security -> App Passwords dan olinadi).',
      code: '// O\'rnatish: npm install nodemailer\n\nconst nodemailer = require("nodemailer");\nconst transporter = nodemailer.createTransport({\n  service: "gmail",\n  auth: {\n    user: "your_email@gmail.com",\n    pass: "app_password"\n  }\n});'
    },
    {
      type: 'code',
      title: '7. Send OTP – Controller',
      text: 'Bu endpoint foydalanuvchi emailiga OTP yuboradi: req.body\'dan email olinadi, OTP yaratiladi, cache\'ga saqlanadi va sendMail() chaqiriladi.',
      code: 'const transporter = require("../config/mail");\nconst otpStore = require("../utils/otpStore");\n\nexports.sendOTP = async (req, res) => {\n  try {\n    const { email } = req.body;\n    if (!email) {\n      return res.status(400).json({ message: "Email required" });\n    }\n    const otp = Math.floor(100000 + Math.random() * 900000);\n    otpStore[email] = otp;\n    \n    await transporter.sendMail({\n      from: "your_email@gmail.com",\n      to: email,\n      subject: "OTP Code",\n      text: `Your OTP is ${otp}`\n    });\n    \n    res.status(200).json({\n      message: "OTP sent",\n      otp // (testing uchun)\n    });\n  } catch (error) {\n    console.log(error);\n    res.status(500).json({ message: error.message });\n  }\n};'
    },
    {
      type: 'code',
      title: '8. Verify OTP – Controller va Routes',
      text: 'Bu endpoint foydalanuvchi kiritgan OTP ni tekshiradi va to\'g\'ri bo\'lsa cache\'dan o\'chirib tasdiqlaydi.',
      code: 'exports.verifyOTP = (req, res) => {\n  const { email, otp } = req.body;\n  if (!email || !otp) {\n    return res.status(400).json({ message: "Email and OTP required" });\n  }\n  \n  if (otpStore[email] == otp) {\n    delete otpStore[email];\n    return res.status(200).json({ message: "OTP verified" });\n  }\n  \n  res.status(400).json({ message: "Invalid OTP" });\n};\n\n// routesOTP.js\nconst express = require("express");\nconst router = express.Router();\nconst OTPController = require("../controllers/controllerOTP");\n\nrouter.post("/send-otp", OTPController.sendOTP);\nrouter.post("/verify-otp", OTPController.verifyOTP);\n\nmodule.exports = router;'
    },
    {
      type: 'list',
      title: '9. Bugun Nima O\'rgandik va Keyingi Qadam',
      text: 'Dars yakuni bo\'yicha asosiy tushunchalar va keyingi bosqichlar:',
      points: [
        'Tushunchalar: Identification, Authentication, Authorization farqlari, OTP generatsiya va tekshirish, Nodemailer transporter sozlash.',
        'Endpoints: POST /send-otp (OTP yaratadi va emailga yuboradi), POST /verify-otp (OTP tekshiradi va access beradi).',
        'Keyingi qadam: Bu tizimga JWT token, OTP expiry (TTL) va Redis cache qo\'shish orqali production-ready authentication qurish.'
      ]
    }
  ]
};