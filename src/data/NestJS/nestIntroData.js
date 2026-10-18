export const nestIntroData = {
  id: 'nest-intro',
  title: '1. NestJS ga Kirish',
  heading: 'NestJS ga Kirish',
  subheading: "TypeScript asosidagi progressiv Node.js framework va uning arxitekturasi.",
  sections: [
    {
      type: 'comparison',
      title: '1. NestJS nima?',
      text: "NestJS — Node.js uchun progressiv, TypeScript asosidagi backend framework. U Angular uslubidagi modul arxitekturasi va dependency injection ni taklif qiladi.",
      cards: [
        { title: 'Framework', subtitle: 'Node.js uchun', desc: "Express yoki Fastify ustiga qurilgan, tayyor arxitektura beradi." },
        { title: 'TypeScript', subtitle: "To'liq type", desc: "Kuchli tiplash, decorator va OOP imkoniyatlari." },
        { title: 'Modular', subtitle: 'Tartibli tuzilma', desc: "Kod module, controller va service larga bo'linadi." }
      ],
      actionsTitle: 'NestJS afzalliklari:',
      actions: [
        "Dependency Injection va modul tizimi orqali toza arxitektura.",
        "Decorator lar yordamida o'qilishi oson kod.",
        "TypeORM, Prisma, GraphQL va WebSocket bilan integratsiya.",
        "Katta jamoaviy loyihalarga moslashgan standart tuzilma."
      ]
    },
    {
      type: 'comparison',
      title: '2. Asosiy qismlar',
      text: "NestJS ilovasi uchta asosiy qismdan tashkil topadi: module, controller va service (provider).",
      cards: [
        { title: 'Module', subtitle: 'Tashkilot birligi', desc: "Tegishli controller va service larni bir joyga jamlaydi." },
        { title: 'Controller', subtitle: 'Request qabul qiladi', desc: "HTTP so'rovlarni qabul qilib, service ga yuboradi." },
        { title: 'Service', subtitle: 'Biznes logika', desc: "Ma'lumot bilan ishlash va asosiy logika shu yerda bo'ladi." }
      ],
      actionsTitle: 'Ishlash oqimi:',
      actions: [
        "Foydalanuvchi HTTP so'rov yuboradi.",
        "Controller routeni tutib, service metodini chaqiradi.",
        "Service biznes logikani bajarib natija qaytaradi.",
        "Controller natijani JSON ko'rinishida javob qilib yuboradi."
      ]
    },
    {
      type: 'code',
      title: '3. Minimal misol',
      text: "NestJS da eng kichik ishlaydigan misol: controller bazaviy URL ga javob qaytaradi.",
      code: `import { Controller, Get } from '@nestjs/common';

@Controller('hello')
export class HelloController {
  @Get()
  getHello(): string {
    return 'Salom NestJS!';
  }
}`
    },
    {
      type: 'rule',
      title: '4. Asosiy qoidalar',
      points: [
        "Fayl nomi kebab-case: users.controller.ts, users.service.ts.",
        "Controller faqat so'rovni qabul qilsin, logika service da bo'lsin.",
        "Har bir funksiyaga aniq return type yozing.",
        "Decorator lar class va metodlarga meta-ma'lumot beradi."
      ],
      rule: "Qoida: Biznes logika controllerda emas, service qatlamida yoziladi."
    },
    {
      type: 'tasks',
      title: '5. Amaliyot Topshiriqlari',
      tasks: [
        "NestJS ning Express dan asosiy farqini yozing.",
        "Module, Controller va Service vazifasini tushuntiring.",
        "getProducts() metodi qaytaruvchi controller yozing."
      ]
    }
  ]
};
