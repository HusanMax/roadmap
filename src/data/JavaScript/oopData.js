export const oopData = {
  id: 'oop',
  title: '9. Object-Oriented Programming (OOP)',
  heading: 'Object-Oriented Programming (OOP) ga kirish',
  subheading: 'Object-Oriented Programming (OOP) - bu dasturlash usuli boʻlib, unda dastur obyektlar yordamida tashkil qilinadi.',
  sections: [
    {
      type: 'code',
      title: '1. Kirish va Asosiy Misol',
      text: 'Obyekt ichida ma\'lumotlar (properties) va ular bilan ishlaydigan funksiyalar (methods) birga saqlanadi. Bu usul kodni tartibli, tushunarli va qayta ishlatishga qulay qiladi.',
      code: 'class Car {\n  constructor(brand, year) {\n    this.brand = brand;\n    this.year = year;\n  }\n}\nconst myCar = new Car("Toyota", 2020);'
    },
    {
      type: 'list',
      title: '2. Nima uchun OOP kerak?',
      text: 'OOP dasturlashda bir nechta muhim afzalliklarni taqdim etadi:',
      points: [
        'Tartib: Katta dasturlarda kodni tashkil qilish va boshqarish.',
        'Qayta ishlatish: Bir xil kodni turli joylarda qayta ishlatish imkoniyati.',
        'O\'qish qulayligi: Kodni tushunish va saqlab turishni osonlashtirish.',
        'Kengayish: Yangi funksiyalarni qo\'shishni soddalashtirish.'
      ]
    },
    {
      type: 'code',
      title: '3. Obyekt Tushunchasi',
      text: 'JavaScript da obyekt - bu ma\'lumotlar (xususiyatlar) va funktsiyalar (metodlar) birligi. Xususiyatlar obyektning ma\'lumotlarini, metodlar esa uning xatti-harakatlarini ifodalaydi.',
      code: 'const person = {\n  name: "Ali",\n  age: 25,\n  sayHello: function() {\n    console.log("Salom, men " + this.name);\n  }\n};\nperson.sayHello(); // "Salom, men Ali"'
    },
    {
      type: 'code',
      title: '4. Class Tushunchasi va new Operatori',
      text: 'Class - bu obyektlar yaratish uchun qurilma (blueprint). U obyektlarning umumiy tuzilishini va xatti-harakatlarini belgilaydi. new kalit so\'zi yangi obyekt yaratadi va class constructorini chaqiradi.',
      code: 'class Car {\n  constructor(brand, year) {\n    this.brand = brand;\n    this.year = year;\n  }\n}\nconst car1 = new Car("Toyota", 2020);\nconst car2 = new Car("Honda", 2021);\nconst car3 = new Car("Ford", 2022);'
    },
    {
      type: 'code',
      title: '5. Constructor va this Kalit So\'zi',
      text: 'Constructor - bu class ichidagi maxsus metod bo\'lib, yangi obyekt yaratilganda avtomatik ravishda ishga tushadi. this kalit so\'zi class ichida joriy obyekt instance\'iga havola beradi.',
      code: 'class Car {\n  constructor(brand, year) {\n    this.brand = brand;\n    this.year = year;\n    this.mileage = 0; // boshlang\'ich qiymat\n  }\n  showInfo() {\n    console.log(this.brand + " " + this.year);\n  }\n}\nconst myCar = new Car("Toyota", 2020);\nmyCar.showInfo(); // "Toyota 2020"'
    },
    {
      type: 'code',
      title: '6. Class Metodlari',
      text: 'Class metodlari - bu obyektlarning xatti-harakatlarini ifodalovchi funktsiyalar. Ular obyektga nima qilishini o\'rgatadi.',
      code: 'class Car {\n  constructor(brand, year) {\n    this.brand = brand;\n    this.year = year;\n  }\n  start() {\n    console.log(this.brand + " moshinasi ishga tushdi");\n  }\n  showAge() {\n    const currentYear = 2024;\n    console.log(currentYear - this.year + " yoshda");\n  }\n}\nconst myCar = new Car("Toyota", 2020);\nmyCar.start(); // "Toyota moshinasi ishga tushdi"\nmyCar.showAge(); // "4 yoshda"'
    },
    {
      type: 'code',
      title: '7. Real World Misol (Product Class)',
      text: 'Haqiqiy dasturlarda classlar veb-saytlar uchun foydalanuvchilar, mahsulotlar, buyurtmalar kabi obyektlarni ifodalaydi.',
      code: 'class Product {\n  constructor(name, price) {\n    this.name = name;\n    this.price = price;\n    this.discount = 0;\n  }\n  applyDiscount(percentage) {\n    this.discount = percentage;\n    this.price = this.price * (1 - percentage / 100);\n  }\n  showInfo() {\n    console.log(this.name + " $" + this.price);\n  }\n}\nconst laptop = new Product("Laptop", 1000);\nlaptop.applyDiscount(10);\nlaptop.showInfo(); // "Laptop - $900"'
    },
    {
      type: 'code',
      title: '8. Class Expression',
      text: 'Classlarni ifoda (expression) ko\'rinishida ham e\'lon qilish mumkin.',
      code: 'class User {\n  role = "user";\n  constructor(name) {\n    this.name = name;\n  }\n}\nconst u = new User("Ali");\nconsole.log(u.role);'
    },
    {
      type: 'tasks',
      title: '9. Amaliy Mashqlar',
      tasks: [
        'Car class: brand va year xususiyatlari va showInfo() metodi bo\'lgan Car class yarating.',
        'Student class: name va score xususiyatlari va o\'tishni tekshiruvchi metod bo\'lgan Student class yarating.',
        'Product class: name va price xususiyatlari va chegirma qo\'llaydigan metod bo\'lgan Product class yarating.',
        'Ko\'p obyektlar: Bitta classdan ikkita obyekt yarating va ularning ma\'lumotlarini chop eting.',
        'Yangi metod: Mavjud classga yangi metod qo\'shish orqali uni kengaytiring.'
      ]
    }
  ]
};