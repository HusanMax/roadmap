export const nestModulesData = {
  id: 'nest-modules',
  title: '5. Modules va Tuzilma',
  heading: 'Modules, Shared va Global modullar',
  subheading: "Feature modullar, import/export va global modullar bilan toza arxitektura.",
  sections: [
    {
      type: 'comparison',
      title: '1. Modul turlari',
      text: "Modul — NestJS ilovasining asosiy tashkiliy birligi. U tegishli controller va provider larni jamlaydi.",
      cards: [
        { title: 'Feature Module', subtitle: 'Vazifaga oid', desc: "Users, Products kabi alohida funksiyalar uchun." },
        { title: 'Shared Module', subtitle: 'Umumiy', desc: "Bir necha modul ishlatadigan service lar uchun." },
        { title: 'Global Module', subtitle: 'Hamma joyda', desc: "@Global() bilan belgilanadi, import qilmasdan foydalaniladi." }
      ],
      actionsTitle: 'Modul imkoniyatlari:',
      actions: [
        "controllers — modulga tegishli controller lar.",
        "providers — modulda yaratiladigan service lar.",
        "imports — boshqa modullardan kerakli service lar.",
        "exports — boshqa modullarga taqdim etiladigan provider lar."
      ]
    },
    {
      type: 'code',
      title: '2. AppModule (ildiz modul)',
      text: "AppModule barcha feature modullarni import qiladi va ilovaning ildizi hisoblanadi.",
      code: `import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule, UsersModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}`
    },
    {
      type: 'code',
      title: '3. Feature modul',
      text: "Har bir funksiya o'z modulida bo'ladi va kerakli service larni import/export qiladi.",
      code: `@Module({
  imports: [DatabaseModule],
  controllers: [ProductsController],
  providers: [ProductsService],
  exports: [ProductsService],
})
export class ProductsModule {}`
    },
    {
      type: 'code',
      title: '4. Global modul',
      text: "Ko'p joyda kerak bo'ladigan service lar uchun global modul yaratish qulay.",
      code: `import { Global, Module } from '@nestjs/common';
import { ConfigService } from './config.service';

@Global()
@Module({
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}`
    },
    {
      type: 'list',
      title: '5. Toza arxitektura tamoyillari',
      text: "Katta loyihalarda modullar yordamida kod tartibli saqlanadi:",
      points: [
        "Har bir funksiya (users, products, orders) alohida modulda bo'ladi.",
        "Umumiy service lar (database, config) shared modulga chiqariladi.",
        "Modul tashqarisiga faqat kerakli narsa exports qilinadi.",
        "Sirkulyar import lardan qoching yoki forwardRef ishlatiladi."
      ]
    },
    {
      type: 'tasks',
      title: '6. Amaliyot Topshiriqlari',
      tasks: [
        "OrdersModule yaratib, uni AppModule ga import qiling.",
        "Shared DatabaseModule yaratib, kerakli service ni export qiling.",
        "@Global() bilan ConfigModule yasang.",
        "Bir modulning service ini boshqasida ishlatib ko'ring."
      ]
    }
  ]
};
