export const postgresAdvancedData = {
  id: 'postgres-sorting-joins',
  title: '2. Filtrlash, Kalitlar va Joinlar',
  heading: 'PostgreSQL: Saralash, Cheklash, Kalitlar, JOIN va Agregat funksiyalar',
  subheading: "ORDER BY, LIMIT, AND/OR, Primary/Foreign Key, JOIN va GROUP BY yordamida ma'lumotlarni chuqur tahlil qilish.",
  sections: [
    {
      type: 'comparison',
      title: '1. ORDER BY va LIMIT',
      text: "Ma'lumotlarni saralash va natija sonini cheklash uchun ishlatiladi.",
      cards: [
        { title: 'ORDER BY ASC', subtitle: 'Kichikdan kattaga', desc: "Qiymatlarni o'sish tartibida saralaydi (default)." },
        { title: 'ORDER BY DESC', subtitle: 'Kattadan kichikka', desc: "Qiymatlarni kamayish tartibida saralaydi." },
        { title: 'LIMIT n', subtitle: 'Cheklash', desc: "Faqat birinchi n ta qatorni qaytaradi." }
      ],
      actionsTitle: 'Misol:',
      actions: [
        "SELECT * FROM products ORDER BY price DESC;",
        "SELECT * FROM products LIMIT 5;"
      ]
    },
    {
      type: 'comparison',
      title: '2. Ko\'p shartlar: AND va OR',
      text: "Bir nechta shartlar asosida ma'lumotlarni filtrlash.",
      cards: [
        { title: 'AND', subtitle: 'Ikkala shart', desc: "Ikkala shart ham rost bo'lishi shart." },
        { title: 'OR', subtitle: 'Kamida bitta shart', desc: "Shartlardan biri rost bo'lsa kifoya." }
      ],
      actionsTitle: 'Misol:',
      actions: [
        "SELECT * FROM products WHERE price > 1000 AND rating = 5;",
        "SELECT * FROM products WHERE brand = 'Apple' OR brand = 'Samsung';"
      ]
    },
    {
      type: 'code',
      title: '3. LIKE, BETWEEN, IN, IS NULL',
      text: "Maxsus filtrlash operatorlari:",
      code: `-- LIKE: Matn namunasini qidirish
SELECT * FROM products WHERE name LIKE '%Pro%';

-- BETWEEN: Oraliqdagi qiymatlar
SELECT * FROM products WHERE price BETWEEN 500 AND 2000;

-- IN: Ro'yxat bo'yicha qidirish
SELECT * FROM products WHERE brand IN ('Apple', 'Samsung');

-- IS NULL: Bo'sh qiymatlarni topish
SELECT * FROM products WHERE discount IS NULL;`,
      output: `-- Namuna natija (products jadvalidagi ma'lumotga qarab)
-- LIKE '%Pro%'
 id | name         | brand   | price | discount
----+--------------+---------+-------+----------
  1 | iPhone Pro   | Apple   |  1500 |
  4 | MacBook Pro  | Apple   |  2500 |       10
(2 rows)

-- BETWEEN 500 AND 2000
 id | name         | price
----+--------------+-------
  1 | iPhone Pro   |  1500
  2 | Galaxy S     |   900
(2 rows)`
    },
    {
      type: 'code',
      title: '4. Primary Key va Foreign Key',
      text: "Jadvallar o'rtasidagi munosabatlar va bog'liqliklar (One-to-Many).",
      code: `-- Users jadvali
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50)
);

-- Orders jadvali (Foreign Key orqali bog'langan)
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    product VARCHAR(100),
    user_id INT REFERENCES users(id)
);

-- Ma'lumot qo'shish
INSERT INTO users(name) VALUES ('Ali'), ('Vali');
INSERT INTO orders(product, user_id) VALUES ('iPhone', 1), ('MacBook', 1), ('AirPods', 2);`,
      output: `CREATE TABLE
CREATE TABLE
INSERT 0 2
INSERT 0 3`
    },
    {
      type: 'code',
      title: '5. JOIN (Jadvallarni birlashtirish)',
      text: "JOIN ikki yoki undan ortiq jadvalni umumiy ustun (Foreign Key) orqali birlashtiradi.",
      code: `SELECT users.name, orders.product
FROM users
JOIN orders ON users.id = orders.user_id;`,
      output: `  name | product
-------+---------
 Ali   | iPhone
 Ali   | MacBook
 Vali  | AirPods
(3 rows)`
    },
    {
      type: 'comparison',
      title: '6. Agregat funksiyalar (COUNT, SUM, AVG, MAX, MIN)',
      text: "Bir nechta qator ustida hisob-kitob olib borib, bitta yagona qiymat qaytaradi.",
      cards: [
        { title: 'COUNT / SUM', subtitle: 'Sanoq va Yig\'indi', desc: "Qatorlar soni va ustun qiymatlari yig'indisi." },
        { title: 'AVG', subtitle: 'O\'rtacha qiymat', desc: "Ustundagi qiymatlarning o'rtacha arifmetigini topadi." },
        { title: 'MAX / MIN', subtitle: 'Eng katta va kichik', desc: "Eng yuqori va eng past qiymatni aniqlaydi." }
      ],
      actionsTitle: 'Misol:',
      actions: [
        "SELECT COUNT(*) FROM products;",
        "SELECT SUM(price) FROM products;",
        "SELECT MAX(price), MIN(price) FROM products;"
      ]
    },
    {
      type: 'code',
      title: '7. GROUP BY va HAVING',
      text: "GROUP BY ma'lumotlarni guruhlaydi, HAVING esa guruhlangan natijalarni filtrlash uchun ishlatiladi.",
      code: `-- Kategoriya bo'yicha mahsulotlar soni
SELECT category, COUNT(*)
FROM products
GROUP BY category;

-- Kategoriya bo'yicha guruhlarni filtrlash (HAVING)
SELECT category, COUNT(*)
FROM products
GROUP BY category
HAVING COUNT(*) > 2;`,
      output: `-- GROUP BY
 category   | count
------------+-------
 Phone      |     3
 Laptop     |     2
 Accessory  |     4
(3 rows)

-- HAVING COUNT(*) > 2
 category   | count
------------+-------
 Phone      |     3
 Accessory  |     4
(2 rows)`
    },
    {
      type: 'tasks',
      title: '8. Amaliyot Topshiriqlari',
      tasks: [
        "Mahsulotlarni narxi bo'yicha kamayish tartibida (DESC) saralang va faqat 5 tasini oling.",
        "brand IN ('Apple', 'Samsung') yordamida mahsulotlarni tanlang.",
        "users va orders jadvallarini JOIN yordamida birlashtirib chiqaring.",
        "Kategoriyalar bo'yicha mahsulotlar sonini GROUP BY yozib hisoblang va HAVING bilan filtrlang."
      ]
    }
  ]
};