export const postgresCrudData = {
  id: 'postgres-crud',
  title: '3. SQL CRUD Amallari',
  heading: 'SQL CRUD Amallari',
  subheading: "CREATE, INSERT, SELECT, UPDATE va DELETE yordamida ma'lumotlar bilan ishlash.",
  sections: [
    {
      type: 'comparison',
      title: '1. CRUD nima?',
      text: "CRUD — Create, Read, Update, Delete so'zlarining qisqartmasi. Har qanday ma'lumotlar bazasi bilan ishlash shu to'rt amalga asoslanadi.",
      cards: [
        { title: 'Create', subtitle: 'INSERT', desc: "Yangi yozuv qo'shish." },
        { title: 'Read', subtitle: 'SELECT', desc: "Mavjud ma'lumotlarni o'qish." },
        { title: 'Update', subtitle: 'UPDATE', desc: "Yozuvdagi ma'lumotni o'zgartirish." },
        { title: 'Delete', subtitle: 'DELETE', desc: "Yozuvni bazadan o'chirish." }
      ],
      actionsTitle: 'Asosiy SQL buyruqlari:',
      actions: [
        "INSERT INTO — yangi qator qo'shadi.",
        "SELECT — kerakli ma'lumotni tanlab oladi.",
        "UPDATE — mavjud qatorni o'zgartiradi.",
        "DELETE — qatorni o'chiradi."
      ]
    },
    {
      type: 'code',
      title: '2. Create — INSERT',
      text: "Yangi yozuv qo'shish uchun INSERT INTO ishlatiladi. Ustunlar va qiymatlar bir-biriga mos bo'lishi kerak.",
      code: `INSERT INTO students (name, age, email)
VALUES ('Ali', 22, 'ali@mail.com');

-- Bir vaqtda bir nechta yozuv
INSERT INTO students (name, age, email)
VALUES
  ('Vali', 20, 'vali@mail.com'),
  ('Sami', 25, 'sami@mail.com');`
    },
    {
      type: 'code',
      title: '3. Read — SELECT',
      text: "SELECT yordamida ma'lumotni o'qiymiz. WHERE shartni, ORDER BY tartibni, LIMIT esa qatorlar sonini belgilaydi.",
      code: `-- Barcha yozuvlar
SELECT * FROM students;

-- Shart bo'yicha
SELECT name, age FROM students
WHERE age > 21
ORDER BY age DESC
LIMIT 10;`
    },
    {
      type: 'code',
      title: "4. Update — o'zgartirish",
      text: "UPDATE mavjud yozuvni o'zgartiradi. WHERE yozmasangiz, jadvaldagi barcha qatorlar o'zgarib ketadi — ehtiyot bo'ling!",
      code: `UPDATE students
SET age = 23, email = 'ali.new@mail.com'
WHERE id = 1;`
    },
    {
      type: 'rule',
      title: "5. Delete — o'chirish",
      points: [
        "DELETE FROM jadvaldan qatorlarni o'chiradi.",
        "WHERE sharti yozilmasa, jadvaldagi barcha yozuvlar o'chib ketadi.",
        "O'chirishdan oldin SELECT bilan tekshirib olish foydali."
      ],
      rule: "Qoida: UPDATE va DELETE da har doim WHERE shartini yozing, aks holda butun jadvalga ta'sir qiladi."
    },
    {
      type: 'code',
      code: `DELETE FROM students
WHERE id = 1;`,
      title: "6. DELETE misoli"
    },
    {
      type: 'list',
      title: '7. Asosiy ma\'lumot turlari',
      text: "PostgreSQL keng tarqalgan ma'lumot turlarini qo'llab-quvvatlaydi:",
      points: [
        'INT / SERIAL: Butun sonlar, SERIAL avtomatik oshib boruvchi ID.',
        'VARCHAR(n) / TEXT: Matnlar.',
        'BOOLEAN: true yoki false qiymat.',
        'NUMERIC / DECIMAL: Aniq kasr sonlar (pul hisoblari uchun).',
        'TIMESTAMP / DATE: Sana va vaqt.',
        'JSONB: JSON ko\'rinishidagi ma\'lumot.'
      ]
    },
    {
      type: 'tasks',
      title: '8. Amaliyot Topshiriqlari',
      tasks: [
        "students jadvaliga 3 ta yangi yozuv qo'shing.",
        "age 20 dan katta talabalarni o'sish tartibida chiqaring.",
        "Bitta talabaning email manzilini yangilang.",
        "Belgilangan id bo'yicha bitta yozuvni o'chiring."
      ]
    }
  ]
};
