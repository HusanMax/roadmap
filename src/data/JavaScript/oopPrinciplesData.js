export const oopPrinciplesData = {
  id: 'oop-principles',
  title: "10. OOP Tamoyillari va Ilg'or Konsepsiyalar",
  heading: 'OOP: Principles, Static Methods, instanceof, and Mixins',
  subheading: 'Encapsulation, Abstraction, Inheritance, Polymorphism, Static Methods, instanceof va Mixins tushunchalari.',
  sections: [
    {
      type: 'code',
      title: '1. Object-Oriented Programming Asoslarini Eslatib O\'tamiz',
      text: 'Klasslar va obyektlar yordamida dastur funksionalligini tashkil qilish.',
      code: 'class User {\n  constructor(name, email) {\n    this.name = name;\n    this.email = email;\n  }\n  login() {\n    console.log(`${this.name} tizimga kirdi`);\n  }\n}\nconst user = new User(\'Ali\', \'ali@example.com\');\nuser.login(); // Ali tizimga kirdi'
    },
    {
      type: 'list',
      title: '2. Encapsulation: Ma\'lumotlarni Himoya Qilish',
      text: 'Encapsulation - bu ma\'lumotlarni to\'g\'ridan-to\'g\'ri o\'zgartirishni oldini oluvchi va ma\'lumotlar butunligini saqlovchi usul.',
      points: [
        'Nima uchun kerak: Ma\'lumotlarni to\'g\'ridan-to\'g\'ri o\'zgartirishni oldini oladi va butunligini saqlaydi.',
        'Qanday amalga oshiriladi: Private fieldlar (#) va ular bilan ishlash uchun maxsus metodlar.',
        'Amaliy misol: BankAccount yoki User Account - balans yoki parolga nazorat o\'rnatish.'
      ]
    },
    {
      type: 'code',
      title: '3. Encapsulation Misoli (BankAccount)',
      text: 'BankAccount klassi yordamida private field (#balance) ishlatish va ma\'lumotlarni himoya qilish.',
      code: 'class BankAccount {\n  #balance = 0;\n  deposit(amount) {\n    this.#balance += amount;\n  }\n  getBalance() {\n    return this.#balance;\n  }\n}\nconst account = new BankAccount();\naccount.deposit(100);\nconsole.log(account.getBalance());'
    },
    {
      type: 'code',
      title: '4. Abstraction: Murakkablikni Yashirish',
      text: 'Abstraction - bu murakkab mantiqni soddaroq metodlar orqali yashirish. Dasturchi ko\'plab bosqichlarni bilmasdan, bitta sodda metodni chaqiradi.',
      code: 'class PaymentService {\n  processPayment(amount) {\n    this.validate();\n    this.sendReceipt();\n    console.log("Payment successful:", amount);\n  }\n  validate() {}\n  sendReceipt() {}\n}\nconst payment = new PaymentService();\npayment.processPayment(500);'
    },
    {
      type: 'list',
      title: '5. Inheritance: Meros Olish',
      text: 'Inheritance - bu bir klass boshqa klassdan xususiyatlari va metodlarini meros qilib olishi. Bu qayta yozishni kamaytiradi va umumiy funksionallikni bitta joyda saqlash imkonini beradi.',
      points: [
        'Parent Class: User klassi - asosiy funksionallikni taqdim etadi.',
        'extends kalit so\'zi: Child klassi parent klassdan meros oladi.',
        'Child Class: Admin klassi - qo\'shimcha funksionallikni bajaradi.'
      ]
    },
    {
      type: 'code',
      title: '6. Inheritance Misoli (User va Admin)',
      text: 'Parent va child klasslar o\'rtasidagi merosxo\'rlik amalda.',
      code: 'class User {\n  constructor(name) {\n    this.name = name;\n  }\n  login() {\n    console.log(this.name + " logged in");\n  }\n}\nclass Admin extends User {\n  deleteUser() {\n    console.log("User deleted");\n  }\n}\nconst admin = new Admin("Ali");\nadmin.login();\nadmin.deleteUser();'
    },
    {
      type: 'code',
      title: '7. Polymorphism: Bir xil metod, turli xil harakat',
      text: 'Polymorphism - bu bir xil metod nomi turli klasslarda turlicha ishlashi. Har bir xabar turi o\'ziga xos usulda yuboriladi, lekin barchasi send() metodini chaqiradi.',
      code: 'class Notification {\n  send() {\n    console.log("Message sent");\n  }\n}\nclass EmailNotification extends Notification {\n  send() {\n    console.log("Email sent");\n  }\n}'
    },
    {
      type: 'code',
      title: '8. Static Methods: Klassga tegishli metodlar',
      text: 'Static metodlar klass nomi orqali chaqiriladi, ular uchun obyekt yaratish shart emas. Utils, calculator, validation va auth uchun ishlatiladi.',
      code: 'class PriceCalculator {\n  static discount(price, percent) {\n    return price - (price * percent / 100);\n  }\n}\nconst finalPrice = PriceCalculator.discount(1000, 20);\nconsole.log(finalPrice); // 800'
    },
    {
      type: 'code',
      title: '9. instanceof Operator: Obyektni tekshirish',
      text: 'instanceof operatori yordamida dasturchi obyekt qaysi klassdan yaratilganligini aniqlay oladi. To\'g\'ri bo\'lsa true, noto\'g\'ri bo\'lsa false qaytaradi.',
      code: 'class Product {\n  constructor(name) {\n    this.name = name;\n  }\n}\nconst product = new Product("Laptop");\nconsole.log(product instanceof Product); // true'
    },
    {
      type: 'code',
      title: '10. Mixins: Klasslar o\'rtasida xatti-harakatni ulashish',
      text: 'Mixins - bu klasslarga qo\'shimcha xatti-harakatlarni merosdan foydalanmasdan qo\'shish usuli. Object.assign() yordamida metodlar prototipga nusxalanadi.',
      code: 'const Logger = {\n  log(msg) {\n    console.log(msg);\n  }\n}\nclass UserService {\n  addUser(name) {\n    this.log("User added: " + name);\n  }\n}\nObject.assign(UserService.prototype, Logger);\nconst service = new UserService();\nservice.addUser("Ali");'
    },
    {
      type: 'challenge',
      lang: 'js',
      title: "Mini vazifa: hayvonlar merosxo'rligi",
      story: "Hayvonxona dasturida barcha hayvonlar umumiy Hayvon klassidan meros oladi, lekin har biri o'zicha ovoz chiqaradi.",
      task: 'Mushuk klassini Hayvon dan extends bilan yarating va ovoz() metodini "Miyov" qaytaradigan qilib qayta yozing (override).',
      starter: `class Hayvon {
  constructor(nom) {
    this.nom = nom;
  }
  ovoz() {
    return "Noma'lum ovoz";
  }
  tanishtir() {
    return this.nom + ": " + this.ovoz();
  }
}

// Mushuk klassini yozing

console.log(new Hayvon("Hayvon").tanishtir());`,
      tests: [
        { name: 'Mushuk Hayvon dan meros oladi', expr: "new Mushuk('Barsik') instanceof Hayvon" },
        { name: "ovoz() 'Miyov' qaytaradi", expr: "new Mushuk('Barsik').ovoz() === 'Miyov'" },
        { name: "tanishtir() → 'Barsik: Miyov'", expr: "new Mushuk('Barsik').tanishtir() === 'Barsik: Miyov'" }
      ],
      hint: "class Mushuk extends Hayvon { ovoz() { return 'Miyov'; } }",
      solution: `class Mushuk extends Hayvon {
  ovoz() {
    return "Miyov";
  }
}`
    },
    {
      type: 'tasks',
      title: '11. Amaliy mashqlar',
      tasks: [
        'Product klassi yarating: name va price fieldlari, showInfo() metodi va bitta private field (#description).',
        'Admin klassi yarating, User dan meros oladigan: deleteUser() metodi qo\'shing.',
        'PriceHelper klassi yarating va unga static metod qo\'shing: calculateDiscount(price, percent).',
        'instanceof operatori yordamida obyektni Product ekanligini tekshiring.',
        'Logger mixin yarating va uni UserService yoki boshqa klassga qo\'shing.'
      ]
    }
  ]
};