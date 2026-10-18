export const typescriptIntroData = {
  id: 'typescript-intro',
  title: '9. TypeScript Kirish va Asoslar',
  heading: 'TypeScript Kirish: JavaScript + Types',
  subheading: 'TypeScript - Microsoft tomonidan yaratilgan, JavaScript ustiga qurilgan dasturlash tili. U kodga Type tizimini qo\'shadi va xatolarni ishga tushirishdan oldin aniqlaydi.',
  sections: [
    {
      type: 'comparison',
      title: '1. TypeScript Nima?',
      text: 'TypeScript = JavaScript + Type System. Microsoft tomonidan yaratilgan va JavaScript kodini tekshiradi. Xatolarni ishga tushirishdan oldin topadi.',
      cards: [
        { title: 'JavaScript', subtitle: 'Dinamik til', desc: 'Xatolarni faqat ishga tushirish vaqtida aniqlaydi.' },
        { title: 'Type System', subtitle: 'Statik turlar', desc: 'Kod yozish jarayonida xatolarni oldindan ko\'rsatadi.' },
        { title: 'Xavfsiz kod', subtitle: 'Ishonchlilik', desc: 'Katta hajmli loyihalarda barqarorlikni ta\'minlaydi.' }
      ],
      actionsTitle: 'TypeScript afzalliklari:',
      actions: [
        'Xatolarni kompilyatsiya vaqtida aniqlash',
        'IDE yordami (Auto-complete va IntelliSense)',
        'Kodni tushunarli va o\'qishga oson qilish',
        'Katta loyihalar va React bilan mukammal integratsiya'
      ]
    },
    {
      type: 'list',
      title: '2. Nima Uchun TypeScript Kerak?',
      text: 'JavaScript juda moslashuvchan, lekin katta loyihalarda kutilmagan yashirin xatolarga olib keladi:',
      points: [
        'Type xatoliklari: Masalan, string va number aralashib ketishi kutilmagan natijalarni berishi mumkin.',
        'Mavjud bo\'lmagan property: Obyektdagi xato property lar faqat production da bilinishi mumkin.',
        'TypeScript yechimi: O\'zgaruvchilar va funksiyalarga aniq turlar (types) berish orqali bu muammolarning oldi olinadi.'
      ]
    },
    {
      type: 'code',
      title: '3. TypeScript O\'rnatish va Sozlash',
      text: 'TypeScript ni o\'rnatish va loyihada ishlatish uchun quyidagi buyruqlar bajariladi:',
      code: `// 1. TypeScript o'rnatish
npm install typescript

// 2. Config fayl yaratish (tsconfig.json)
npx tsc --init

// Fayl kengaytmalari:
// .ts - Oddiy TypeScript fayllari
// .tsx - React + TypeScript fayllari`
    },
    {
      type: 'comparison',
      title: '4. Primitive Types va Arrays',
      text: 'TypeScript ning asosiy turlari va massivlar bilan ishlash tartibi:',
      cards: [
        { title: 'string', subtitle: 'Matn', desc: 'let name: string = "Ali"' },
        { title: 'number', subtitle: 'Son', desc: 'let age: number = 22' },
        { title: 'boolean', subtitle: 'Mantiqiy', desc: 'let isTeacher: boolean = true' }
      ],
      actionsTitle: 'Array turlari:',
      actions: [
        'const books: string[] = ["React", "Node", "TypeScript"]',
        'const scores: number[] = [10, 20, 30]'
      ]
    },
    {
      type: 'code',
      title: '5. TypeScript da Functions va Union Types',
      text: 'Funksiyalarda parameter va return type\'lari aniq belgilanadi. Union types orqali esa bitta o\'zgaruvchi bir nechta turni qabul qilishi mumkin.',
      code: `// Function types
function add(a: number, b: number): number {
  return a + b;
}
add(5, 3);

// Union Types (| belgisi)
let userId: string | number;
userId = 1;
userId = "abc123";`
    },
    {
      type: 'code',
      title: '6. Interfaces (Shablonlar)',
      text: 'Interface obyektsimon ma\'lumotlar uchun shablon yaratadi. Optional property (? belgisi) yordamida esa ba\'zi maydonlarni majburiy emas qilish mumkin.',
      code: `interface User {
  name: string;
  age?: number; // Optional property
}

const user: User = {
  name: "Ali",
  age: 22
};`
    },
    {
      type: 'code',
      title: '7. TypeScript React da (Props va State)',
      text: 'React component\'larida Props va State uchun interface va turlarni berish katta loyihalarni boshqarishni juda osonlashtiradi.',
      code: `interface BookProps {
  title: string;
  author: string;
  price?: number;
}

function BookCard({ title, author }: BookProps) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{author}</p>
    </div>
  );
}

// useState + TypeScript
const [count, setCount] = useState<number>(0);
const [books, setBooks] = useState<string[]>([]);
const [user, setUser] = useState<User | null>(null);`
    },
    {
      type: 'tasks',
      title: '8. Amaliyot Topshiriqlari',
      tasks: [
        'Loyihangizga TypeScript ni o\'rnating va tsconfig.json faylini yarating',
        'Primitive types (string, number, boolean) va array turlaridan foydalanib o\'zgaruvchilar e\'lon qiling',
        'Parameter va return type\'lariga ega funksiyalar yozing',
        'Interface yaratib, obyektlar strukturasini qat\'iy turlarga bo\'ling',
        'React komponentida props va useState hook\'iga TypeScript turlarini qo\'llang'
      ]
    }
  ]
};