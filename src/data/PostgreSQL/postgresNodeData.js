export const postgresNodeData = {
  id: 'postgres-node',
  title: '6. Node.js + PostgreSQL',
  heading: 'Node.js bilan PostgreSQL ga Ulanish',
  subheading: "pg kutubxonasi va Express orqali PostgreSQL bazasi bilan CRUD qilish.",
  sections: [
    {
      type: 'comparison',
      title: '1. Kutubxona tanlash',
      text: "Node.js dan PostgreSQL ga ulanish uchun bir nechta kutubxonalar mavjud.",
      cards: [
        { title: 'pg', subtitle: 'Rasmiy drayver', desc: "To'g'ridan-to'g'ri SQL yozib ishlash uchun engil drayver." },
        { title: 'Prisma', subtitle: 'Zamonaviy ORM', desc: "Type-safe schema va migratsiyalar bilan ishlash uchun." },
        { title: 'TypeORM', subtitle: 'NestJS bilan', desc: "Entity va repository pattern asosidagi ORM." }
      ],
      actionsTitle: 'Asosiy qadamlar:',
      actions: [
        "npm install pg (yoki pg + dotenv) qilasiz.",
        "Connection Pool yaratib, bazaga ulanadi.",
        "pool.query() orqali SQL so'rovlarni parameter bilan yuborasiz.",
        "Natijani JSON ko'rinishida API orqali qaytarasiz."
      ]
    },
    {
      type: 'code',
      title: '2. Connection Pool sozlash',
      text: "Pool — ulanishlarni qayta ishlatish uchun samarali usul. Parol va manzil .env faylida saqlanadi.",
      code: `// db.js
import pg from 'pg';
import 'dotenv/config';

export const pool = new pg.Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  max: 10
});`
    },
    {
      type: 'code',
      title: '3. Parameter bilan query',
      text: "Qiymatlarni SQL ga to'g'ridan-to'g'ri qo'shmang — $1, $2 belgilari bilan yuboring. Bu SQL Injection dan himoya qiladi.",
      code: `const result = await pool.query(
  'SELECT * FROM students WHERE age > $1 ORDER BY age',
  [20]
);

console.log(result.rows);`
    },
    {
      type: 'code',
      title: '4. Express bilan CRUD',
      text: "Express route'lari ichida pool.query orqali bazaga murojaat qilamiz.",
      code: `import express from 'express';
import { pool } from './db.js';

const app = express();
app.use(express.json());

app.get('/students', async (req, res) => {
  const { rows } = await pool.query('SELECT * FROM students');
  res.json(rows);
});

app.post('/students', async (req, res) => {
  const { name, age, email } = req.body;
  const { rows } = await pool.query(
    'INSERT INTO students (name, age, email) VALUES ($1, $2, $3) RETURNING *',
    [name, age, email]
  );
  res.status(201).json(rows[0]);
});

app.listen(3000);`
    },
    {
      type: 'rule',
      title: "5. Xavfsizlik qoidalari",
      points: [
        "Parollarni .env ga saqlang, kodga yozmang.",
        "SQL so'rovlarda har doim parameter ($1) ishlatilsin.",
        "Pooldan foydalanib, har so'rovda yangi ulanish ochmang.",
        "Xatolarni try/catch bilan ushlab, to'g'ri status code qaytaring."
      ],
      rule: "Qoida: Foydalanuvchi kiritgan qiymatni hech qachon SQL matniga to'g'ridan-to'g'ri qo'shmang."
    },
    {
      type: 'tasks',
      title: '6. Amaliyot Topshiriqlari',
      tasks: [
        "pg va dotenv o'rnatib, pool konfiguratsiyasini yarating.",
        "GET /students route'ini yozib, barcha talabalarni qaytaring.",
        "POST /students route'ida yangi yozuv qo'shing.",
        "Parameter ($1) ishlatmasdan SQL yozib ko'ring va xavfni tushuning."
      ]
    }
  ]
};
