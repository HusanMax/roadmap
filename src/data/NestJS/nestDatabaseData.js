export const nestDatabaseData = {
  id: 'nest-database',
  title: '6. TypeORM + PostgreSQL',
  heading: 'NestJS + TypeORM + PostgreSQL',
  subheading: "Entity, Repository va migratsiya yordamida PostgreSQL bazasi bilan ishlash.",
  sections: [
    {
      type: 'comparison',
      title: '1. ORM tanlash',
      text: "NestJS da PostgreSQL bilan ishlash uchun bir nechta variant bor. TypeORM eng ko'p ishlatiladi.",
      cards: [
        { title: 'TypeORM', subtitle: 'Entity pattern', desc: "Decorator asosida entity va repository bilan ishlaydi." },
        { title: 'Prisma', subtitle: 'Type-safe', desc: "Alohida schema fayli va generatsiya qilingan client." },
        { title: 'MikroORM', subtitle: 'Alternativ', desc: "Data Mapper va Unit of Work pattern lariga asoslangan." }
      ],
      actionsTitle: 'TypeORM oqimi:',
      actions: [
        "TypeOrmModule.forRoot() bilan ulanish sozlanadi.",
        "Entity klasslar jadvalga mos keladi.",
        "Repository orqali CRUD amallari bajariladi.",
        "synchronize yoki migratsiya bilan sxema yangilanadi."
      ]
    },
    {
      type: 'code',
      title: '2. O\'rnatish va ulanish',
      text: "Kerakli paketlar o'rnatilib, AppModule da ulanish sozlanadi.",
      code: `npm install @nestjs/typeorm typeorm pg

// app.module.ts
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: 5432,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true, // faqat developmentda!
    }),
  ],
})
export class AppModule {}`
    },
    {
      type: 'code',
      title: '3. Entity yaratish',
      text: "Entity klass @Entity() decorator bilan belgilanadi va jadvalga mos keladi.",
      code: `import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;
}`
    },
    {
      type: 'code',
      title: '4. Repository orqali CRUD',
      text: "Service ichida Repository inject qilinadi va bazaviy metodlar ishlatiladi.",
      code: `import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  create(data: Partial<User>): Promise<User> {
    const user = this.usersRepository.create(data);
    return this.usersRepository.save(user);
  }

  findOne(id: number): Promise<User | null> {
    return this.usersRepository.findOneBy({ id });
  }
}

// users.module.ts
@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}`
    },
    {
      type: 'rule',
      title: '5. Xavfsizlik qoidalari',
      points: [
        "Productionda synchronize: false qilib, migratsiyalardan foydalaning.",
        "Baza ma'lumotlarini .env faylida saqlang.",
        "Og'ir so'rovlarda relation va index larni to'g'ri sozlang.",
        "N+1 muammosidan qoching (relations bilan yuklang)."
      ],
      rule: "Qoida: synchronize: true faqat ishlab chiqishda ishlatiladi, productionda migratsiya ishlatiladi."
    },
    {
      type: 'tasks',
      title: '6. Amaliyot Topshiriqlari',
      tasks: [
        "TypeOrmModule ni PostgreSQL bilan sozlang.",
        "Product entity yaratib, TypeOrmModule.forFeature ga qo'shing.",
        "Repository orqali create, find va findOne amallarini bajaring.",
        "relation (OneToMany) qo'shib, bog'langan ma'lumotni yuklab ko'ring."
      ]
    }
  ]
};
