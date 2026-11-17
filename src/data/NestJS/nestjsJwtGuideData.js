export const nestjsJwtGuideData = {
  id: 'nestjs-jwt-guide',
  title: '5 JWT Autentifikatsiya',
  heading: 'JSON Web Token va Guard Tizimi',
  subheading: "NestJS yordamida JWT token yaratish, foydalanuvchini eslab qolish va himoyalangan route'larni qurish.",
  sections: [
    {
      type: 'text',
      title: '1. Nima Uchun Login Yetarli Emas?',
      text: "Oldingi darsda foydalanuvchi Login qildi — parol to'g'ri, server javob berdi. Lekin keyingi so'rovda server foydalanuvchini tanib olmaydi. Har bir HTTP request mustaqil, server avvalgi login haqida eslab qolmaydi. Authentication hali tugamagan — bizga foydalanuvchini eslab qoladigan usul kerak. Bugungi yechim: JWT."
    },
    {
      type: 'text',
      title: '2. JSON Web Token (JWT) Nima?',
      text: "JWT — server tomonidan yaratiladigan maxsus token bo'lib, foydalanuvchi login qilganini isbotlaydi. Server parolni har safar so'ramaydi, faqat tokenni tekshiradi. JWT foydalanuvchining Passport yoki ID kartasi kabi ishlaydi. Haqiqiy hayotda: Kino → Chipta → Chiptani ko'rsatish → Kirish. Backend'da: Login → Server → JWT Token → Client → Himoyalangan Sahifalar."
    },
    {
      type: 'code',
      title: '3. JWT Tuzilishi (Structure)',
      text: "Har bir JWT uch qismdan iborat: Header, Payload va Signature. Hech qachon parolni Payload ichida saqlamang — faqat xavfsiz ma'lumot (masalan, id va email) joylashtiring.",
      code: `// 1. Header — Algoritm ma'lumoti
{
  "alg": "HS256",
  "typ": "JWT"
}

// 2. Payload — Ilova va foydalanuvchi ma'lumoti
{
  "id": 1,
  "email": "ali@gmail.com"
}

// 3. Signature — Secret Key yordamida yaratilgan imzo
// Token o'zgartirilsa, imzo buziladi va token yaroqsiz bo'ladi.`
    },
    {
      type: 'code',
      title: '4. JwtModule ni Sozlash',
      text: "Kutubxonani o'rnatish, Auth modulini yaratish va JwtModule ni ro'yxatdan o'tkazish. Secret Key ni .env faylida saqlang va hech qachon GitHub ga yuklamang.",
      code: `// Terminal buyruqlari:
// npm install @nestjs/jwt
// nest g module auth

// auth.module.ts
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';

@Module({
  imports: [
    JwtModule.register({
      secret: 'my-secret-key',
      signOptions: {
        expiresIn: '1h',
      },
    }),
  ],
  providers: [AuthService],
  exports: [JwtModule, AuthService],
})
export class AuthModule {}

-- secret: Serverning maxfiy kaliti — faqat backend biladi, Signature yaratish uchun ishlatiladi.
-- expiresIn: Token muddati tugash vaqti (1h = bir soatdan keyin login tugaydi).`
    },
    {
      type: 'code',
      title: '5. AuthService — Token Yaratish: sign()',
      text: "sign() metodi JWT yaratadi va Payload ichiga foydalanuvchi ma'lumotini saqlaydi.",
      code: `// Terminal: nest g service auth

// auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  generateToken(user: { id: number; email: string }) {
    const token = this.jwtService.sign({
      id: user.id,
      email: user.email,
    });
    return token;
  }
}

-- Javob ko'rinishi: { "access_token": "eyJhbGc..." }`
    },
    {
      type: 'code',
      title: '6. UserModule va UserService ga JWT ni Ulash',
      text: "UserModule ichiga AuthModule ni import qilamiz va login metodida token generatsiya qilib, parolsiz user ma'lumotlari bilan qaytaramiz.",
      code: `// user.module.ts
@Module({
  imports: [PrismaModule, AuthModule], // <- AuthModule qo'shamiz
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}

// user.service.ts
@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private authService: AuthService, // <- AuthService ni qo'shamiz
  ) {}

  async login(body: LoginDto) {
    // ... foydalanuvchi va parol tekshirilgandan so'ng:
    const token = this.authService.generateToken({
      id: user.id,
      email: user.email,
    });

    const { password, ...userWithoutPassword } = user;

    return {
      message: 'Login successful',
      access_token: token,
      user: userWithoutPassword,
    };
  }
}`
    },
    {
      type: 'text',
      title: "7. Tokenni O'qish: JWT.io va Authorization Header",
      text: "jwt.io saytida tokenni Paste qilsangiz, ichidagi ma'lumotni (iat — Issued At: token yaratilgan vaqt; exp — Expiration Time: muddati tugash vaqti) ko'rishingiz mumkin. JWT decode qilish mumkin, lekin u shifrlangan emas — shuning uchun parolni Payload ga qo'ymang! Frontend login qilgandan keyin tokenni saqlaydi (masalan, localStorage) va har bir so'rovda Authorization Header orqali 'Bearer eyJhbGc...' ko'rinishida yuboradi. 'Bearer' so'zi 'Men bu tokenni olib yuribman' degan ma'noni bildiradi."
    },
    {
      type: 'code',
      title: "8. JwtAuthGuard — Route'larni Himoya Qilish",
      text: "JWT faqat token — uni tekshiradigan mexanizm Guard. Guard bo'lmasa, hamma API ga kirish imkoniyatiga ega bo'ladi.",
      code: `// Terminal: nest g guard auth/jwt-auth

// jwt-auth.guard.ts
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      throw new UnauthorizedException('Token is missing');
    }

    const token = authHeader.split(' ')[1];

    try {
      this.jwtService.verify(token);
      return true;
    } catch {
      throw new UnauthorizedException('Invalid token');
    }
  }
}

// Controller'da ishlatish:
@UseGuards(JwtAuthGuard)
@Controller('products')
export class ProductsController {
  @Get()
  findAll() {
    // Faqat authenticated user kira oladi
  }
}

-- Valid Token -> Controller ishlaydi -> Javob qaytadi
-- No / Invalid Token -> 401 Unauthorized`
    },
    {
      type: 'text',
      title: '9. Guard Ichki Ishlash Mexanizmi',
      text: "Guard 4 bosqichda ishlaydi: 1) Header o'qish (request.headers.authorization); 2) Bearer ajratish (authHeader.split(' ')[1] orqali 'Bearer' so'zini olib tashlash); 3) verify() tekshiruvi (Secret Key mosligi, Signature to'g'riligi va token muddati tugamaganligini tekshirish); 4) Hammasi to'g'ri bo'lsa Controller ishga tushadi, aks holda 401 Unauthorized xatosi qaytadi."
    },
    {
      type: 'comparison',
      title: "10. To'liq JWT Authentication Jarayoni va Xulosalar",
      text: "Boshidan oxirigacha autentifikatsiya oqimi va asosiy xulosalar.",
      cards: [
        {
          title: '1–2. Register va Login',
          subtitle: 'Hash → Database → bcrypt.compare()',
          desc: "Ro'yxatdan o'tishda parol hashlanadi, loginda esa bcrypt.compare() bilan tekshiriladi."
        },
        {
          title: '3. Token Yaratish',
          subtitle: 'JWT Yaratiladi → Client Saqlaydi',
          desc: "sign() metodi orqali token yaratiladi va mijoz (browser) uni saqlab oladi."
        },
        {
          title: '4. Himoyalangan So\'rov',
          subtitle: 'Authorization Header → Guard → verify()',
          desc: "Har bir so'rovda Bearer token yuboriladi va Guard verify() orqali tekshiradi."
        },
        {
          title: '5. Natija',
          subtitle: 'Controller → Javob (yoki 401)',
          desc: "Token yaroqli bo'lsa Controller ma'lumot qaytaradi, aks holda kirish rad etiladi."
        }
      ],
      actionsTitle: 'Asosiy Xulosalar va Keyingi Dars:',
      actions: [
        "JWT login qilgan foydalanuvchini eslab qoladi; sign() token yaratadi, verify() tekshiradi.",
        "Guard route'larni himoya qiladi; bcrypt parolni tekshiradi, JWT esa foydalanuvchini aniqlaydi.",
        "Keyingi dars: Role-Based Authorization — Admin va User rollari, custom decorator va role asosida ruxsat berish yoki rad etish."
      ]
    }
  ]
};