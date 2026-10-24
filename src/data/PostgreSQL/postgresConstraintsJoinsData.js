export const postgresConstraintsJoinsData = {
  id: 'postgres-constraints-joins',
  title: '3. Constraintlar, Munosabatlar va JOIN turlari',
  heading: 'PostgreSQL: Constraintlar, One-to-Many/Many-to-Many, Joinlar va Indexlar',
  subheading: "Ma'lumotlarni himoya qilish, jadvallarni o'zaro bog'lash, murakkab JOINlar va tezlikni optimallashtirish.",
  sections: [
    {
      type: 'comparison',
      title: '1. Constraintlar (NOT NULL, UNIQUE, DEFAULT)',
      text: "Constraintlar ma'lumotlarni himoya qiladi va noto'g'ri qiymat kiritilishining oldini oladi.",
      cards: [
        { title: 'NOT NULL', subtitle: 'Bo\'sh qiymatni taqiqlaydi', desc: "Ustun qiymatsiz qoldirilishiga yo'l qo'ymaydi." },
        { title: 'UNIQUE', subtitle: 'Takrorlanishni oldini oladi', desc: "Ustundagi har bir qiymat yagona bo'lishi shart." },
        { title: 'DEFAULT', subtitle: 'Standart qiymat beradi', desc: "Qiymat berilmasa, avtomatik tayin qiymatni qo'yadi." }
      ],
      actionsTitle: 'Misol:',
      actions: [
        "name VARCHAR(50) NOT NULL",
        "email VARCHAR(100) UNIQUE",
        "role VARCHAR(20) DEFAULT 'user'"
      ]
    },
    {
      type: 'code',
      title: '2. CHECK va ON DELETE CASCADE',
      text: "CHECK shartni tekshiradi, ON DELETE CASCADE esa asosiy jadvaldan ma'lumot o'chganda bog'langan ma'lumotlarni avtomatik o'chiradi.",
      code: `-- CHECK constraint
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    age INT CHECK(age >= 18)
);

-- ON DELETE CASCADE
CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100),
    user_id INT REFERENCES users(id) ON DELETE CASCADE
);`
    },
    {
      type: 'comparison',
      title: '3. Munosabatlar: One-to-One va One-to-Many',
      text: "Jadvallar o'rtasidagi asosiy bog'lanish turlari.",
      cards: [
        { title: 'One-to-One', subtitle: 'Birga-bir', desc: "Har bir foydalanuvchining faqat bitta pasporti bo'ladi (UNIQUE ishlatiladi)." },
        { title: 'One-to-Many', subtitle: 'Birga-ko\'p', desc: "Bitta o'qituvchi ko'p talabalarga dars bera oladi (FOREIGN KEY)." }
      ],
      actionsTitle: 'Misol:',
      actions: [
        "passports jadvalida user_id UNIQUE bo'ladi.",
        "students jadvalidagi teacher_id teachers(id) ga bog'lanadi."
      ]
    },
    {
      type: 'code',
      title: '4. Many-to-Many (Ko\'pni-ko\'pga) Munosabat',
      text: "Bir talaba ko'p kursga, bir kurs ko'p talabaga yozilishi mumkin. Buning uchun uchinchi (junction) jadval talab etiladi.",
      code: `CREATE TABLE student_courses (
    student_id INT REFERENCES students(id),
    course_id INT REFERENCES courses(id),
    PRIMARY KEY (student_id, course_id)
);`
    },
    {
      type: 'code',
      title: '5. JOIN turlari (INNER JOIN va FULL JOIN)',
      text: "Jadvallarni shartlar asosida birlashtirish usullari.",
      code: `-- INNER JOIN: Faqat ikkala jadvalda mos kelganlarni chiqaradi
SELECT *
FROM users
INNER JOIN orders ON users.id = orders.user_id;

-- FULL JOIN: Ikkala jadvalni to'liq chiqaradi (ma'lumot yo'qolmaydi)
SELECT users.name, orders.product
FROM users
FULL JOIN orders ON users.id = orders.user_id;`
    },
    {
      type: 'code',
      title: '6. SQL Aliases va Subqueries',
      text: "Ustunlarga laqab berish va so'rov ichida boshqa so'rov ishlatish.",
      code: `-- AS (Alias)
SELECT AVG(price) AS average_price FROM products;

-- Subquery (Query ichidagi query)
SELECT * FROM products
WHERE price > (
    SELECT AVG(price) FROM products
);`
    },
    {
      type: 'code',
      title: '7. Sana va Vaqt turlari (DATE, TIME, TIMESTAMP, NOW)',
      text: "Sana va vaqtlar bilan ishlash hamda avtomatik vaqtni belgilash.",
      code: `CREATE TABLE events (
    birthday DATE,
    lecture_time TIME,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Joriy vaqtni olish
SELECT NOW();`
    },
    {
      type: 'code',
      title: '8. Performance va Indexlar',
      text: "Katta hajmli ma'lumotlar bazalarida qidiruv tezligini keskin oshirish uchun indekslardan foydalaniladi.",
      code: `CREATE INDEX idx_email
ON users(email);

-- EXPLAIN ANALYZE orqali tezlikni tekshirish
EXPLAIN ANALYZE
SELECT * FROM users WHERE email = 'user999999@gmail.com';`
    },
    {
      type: 'tasks',
      title: '9. Amaliyot Topshiriqlari',
      tasks: [
        "age >= 18 CHECK sharti va DEFAULT qiymati bor jadval yarating.",
        "Many-to-Many munosabati uchun junction (bog'lovchi) jadval tuzing.",
        "FULL JOIN va INNER JOIN yordamida ikkita jadvalni birlashtirib ko'ring.",
        "Katta jadvaldagi qidiruvni tezlashtirish uchun INDEX yarating va EXPLAIN ANALYZE bilan sinang."
      ]
    }
  ]
};