export const nestServicesData = {
  id: 'nest-services',
  title: '4. Services va Dependency Injection',
  heading: 'Services va Dependency Injection',
  subheading: "Biznes logika, @Injectable va constructor orqali dependency injection.",
  sections: [
    {
      type: 'comparison',
      title: '1. Controller va Service',
      text: "NestJS da mas'uliyat qatlamlarga bo'linadi: controller so'rovni qabul qiladi, service esa logikani bajaradi.",
      cards: [
        { title: 'Controller', subtitle: "So'rov qatlami", desc: "HTTP bilan ishlaydi, service ga topshiradi." },
        { title: 'Service', subtitle: 'Biznes logika', desc: "Ma'lumot bilan ishlaydi, mustaqil va test qilinadi." },
        { title: 'Provider', subtitle: 'Injectable', desc: "Dependency Injection orqali ulashiladi." }
      ],
      actionsTitle: 'Dependency Injection afzalliklari:',
      actions: [
        "Klasslar bir-biriga to'g'ridan-to'g'ri bog'lanmaydi (loose coupling).",
        "Testlashda soxta (mock) service berish oson.",
        "Nest obyektlarni o'zi yaratadi va ulaydi (IoC container).",
        "Service ni qayta ishlatish va almashtirish osonlashadi."
      ]
    },
    {
      type: 'code',
      title: '2. Service yaratish',
      text: "Service @Injectable() decorator bilan belgilanadi va biznes logikani o'z ichiga oladi.",
      code: `import { Injectable, NotFoundException } from '@nestjs/common';

export interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 1, name: 'Ali', email: 'ali@mail.com' }
  ];

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User {
    const user = this.users.find((u) => u.id === id);
    if (!user) throw new NotFoundException('User topilmadi');
    return user;
  }

  create(data: Omit<User, 'id'>): User {
    const user = { id: Date.now(), ...data };
    this.users.push(user);
    return user;
  }
}`
    },
    {
      type: 'code',
      title: '3. Constructor injection',
      text: "Controller service ni constructor parametri sifatida oladi. Nest uni avtomatik yaratib beradi.",
      code: `@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }
}`
    },
    {
      type: 'code',
      title: '4. Modulda ro\'yxatga olish',
      text: "Service modulning providers ro'yxatiga, controller esa controllers ro'yxatiga qo'shiladi.",
      code: `@Module({
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}`
    },
    {
      type: 'rule',
      title: '5. Qatlam qoidalari',
      points: [
        "Controller hech qachon bazaga to'g'ridan-to'g'ri murojaat qilmasin.",
        "Service boshqa service larni constructor orqali ishlatadi.",
        "Boshqa modul service idan foydalanish uchun uni exports qilish kerak.",
        "Sirkulyar bog'liqlik bo'lsa forwardRef ishlatiladi."
      ],
      rule: "Qoida: Har bir modul o'z vazifasini bajaradi, umumiy service lar Shared modulda jamlanadi."
    },
    {
      type: 'tasks',
      title: '6. Amaliyot Topshiriqlari',
      tasks: [
        "In-memory array bilan ishlovchi ProductsService yozing.",
        "findOne da topilmasa NotFoundException qaytaring.",
        "Controller da service ni constructor orqali inject qiling.",
        "Service ni modulda exports qilib, boshqa moduldan foydalaning."
      ]
    }
  ]
};
