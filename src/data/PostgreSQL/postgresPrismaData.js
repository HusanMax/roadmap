export const postgresPrismaData = {
  id: 'postgres-prisma',
  title: '7. Prisma ORM',
  heading: 'Prisma ORM bilan ishlash',
  subheading: "Type-safe ORM, schema, migratsiya va Prisma Client yordamida PostgreSQL bilan ishlash.",
  sections: [
    {
      type: 'comparison',
      title: '1. Raw SQL va ORM',
      text: "Prisma — Node.js/TypeScript uchun zamonaviy ORM. U SQL o'rniga JavaScript/TypeScript kod yozib bazani boshqarish imkonini beradi.",
      cards: [
        { title: 'Raw SQL', subtitle: "To'g'ridan-to'g'ri", desc: "To'liq nazorat, lekin qo'lda yoziladi va type xavfsizligi yo'q." },
        { title: 'Prisma', subtitle: 'Type-safe', desc: "Avtomatik type, o'qish oson va kam xato bilan ishlaydi." },
        { title: 'Migratsiya', subtitle: 'Versiya nazorati', desc: "Schema o'zgarishlari migratsiya fayllari orqali boshqariladi." }
      ],
      actionsTitle: 'Prisma oqimi:',
      actions: [
        "schema.prisma faylida model(lar) yoziladi.",
        "npx prisma migrate dev migratsiyani yaratadi va bazaga qo'llaydi.",
        "Prisma Client generatsiya qilinadi.",
        "Kodda prisma.student.create() kabi metodlar ishlatiladi."
      ]
    },
    {
      type: 'code',
      title: '2. O\'rnatish',
      text: "Prisma va uning CLI si loyihaga o'rnatiladi.",
      code: `npm install @prisma/client
npm install -D prisma

npx prisma init --datasource-provider postgresql`
    },
    {
      type: 'code',
      title: '3. schema.prisma',
      text: "Schema faylida datasource, generator va modellar belgilanadi.",
      code: `datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model Student {
  id        Int      @id @default(autoincrement())
  name      String
  age       Int?
  email     String   @unique
  createdAt DateTime @default(now())
}`
    },
    {
      type: 'code',
      title: '4. Prisma Client bilan CRUD',
      text: "Generatsiya qilingan Client orqali bazaga type-safe tarzda murojaat qilamiz.",
      code: `import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Create
await prisma.student.create({
  data: { name: 'Ali', age: 22, email: 'ali@mail.com' }
});

// Read
const students = await prisma.student.findMany({
  where: { age: { gt: 20 } },
  orderBy: { age: 'desc' }
});

// Update
await prisma.student.update({
  where: { id: 1 },
  data: { age: 23 }
});

// Delete
await prisma.student.delete({ where: { id: 1 } });`
    },
    {
      type: 'rule',
      title: '5. Migratsiya buyruqlari',
      points: [
        "npx prisma migrate dev — yangi migratsiya yaratadi va qo'llaydi.",
        "npx prisma generate — Client ni generatsiya qiladi.",
        "npx prisma studio — bazani brauzerda ko'rish uchun GUI.",
        "npx prisma migrate deploy — productionda migratsiyalarni qo'llaydi."
      ],
      rule: "Qoida: schema.prisma o'zgarganda 'prisma migrate dev' ishlatib, migratsiyani bazaga qo'llashni unutmang."
    },
    {
      type: 'tasks',
      title: '6. Amaliyot Topshiriqlari',
      tasks: [
        "Prisma ni o'rnatib, schema.prisma da Student modelini yozing.",
        "prisma migrate dev bilan jadvalni bazada yarating.",
        "Prisma Client orqali bitta yozuv qo'shib, keyin o'qing.",
        "age bo'yicha filter va orderBy ishlatib ko'ring."
      ]
    }
  ]
};
