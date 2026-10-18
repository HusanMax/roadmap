export const nestAuthData = {
  id: 'nest-auth',
  title: '7. Authentication va Guards',
  heading: 'JWT Authentication va Guards',
  subheading: "Passport, JWT, Guard va Role asosida himoyalangan API yaratish.",
  sections: [
    {
      type: 'comparison',
      title: '1. Auth komponentlari',
      text: "NestJS da autentifikatsiya bir necha qismdan tashkil topadi.",
      cards: [
        { title: 'Passport + JWT', subtitle: 'Strategiya', desc: "Tokenni tekshiruvchi JwtStrategy." },
        { title: 'Guard', subtitle: 'Himoya', desc: "Route ga kirishdan oldin tokenni tekshiradi." },
        { title: 'Decorator', subtitle: '@UseGuards', desc: "Guard ni kerakli route larga bog'laydi." }
      ],
      actionsTitle: 'Auth oqimi:',
      actions: [
        "Login route foydalanuvchi ma'lumotini tekshiradi.",
        "To'g'ri bo'lsa, JWT token imzolanib qaytariladi.",
        "Keyingi so'rovlarda token Authorization headerda yuboriladi.",
        "Guard tokenni tekshirib, route ga ruxsat beradi."
      ]
    },
    {
      type: 'code',
      title: '2. O\'rnatish va JwtStrategy',
      text: "Passport va JWT modullari o'rnatilib, strategiya yaratiladi.",
      code: `npm install @nestjs/passport @nestjs/jwt passport passport-jwt

// jwt.strategy.ts
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, email: payload.email };
  }
}`
    },
    {
      type: 'code',
      title: '3. Token imzolash',
      text: "AuthService login paytida JWT token yaratadi.",
      code: `import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async login(user: any) {
    const payload = { sub: user.id, email: user.email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}`
    },
    {
      type: 'code',
      title: '4. Guard bilan himoyalash',
      text: "JwtAuthGuard route ni himoyalaydi. @UseGuards() orqali qo'shiladi.",
      code: `import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}

// Controllerda ishlatish
@Controller('profile')
export class ProfileController {
  @UseGuards(JwtAuthGuard)
  @Get()
  getProfile(@Req() req) {
    return req.user;
  }
}`
    },
    {
      type: 'rule',
      title: '5. Role asosida ruxsat',
      points: [
        "Roles decorator @Roles('admin') bilan belgilanadi.",
        "RolesGuard foydalanuvchi rolini tekshiradi.",
        "@UseGuards(JwtAuthGuard, RolesGuard) ikkalasini birga ishlatadi.",
        "Secrets (JWT_SECRET) .env faylida saqlanadi."
      ],
      rule: "Qoida: Parollar hech qachon ochiq saqlanmaydi — bcrypt bilan hash qilinadi."
    },
    {
      type: 'tasks',
      title: '6. Amaliyot Topshiriqlari',
      tasks: [
        "Passport JWT o'rnatib, JwtStrategy yozing.",
        "Login route da token qaytaruvchi AuthService yarating.",
        "JwtAuthGuard bilan /profile route ini himoyalang.",
        "Faqat admin kirishi mumkin bo'lgan route yasang."
      ]
    }
  ]
};
