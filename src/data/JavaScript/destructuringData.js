export const destructuringData = {
  id: 'destructuring-date-json',
  title: '8. Destructuring, Date va JSON',
  heading: 'Destructuring: Qiymatlarni Oson Ajratish',
  subheading: 'Murakkab ma\'lumotlar strukturasidan qiymatlarni oson ajratib olish, Date obyektlari va JSON formatlari.',
  sections: [
    {
      type: 'list',
      title: '1. Destructuring Nima?',
      text: 'Destructuring - bu JavaScriptda murakkab ma\'lumotlar strukturasidan qiymatlarni oson ajratib olish usulidir. Destructuring esa bir qatorda bir nechta qiymatni ajratib olish imkonini beradi va kodni aniqroq, o\'qishga osonroq qiladi.',
      points: [
        'Destructuring bo\'lmagan holda har bir element alohida qatorda o\'zgaruvchiga olinadi.',
        'Destructuring bilan barcha elementlar bitta qatorda ajratib olinadi.',
        'Real-world misol: API orqali olingan ma\'lumotlarni foydalanuvchi profiliga joylashtirishda, har bir maydonni bitta qatorda ajratib olish juda qulay.'
      ]
    },
    {
      type: 'code',
      title: '2. Array Destructuring: Massivdan Qiymatlarni Ajratish',
      text: 'Array destructuring massiv elementlarini ularning tartibiga ko\'ra ajratib olishni anglatadi. Massivdagi birinchi element birinchi o\'zgaruvchiga, ikkinchi element ikkinchi o\'zgaruvchiga va hokazo o\'tadi. Agar ajratish uchun o\'zgaruvchilar soni massiv elementlaridan kam bo\'lsa, qolgan elementlar hisobga olinmaydi. Aksincha, ko\'p bo\'lsa, qo\'shimcha o\'zgaruvchilar undefined qiymatga ega bo\'ladi.',
      code: 'const numbers = [1, 2, 3, 4, 5];\nconst [first, second, ...rest] = numbers;\nconsole.log(first); // 1\nconsole.log(second); // 2\nconsole.log(rest); // [3, 4, 5]\n\nconst [x, z] = [10, 20, 30];\nconsole.log(x); // 10\nconsole.log(z); // 30\n\nconst [a, b, c = 0] = [1, 2];\nconsole.log(c); // 0 (standart qiymat)'
    },
    {
      type: 'code',
      title: '3. Object Destructuring: Ob\'yektdan Qiymatlarni Ajratish',
      text: 'Object destructuring ob\'ekt xususiyatlarini ularning kalitlari orqali ajratib olishni anglatadi. Bu array destructuringdan farqli o\'laroq tartibga emas, balki kalitga ko\'ra ishlaydi. Shuning uchun ob\'ektdan ajratishda kalitlar bir xil bo\'lishi shart, lekin tartib muhim emas. Ob\'ekt ajratishda ham standart qiymatlarni belgilash mumkin.',
      code: 'const user = {\n  name: "John",\n  email: "john@email.com",\n  age: 25\n};\nconst { name, email, age } = user;\nconsole.log(name); // "John"\n\n// Nomi o\'zgartirish va standart qiymat:\nconst { name: userName, age = 18 } = user;\nconsole.log(userName); // "John"\nconsole.log(age); // 25\n\n// Kalit mavjud emas - standart qiymat:\nconst { country = "Unknown" } = user;\nconsole.log(country); // "Unknown"'
    },
    {
      type: 'code',
      title: '4. Destructuring Funktsiya Parametrlarida',
      text: 'Modern JavaScriptda destructuring funksiya parametrlarida keng qo\'llaniladi. Bu usul parametrlar ro\'yxatini qisqartirish va ularni aniqroq qilish uchun juda qulay. Ayrim parametrlar kerakli bo\'lsa, boshqalari esa ixtiyoriy bo\'lganda, ob\'ekt parametrini destructuring qilish yaxshi yechim hisoblanadi.',
      code: 'function createUser({ name, email, age = 18, active = true }) {\n  return {\n    name,\n    email,\n    age,\n    active,\n    createdAt: new Date()\n  };\n}\n\n// TO\'G\'RI - ob\'ekt uzatilgan\ncreateUser({\n  name: "John",\n  email: "john@email.com",\n  age: 25\n});'
    },
    {
      type: 'code',
      title: '5. Date Ob\'yekti: Vaqt va Sana',
      text: 'JavaScriptda Date ob\'yekti sanalar va vaqtlar bilan ishlash uchun mo\'ljallangan. Date ob\'yekti millisekundlar sonini saqlaydi - 1970-yil 1-yanvar 00:00:00 UTC dan boshlab (Unix timestamp). Bu hisoblash uchun qulay, lekin insonlar uchun o\'qish qiyin bo\'ladi, shuning uchun Date ob\'yekti metodlar orqali o\'qish va formatlash uchun mo\'ljallangan.',
      code: 'const now = new Date();\nconsole.log(now); // Hozirgi sana/vaqt\n\nconst specificDate = new Date("2024-01-01");\nconsole.log(specificDate);\n\nconst fromParts = new Date(2024, 0, 1);\nconsole.log(fromParts);\n\n// Timestamp:\nconst timestamp = new Date().getTime();\nconsole.log(timestamp); // Millisekundlar'
    },
    {
      type: 'code',
      title: '6. Date Metodlari: Sanani O\'qish',
      text: 'Date ob\'yekti sanani turli qismlarini olish uchun ko\'plab metodlarga ega. getgetFullYear() to\'liq yilni, getMonth() oyni 0-11 oralig\'ida (0 - Yanvar, 11 - Dekabr), getDate() kunni (1-31), getDay() hafta kunini (0-6, 0 - Yakshanba) qaytaradi.',
      code: 'const date = new Date("2024-01-15");\nconst year = date.getFullYear(); // 2024\nconst month = date.getMonth(); // 0 (Yanvar)\nconst day = date.getDate(); // 15\nconst weekday = date.getDay(); // 1 (Dushanba)\n\n// To\'g\'ri oy hisoblash uchun 1 qo\'shiladi:\nconst actualMonth = date.getMonth() + 1; // 1'
    },
    {
      type: 'list',
      title: '7. JSON: Ma\'lumotlar Formati',
      text: 'JSON (JavaScript Object Notation) - bu ma\'lumotlarni uzatish va saqlash uchun ishlatiladigan matn formati. U JavaScript ob\'ektlariga o\'xshaydi, lekin aslida JavaScript emas - bu mustaqil ma\'lumot formatidir.',
      points: [
        'JSON asosan API orqali ma\'lumot uzatish, serverdan ma\'lumot olish va saqlash, localStorage yoki sessionStorage da ma\'lumot saqlashda ishlatiladi.',
        'JSON ma\'lumotlari faqat matn, son, mantiqiy qiymat, null, massiv va ob\'ekt (kalit-qiymat juftliklari) bo\'lishi mumkin. Funksiyalar, undefined yoki maxsus ob\'ektlar (Date, RegExp) JSONga o\'girilmaydi.',
        'JSON syntaxi juda qattiq - noto\'g\'ri belgi yoki qo\'shimcha vergul xatoga olib keladi.'
      ]
    },
    {
      type: 'code',
      title: '8. JSON.parse() va JSON.stringify()',
      text: 'JSON.stringify() - bu ob\'ektni yoki massivni JSON matniga (string) aylantirish funksiyasi. JSON.parse() - bu aksincha, JSON matnini JavaScript ob\'ektiga yoki massiviga aylantirish funksiyasi.',
      code: 'const user = {\n  name: "John",\n  age: 25,\n  active: true,\n  hobbies: ["reading", "swimming"]\n};\nconst jsonString = JSON.stringify(user);\nconsole.log(jsonString);\n\nconst jsonParsedString = \'{"name":"John","age":25,"active":true}\';\nconst parsedUser = JSON.parse(jsonParsedString);\nconsole.log(parsedUser.name); // "John"'
    },
    {
      type: 'tasks',
      title: '9. Amaliyot Topshiriqlari',
      tasks: [
        'Array Destructuring: Berilgan massivdan birinchi, ikkinchi va uchinchi elementlarni ajratib oling va konsolga chop eting.',
        'Object Destructuring: Berilgan ob\'ektdan name, email va age xususiyatlarini destructuring orqali ajratib oling.',
        'Object Destructuring O\'zgaruvchi Nomini O\'zgartirish: email xususiyatini userEmail nomi bilan ajratib oling.',
        'Destructuring Funktsiya Parametrlarida: getUserInfo funksiyasini yarating va destructuring orqali name va age parametrlarini qabul qiling.',
        'Date Ob\'yekti Yaratish: Hozirgi vaqt va sanani ifodalovchi yangi Date obyektini yarating.',
        'Date Metodlari: 2024-yil 1-yanvar sanasi uchun Date obyekti yarating va yil, oy, kun qismlarini oling (oyga 1 qo\'shishni unutmang).',
        'Sanalarni Solishtirish: Ikki xil sanani yaratib, ularni getTime() orqali solishtiring va qaysi biri keyinroq ekanini aniqlang.',
        'JSON.stringify(): product ob\'ektini JSON matniga o\'giring.',
        'JSON.parse(): berilgan JSON matnini JavaScript obyektiga o\'giring va name xususiyatini chop eting.'
      ]
    }
  ]
};