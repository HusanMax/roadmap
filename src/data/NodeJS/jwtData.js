export const jwtData = {
  id: 'jwt-authentication',
  title: '11. JWT Authentication, Middleware va Role-based Authorization',
  heading: 'JWT Authentication, Middleware va Role-based Authorization',
  subheading:
    "Express ilovalarida foydalanuvchilarni tekshirish va himoyalangan route'larni qurish bo'yicha amaliy qo'llanma.",

  sections: [
    {
      type: 'list',
      title: '1. Authentication va Authorization',
      text: 'Authentication foydalanuvchining kimligini, Authorization esa uning qanday ruxsatlarga ega ekanini tekshiradi.',
      points: [
        'Authentication: foydalanuvchi kimligini login paytida aniqlash.',
        'Authorization: foydalanuvchi nima qila olishini, masalan admin panelga kira olishini tekshirish.',
        'Umumiy flow: login → token yaratish → protected route → role tekshiruvi → ruxsat berish.'
      ]
    },
    {
      type: 'list',
      title: '2. JWT nima?',
      text: 'JWT — JSON Web Token. Foydalanuvchi haqidagi ayrim ma’lumotlarni server imzosi bilan clientga uzatish uchun ishlatiladi.',
      points: [
        'JWT uch qismdan iborat: header.payload.signature.',
        'Token login muvaffaqiyatli bo‘lgandan keyin server tomonidan yaratiladi.',
        'JWT payload odatda shifrlanmagan bo‘ladi. Unga parol yoki boshqa maxfiy ma’lumotlarni joylashtirmang.',
        'jsonwebtoken kutubxonasini o‘rnatish: npm install jsonwebtoken.'
      ]
    },
    {
      type: 'code',
      title: '3. User Model: Role qo‘shish',
      text: 'Har bir foydalanuvchiga role beriladi. Ro‘yxatdan o‘tgan foydalanuvchining boshlang‘ich role qiymati user bo‘ladi. Admin role’ni public registration orqali foydalanuvchidan qabul qilmang.',
      code: `const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
  ism: String,
  familiya: String,
  yosh: Number,
  email: {
    type: String,
    required: true,
    unique: true
  },
  parol: {
    type: String,
    required: true
    // Plain text emas, bcrypt hash saqlang
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user"
  }
})

module.exports = mongoose.model("User", UserSchema)`
    },
    {
      type: 'code',
      title: '4. JWT Token yaratish',
      text: 'generateToken yordamchi funksiyasi login vaqtida chaqiriladi. JWT_SECRET maxfiy kalitini .env faylida saqlang va repository’ga yuklamang.',
      code: `const jwt = require("jsonwebtoken")

const generateToken = (user) => {
  return jwt.sign(
    {
      id: user._id.toString(),
      role: user.role
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  )
}

module.exports = generateToken`
    },
    {
      type: 'list',
      title: '5. JWT_SECRET va token muddati',
      text: 'Tokenni imzolash va tekshirish uchun serverda maxfiy kalit bo‘lishi kerak.',
      points: [
        'JWT_SECRET qiymatini .env faylida saqlang.',
        'Kalit uzun, tasodifiy va boshqalarga oshkor qilinmaydigan bo‘lishi kerak.',
        'expiresIn: "1d" token bir kun amal qilishini bildiradi.',
        '.env faylini .gitignore ichiga qo‘shing.'
      ]
    },
    {
      type: 'code',
      title: '6. Login va Token qaytarish',
      text: 'Quyidagi kod parol tekshirilganidan keyin ishlatiladi. Javobda parol yoki uning hashini clientga yubormang.',
      code: `// Login paytida parol bcrypt.compare() bilan tekshirilganidan keyin:
const token = generateToken(user)

res.status(200).json({
  message: "Login successful",
  token,
  user: {
    id: user._id,
    email: user.email,
    role: user.role
  }
})`
    },
    {
      type: 'list',
      title: '7. Middleware nima?',
      text: 'Middleware request va controller orasida ishlaydi. U so‘rovni tekshirishi, filtrlashi yoki keyingi funksiyaga uzatishi mumkin.',
      points: [
        '1. Client serverga request yuboradi.',
        '2. Middleware tokenni tekshiradi va request’ni filtrlashi mumkin.',
        '3. Controller biznes mantiqni bajaradi.',
        '4. Server response’ni clientga qaytaradi.',
        'Middleware route’larni himoyalash, log yozish va so‘rovlarni validatsiya qilishda ishlatiladi.'
      ]
    },
    {
      type: 'code',
      title: '8. Auth Middleware (Guard)',
      text: 'authMiddleware himoyalangan route’dan oldin ishlaydi. Token yo‘q, noto‘g‘ri yoki muddati tugagan bo‘lsa 401 Unauthorized qaytaradi.',
      code: `const jwt = require("jsonwebtoken")

exports.authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      message: "Bearer token required"
    })
  }

  const token = authHeader.slice("Bearer ".length)

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    req.user = {
      id: decoded.id,
      role: decoded.role
    }

    return next()
  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired token"
    })
  }
}`
    },
    {
      type: 'code',
      title: '9. Protected Route: Profile',
      text: 'authMiddleware tokenni tasdiqlaganidan keyin decoded ma’lumotlar req.user orqali controllerga uzatiladi.',
      code: `router.get(
  "/profile",
  authMiddleware,
  controllerUser.profile
)

// Controller
exports.profile = async (req, res) => {
  res.status(200).json({
    message: "Protected profile",
    user: req.user
  })
}`
    },
    {
      type: 'code',
      title: '10. Role Middleware va Admin Route',
      text: 'Role middleware foydalanuvchining kerakli ruxsatga ega ekanini tekshiradi. U authMiddleware’dan keyin ishlashi kerak, chunki req.user avval authMiddleware tomonidan yaratiladi. Role mos kelmasa 403 Forbidden qaytariladi.',
      code: `exports.roleMiddleware = (requiredRole) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        message: "Authentication required"
      })
    }

    if (req.user.role !== requiredRole) {
      return res.status(403).json({
        message: "Access denied"
      })
    }

    return next()
  }
}

// Admin route
router.get(
  "/admin",
  authMiddleware,
  roleMiddleware("admin"),
  controllerUser.adminPanel
)`
    },
    {
      type: 'list',
      title: '11. To‘liq Authentication Flow — Xulosa',
      text: 'JWT, middleware va role tekshiruvi Express ilovasidagi himoyalangan route’lar uchun asosiy xavfsizlik qatlamini tashkil qiladi.',
      points: [
        'Client login ma’lumotlarini yuboradi.',
        'Server parolni tekshiradi va JWT token yaratadi.',
        'Client tokenni saqlaydi va keyingi so‘rovlarda yuboradi.',
        'So‘rov header’i: Authorization: Bearer <TOKEN>.',
        'authMiddleware tokenni tekshiradi va req.user’ni yaratadi.',
        'roleMiddleware kerakli role’ni tekshiradi.',
        '401 — token mavjud emas yoki yaroqsiz; 403 — token yaroqli, ammo kerakli ruxsat yo‘q.'
      ]
    }
  ]
};