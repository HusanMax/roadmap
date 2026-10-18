export const advancedTypescriptData = {
  id: 'advanced-typescript',
  title: '10. Advanced TypeScript',
  heading: 'Advanced TypeScript',
  subheading: 'Tuple, Type Alias, Literal Types, Enum, Generics, Classes, Access Modifiers va Readonly tushunchalari.',
  sections: [
    {
      type: 'comparison',
      title: '1. Tuple',
      text: 'Tuple array ga o\'xshaydi, lekin elementlar soni va tartibi oldindan belgilanadi. Tartib buzilsa - TypeScript error beradi.',
      cards: [
        { title: 'Tuple', subtitle: 'Tartibli to\'plam', desc: 'Elementlar soni va tartibi qat\'iy belgilanadi.' },
        { title: 'Pasport analogiyasi', desc: 'Name har doim string, Age har doim number bo\'lib tartibi o\'zgarmaydi.' },
        { title: 'Xatoliklar', desc: 'Tartib buzilgan holatda TypeScript tomonidan xatolik beriladi.' }
      ],
      actionsTitle: 'Misol kodi:',
      actions: [
        'let user: [string, number];',
        'user = ["Ali", 22];'
      ]
    },
    {
      type: 'comparison',
      title: '2. Type Alias',
      text: 'Type Alias murakkab type lar uchun qisqa va qayta ishlatiladigan nom yaratadi. Kodni soddalashtiradi va o\'qishni osonlashtiradi.',
      cards: [
        { title: 'Qisqartirish', desc: 'Murakkab type\'larni qisqa va tushunarli nomlash.' },
        { title: 'Qayta ishlatish', desc: 'Loyihaning barcha joylarida qayta qo\'llash imkoniyati.' },
        { title: 'O\'qish qulayligi', desc: 'Kodni yanada tushunarli qilish.' }
      ],
      actionsTitle: 'Misol:',
      actions: [
        'type User = { name: string; age: number };',
        'const user: User = { name: "Ali", age: 22 };'
      ]
    },
    {
      type: 'rule',
      title: '3. Literal Types',
      points: [
        'Literal Type faqat oldindan berilgan aniq qiymatlarni qabul qiladi.',
        'Boshqa qiymat kiritilsa - TypeScript error beradi.'
      ],
      rule: 'Qoida: let role: "admin" | "user"; kabi aniq qiymatlar cheklanishi mumkin.'
    },
    {
      type: 'comparison',
      title: '4. Enum',
      text: 'Enum constant qiymatlar to\'plami hisoblanadi. Typo (imlo) xatolarining oldini oladi va kodni o\'qishni osonlashtiradi.',
      cards: [
        { title: 'Xavfsizlik', desc: 'Typo xatolarining oldini oladi.' },
        { title: 'Constant to\'plam', desc: 'Nomlangan doimiy qiymatlar guruhi.' },
        { title: 'String Enum', desc: 'Qiymatlarni matnli ko\'rinishda berish imkoniyati.' }
      ],
      actionsTitle: 'Misol kodi:',
      actions: [
        'enum Role { Admin, User, Teacher }',
        'enum Role { Admin = "admin", User = "user" }'
      ]
    },
    {
      type: 'list',
      title: '5. Type vs Interface',
      text: 'TypeScript da type va interface o\'rtasidagi farqlar va ularning ishlatilish o\'rinlari:',
      points: [
        'type: Union va Literal turlar uchun ishlatiladi (masalan: type Role = "admin" | "user").',
        'interface: Obyektlar (Object) uchun shablon yaratishda ishlatiladi.',
        'Oltin qoida: Object uchun Interface | Union yoki Literal uchun Type.'
      ]
    },
    {
      type: 'code',
      title: '6. Generic',
      text: 'Generic moslashuvchan va xavfsiz tur (flexible type) yaratadi. React va boshqa kutubxonalar undan keng foydalanadi.',
      code: `function getData<T>(data: T): T {
  return data;
}

getData("Ali"); // T = string
getData(22);    // T = number`
    },
    {
      type: 'code',
      title: '7. Classes va Access Modifiers',
      text: 'Class - obyekt yaratish uchun chizma (blueprint) hisoblanadi. Access modifiers (public, private, protected) esa class a\'zolarining ko\'rinishini boshqaradi.',
      code: `class User {
  public name: string;
  private password: string;
  protected salary: number;

  constructor(id: number, name: string, salary: number, password: string) {
    this.name = name;
    this.salary = salary;
    this.password = password;
  }
}`
    },
    {
      type: 'rule',
      title: '8. Readonly',
      points: [
        'Readonly xususiyati qiymatni faqat bir marta berishga ruxsat beradi.',
        'Ikkinchi marta o\'zgartirishga urinilsa - TypeScript error beradi.'
      ],
      rule: 'Qoida: class ichida readonly id: number; tarzida o\'zgarmas maydonlar belgilanadi.'
    },
    {
      type: 'tasks',
      title: '9. Amaliyot Topshiriqlari',
      tasks: [
        'Tuple yordamida aniq tartibli massiv e\'lon qiling',
        'Type Alias va Literal Types yordamida murakkab turlar yarating',
        'Enum yordamida rol (Role) konstantalarini yozing',
        'Generic funksiya yozib, istalgan turdagi ma\'lumotni qabul qilib qaytaring',
        'Class ichida Access Modifiers (public, private, protected) va Readonly kalit so\'zlarini sinab ko\'ring'
      ]
    }
  ]
};