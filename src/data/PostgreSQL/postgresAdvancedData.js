export const postgresAdvancedData = {
  id: 'postgres-advanced',
  title: '5. Advanced SQL',
  heading: 'Advanced SQL: Aggregate, Index va Transaction',
  subheading: "GROUP BY, indekslar va tranzaksiyalar yordamida bazani samarali boshqarish.",
  sections: [
    {
      type: 'comparison',
      title: '1. Aggregate funksiyalar',
      text: "Aggregate funksiyalar bir nechta qator ustida hisob-kitob qilib, bitta natija qaytaradi. GROUP BY bilan birga ishlatiladi.",
      cards: [
        { title: 'COUNT', subtitle: 'Sanoq', desc: "Qatorlar sonini hisoblaydi." },
        { title: 'SUM / AVG', subtitle: "Yig'indi/O'rtacha", desc: "Ustundagi qiymatlar yig'indisi va o'rtachasini topadi." },
        { title: 'MIN / MAX', subtitle: 'Eng kichik/katta', desc: "Ustundagi eng kichik va eng katta qiymatni topadi." }
      ],
      actionsTitle: 'Foydalanish:',
      actions: [
        "GROUP BY ustun bo'yicha guruhlaydi.",
        "HAVING guruhlangan natijani filtrlaydi (WHERE ning guruh versiyasi).",
        "Aggregate funksiyalar SELECT ichida ishlatiladi."
      ]
    },
    {
      type: 'code',
      title: '2. GROUP BY va HAVING',
      text: "Quyidagi so'rov har bir kursga nechta talaba yozilganini hisoblaydi.",
      code: `SELECT c.title, COUNT(e.student_id) AS student_count
FROM courses c
LEFT JOIN enrollments e ON e.course_id = c.id
GROUP BY c.title
HAVING COUNT(e.student_id) > 1
ORDER BY student_count DESC;`
    },
    {
      type: 'code',
      title: '3. Indekslar',
      text: "Indeks qidiruvni tezlashtiradi, lekin yozish (INSERT/UPDATE) tezligini biroz pasaytiradi. Ko'p qidiriladigan ustunlarga qo'yiladi.",
      code: `CREATE INDEX idx_students_email
ON students (email);

-- Unikal indeks
CREATE UNIQUE INDEX idx_students_email_unique
ON students (email);`
    },
    {
      type: 'code',
      title: '4. Tranzaksiyalar',
      text: "Tranzaksiya bir nechta amalni bitta yaxlit operatsiya sifatida bajaradi: hammasi muvaffaqiyatli yoki hammasi bekor bo'ladi.",
      code: `BEGIN;

UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;

-- Xato bo'lsa:
-- ROLLBACK;

COMMIT;`
    },
    {
      type: 'rule',
      title: '5. Cheklovlar (Constraints)',
      points: [
        "NOT NULL — ustun bo'sh bo'lishi mumkin emas.",
        "UNIQUE — qiymatlar takrorlanmaydi.",
        "CHECK — qiymat shartga mos bo'lishi kerak (masalan, age >= 0).",
        "FOREIGN KEY — bog'langan jadvaldagi yozuv bo'lishi shart.",
        "DEFAULT — qiymat berilmasa, standart qiymat qo'yiladi."
      ],
      rule: "Qoida: Indekslarni faqat ko'p ishlatiladigan WHERE va JOIN ustunlariga qo'ying, aks holda xotira behuda sarflanadi."
    },
    {
      type: 'tasks',
      title: '6. Amaliyot Topshiriqlari',
      tasks: [
        "Har bir kursdagi talabalar sonini COUNT bilan chiqaring.",
        "students(email) ustuniga indeks yarating.",
        "Ikki jadval o'rtasida pul o'tkazish tranzaksiyasini yozing.",
        "age >= 0 CHECK cheklovi bo'lgan jadval yarating."
      ]
    }
  ]
};
