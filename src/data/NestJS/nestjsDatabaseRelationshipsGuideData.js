export const nestjsDatabaseRelationshipsGuideData = {
  id: 'nestjs-database-relationships-guide',
  title: '9 Database Relationships',
  heading: 'Jadvallar Bog\'liqligi: One-to-Many va Many-to-Many',
  subheading: "NestJS va Prisma yordamida jadvallarni o'zaro bog'lash, Foreign Key, include, connect va disconnect texnikalarini o'rganish.",
  sections: [
    {
      type: 'text',
      title: '1. Nima uchun jadvallarni bog\'lash kerak?',
      text: "Hozirgacha biz User va Product jadvallarini alohida yaratdik. Lekin savol: MacBook kimga tegishli? Agar database ichida bog'lanish bo'lmasa, bunga javob bera olmaymiz. Professional database'larda jadvallar bir-biri bilan bog'langan bo'ladi. Primary Key — har bir yozuvning yagona ID'si, Foreign Key esa boshqa jadvaldagi ID'ni saqlaydi."
    },
    {
      type: 'code',
      title: '2. One-to-Many Munosabat (User → Products)',
      text: "Bitta User ko'plab Product'larga ega bo'lishi mumkin, lekin har bir Product faqat bitta User'ga tegishli. Bu One-to-Many munosabat deb ataladi (misol: Teacher → Students, Customer → Orders).",
      code: `// schema.prisma
model User {
  id       Int       @id @default(autoincrement())
  name     String
  email    String    @unique
  password String
  role     Role      @default(USER)
  products Product[] // Bitta User ko'plab Productlarga ega
}

model Product {
  id     Int    @id @default(autoincrement())
  title  String
  price  Float
  image  String?
  userId Int    // Foreign Key - Product qaysi Userga tegishli ekanini saqlaydi
  user   User   @relation(fields: [userId], references: [id]) // @relation bog'lanish yaratadi
}`
    },
    {
      type: 'text',
      title: '3. Migration va Foreign Key Constraint',
      text: "Migratsiyani ishga tushirish: `npx prisma migrate dev --name add-user-product-relation`. Migration yangi `userId` ustunini va Foreign Key Constraint'ni qo'shadi. Endi Product yaratishda `userId` yuboriladi (masalan, `{ title: \"MacBook\", price: 2500, userId: 1 }`). Agar mavjud bo'lmagan `userId: 999` yuborilsa, Prisma Foreign Key Constraint Error xatoligini beradi va noto'g'ri bog'lanishlarning oldini oladi."
    },
    {
      type: 'code',
      title: '4. Prisma Queries: include() vs select()',
      text: "Bog'langan ma'lumotlarni olishda `include()` va `select()` metodlari ishlatiladi.",
      code: `// 1. include() — Related jadvalni to'liq yuklaydi
return this.prisma.user.findMany({
  include: { products: true }, // User bilan birga uning barcha Productlarini qaytaradi
});

// 2. select() — Aniq maydonlarni tanlaydi
return this.prisma.user.findMany({
  select: { id: true, name: true }, // Faqat kerakli maydonlar
});

// Ikkalasini birlashtirish:
return this.prisma.user.findMany({
  select: {
    name: true,
    products: { select: { title: true, price: true } },
  },
});`
    },
    {
      type: 'text',
      title: '5. Many-to-Many Munosabat (Student ↔ Course)',
      text: "Bitta Student ko'plab Course'larda o'qishi mumkin va bitta Course'da ko'plab student o'qiy oladi. Bu Many-to-Many munosabat deb ataladi (misol: Books ↔ Authors, Movies ↔ Actors, Tags ↔ Posts). Prisma avtomatik ravishda Join Table (`_StudentToCourse`) yaratadi — hech qanday qo'shimcha kod yozish shart emas, bu Prisma'ning eng kuchli xususiyatlaridan biri."
    },
    {
      type: 'code',
      title: '6. Many-to-Many Prisma Schema va NestJS Servisi',
      text: "Student va Course modellarini tuzish va bog'lanishlarni boshqarish.",
      code: `// schema.prisma
model Student {
  id      Int      @id @default(autoincrement())
  name    String
  courses Course[] // Many-to-many
}

model Course {
  id       Int       @id @default(autoincrement())
  title    String
  students Student[] // Many-to-many
}

// student.service.ts — Course qo'shish va o'chirish (connect / disconnect)
async addCourse(studentId: number, courseId: number) {
  return this.prisma.student.update({
    where: { id: studentId },
    data: {
      courses: {
        connect: { id: courseId }, // Bog'lanish yaratadi
      },
    },
  });
}

async removeCourse(studentId: number, courseId: number) {
  return this.prisma.student.update({
    where: { id: studentId },
    data: {
      courses: {
        disconnect: { id: courseId }, // Bog'lanishni olib tashlaydi
      },
    },
  });
}`
    },
    {
      type: 'code',
      title: '7. Student va Course Controller\'lari',
      text: "Talabalar va kurslarni boshqarish uchun endpoint'lar.",
      code: `// student.controller.ts
@Controller('students')
export class StudentController {
  constructor(private studentService: StudentService) {}

  @Get()
  getStudents() {
    return this.studentService.getStudents();
  }

  @Post()
  createStudent(@Body() body: any) {
    return this.studentService.createStudent(body);
  }

  @Patch(':studentId/course/:courseId')
  addCourse(
    @Param('studentId') studentId: string,
    @Param('courseId') courseId: string,
  ) {
    return this.studentService.addCourse(Number(studentId), Number(courseId));
  }

  @Patch(':studentId/remove-course/:courseId')
  removeCourse(
    @Param('studentId') studentId: string,
    @Param('courseId') courseId: string,
  ) {
    return this.studentService.removeCourse(Number(studentId), Number(courseId));
  }
}`
    },
    {
      type: 'text',
      title: '8. connect() va disconnect() Farqi',
      text: "• **connect()** — mavjud yozuvlar orasida bog'lanish yaratadi (masalan, Student React kursiga ulanadi, hech narsa o'chirilmaydi).\n• **disconnect()** — mavjud bog'lanishni olib tashlaydi (Student va Course o'z joyida qoladi, faqat ular orasidagi aloqa uziladi)."
    },
    {
      type: 'comparison',
      title: '9. Nested Queries va Yakuniy Xulosalar',
      text: "Munosabatlarni ikkala yo'nalishda ham o'qish imkoniyati va xulosalar.",
      cards: [
        {
          title: 'Student → Courses',
          subtitle: 'include: { courses: true }',
          desc: "Talaba va uning barcha kurslarini birga olish (Ali → JavaScript, React, NestJS)."
        },
        {
          title: 'Course → Students',
          subtitle: 'include: { students: true }',
          desc: "Kurs va uning barcha talabalarini birga olish (NestJS → Ali, John, Sarah)."
        },
        {
          title: 'One-to-Many',
          subtitle: 'User ↔ Products',
          desc: "Foreign Key va @relation orqali bir nechta elementni bog'lash."
        },
        {
          title: 'Many-to-Many',
          subtitle: 'Student ↔ Courses',
          desc: "Prisma avtomatik Join table yaratadi, connect/disconnect orqali boshqariladi."
        }
      ],
      actionsTitle: 'Natija:',
      actions: [
        "Munosabatlar ikkala yo'nalishda ham mukammal ishlaydi va professional relational database arxitekturasi quriladi."
      ]
    }
  ]
};