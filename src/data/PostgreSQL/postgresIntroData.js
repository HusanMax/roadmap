export const postgresIntroData = {
  id: 'postgres-intro',
  title: '1. PostgreSQL ga Kirish',
  heading: 'PostgreSQL ga Kirish',
  subheading: "Relatsion ma'lumotlar bazasi, SQL va PostgreSQL ning asosiy tushunchalari.",
  sections: [
    {
      type: 'comparison',
      title: '1. PostgreSQL nima?',
      text: "PostgreSQL (qisqacha Postgres) — kuchli, open source relatsion ma'lumotlar bazasi boshqaruv tizimi (RDBMS). U ma'lumotlarni jadval ko'rinishida saqlaydi va SQL tili orqali boshqaradi.",
      cards: [
        { title: 'Relatsion', subtitle: 'Jadval asosida', desc: "Ma'lumotlar qatorlar va ustunlardan iborat jadvallarda saqlanadi." },
        { title: 'SQL', subtitle: "So'rov tili", desc: "Ma'lumotlarni o'qish va o'zgartirish uchun SQL tilidan foydalaniladi." },
        { title: 'Ishonchli', subtitle: 'Open Source', desc: "Bepul, barqaror va katta loyihalarda keng qo'llaniladi." }
      ],
      actionsTitle: 'Nima uchun PostgreSQL?',
      actions: [
        "ACID tranzaksiyalarni to'liq qo'llab-quvvatlaydi.",
        "Kuchli ma'lumot turlari va cheklovlarni (constraints) taklif qiladi.",
        "Murakkab SQL so'rovlar, JOIN va indeksatsiyani samarali bajaradi.",
        "Node.js, NestJS va boshqa tillar bilan oson integratsiya qiladi."
      ]
    },
    {
      type: 'list',
      title: '2. RDBMS tuzilmasi',
      text: "Relatsion bazada ma'lumot bir necha darajada tashkil etiladi:",
      points: [
        'Database: Eng yuqori daraja, bir nechta jadvalni saqlaydi (masalan, school).',
        'Table (jadval): Ma\'lumotlar saqlanadigan tuzilma (masalan, students).',
        'Row (qator): Jadvaldagi bitta yozuv, ya\'ni bitta talaba.',
        'Column (ustun): Har bir yozuvning xususiyati (masalan, name, age).',
        'Schema: Jadval va obyektlarni guruhlovchi mantiqiy konteyner.'
      ]
    },
    {
      type: 'comparison',
      title: '3. SQL va NoSQL farqi',
      text: "PostgreSQL relatsion (SQL) bazalar turiga kiradi. NoSQL bazalar (masalan, MongoDB) boshqacha yondashuvni ishlatadi.",
      cards: [
        { title: 'PostgreSQL', subtitle: 'Relatsion (SQL)', desc: "Qat'iy jadval tuzilmasi, tayinlangan munosabatlar va kuchli tranzaksiyalar." },
        { title: 'MongoDB', subtitle: 'NoSQL (document)', desc: "Moslashuvchan JSON hujjatlar, tuzilma oldindan qat'iy belgilanmaydi." },
        { title: 'Tanlov', subtitle: 'Loyihaga qarab', desc: "Murakkab munosabatlar uchun SQL, tez o'zgaruvchi sxema uchun NoSQL qulay." }
      ]
    },
    {
      type: 'rule',
      title: '4. Asosiy qoida',
      points: [
        'Har bir jadvalning birlamchi kaliti (PRIMARY KEY) bo\'lishi tavsiya etiladi.',
        'Ma\'lumot turini (data type) to\'g\'ri tanlash xotira va tezlikka ta\'sir qiladi.',
        'Katta harflar bilan yozilgan SQL kalit so\'zlari o\'qishni osonlashtiradi.'
      ],
      rule: "Qoida: SQL kalit so'zlarini katta harfda (SELECT, FROM, WHERE), nomlarni kichik harfda yozing."
    },
    {
      type: 'tasks',
      title: '5. Amaliyot Topshiriqlari',
      tasks: [
        "PostgreSQL va MongoDB o'rtasidagi 3 ta farqni yozing.",
        "RDBMS ning database, table, row va column tushunchalarini tushuntiring.",
        "O'zingizning kichik loyihangiz uchun 3 ta jadval nomini o'ylab toping."
      ]
    }
  ]
};
