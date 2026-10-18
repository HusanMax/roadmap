export const nestValidationData = {
  id: 'nest-validation',
  title: '8. Validation va Pipes',
  heading: 'Validation, Pipes va Error Handling',
  subheading: "DTO, class-validator, ValidationPipe, Interceptor va Exception Filter.",
  sections: [
    {
      type: 'comparison',
      title: '1. Nest quvurlari (Pipes)',
      text: "Pipe ma'lumotni route handler ga yetib borishidan oldin o'zgartiradi yoki tekshiradi. Validation va transformatsiya uchun ishlatiladi.",
      cards: [
        { title: 'ValidationPipe', subtitle: 'Tekshirish', desc: "DTO qoidalariga mos kelishini tekshiradi." },
        { title: 'ParseIntPipe', subtitle: 'Transformatsiya', desc: "Parametrni songa aylantiradi." },
        { title: 'Built-in Pipes', subtitle: 'Tayyor', desc: "ParseBoolPipe, ParseUUIDPipe kabi tayyor quvurlar." }
      ],
      actionsTitle: 'DTO nima?',
      actions: [
        "DTO (Data Transfer Object) — kelayotgan ma'lumot tuzilmasi.",
        "class-validator decorator lari bilan qoidalar yoziladi.",
        "class-transformer bilan tiplar avtomatik aylantiriladi.",
        "Xato bo'lsa, avtomatik 400 Bad Request qaytariladi."
      ]
    },
    {
      type: 'code',
      title: '2. DTO va class-validator',
      text: "Yangi foydalanuvchi qo'shish uchun DTO yozamiz va qoidalar belgilaymiz.",
      code: `npm install class-validator class-transformer

// create-user.dto.ts
import { IsEmail, IsString, MinLength, IsInt, Min } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(3)
  name: string;

  @IsEmail()
  email: string;

  @IsInt()
  @Min(18)
  age: number;
}`
    },
    {
      type: 'code',
      title: '3. ValidationPipe ni yoqish',
      text: "ValidationPipe global yoki route darajasida yoqiladi.",
      code: `// main.ts
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,       // ortiqcha maydonlarni olib tashlaydi
      forbidNonWhitelisted: true,
      transform: true,       // tiplarni avtomatik aylantiradi
    }),
  );

  await app.listen(3000);
}
bootstrap();`
    },
    {
      type: 'code',
      title: '4. Exception Filter va Interceptor',
      text: "Filter xatolarni bitta formatda qaytaradi, Interceptor esa javobni o'zgartiradi (masalan, log yoki formatlash).",
      code: `// http-exception.filter.ts
import {
  ExceptionFilter, Catch, ArgumentsHost, HttpException,
} from '@nestjs/common';

@Catch(HttpException)
export class HttpErrorFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const res = host.switchToHttp().getResponse();
    const status = exception.getStatus();
    res.status(status).json({
      statusCode: status,
      message: exception.message,
      timestamp: new Date().toISOString(),
    });
  }
}

// logging.interceptor.ts
@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    console.log('Request...');
    return next.handle();
  }
}`
    },
    {
      type: 'rule',
      title: '5. Xatolarni boshqarish',
      points: [
        "NotFoundException, BadRequestException kabi tayyor exception lar ishlatiladi.",
        "Har bir DTO uchun alohida validatsiya qoidalari yoziladi.",
        "Exception Filter bilan xato javobi bir xil formatda bo'ladi.",
        "Interceptor request/response ni log qilish uchun qulay."
      ],
      rule: "Qoida: Foydalanuvchiga hech qachon xom (raw) xatolik stack'i ko'rsatilmaydi."
    },
    {
      type: 'tasks',
      title: '6. Amaliyot Topshiriqlari',
      tasks: [
        "CreateProductDto yozib, IsString va Min validatsiyalarini qo'shing.",
        "ValidationPipe ni whitelist va transform bilan yoqib ko'ring.",
        "HttpErrorFilter yaratib, barcha xatolarni bitta formatda qaytaring.",
        "LoggingInterceptor qo'shib, har bir requestni konsolga chiqaring."
      ]
    }
  ]
};
