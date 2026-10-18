export const nestSetupData = {
  id: 'nest-setup',
  title: "2. Loyiha Sozlash va CLI",
  heading: "Loyiha Sozlash va Nest CLI",
  subheading: "Nest CLI bilan loyiha yaratish, generatorlar va loyiha tuzilmasi.",
  sections: [
    {
      type: 'comparison',
      title: '1. Nest CLI afzalliklari',
      text: "Nest CLI — loyiha yaratish va kod generatsiya qilish uchun rasmiy vosita.",
      cards: [
        { title: 'nest new', subtitle: 'Loyiha yaratish', desc: "Tayyor tuzilma bilan yangi loyiha boshlaydi." },
        { title: 'nest generate', subtitle: 'Kod generatsiyasi', desc: "Module, controller, service larni avtomatik yaratadi." },
        { title: 'nest build', subtitle: 'Build', desc: "TypeScript loyihani JavaScript ga kompilatsiya qiladi." }
      ],
      actionsTitle: 'Boshlash qadamlari:',
      actions: [
        "npm i -g @nestjs/cli orqali CLI o'rnatiladi.",
        "nest new my-app orqali loyiha yaratiladi.",
        "Package manager (npm/yarn/pnpm) tanlanadi.",
        "npm run start:dev bilan hot-reload rejimida ishga tushiriladi."
      ]
    },
    {
      type: 'code',
      title: '2. Loyiha yaratish',
      text: "CLI bilan yangi loyiha yaratamiz va fayllarni generatsiya qilamiz.",
      code: `npm i -g @nestjs/cli

nest new my-app

# Fayl generatsiyasi
nest g module users
nest g controller users
nest g service users

# Yoki bitta buyruq bilan
nest g resource users`
    },
    {
      type: 'list',
      title: '3. Loyiha tuzilmasi',
      text: "Nest loyihasida kod src papkasida, har bir modul alohida guruhda joylashadi.",
      points: [
        'src/main.ts — ilovani ishga tushiruvchi bootstrap fayl.',
        'src/app.module.ts — ildiz (root) modul.',
        'src/app.controller.ts — asosiy controller.',
        'src/app.service.ts — asosiy service.',
        'src/users/ — feature modul papkasi (users.module.ts, .controller.ts, .service.ts).',
        'test/ — e2e testlar uchun papka.'
      ]
    },
    {
      type: 'code',
      title: '4. main.ts — bootstrap',
      text: "main.ts ilovani yaratadi, global pipe larni sozlaydi va portni tinglaydi.",
      code: `import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api');

  await app.listen(3000);
}
bootstrap();`
    },
    {
      type: 'rule',
      title: '5. Foydali skriptlar',
      points: [
        "npm run start — ilovani oddiy rejimda ishga tushiradi.",
        "npm run start:dev — kod o'zgarganda avtomatik qayta ishga tushiradi.",
        "npm run build — production uchun build qiladi.",
        "npm run test — unit testlarni ishga tushiradi."
      ],
      rule: "Qoida: Ishlab chiqish paytida har doim 'npm run start:dev' dan foydalaning."
    },
    {
      type: 'tasks',
      title: '6. Amaliyot Topshiriqlari',
      tasks: [
        "Nest CLI o'rnatib, yangi loyiha yarating.",
        "nest g resource products bilan to'liq CRUD tuzilmasini generatsiya qiling.",
        "main.ts da global prefix 'api' va ValidationPipe ni sozlang.",
        "Loyihani start:dev rejimida ishga tushirib ko'ring."
      ]
    }
  ]
};
