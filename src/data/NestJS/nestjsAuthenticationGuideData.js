export const nestjsAuthenticationGuideData = {
  id: 'nestjs-auth-guide',
  title: '4 Foydalanuvchi Autentifikatsiyasi',
  heading: 'Register va Login tizimi',
  subheading: "NestJS, Prisma va PostgreSQL yordamida xavfsiz ro'yxatdan o'tish va tizimga kirish tizimini qurish.",
  sections: [
    {
      type: 'text',
      title: '1. Nima uchun autentifikatsiya kerak?',
      text: "Tasavvur qiling, Instagram yoki Telegram yaratmoqchimiz. Agar autentifikatsiya bo'lmasa: har kim boshqa foydalanuvchining profilini tahrirlay oladi, shaxsiy xabarlarini o'qiy oladi, buyurtma tarixini ko'ra oladi. Autentifikatsiya — foydalanuvchini tanib olish jarayonidir. U tizim xavfsizligini ta'minlaydi va har bir foydalanuvchiga shaxsiy maydon beradi."
    },
    {
      type: 'code',
      title: '2. User Model Yaratish (Prisma Schema)',
      text: "schema.prisma faylida User modelini yaratamiz.",
      code: `// schema.prisma
model User {
  id       Int    @id @default(autoincrement())
  name     String
  email    String @unique
  password String
}

-- id: Primary Key, avtomatik raqam
-- name: Foydalanuvchi ismi
-- email @unique: Har bir foydalanuvchi uchun noyob email
-- password: Hashlangan parol saqlanadi (oddiy parol emas!)

-- @unique — bir xil email ikki marta saqlanishiga yo'l qo'ymaydi.`
    },
    {
      type: 'code',
      title: '3. RegisterDto — Ro\'yxatdan O\'tishni Validatsiya Qilish',
      text: "Foydalanuvchidan kelayotgan ma'lumotni avtomatik tekshirish va noto'g'ri ma'lumotni rad etish.",
      code: `// register.dto.ts
import { IsString, Length, IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class RegisterDto {
  @IsString({ message: 'Name must be text' })
  @Length(3, 20, { message: 'Name must be between 3 and 20 characters' })
  name: string;

  @IsEmail({}, { message: 'Email format is incorrect' })
  email: string;

  @IsNotEmpty({ message: 'Password is required' })
  @MinLength(6, { message: 'Password must be at least 6 characters' })
  password: string;
}

-- @IsString(): Faqat matn qabul qiladi
-- @Length(3, 20): Ism 3–20 belgi bo'lishi kerak
-- @IsEmail(): To'g'ri email formatini tekshiradi
-- @MinLength(6): Parol kamida 6 belgi bo'lishi kerak`
    },
    {
      type: 'code',
      title: '4. Register Endpoint — Service va Controller',
      text: "Ro'yxatdan o'tish jarayoni: email mavjudligini tekshirish, parolni hash qilish va bazaga saqlash.",
      code: `// Service
async register(body: RegisterDto) {
  const existingUser = await this.prisma.user.findUnique({
    where: { email: body.email },
  });

  if (existingUser) {
    throw new BadRequestException('Email already exists');
  }

  const hashedPassword = await bcrypt.hash(body.password, 10);

  return this.prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
      password: hashedPassword,
    },
  });
}`
    },
    {
      type: 'text',
      title: '5. bcrypt — Parolni Hashlash',
      text: "Oddiy parollarni bazada saqlash juda xavfli! Agar baza buzilsa, barcha parollar oshkor bo'ladi. bcrypt ishlash tartibi: oddiy parolni qabul qiladi → 'Salt' qo'shib murakkablashtiradi → Uzoq hash qiymatini qaytaradi → Hash bazaga saqlanadi. Misol: 123456 → $2b$10$AbD98... 10 — 'rounds' soni, qancha ko'p bo'lsa, shuncha xavfsiz (lekin sekinroq). Muhim: Hash ≠ Shifrlash. Hashni orqaga qaytarib bo'lmaydi!"
    },
    {
      type: 'code',
      title: '6. Mavjud Foydalanuvchini Tekshirish',
      text: "findUnique() faqat bitta foydalanuvchini qidiradi. Agar foydalanuvchi topilsa — BadRequestException, topilmasa — ro'yxatdan o'tish davom etadi.",
      code: `const existingUser = await this.prisma.user.findUnique({
  where: { email: body.email },
});

if (existingUser) {
  throw new BadRequestException('Email already exists');
}

-- findUnique() — faqat bitta foydalanuvchini qidiradi
-- where: { email } — email orqali qidiruv`
    },
    {
      type: 'code',
      title: '7. Login — Tizimga Kirish',
      text: "Foydalanuvchini email orqali topish, parolni solishtirish va muvaffaqiyatli javob qaytarish.",
      code: `// Service
async login(body: LoginDto) {
  const user = await this.prisma.user.findUnique({
    where: { email: body.email },
  });

  if (!user) {
    throw new BadRequestException('User not found');
  }

  const isPasswordCorrect = await bcrypt.compare(
    body.password,
    user.password,
  );

  if (!isPasswordCorrect) {
    throw new BadRequestException('Incorrect password');
  }

  return {
    message: 'Login successful',
    user,
  };
}

// Controller
@Post('login')
login(@Body() body: LoginDto) {
  return this.userService.login(body);
}`
    },
    {
      type: 'text',
      title: '8. bcrypt.compare() — Parolni Solishtirish',
      text: "Parolni hech qachon dekodlash kerak emas! bcrypt.compare() hash qiymatlarni ichki tarzda solishtiradi. Natija: true → Login muvaffaqiyatli, false → Noto'g'ri parol. Hash qiymatlar solishtiriladi, oddiy parol emas. Xavfsiz va ishonchli!"
    },
    {
      type: 'comparison',
      title: '9. Postman Test va To\'liq Arxitektura',
      text: "Postman orqali barcha holatlarni sinab ko'rish va umumiy arxitektura oqimi.",
      cards: [
        { 
          title: 'Register', 
          subtitle: '201 Created', 
          desc: "Muvaffaqiyatli ro'yxatdan o'tish." 
        },
        { 
          title: 'Login (to\'g\'ri)', 
          subtitle: '{ "message": "Login successful" }', 
          desc: "To'g'ri parol bilan kirish." 
        },
        { 
          title: 'Login (xato parol)', 
          subtitle: '400 "Incorrect password"', 
          desc: "Noto'g'ri parol kiritilganda." 
        },
        { 
          title: 'Takroriy email', 
          subtitle: '400 "Email already exists"', 
          desc: "Allaqachon mavjud email bilan ro'yxatdan o'tishga urinish." 
        }
      ],
      actionsTitle: 'Arxitektura Oqimi:',
      actions: [
        "Client → Controller → DTO Validation → Service → bcrypt → Prisma → PostgreSQL.",
        "Keyingi dars: JWT — foydalanuvchi tizimda qolishi va himoyalangan route'larga kirishi uchun."
      ]
    }
  ]
};