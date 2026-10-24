export const nestjsPostgresPrismaGuideData = {
  id: 'nestjs-postgres-prisma-guide',
  title: '2 Haqiqiy ma\'lumotlar bazasi: PostgreSQL + Prisma',
  heading: 'NestJS da ma\'lumotlarni doimiy saqlash',
  subheading: "Array o'rniga haqiqiy ma'lumotlar bazasidan foydalanish, Prisma ORM orqali PostgreSQL bilan ishlash va NestJS integratsiyasi.",
  sections: [
    {
      type: 'text',
      title: '1. Nega haqiqiy ma\'lumotlar bazasi kerak?',
      text: "Oldingi darslarda Product ma'lumotlarini oddiy array ichida saqladik: `private products = [{ id: 1, title: 'iPhone 16', price: 1200 }]`. Agar serverni to'xtatib yana ishga tushirsak — barcha ma'lumotlar yo'qoladi. Chunki array faqat RAM (Memory) ichida yashaydi. Shuning uchun bizga doimiy saqlanadigan Database kerak."
    },
    {
      type: 'comparison',
      title: '2. Backend Architecture (Qatlamlar)',
      text: "Frontend hech qachon Database bilan to'g'ridan-to'g'ri ishlamaydi. Har bir qatlam o'z vazifasini bajaradi:",
      cards: [
        { 
          title: 'Frontend (Tashqi qatlam)', 
          subtitle: 'HTTP so\'rovlar', 
          desc: "Frontend — HTTP so'rovlar yuboradi." 
        },
        { 
          title: 'NestJS (Business Logic)', 
          subtitle: 'Asosiy logika', 
          desc: "NestJS — Business Logic yoziladi." 
        },
        { 
          title: 'Prisma (Oroliq qatlam)', 
          subtitle: 'Tarjimon', 
          desc: "Prisma — NestJS va PostgreSQL o'rtasida tarjimon vazifasini bajaradi." 
        },
        { 
          title: 'PostgreSQL (Yadro)', 
          subtitle: 'Ma\'lumotlar ombori', 
          desc: "PostgreSQL — Ma'lumotlarni saqlaydi." 
        }
      ],
      actionsTitle: 'Muhim tushuncha: ORM',
      actions: [
        "ORM = Object Relational Mapping — ORM bizga SQL yozmasdan Database bilan ishlash imkonini beradi."
      ]
    },
    {
      type: 'code',
      title: '3. Installing Prisma',
      text: "Prisma — NestJS va PostgreSQL o'rtasida ishlovchi ORM. Quyidagi buyruqlarni ketma-ket bajaring:",
      code: `npm install prisma@6 --save-dev
npm install @prisma/client@6

-- Initialize Prisma
npx prisma init

-- Project Structure:
prisma/
├── schema.prisma  -- Database structure
└── .env           -- Database connection URL`
    },
    {
      type: 'code',
      title: '4. Connecting Database',
      text: "Online PostgreSQL Database yarating (masalan, Prisma Postgres saytida) va Connection String ni nusxalab, .env fayliga yozing.",
      code: `// .env fayli
DATABASE_URL="postgresql://username:password@host/database"

-- DATABASE_URL — NestJS va Prisma qaysi Database bilan ishlashini biladi.`
    },
    {
      type: 'code',
      title: '5. schema.prisma fayli va Product modeli',
      text: "schema.prisma faylida Product modelini yaratamiz.",
      code: `generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Product {
  id    Int    @id @default(autoincrement())
  title String
  price Float
}

-- generator: Prisma Client yaratadi
-- datasource: Database connection
-- model: Database Table
-- id: Primary Key, avtomatik yaratiladi
-- title: Product nomi
-- price: Product narxi`
    },
    {
      type: 'code',
      title: '6. Creating Database Table (Migration)',
      text: "Migration command orqali schema.prisma dagi modelni haqiqiy Database jadvaliga aylantiramiz.",
      code: `npx prisma migrate dev --name init

-- Migration nima qiladi?
-- schema.prisma → SQL → Database Table

-- Prisma Studio (Database ichidagi ma'lumotlarni browser orqali ko'rish)
npx prisma studio`
    },
    {
      type: 'code',
      title: '7. Connecting Prisma with NestJS',
      text: "PrismaService yaratib, uni Dependency Injection orqali NestJS ichida ishlatamiz.",
      code: `// Prisma Service
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {}

// Prisma Module
import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  providers: [PrismaService],
  exports: [PrismaService], // IMPORTANT
})
export class PrismaModule {}`
    },
    {
      type: 'code',
      title: '8. AppModule ga ulash',
      text: "PrismaModule va ProductsModule ni asosiy AppModule ga import qilamiz.",
      code: `import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ProductsModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}`
    },
    {
      type: 'code',
      title: '9. ProductsModule va ProductsService',
      text: "Products modulini PrismaModule bilan bog'laymiz va Service ichida PrismaService dan foydalanamiz.",
      code: `// ProductsModule
import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}

// ProductsService
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async getProducts() {
    return this.prisma.product.findMany();
  }
}`
    },
    {
      type: 'code',
      title: '10. GET Products from Database',
      text: "Controller orqali barcha Productlarni Database dan olish.",
      code: `import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getProducts() {
    return this.productsService.getProducts();
  }
}

-- findMany(): Database ichidagi barcha Productlarni qaytaradi.
-- So'rov zanjiri: GET → Controller → Service → findMany() → PostgreSQL → Products (JSON)`
    },
    {
      type: 'code',
      title: '11. POST Product',
      text: "Yangi Product yaratish va uni Database ga saqlash.",
      code: `// Controller
@Post()
createProduct(@Body() body: any) {
  return this.productsService.createProduct(body);
}

// Service
async createProduct(body: any) {
  return this.prisma.product.create({
    data: body,
  });
}

// Postman Body:
{
  "title": "iPhone 16",
  "price": 1200
}`
    },
    {
      type: 'comparison',
      title: '12. From Array to Real Database',
      text: "Oldingi dars va bugungi dars o'rtasidagi farq:",
      cards: [
        { 
          title: 'Oldingi Dars', 
          subtitle: 'Array (Temporary)', 
          desc: "RAM, push(), find(), Temporary Data" 
        },
        { 
          title: 'Bugungi Dars', 
          subtitle: 'PostgreSQL (Permanent)', 
          desc: "Database, create(), findMany(), Permanent Data" 
        }
      ],
      actionsTitle: 'Yangi tushunchalar:',
      actions: [
        "Prisma — ORM vazifasini bajaradi.",
        "PostgreSQL — NestJS va Database o'rtasidagi mustahkam ko'prik.",
        "Keyingi darsda: findUnique(), update(), delete() — Full CRUD using Prisma."
      ]
    }
  ]
};