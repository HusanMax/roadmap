export const postgresRelationsData = {
  id: 'postgres-relations',
  title: "4. Kalitlar va JOIN'lar",
  heading: "Kalitlar, Cheklovlar va JOIN'lar",
  subheading: "PRIMARY KEY, FOREIGN KEY va jadvallarni JOIN yordamida birlashtirish.",
  sections: [
    {
      type: 'comparison',
      title: '1. Kalit turlari',
      text: "Kalitlar jadvaldagi yozuvlarni noyob aniqlash va turli jadvallarni bog'lash uchun xizmat qiladi.",
      cards: [
        { title: 'PRIMARY KEY', subtitle: 'Birlamchi kalit', desc: "Har bir qatorni noyob aniqlaydi, NULL bo'la olmaydi." },
        { title: 'FOREIGN KEY', subtitle: 'Tashqi kalit', desc: "Boshqa jadvalning birlamchi kalitiga havola qiladi." },
        { title: 'UNIQUE', subtitle: 'Noyob qiymat', desc: "Ustundagi qiymatlar takrorlanmasligini ta'minlaydi." },
        { title: 'CHECK', subtitle: 'Shart', desc: "Qiymat ma'lum bir shartga mos kelishini talab qiladi." }
      ],
      actionsTitle: 'Munosabat turlari:',
      actions: [
        "One-to-Many: Bitta kursga ko'p talaba bog'lanadi.",
        "One-to-One: Bitta foydalanuvchi uchun bitta profil.",
        "Many-to-Many: Talabalar va kurslar o'rtasidagi munosabat."
      ]
    },
    {
      type: 'code',
      title: '2. Foreign Key bilan jadval',
      text: "Bog'liq jadvalda FOREIGN KEY boshqa jadvaldagi yozuvga havola qiladi.",
      code: `CREATE TABLE courses (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100) NOT NULL
);

CREATE TABLE enrollments (
  id SERIAL PRIMARY KEY,
  student_id INT REFERENCES students(id) ON DELETE CASCADE,
  course_id INT REFERENCES courses(id),
  enrolled_at TIMESTAMP DEFAULT NOW()
);`
    },
    {
      type: 'comparison',
      title: "3. JOIN nima?",
      text: "JOIN ikki yoki undan ortiq jadvaldagi ma'lumotlarni umumiy ustun orqali bog'lab, bitta natija to'plamini qaytaradi.",
      cards: [
        { title: 'INNER JOIN', subtitle: 'Umumiy qism', desc: "Faqat ikkala jadvalda mos keladigan qatorlarni qaytaradi." },
        { title: 'LEFT JOIN', subtitle: "Chapdagi hammasi", desc: "Chap jadvaldagi barcha qatorlarni, o'ngdan mos kelganini qo'shadi." },
        { title: 'RIGHT JOIN', subtitle: "O'ngdagi hammasi", desc: "O'ng jadvaldagi barcha qatorlarni qaytaradi." }
      ]
    },
    {
      type: 'code',
      title: '4. JOIN misoli',
      text: "Quyidagi so'rov talaba va uning kurs nomini birga chiqaradi.",
      code: `SELECT s.name, c.title
FROM enrollments e
INNER JOIN students s ON s.id = e.student_id
INNER JOIN courses c ON c.id = e.course_id
ORDER BY s.name;

-- LEFT JOIN misoli
SELECT s.name, c.title
FROM students s
LEFT JOIN enrollments e ON e.student_id = s.id
LEFT JOIN courses c ON c.id = e.course_id;`
    },
    {
      type: 'list',
      title: "5. Munosabatlarni loyihalash",
      text: "Many-to-Many munosabat uchun oraliq (junction) jadval kerak bo'ladi:",
      points: [
        "One-to-Many: boshqa jadvalda foreign key ustuni bo'ladi.",
        "Many-to-Many: ikkita foreign key saqlovchi oraliq jadval yaratiladi.",
        "One-to-One: foreign key ustuniga UNIQUE qo'yiladi.",
        "ON DELETE CASCADE: ota yozuv o'chsa, bog'liq yozuvlar ham o'chadi."
      ]
    },
    {
      type: 'tasks',
      title: '6. Amaliyot Topshiriqlari',
      tasks: [
        "courses va enrollments jadvallarini foreign key bilan yarating.",
        "INNER JOIN yordamida talaba va kurs nomini chiqaring.",
        "LEFT JOIN bilan kursga yozilmagan talabalarni ham toping.",
        "ON DELETE CASCADE qanday ishlashini o'chirish orqali sinab ko'ring."
      ]
    }
  ]
};
