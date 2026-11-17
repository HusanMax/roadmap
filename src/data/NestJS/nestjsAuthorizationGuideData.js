export const nestjsAuthorizationGuideData = {
  id: 'nestjs-authorization-guide',
  title: '6 Authentication va Authorization',
  heading: 'Role-Based Access Control (RBAC) va Rollar Tizimi',
  subheading: "NestJS, Prisma va JWT yordamida foydalanuvchi rollarini boshqarish, Custom Decorator va RolesGuard orqali route'larni himoya qilish.",
  sections: [
    {
      type: 'text',
      title: '1. Authentication va Authorization Farqi',
      text: "Oldingi darslarda foydalanuvchini login qildik, JWT yaratdik va protected route'lar qurdik. Lekin har bir login qilgan foydalanuvchi hamma API'larni ishlata oladimi? Yo'q.\n• **Authentication** — 'Kim?' degan savolga javob beradi (foydalanuvchini tanib olish).\n• **Authorization** — 'Nima qilishga ruxsati bor?' degan savolga javob beradi (huquqlarni tekshirish).\n*Masalan, Instagram misolida: oddiy user faqat post yozadi, admin esa barcha userlarni boshqaradi.*"
    },
    {
      type: 'code',
      title: '2. Prisma Schema — Rol Enum va Model',
      text: "Database ichida rollarni saqlash uchun Enum ishlatamiz. Enum faqat belgilangan qiymatlarga ruxsat beradi (ADMIN va USER). Har bir yangi foydalanuvchi avtomatik ravishda USER roli bilan ro'yxatdan o'tadi.",
      code: `// schema.prisma
enum Role {
  ADMIN
  USER
}

model User {
  id       Int    @id @default(autoincrement())
  name     String
  email    String @unique
  password String
  role     Role   @default(USER)
}`
    },
    {
      type: 'code',
      title: '3. JWT ichida Rolni Saqlash',
      text: "JWT endi nafaqat foydalanuvchini, balki uning huquqlarini ham eslab qolishi uchun `role` ni payload ga qo'shamiz.",
      code: `// AuthService ichida token generatsiya qilish:
generateToken(user: { id: number; email: string; role: Role }) {
  const token = this.jwtService.sign({
    id: user.id,
    email: user.email,
    role: user.role, // <- Rol JWT payload ga qo'shildi
  });
  return token;
}

// Yangi Payload ko'rinishi:
// {
//   "id": 1,
//   "email": "ali@gmail.com",
//   "role": "USER"
// }`
    },
    {
      type: 'code',
      title: '4. Custom Decorator — @Roles() Yaratish',
      text: "NestJS o'z decoratorimizni yaratish imkonini beradi. SetMetadata() ma'lumotni route ga yashirin tarzda biriktiradi, keyin esa Guard uni o'qiydi.",
      code: `// Terminal: nest g decorator auth/roles

// roles.decorator.ts
import { SetMetadata } from '@nestjs/common';

export const Roles = (...roles: string[]) => SetMetadata('roles', roles);

// Ishlatilish misollari:
// @Roles('ADMIN') — faqat ADMIN rolga ega foydalanuvchilar uchun ochiladi.
// @Roles('USER', 'ADMIN') — bir nechta rol, istalgan biri mos kelsa kifoya.`
    },
    {
      type: 'code',
      title: '5. RolesGuard — Rol Bo\'yicha Himoya Qilish',
      text: "RolesGuard har bir so'rovni tekshiradi: 'Tizimga kirgan foydalanuvchida kerakli ruxsat bormi?' CanActivate interface yordamida so'rov davom etishi yoki to'xtatilishi hal qilinadi (YES → Controller, NO → 403 Forbidden).",
      code: `// Terminal: nest g guard auth/roles

// roles.guard.ts
import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.getAllAndOverride<string[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!roles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user; // JwtAuthGuard dan keladi

    if (!user) {
      throw new ForbiddenException('User not found');
    }

    const hasRole = roles.includes(user.role);

    if (!hasRole) {
      throw new ForbiddenException('You do not have permission');
    }

    return true;
  }
}`
    },
    {
      type: 'text',
      title: '6. Reflector — Metadatanı O\'qish Mexanizmi',
      text: "Reflector — @Roles() decorator orqali route'ga biriktirilgan metadatanâni ('roles' kaliti ostida) o'qib beruvchi NestJS xizmati. Guard shu ma'lumot va foydalanuvchi rolini solishtiradi. Oqim: Decorator (@Roles('ADMIN')) → Metadata ('roles') → Reflector ([\"ADMIN\"]) → RolesGuard (Solishtirish)."
    },
    {
      type: 'code',
      title: '7. Multiple Guards — JwtAuthGuard + RolesGuard',
      text: "Route'larda bir nechta guard ishlatish mumkin. Birinchi guard loginni (tokenni) tekshiradi, ikkinchisi esa rol ruxsatini.",
      code: `// ProductsController misoli:
@UseGuards(JwtAuthGuard, RolesGuard) // Ketma-ket ishlaydi
@Roles('ADMIN')
@Get()
findAll() {
  // Faqat Admin kira oladi
}`
    },
    {
      type: 'text',
      title: '8. Postman Test va Muhim Eslatma',
      text: "Postman'da test qilish bosqichlari: Ro'yxatdan o'tish → JWT olish → Himoyalangan API'ga murojaat qilish (rol mos kelmasa 403 Forbidden chiqadi) → Rolni ADMIN qilish.\n*Muhim eslatma: Rolni database'da o'zgartirgandan keyin albatta qayta Login qiling, chunki JWT token hamon eski rolni o'z ichida saqlaydi!*"
    },
    {
      type: 'comparison',
      title: '9. Yakuniy Xulosa: Authentication vs Authorization',
      text: "To'liq xavfsizlik arxitekturasi va xulosalar.",
      cards: [
        {
          title: 'Authentication',
          subtitle: '"Kim siz?"',
          desc: "JWT identity'ni saqlaydi, foydalanuvchi tizimga kirganini tasdiqlaydi."
        },
        {
          title: 'Authorization',
          subtitle: '"Nima qila olasiz?"',
          desc: "RolesGuard va rollar orqali maxsus huquqlarni tekshiradi."
        },
        {
          title: '401 Unauthorized',
          subtitle: 'Token yo\'q yoki yaroqsiz',
          desc: "Foydalanuvchi tizimga kirmagan yoki token muddati tugagan."
        },
        {
          title: '403 Forbidden',
          subtitle: 'Ruxsat yo\'q',
          desc: "Foydalanuvchi tizimga kirgan, lekin bu amalni bajarishga roli yetmaydi."
        }
      ],
      actionsTitle: 'Natija:',
      actions: [
        "Endi siz to'liq ishlab chiqarish darajasidagi Authentication + Authorization tizimini qurdindgiz: User'larni ro'yxatdan o'tkazish, hashed parollar bilan login, JWT generatsiya, JwtAuthGuard va RolesGuard + custom decorator yordamida rollar asosida cheklash."
      ]
    }
  ]
};