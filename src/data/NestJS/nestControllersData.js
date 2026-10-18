export const nestControllersData = {
  id: 'nest-controllers',
  title: '3. Controllers va Routing',
  heading: 'Controllers, Routing va REST',
  subheading: "Decorator lar, route parametrlari va RESTful API yaratish.",
  sections: [
    {
      type: 'comparison',
      title: '1. Asosiy HTTP decoratorlar',
      text: "NestJS da HTTP metodlari decorator lar orqali belgilanadi. Har biri REST amaliga mos keladi.",
      cards: [
        { title: '@Get', subtitle: "Ma'lumot olish", desc: "GET so'rovini qabul qiladi." },
        { title: '@Post', subtitle: "Qo'shish", desc: "POST so'rovini qabul qiladi." },
        { title: '@Patch / @Put', subtitle: "O'zgartirish", desc: "Qismiy yoki to'liq yangilash uchun." },
        { title: '@Delete', subtitle: "O'chirish", desc: "DELETE so'rovini qabul qiladi." }
      ],
      actionsTitle: 'Route parametrlari:',
      actions: [
        "@Param('id') — URL dagi parametrni oladi.",
        "@Query() — query string qiymatlarini oladi.",
        "@Body() — so'rov tanasini (JSON) oladi.",
        "@Headers() — so'rov sarlavhalarini oladi."
      ]
    },
    {
      type: 'code',
      title: '2. To\'liq controller',
      text: "Quyidagi controller RESTful CRUD route larini ko'rsatadi.",
      code: `import {
  Controller, Get, Post, Patch, Delete,
  Param, Body, Query
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(@Query('role') role?: string) {
    return this.usersService.findAll(role);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Post()
  create(@Body() body: CreateUserDto) {
    return this.usersService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return this.usersService.update(+id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}`
    },
    {
      type: 'comparison',
      title: '3. REST vs boshqa usullar',
      text: "NestJS asosan REST API uchun ishlatiladi, lekin boshqa usullarni ham qo'llab-quvvatlaydi.",
      cards: [
        { title: 'REST', subtitle: 'HTTP', desc: "An'anaviy controller va @Get/@Post bilan." },
        { title: 'GraphQL', subtitle: 'Query/Mutation', desc: "@Resolver va schema bilan ishlaydi." },
        { title: 'WebSocket', subtitle: 'Real-time', desc: "@WebSocketGateway orqali ikki tomonlama aloqa." }
      ]
    },
    {
      type: 'rule',
      title: '4. Routing qoidalari',
      points: [
        "@Controller('users') prefiksi barcha route larga qo'shiladi.",
        "Route lar aniq (':id') va umumiy ('') tartibda yoziladi.",
        "Status kodlar @HttpCode() bilan boshqariladi.",
        "Xatolar exception (NotFoundException) bilan qaytariladi."
      ],
      rule: "Qoida: REST semantikasiga rioya qiling — GET o'zgartirmaydi, POST/DELETE o'zgartiradi."
    },
    {
      type: 'tasks',
      title: '5. Amaliyot Topshiriqlari',
      tasks: [
        "products controllerida to'liq CRUD route larini yozing.",
        "@Query bilan kategoriya bo'yicha filterlash qo'shing.",
        "Topilmagan mahsulot uchun NotFoundException qaytaring.",
        "Route prefiksini 'api/products' qilib sozlang."
      ]
    }
  ]
};
