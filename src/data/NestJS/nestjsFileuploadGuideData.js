export const nestjsFileuploadGuideData = {
  id: 'nestjs-fileupload-guide',
  title: '7 Rasm va File Yuklash: Multer va Prisma',
  heading: 'Mahsulotlar uchun Rasm Yuklash Tizimi',
  subheading: "NestJS, Multer va Prisma yordamida binary fayllarni qabul qilish, server papkasida saqlash va PostgreSQL bazasida filename saqlash.",
  sections: [
    {
      type: 'text',
      title: '1. Nima uchun oddiy JSON yetarli emas?',
      text: "Hozirgacha product yaratayotganda faqat title va price bilan ishladik[cite: 25]. Lekin mahsulot rasmi qayerga ketadi? JSON faqat matn va raqam ma'lumotlarni yuboradi[cite: 25]. Rasm esa Binary File hisoblanadi, shuning uchun oddiy JSON orqali rasm yubora olmaymiz[cite: 25]. Bugungi maqsad: Product yaratish bilan birga rasm ham yuklash va uni brauzerda ko'rsatish[cite: 25]."
    },
    {
      type: 'text',
      title: '2. Fayllar Qanday Yuboriladi? (multipart/form-data)',
      text: "File upload qilish uchun request turi o'zgaradi: oldingi darslarda application/json ishlatgan bo'lsak, endi multipart/form-data ishlatamiz[cite: 26]. Har bir field (title, price, image) alohida qism sifatida yuboriladi, image esa Binary File sifatida uzatiladi[cite: 26]."
    },
    {
      type: 'code',
      title: '3. Multer Kutubxonasini O\'rnatish',
      text: "NestJS o'zi file upload qilishni bilmaydi[cite: 27]. Multer — file upload qilish uchun mo'ljallangan middleware bo'lib, u fayllarni o'qiydi, saqlaydi va Controller ichida mavjud qiladi[cite: 27].",
      code: `// Terminal buyruqlari:
npm install multer
npm install -D @types/multer

-- Multer vazifalari: Fayllarni saqlaydi, yuklangan fayllarni o'qiydi va Controller ichida foydalanishga imkon beradi[cite: 27].`
    },
    {
      type: 'code',
      title: '4. Prisma Modelini Yangilash',
      text: "Database rasmning o'zini emas, faqat filename (fayl nomini) saqlaydi[cite: 28]. Product modeliga optional `image` field'ini qo'shamiz[cite: 28].",
      code: `// schema.prisma
model Product {
  id    Int     @id @default(autoincrement())
  title String
  price Float
  image String? // Optional field
}

-- Database faqat "1751902581452.png" kabi filename saqlaydi, rasmning o'zini emas[cite: 28].
-- Migratsiyani ishga tushirish: npx prisma migrate dev --name add-product-image[cite: 28]`
    },
    {
      type: 'code',
      title: '5. Rasmlarni Saqlash va ServeStaticModule',
      text: "Rasmlar PostgreSQL ichida emas, loyiha papkasida (uploads/) saqlanadi[cite: 29]. ServeStaticModule orqali uni brauzerga ochiq qilamiz[cite: 29].",
      code: `// app.module.ts
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/uploads',
    }),
    ProductsModule,
    UserModule,
    PrismaModule,
    AuthModule,
  ],
})
export class AppModule {}

-- Brauzer orqali kirish URL: http://localhost:3000/uploads/image.png[cite: 29]`
    },
    {
      type: 'code',
      title: '6. FileInterceptor — Fayllarni Qabul Qilish',
      text: "NestJS Interceptor request Controller'ga yetib borishidan oldin ishlaydi[cite: 30]. FileInterceptor yuklangan faylni ajratib oladi va diskStorage yordamida unga unikal nom berib saqlaydi[cite: 30, 31].",
      code: `// products.controller.ts
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Post()
@UseInterceptors(
  FileInterceptor('image', {
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, cb) => {
        const uniqueName = Date.now() + extname(file.originalname);
        cb(null, uniqueName);
      },
    }),
  }),
)
createProduct(
  @UploadedFile() file: Express.Multer.File,
  @Body() body: any,
) {
  return this.productsService.createProduct(body, file.filename);
}

-- 'image' — Postmandagi field nomi bilan mos kelishi shart[cite: 30].`
    },
    {
      type: 'code',
      title: '7. Controller va Service Integratsiyasi',
      text: "Controller matn va faylni qabul qiladi, Service esa filenameni PostgreSQL bazasiga saqlaydi[cite: 32].",
      code: `// products.service.ts
async createProduct(body: any, image: string) {
  return this.prisma.product.create({
    data: {
      title: body.title,
      price: Number(body.price),
      image,
    },
  });
}

// Barcha mahsulotlarni olishda rasm URL manzilini shakllantirish:
async getProducts() {
  const products = await this.prisma.product.findMany();
  return products.map((product) => ({
    ...product,
    image: product.image
      ? \`http://localhost:3000/uploads/\${product.image}\`
      : null,
  }));
}`
    },
    {
      type: 'text',
      title: '8. Postman Bilan Sinash va Muhim Qoidalar',
      text: "Postman'da test qilish bosqichlari: 1) Method va URL: POST /products; 2) Body tabida form-data tanlanadi; 3) title (Text), price (Text) va image (File turida) kiritiladi; 4) Send bosilib response tekshiriladi ({ \"id\": 1, \"title\": \"MacBook\", \"price\": 2500, \"image\": \"1751902581452.png\" }); 5) Brauzerda http://localhost:3000/uploads/1751902581452.png orqali rasm ochiladi[cite: 34].\n*Muhim: Hech qachon raw JSON bilan rasm yuklamang — doimo multipart/form-data ishlatish shart[cite: 34]!*"
    },
    {
      type: 'comparison',
      title: '9. To\'liq Fayl Yuklash Arxitekturasi va Xulosalar',
      text: "Fayl yuklash jarayonining umumiy oqimi va xulosalar[cite: 35].",
      cards: [
        {
          title: 'Client yuboradi',
          subtitle: 'multipart/form-data',
          desc: "So'rov maxsus form-data formatida yuboriladi[cite: 35]."
        },
        {
          title: 'FileInterceptor & Multer',
          subtitle: 'Disk Storage',
          desc: "Faylni ushlab qolib, unikal nom bilan uploads/ papkasiga saqlaydi[cite: 35]."
        },
        {
          title: 'Prisma & Database',
          subtitle: 'Filename saqlanadi',
          desc: "Ma'lumotlar bazasida faqat fayl nomi (string) saqlanadi[cite: 35]."
        },
        {
          title: 'ServeStaticModule',
          subtitle: 'Brauzerda ko\'rish',
          desc: "Yuklangan rasmlarni HTTP orqali ochiq holda ko'rsatishni ta'minlaydi[cite: 35]."
        }
      ],
      actionsTitle: 'Yakuniy Xulosalar:',
      actions: [
        "JSON fayl yuklay olmaydi, buning uchun multipart/form-data zarur[cite: 35].",
        "Multer fayllarni qabul qiladi va saqlaydi, Prisma esa faqat filename'ni bazada saqlaydi[cite: 35]."
      ]
    }
  ]
};