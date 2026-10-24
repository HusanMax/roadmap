export const nestjsValidationGuideData = {
  id: 'nestjs-validation-guide',
  title: '3 NestJS da Validatsiya va CRUD',
  heading: 'Product API-ni production-ready qilish',
  subheading: "Prisma orqali to'liq CRUD amallari, DTO (Data Transfer Object) yaratish va ValidationPipe orqali API-ni himoya qilish.",
  sections: [
    {
      type: 'comparison',
      title: '1. Array → Prisma: O\'zgarishlar',
      text: "O'tgan darsda massiv o'rniga PostgreSQL qo'yildi. Bugun Product API-ni to'liq ishlaydigan va production-ready qilamiz.",
      cards: [
        { 
          title: 'Array (Eski)', 
          subtitle: 'Vaqtinchalik xotira', 
          desc: "push(), return this.products, RAM — vaqtinchalik, Server qayta ishga tushganda yo'qoladi." 
        },
        { 
          title: 'Prisma (Yangi)', 
          subtitle: 'Doimiy saqlash', 
          desc: "create(), findMany(), PostgreSQL — doimiy, Ma'lumotlar saqlanadi." 
        }
      ],
      actionsTitle: 'Ma\'lumot oqimi:',
      actions: [
        "Client → Controller (so'rovni tekshiradi va yo'naltiradi) → Service (biznes logikasini bajaradi) → Prisma (PostgreSQL bazasiga saqlaydi)."
      ]
    },
    {
      type: 'comparison',
      title: '2. Prisma CRUD Metodlari',
      text: "SQL, JS Array va Prisma metodlari o'rtasidagi moslik jadvali:",
      cards: [
        { 
          title: 'SELECT *', 
          subtitle: 'filter() → findMany()', 
          desc: "Barcha ma'lumotlarni olish." 
        },
        { 
          title: 'SELECT WHERE', 
          subtitle: 'find() → findUnique()', 
          desc: "Shart bo'yicha bitta ma'lumot olish." 
        },
        { 
          title: 'INSERT INTO', 
          subtitle: 'push() → create()', 
          desc: "Yangi ma'lumot qo'shish." 
        },
        { 
          title: 'UPDATE SET', 
          subtitle: 'obj.title= → update()', 
          desc: "Mavjud ma'lumotni yangilash." 
        },
        { 
          title: 'DELETE', 
          subtitle: 'splice() → delete()', 
          desc: "Ma'lumotni o'chirish." 
        }
      ]
    },
    {
      type: 'code',
      title: '3. GET: findUnique() — ID Bo\'yicha Mahsulot',
      text: "Dinamik parametr orqali bitta mahsulotni olish. ID topilmasa null qaytadi.",
      code: `// Controller
@Get(':id')
getProduct(@Param('id') id: number) {
  return this.productsService.getProduct(id);
}

// Service
async getProduct(id: number) {
  return this.prisma.product.findUnique({
    where: { id },
  });
}

-- Postman: GET /products/1
-- where — qaysi yozuvni qaytarishni aytadi.
-- Route: id — dinamik parametr
-- where: { id } — shart
-- Bitta obyekt qaytadi`
    },
    {
      type: 'code',
      title: '4. PATCH: update() — Mahsulotni Yangilash',
      text: "Mavjud mahsulot ma'lumotlarini yangilash. UpdateProductDto orqali faqat ruxsat etilgan maydonlar o'tadi.",
      code: `// Service
async updateProduct(id: number, body: UpdateProductDto) {
  return this.prisma.product.update({
    where: { id },
    data: body,
  });
}

-- Postman: PATCH /products/1
-- Body:
{
  "title": "iPhone 17",
  "price": 1800
}

-- where → qaysi mahsulot?
-- data → yangi qiymatlar.`
    },
    {
      type: 'code',
      title: '5. DELETE: delete() — Mahsulotni O\'chirish',
      text: "Mahsulotni bazadan butunlay o'chirish. Qaytarib bo'lmaydi!",
      code: `// Controller
@Delete(':id')
deleteProduct(@Param('id') id: number) {
  return this.productsService.deleteProduct(id);
}

// Service
async deleteProduct(id: number) {
  return this.prisma.product.delete({
    where: { id },
  });
}

-- Postman: DELETE /products/1
-- yozuv bazadan butunlay o'chiriladi.`
    },
    {
      type: 'comparison',
      title: '6. DTO – Nima Uchun Kerak?',
      text: "DTO (Data Transfer Object) — API darvozasi. To'g'ri ma'lumot o'tadi, noto'g'ri rad etiladi.",
      cards: [
        { 
          title: 'Oldin: body: any', 
          subtitle: 'Xavfli', 
          desc: "Har qanday ma'lumot o'tadi. Xavfli va nazoratsiz." 
        },
        { 
          title: 'Hozir: CreateProductDto', 
          subtitle: 'Xavfsiz', 
          desc: "Faqat ruxsat etilgan maydonlar. Turi va chegaralar tekshiriladi." 
        }
      ],
      actionsTitle: 'DTO oqimi:',
      actions: [
        "Klient yuboradi → DTO qabul qiladi → ValidationPipe tekshiradi → Service saqlaydi."
      ]
    },
    {
      type: 'code',
      title: '7. CreateProductDto – Validatsiya',
      text: "Yangi mahsulot yaratishda barcha maydonlar majburiy va qat'iy tekshiriladi.",
      code: `// create-product.dto.ts
import { IsString, IsNotEmpty, Length, IsNumber, Min, Max } from 'class-validator';

export class CreateProductDto {
  @IsString({ message: "Title must be text" })
  @IsNotEmpty({ message: "Title cannot be empty" })
  @Length(3, 30, { message: "Title: 3-30 belgi" })
  title: string;

  @IsNumber({}, { message: "Price must be number" })
  @Min(1, { message: "Min narx: 1" })
  @Max(100000, { message: "Max narx: 100000" })
  price: number;
}

-- IsString: Faqat matn
-- IsNotEmpty: Bo'sh emas
-- Length: 3-30 belgi
-- IsNumber: Faqat raqam
-- Min / Max: Narx chegarasi`
    },
    {
      type: 'code',
      title: '8. UpdateProductDto — Ixtiyoriy Maydonlar',
      text: "PATCH so'rovida faqat yuborilgan maydonlar yangilanadi. Barcha maydon majburiy emas.",
      code: `// update-product.dto.ts
import { IsOptional, IsString, Length, IsNumber, Min, Max } from 'class-validator';

export class UpdateProductDto {
  @IsOptional()
  @IsString()
  @Length(3, 30)
  title?: string;

  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(100000)
  price?: number;
}

-- Nima uchun IsOptional?
-- PATCH faqat yuborilgan maydonlarni yangilaydi.
-- Misol: { "price": 2500 } — faqat narx yangilanadi.
-- ? — TypeScript'da ixtiyoriy maydon.`
    },
    {
      type: 'code',
      title: '9. ValidationPipe — API-ni Himoya Qilish',
      text: "main.ts faylida global ValidationPipe ni sozlash orqali barcha so'rovlarni avtomatik tekshirish.",
      code: `// main.ts
app.useGlobalPipes(
  new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  })
);

-- whitelist — ortiqcha maydonlarni o'chiradi
-- forbidNonWhitelisted — 400 xato qaytaradi (agar ruxsat etilmagan maydon yuborilsa)
-- transform — turlarni avtomatik o'giradi (masalan, string dan number ga)`
    }
  ]
};