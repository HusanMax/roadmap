export const nestjsSwaggerGuideData = {
  id: 'nestjs-swagger-guide',
  title: '10 Swagger API Documentation',
  heading: 'Avtomatik API Hujjatlashtirish va Swagger UI',
  subheading: "NestJS ilovalarida Swagger yordamida professional interactive API documentation yaratish, DTO'larni va JWT Auth'ni sozlash.",
  sections: [
    {
      type: 'text',
      title: '1. Nima uchun Swagger kerak?',
      text: "Backend API yozganimizdan keyin Frontend yoki Mobile Developer API qanday ishlashini bilishi kerak (masalan, GET /products, POST /auth/login endpoint, request body va response qanday bo'lishi)[cite: 63]. Ilgari API Documentation qo'lda Word yoki PDF faylga yozilar edi[cite: 63]. Swagger esa NestJS loyihasidagi Controller va DTO'larni o'qib, avtomatik ravishda Interactive API Documentation yaratadi va uni brauzerda ko'rsatadi[cite: 63]."
    },
    {
      type: 'code',
      title: '2. Swagger O\'rnatish va Asosiy Sozlash',
      text: "Kutubxonani o'rnatish, DocumentBuilder yordamida API haqida umumiy ma'lumotlarni (sarlavha, tavsif, versiya) shakllantirish va SwaggerModule orqali localhost:3000/api manzilida ulash[cite: 64, 65].",
      code: `// Terminal buyrug'i:
// npm install @nestjs/swagger

// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('NestJS Course API')
    .setDescription('Backend API Documentation')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // http://localhost:3000/api

  await app.listen(3000);
}
bootstrap();`
    },
    {
      type: 'code',
      title: '3. Controller\'larni Guruhlash: @ApiTags()',
      text: "Swagger barcha endpoint'larni bitta bo'limda chiqaradi[cite: 66]. `@ApiTags()` yordamida endpoint'larni mavzu bo'yicha (masalan, Authentication, Products, Courses) guruhlarga ajratish mumkin[cite: 66].",
      code: `// products.controller.ts
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Products') // Controller'dagi barcha endpointlarni "Products" bo'limiga joylaydi[cite: 66]
@Controller('products')
export class ProductsController {
  // ...
}`
    },
    {
      type: 'code',
      title: '4. Endpoint\'larni Tasvirlash: @ApiOperation va @ApiResponse',
      text: "`@ApiOperation` endpoint nima qilishini tushuntirsa, `@ApiResponse` esa kutilayotgan javob holati va tavsifini beradi[cite: 67]. Eslatma: Bu decoratorlar biznes logikani o'zgartirmaydi, faqat documentation'ni yaxshilaydi[cite: 67].",
      code: `import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Post()
@ApiOperation({ summary: 'Create new product' }) // Endpoint izohi[cite: 67]
@ApiResponse({ status: 201, description: 'Product created successfully' }) // Response tavsifi[cite: 67]
createProduct(@Body() body: CreateProductDto) {
  return this.productsService.create(body);
}`
    },
    {
      type: 'code',
      title: '5. DTO larni Hujjatlashtirish: @ApiProperty',
      text: "Swagger request body haqida dastlab kam ma'lumot beradi. `@ApiProperty()` yordamida har bir field'ga namuna (example) va tavsif (description) qo'shish mumkin[cite: 68].",
      code: `// create-product.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    example: 'MacBook Pro',
    description: 'Product title',
  })
  @IsString()
  title: string;

  @ApiProperty({
    example: 2500,
    description: 'Product price',
  })
  @IsNumber()
  price: number;
}`
    },
    {
      type: 'code',
      title: '6. Query DTO va Optional Parametrlar: @ApiPropertyOptional',
      text: "Query parametrlarni (search, page, limit va h.k.) hujjatlashtirish uchun `@ApiPropertyOptional` ishlatiladi, chunki ular majburiy (required) emas[cite: 69].",
      code: `// get-products.dto.ts
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumberString } from 'class-validator';

export class GetProductsDto {
  @ApiPropertyOptional({
    example: 'iphone',
    description: 'Search by product title',
  })
  @IsOptional()
  @IsString()
  search?: string;

  @ApiPropertyOptional({
    example: 'desc',
    enum: ['asc', 'desc'],
    description: 'Sort by price',
  })
  @IsOptional()
  @IsString()
  sort?: string;

  @ApiPropertyOptional({ example: '1', description: 'Page number' })
  @IsOptional()
  @IsNumberString()
  page?: string;

  @ApiPropertyOptional({ example: '10', description: 'Items per page' })
  @IsOptional()
  @IsNumberString()
  limit?: string;
}`
    },
    {
      type: 'code',
      title: '7. Swagger Authorization: @ApiBearerAuth()',
      text: "Protected endpoint'lar Swagger UI orqali test qilinganda 401 Unauthorized qaytaradi, chunki Swagger token yubormaydi[cite: 70]. `@ApiBearerAuth()` va `addBearerAuth()` yordamida Swagger UI yuqori qismida 'Authorize' tugmasi paydo bo'ladi[cite: 70].",
      code: `// Controller yoki Route ustida ishlatish:
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Products')
@ApiBearerAuth() // Swagger UI da Authorize tugmasini faollashtiradi[cite: 70]
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('products')
export class ProductsController {
  @Get()
  findAll() {
    return this.productsService.findAll();
  }
}

// Ishlatish tartibi: Login -> JWT Token nusxalash -> Authorize tugmasiga qo'yish -> Avtomatik 'Authorization: Bearer <token>' yuboriladi[cite: 70].`
    },
    {
      type: 'text',
      title: '8. Professional API Documentation Flow (8 Bosqich)',
      text: "Mukammal API hujjati yaratish ketma-ketligi: 1) Install Swagger (`npm install @nestjs/swagger`); 2) Configure Swagger (`DocumentBuilder` va `SwaggerModule.setup()`); 3) Group Controllers (`@ApiTags()`); 4) Describe Endpoints (`@ApiOperation()`); 5) Document Responses (`@ApiResponse()`); 6) Document DTOs (`@ApiProperty()`); 7) Document Query DTO (`@ApiPropertyOptional()`); 8) JWT Authentication (`@ApiBearerAuth()`)[cite: 71]."
    },
    {
      type: 'comparison',
      title: '9. Yakuniy Xulosalar',
      text: "Swagger bo'yicha asosiy tushunchalar va xulosalar[cite: 72].",
      cards: [
        {
          title: 'Swagger Asoslari',
          subtitle: 'SwaggerModule & DocumentBuilder',
          desc: "setTitle, setDescription, setVersion va addBearerAuth orqali asosiy konfiguratsiya[cite: 72]."
        },
        {
          title: 'Decoratorlar',
          subtitle: 'Tag & Operation & Response',
          desc: "ApiTags, ApiOperation, ApiResponse, ApiProperty va ApiBearerAuth[cite: 72]."
        },
        {
          title: 'DTO Documentation',
          subtitle: 'Request & Query',
          desc: "Request body va query parametrlarni professional darajada hujjatlashtirish[cite: 72]."
        },
        {
          title: 'Swagger Authorization',
          subtitle: 'JWT Token Testing',
          desc: "Protected endpoint'larni Swagger UI orqali bemalol test qilish imkoniyati[cite: 72]."
        }
      ],
      actionsTitle: 'Natija:',
      actions: [
        "Ushbu 8 bosqichni bajarish orqali siz Front-end va Mobile dasturchilar uchun mukammal, tushunarli va interaktiv API hujjatini yaratasiz[cite: 71]!"
      ]
    }
  ]
};