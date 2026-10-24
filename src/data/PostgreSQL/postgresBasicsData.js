export const postgresBasicsData = {
  id: "postgres-basics",
  title: "1. PostgreSQL Asoslari", 
  heading: "PostgreSQL Asoslari: Maʼlumotlar bazasi va CRUD amaliyotlari",
  subheading:
    "Ochiq kodli relyatsion ma'lumotlar bazasi bilan ishlash va jadvallarni boshqarish.",
  sections: [
    {
      type: "comparison",
      title: "1. PostgreSQL Asoslari",
      text: "PostgreSQL - ochiq kodli relyatsion ma'lumotlar bazasi. Ma'lumotlar jadval ko'rinishida saqlanadi: Database → Table → Rows + Columns.",
      cards: [
        {
          title: "Table",
          subtitle: "Jadval",
          desc: "Ma'lumotlar saqlanadigan asosiy birlik.",
        },
        {
          title: "Row",
          subtitle: "Gorizontal qator",
          desc: "Alohida yozuv (obyekt).",
        },
        {
          title: "Column",
          subtitle: "Vertikal ustun",
          desc: "Maydon (xususiyat yoki ma'lumot turi).",
        },
      ],
      actionsTitle: "Misol:",
      actions: [
        "school_db bazasida users, books, teachers jadvallari bo'lishi mumkin.",
        "SELECT * FROM users; buyrug'i barcha ma'lumotlarni ko'rsatadi.",
      ],
    },
    {
      type: "comparison",
      title: "2. Data Types (Maʼlumot turlari)",
      text: "Har bir column o'z data typega ega. PostgreSQL eng ko'p ishlatiladigan turlar:",
      cards: [
        { title: "INT", subtitle: "Butun son", desc: "Masalan: 22, 350." },
        {
          title: "VARCHAR(n)",
          subtitle: "Matn",
          desc: "n belgigacha matn qabul qiladi (masalan, 'Elbek').",
        },
        {
          title: "BOOLEAN",
          subtitle: "Mantiqiy qiymat",
          desc: "Faqat TRUE yoki FALSE qiymat oladi.",
        },
        {
          title: "SERIAL",
          subtitle: "Avtomatik oʻsuvchi",
          desc: "1, 2, 3... tarzda o'zi oshib boradi.",
        },
      ],
      actionsTitle: "Eslatma:",
      actions: [
        "VARCHAR(50) - maksimal 50 ta belgili matn qabul qiladi.",
        "BOOLEAN - shartli holatlarni saqlash uchun ishlatiladi.",
      ],
    },
    {
      type: "code",
      title: "3. CREATE TABLE (Jadval yaratish)",
      text: "Yangi jadval yaratish uchun CREATE TABLE buyrug'idan foydalaniladi. Har bir column nomi va data type ko'rsatiladi.",
      code: `CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    age INT
);`,
    },
    {
      type: "code",
      title: "4. INSERT INTO (Maʼlumot qoʻshish)",
      text: "Jadvalga yangi ma'lumot qo'shish uchun INSERT INTO buyrug'idan foydalaniladi (INSERT = Create).",
      code: `-- Bitta row qo'shish
INSERT INTO users (name, age)
VALUES ('Ali', 22);

-- Bir nechta row qo'shish
INSERT INTO users (name, age)
VALUES
('Ali', 22),
('Vali', 25),
('Hasan', 19);`,
    },
    {
      type: "code",
      title: "5. SELECT (Maʼlumotlarni oʻqish)",
      text: "SELECT buyrug'i jadvaldan ma'lumot o'qish uchun ishlatiladi (SELECT = Read).",
      code: `-- Barcha columnlarni olish
SELECT * FROM users;

-- Aniq columnlarni olish
SELECT name, age FROM users;`,
    },
    {
      type: "code",
      title: "6. WHERE (Filtrlash)",
      text: "WHERE sharti kerakli ma'lumotlarni filtrlash uchun ishlatiladi. Faqat shartga mos row'lar qaytariladi.",
      code: `-- Tenglik sharti
SELECT * FROM users WHERE age = 22;

-- Katta / Kichik
SELECT * FROM users WHERE age > 20;
SELECT * FROM users WHERE age < 20;

-- Matn bo'yicha filtrlash
SELECT * FROM users WHERE name = 'Ali';`,
    },
    {
      type: "code",
      title: "7. UPDATE (Maʼlumotni oʻzgartirish)",
      text: "Mavjud row'dagi qiymatni o'zgartirish uchun UPDATE buyrug'idan foydalaniladi. Diqqat: WHERE shartisiz yozilsa, barcha qatorlar o'zgarib ketadi!",
      code: `UPDATE users
SET age = 23
WHERE id = 1;`,
    },
    {
      type: "code",
      title: "8. DELETE (Row oʻchirish)",
      text: "Jadvaldan row o'chirish uchun DELETE buyrug'idan foydalaniladi. WHERE shartisiz butun jadval tozalanadi!",
      code: `DELETE FROM users
WHERE id = 3;`,
    },
    {
      type: "code",
      title: "9. ALTER TABLE (Strukturani oʻzgartirish)",
      text: "ALTER TABLE jadval tuzilmasini o'zgartirish uchun ishlatiladi - yangi column qo'shish yoki o'chirish mumkin.",
      code: `-- Column qo'shish
ALTER TABLE users ADD email VARCHAR(100);

-- Column o'chirish
ALTER TABLE users DROP COLUMN email;`,
    },
    {
      type: "code",
      title: "10. Books Table Full CRUD Amaliyot",
      text: "Barcha CRUD operatsiyalarni books jadvali misolida ko'ramiz:",
      code: `CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100),
    author VARCHAR(100),
    pages INT,
    genre VARCHAR(50)
);

-- INSERT (Create)
INSERT INTO books (title, author, pages, genre)
VALUES ('React', 'Ali', 300, 'Programming');

-- SELECT (Read)
SELECT * FROM books;

-- UPDATE (Update)
UPDATE books SET pages = 350 WHERE id = 1;

-- DELETE (Delete)
DELETE FROM books WHERE id = 1;

-- ALTER TABLE (Structure)
ALTER TABLE books ADD published_year INT;`,
    },
    {
      type: "tasks",
      title: "11. Amaliyot Topshiriqlari",
      tasks: [
        "users jadvalini yarating va unga 3 ta talaba qo'shing.",
        "Faqat yoshi 20 dan katta bo'lgan talabalarni SELECT yordamida o'qing.",
        "Talabaning yoshini UPDATE yordamida o'zgartiring.",
        "books jadvaliga yangi ustun qo'shib, ma'lumotlarni sinab ko'ring.",
      ],
    },
  ],
};
