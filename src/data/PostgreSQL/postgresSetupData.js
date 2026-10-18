export const postgresSetupData = {
  id: 'postgres-setup',
  title: "2. O'rnatish va Ulanish",
  heading: "PostgreSQL O'rnatish va Ulanish",
  subheading: "psql, pgAdmin va Docker orqali PostgreSQL ni o'rnatish hamda bazaga ulanish.",
  sections: [
    {
      type: 'comparison',
      title: "1. O'rnatish usullari",
      text: "PostgreSQL ni bir necha usulda o'rnatish mumkin. Har bir usul turli holatlar uchun qulay.",
      cards: [
        { title: 'pgAdmin', subtitle: 'GUI dastur', desc: "PostgreSQL bilan birga keladi, jadvallarni grafik interfeysda boshqarish uchun." },
        { title: 'psql', subtitle: 'CLI terminal', desc: "Terminal orqali SQL buyruqlarini yozib ishlash uchun rasmiy vosita." },
        { title: 'Docker', subtitle: 'Konteyner', desc: "Loyihaning boshqa qismlaridan ajratilgan holda tez ishga tushirish uchun." }
      ],
      actionsTitle: 'O\'rnatish bosqichlari:',
      actions: [
        "Rasmiy saytdan yoki paket menejerdan PostgreSQL ni o'rnatasiz.",
        "O'rnatish paytida superuser (postgres) parolini belgilaysiz.",
        "Port 5432 standart bo'lib qoladi (o'zgartirish shart emas).",
        "pgAdmin yoki psql orqali serverga ulanib tekshirasiz."
      ]
    },
    {
      type: 'code',
      title: '2. Docker orqali ishga tushirish',
      text: "Docker o'rnatilgan bo'lsa, PostgreSQL ni bitta buyruq bilan ishga tushirish mumkin.",
      code: `docker run --name my-postgres \\
  -e POSTGRES_PASSWORD=admin123 \\
  -e POSTGRES_DB=myapp \\
  -p 5432:5432 \\
  -d postgres:16`
    },
    {
      type: 'code',
      title: '3. psql orqali ulanish',
      text: "psql — PostgreSQL ning rasmiy terminal mijozidir. Serverga foydalanuvchi nomi va parol orqali ulanadi.",
      code: `# Terminalda ulanish
psql -h localhost -U postgres -d myapp

# Connection string ko'rinishi
postgresql://postgres:admin123@localhost:5432/myapp`
    },
    {
      type: 'list',
      title: '4. psql asosiy buyruqlari',
      text: "psql ichida maxsus buyruqlar teskari qiyshiq chiziq (\\) bilan boshlanadi:",
      points: [
        '\\l — bazalar ro\'yxatini ko\'rsatadi.',
        '\\c myapp — boshqa bazaga ulanadi.',
        '\\dt — joriy bazadagi jadvallar ro\'yxati.',
        '\\d students — jadval tuzilmasini ko\'rsatadi.',
        '\\q — psql dan chiqish.'
      ]
    },
    {
      type: 'code',
      title: '5. Database va Table yaratish',
      text: "Bazani CREATE DATABASE bilan, jadvalni CREATE TABLE bilan yaratamiz.",
      code: `CREATE DATABASE myapp;

CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  age INT,
  email VARCHAR(120) UNIQUE,
  created_at TIMESTAMP DEFAULT NOW()
);`
    },
    {
      type: 'tasks',
      title: '6. Amaliyot Topshiriqlari',
      tasks: [
        "Docker orqali PostgreSQL konteynerini ishga tushiring.",
        "psql bilan serverga ulanib, \\l va \\dt buyruqlarini sinab ko'ring.",
        "myapp bazasida yangi courses jadvalini yarating."
      ]
    }
  ]
};
