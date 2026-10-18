export const reactTsProjectSetupData = {
  id: 'react-ts-project-setup',
  title: '11. React + TypeScript Loyiha Sozlash va Hook\'lar',
  heading: 'React + TypeScript Loyiha Sozlash',
  subheading: 'JavaScript loyihasidan farqi va TypeScript\'ni React komponentlari, useState, Props hamda API so\'rovlarida qo\'llash.',
  sections: [
    {
      type: 'comparison',
      title: '1. React + TypeScript Loyiha Sozlash',
      text: 'JavaScript loyihasidan farqi: .jsx fayllar .tsx ga, .js fayllar .ts ga o\'zgaradi. TypeScript kodga turlarni qo\'shadi va xatolarni erta bosqichda aniqlaydi.',
      cards: [
        { title: 'Vite buyrug\'i', subtitle: 'npm create vite@latest my-app', desc: 'Variant tanlash paytida React + TypeScript tanlanadi.' },
        { title: 'JavaScript React', subtitle: 'App.jsx / main.jsx', desc: 'Odatiy JSX kengaytmasiga ega fayllar.' },
        { title: 'TypeScript React', subtitle: 'App.tsx / main.tsx', desc: 'Type xavfsizligiga ega TSX kengaytmasidagi fayllar.' }
      ],
      actionsTitle: 'Asosiy farqlar:',
      actions: [
        'Fayl kengaytmalari .tsx va .ts ga o\'zgaradi',
        'Kompilyatsiya vaqtida turlar tekshiriladi'
      ]
    },
    {
      type: 'code',
      title: '2. TypeScript O\'zgaruvchilari va Turlar',
      text: 'TypeScript har bir o\'zgaruvchiga aniq tur (type) belgilaydi. Noto\'g\'ri tur ishlatilsa, compile vaqtida xato chiqadi.',
      code: `const name: string = "Ali";
const age: number = 22;
const isTeacher: boolean = true;

// Xato misol:
// const age: number = "Ali"; // Error: Type 'string' is not assignable to type 'number'`
    },
    {
      type: 'code',
      title: '3. useState bilan TypeScript',
      text: 'Generic <T> yordamida state turini aniq belgilaymiz. Raqam, ob\'ektlar va massivlar bilan ishlash.',
      code: `// Raqamli state
const [count, setCount] = useState<number>(0);
setCount(5);

// Ob'ektlar bilan state
interface User {
  name: string;
  age: number;
}
const [user, setUser] = useState<User>({ name: "Ali", age: 22 });

// Massivlar bilan state
const [books, setBooks] = useState<string[]>([]);
setBooks([...books, "React"]);`
    },
    {
      type: 'code',
      title: '4. Props bilan Interface',
      text: 'Component props\'lari uchun interface yaratiladi va turlari tekshiriladi.',
      code: `interface UserCardProps {
  name: string;
  age: number;
}

function UserCard({ name, age }: UserCardProps) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{age} yosh</p>
    </div>
  );
}`
    },
    {
      type: 'code',
      title: '5. Event Turlarini Belgilash',
      text: 'TypeScript event turini avtomatik bilmaydi, shuning uchun aniq React event turi ko\'rsatilishi kerak.',
      code: `function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
  setName(e.target.value);
}

<input type="text" value={name} onChange={handleChange} />`
    },
    {
      type: 'code',
      title: '6. API dan Ma\'lumot Olish va Axios Service Layer',
      text: 'API\'dan keladigan ma\'lumotlar strukturasi interface orqali nazorat qilinadi.',
      code: `interface Book {
  id: number;
  title: string;
}

const [books, setBooks] = useState<Book[]>([]);

// Axios service
import axios from "axios";
export const getBooks = () => axios.get<Book[]>("https://jsonplaceholder.typicode.com/posts");`
    },
    {
      type: 'code',
      title: '7. Formalar bilan TypeScript',
      text: 'LoginForm interface yordamida formaning holati va input o\'zgarishlari boshqariladi.',
      code: `interface LoginForm {
  email: string;
  password: string;
}

const [form, setForm] = useState<LoginForm>({ email: "", password: "" });

function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
  setForm({ ...form, [e.target.name]: e.target.value });
}`
    },
    {
      type: 'tasks',
      title: '8. Amaliyot Topshiriqlari',
      tasks: [
        'Vite yordamida React + TypeScript loyihasini yarating.',
        'Primitive turlar va useState hook\'iga tur bering.',
        'Props uchun interface yozib komponent yarating.',
        'Inputlar uchun event turlarini (React.ChangeEvent) qo\'llang.',
        'API va formalarda interface va Axios\'dan foydalaning.'
      ]
    }
  ]
};