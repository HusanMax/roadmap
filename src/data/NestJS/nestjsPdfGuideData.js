export const nestjsPdfGuideData = {
  id: 'nestjs-pdf-guide',
  title: '1 NestJS: Node.js uchun Backend Framework',
  heading: 'NestJS Asoslari va Arxitekturasi',
  subheading: "Express ustiga qurilgan, katta loyihalarda kodni tartibli saqlashga yordam beradigan backend framework.",
  sections: [
    {
      type: 'comparison',
      title: '1. NestJS nima va Express bilan farqi',
      text: "NestJS — Node.js uchun yaratilgan Backend Framework. Express ustiga qurilgan bo'lib, katta loyihalarda kodni tartibli saqlashga yordam beradi.",
      cards: [
        { 
          title: 'Express', 
          subtitle: 'Tartibsizlik ehtimoli', 
          desc: "Barcha kodlar bitta joyga yig'ilib ketishi mumkin. Katta loyihalarda tartibsizlik yuzaga keladi." 
        },
        { 
          title: 'NestJS', 
          subtitle: 'Modulli yondashuv', 
          desc: "Module, Controller, Service va Dependency Injection orqali kodni tartibli boshqaradi." 
        }
      ],
      actionsTitle: 'So\'rov oqimi (Request Lifecycle):',
      actions: [
        "Mijozdan kelgan HTTP so'rov → Controller so'rovni qabul qilib marshrutlaydi → Service biznes logikani bajaradi → Natija mijozga yuboriladi."
      ]
    },
    {
      type: 'code',
      title: '2. NestJS Project Structure',
      text: "Loyihaning asosiy fayllari va ularning vazifalari.",
      code: `src/
├── main.ts             -- Application start bo'ladi. Serverni ishga tushiradi.
├── app.module.ts       -- Barcha qismlarni birlashtiradi — asosiy modul.
├── app.controller.ts   -- Requestlarni qabul qiladi va route'larni boshqaradi.
└── app.service.ts      -- Business Logic yoziladi va ma'lumotlar bilan ishlaydi.`
    },
    {
      type: 'code',
      title: '3. main.ts fayli',
      text: "Dasturni yaratish va serverni ishga tushirish.",
      code: `import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

-- 1. NestFactory: NestJS application yaratadi va asosiy modulni ishga tushiradi.
-- 2. AppModule: Asosiy modul — barcha Controller va Servicelarni o'z ichiga oladi.
-- 3. app.listen(): Serverni ishga tushiradi. Port: 3000 (yoki process.env.PORT).

-- Natija: http://localhost:3000`
    },
    {
      type: 'code',
      title: '4. AppModule (@Module decorator)',
      text: "@Module() decorator — NestJS ilovasining asosiy bloki. U barcha qismlarni bir joyga birlashtiradi.",
      code: `import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

-- controllers: Controllerlarni ro'yxatdan o'tkazadi. Requestlarni qabul qiluvchi klasslar.
-- providers: Servicelarni ro'yxatdan o'tkazadi. Business Logic saqlanuvchi klasslar.`
    },
    {
      type: 'code',
      title: '5. Controller',
      text: "@Controller() class route'larni boshqaradi va URL yo'lini belgilaydi. @Get() GET request qabul qiladi.",
      code: `import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello() {
    return "Hello World";
  }
}

-- URL: http://localhost:3000/ → Natija: Hello World`
    },
    {
      type: 'code',
      title: '6. Service va Dependency Injection',
      text: "Business Logic servicelarda saqlanadi. Dependency Injection orqali NestJS obyektni avtomatik yaratib, Controllerga uzatadi. Qo'lda new ishlatish shart emas.",
      code: `// AppService
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return "Hello World!";
  }
}

// Controller'da Injection
constructor(private readonly appService: AppService) {}`
    },
    {
      type: 'code',
      title: '7. Products Module Example',
      text: "NestJS CLI yordamida modul, controller va service yaratish hamda ProductsService misoli.",
      code: `-- CLI buyruqlari:
nest g module products
nest g controller products
nest g service products

-- ProductsService:
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  private products = [
    { id: 1, title: 'iPhone 16', price: 1200 },
    { id: 2, title: 'MacBook Pro', price: 2200 },
  ];

  getProducts() {
    return this.products;
  }
}`
    },
    {
      type: 'code',
      title: '8. Dynamic Routes',
      text: "URL'da o'zgaruvchi qiymat qabul qilish (@Param('id')).",
      code: `-- Controller
@Get(':id')
getProduct(@Param('id') id: string) {
  return this.productsService.getProduct(Number(id));
}

-- Service
getProduct(id: number) {
  return this.products.find((product) => product.id === id);
}

-- Misol URL'lar:
-- /products/1 → iPhone 16
-- /products/2 → MacBook Pro`
    },
    {
      type: 'code',
      title: '9. POST Request va @Body()',
      text: "@Body() — Request body ma'lumotlarini oladi va Service'ga uzatadi.",
      code: `-- Controller
@Post()
createProduct(@Body() body: any) {
  return this.productsService.createProduct(body);
}

-- Service
createProduct(product: any) {
  this.products.push(product);
  return {
    message: 'Product created',
    product,
  };
}

-- Postman Body (JSON):
{
  "id": 3,
  "title": "Samsung",
  "price": 1000
}

-- Response:
{
  "message": "Product created",
  "product": {
    "id": 3,
    "title": "Samsung",
    "price": 1000
  }
}`
    },
    {
      type: 'text',
      title: '10. Request Lifecycle',
      text: "NestJS'da barcha requestlar avval Controllerga keladi. Controller Service bilan ishlaydi, Service Business Logic bajaradi. Natija yana Controller orqali foydalanuvchiga qaytariladi. (Client → Controller → Service → Products/Data → Response)"
    }
  ]
};