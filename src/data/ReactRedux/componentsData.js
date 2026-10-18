export const dynamicReactData = {
  id: 'dynamic-react',
  title: '2. Dynamic React Applications',
  heading: 'Dynamic React Applications',
  subheading: 'Oldingi darslarda biz JSX, Components, Props, State va Events ni o\'rgandik. Bugun esa React ni haqiqatan ham dynamic qiladigan asosiy tushunchalarni o\'rganamiz.',
  sections: [
    {
      type: 'comparison',
      title: "1. Rendering Lists with map()",
      text: "React da array ichidagi ma'lumotlarni ekranga chiqarish uchun JavaScript ning map() funksiyasidan foydalanamiz. map() har bir element uchun yangi JSX blok yaratadi va ularni ekranda ko'rsatadi.",
      cards: [
        { title: "map() metodi", subtitle: "Array dan UI yaratish", desc: "Array ni aylanib chiqib, har bir element uchun yangi qiymat qaytaradi." },
        { title: "Dinamik elementlar", subtitle: "JSX bloklari", desc: "Har bir element asosida ekranda interaktiv qismlar hosil qilinadi." },
        { title: "Array ma'lumotlari", subtitle: "To'plamlar bilan ishlash", desc: "Ko'plab ma'lumotlarni tartibli ravishda sahifaga chiqarish imkoniyati." }
      ],
      actionsTitle: "map() xususiyatlari:",
      actions: [
        "Array elementlarini avtomatikay aylanish",
        "Har bir element uchun yangi JSX qaytarish",
        "UI elementlarini dinamik shakllantirish",
        "Kod hajmini sezilarli darajada qisqartirish"
      ]
    },
    {
      type: 'rule',
      title: "2. key Atributi",
      points: [
        "React list render qilganda har bir elementga key berish shart.",
        "key React ga qaysi element o'zgarganini, qo'shilganini yoki o'chirilganini tez aniqlashga yordam beradi.",
        "key bilan elementlar tezroq kuzatiladi.",
        "key siz holatda console da warning xatosi chiqadi."
      ],
      rule: "Qoida: Har bir ro'yxat elementiga unikal key atributini berish majburiy!"
    },
    {
      type: 'code',
      title: "3. map() va key Ishlatish Misoli",
      code: `function App() {
  const users = ["Ali", "Vali", "Sami"];
  return (
    <div>
      {users.map((user, index) => (
        <h1 key={index}>
          {user}
        </h1>
      ))}
    </div>
  );
}`
    },
    {
      type: 'comparison',
      title: "4. Conditional Rendering",
      text: "Conditional rendering bu shartga qarab turli UI ko'rsatish usuli. Ternary operator ?: dan foydalaniladi.",
      cards: [
        { title: "True holati", subtitle: "Birinchi JSX", desc: "Shart bajarilganda birinchi qism ishlaydi (masalan, Welcome!)." },
        { title: "False holati", subtitle: "Ikkinchi JSX", desc: "Shart bajarilmaganda ikkinchi qism ishlaydi (masalan, Please Login)." },
        { title: "Ternary operator", subtitle: "? : belgisi", desc: "Shartlarni qisqa va tushunarli yozish imkonini beradi." }
      ],
      actionsTitle: "Conditional rendering afzalliklari:",
      actions: [
        "Shartga qarab mos interfeysni ko'rsatish",
        "Foydalanuvchi holatini boshqarish",
        "Kodning o'qish imkoniyatini oshirish",
        "Dinamik sahifa elementlarini boshqarish"
      ]
    },
    {
      type: 'rule',
      title: "5. useEffect Hooki",
      points: [
        "useEffect component render bo'lgandan keyin ishlaydigan React hook hisoblanadi.",
        "U side effect larni boshqarish uchun ishlatiladi.",
        "API Request: Serverdan ma'lumot olish uchun qo'llaniladi.",
        "Timer va localStorage kabi amallarda ishlatiladi."
      ],
      rule: "Side effect deganda component tashqarisiga ta'sir qiluvchi amallar (API so'rov, timer, localStorage) tushuniladi."
    },
    {
      type: 'list',
      title: "6. useEffect Turlari va Dependency Array",
      text: "useEffect ishlash tartibi dependency (bog'liqlik) massiviga qarab belgilanadi:",
      points: [
        "Dependency siz: Component har qayta render bo'lganda ishlaveradi (keraksiz ishlashga olib kelishi mumkin).",
        "Bo'sh array []: Component mount bo'lganda (birinchi marta ekranda paydo bo'lganda) faqat 1 marta ishlaydi.",
        "Dependency bilan ([count]): Array ichidagi state yoki variable o'zgargandagina useEffect qayta ishlaydi."
      ]
    },
    {
      type: 'code',
      title: "7. useEffect va API So'rov Misoli",
      code: `import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        setUsers(data);
      });
  }, []);

  return (
    <div>
      {users.map(user => (
        <h1 key={user.id}>
          {user.name}
        </h1>
      ))}
    </div>
  );
}`
    },
    {
      type: 'code',
      title: "8. Forms va Controlled Inputs",
      text: "React da input larni state orqali boshqaramiz. Foydalanuvchi yozganda onChange event ishlaydi va state yangilanadi - bu controlled input deyiladi.",
      code: `import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h1>{name}</h1>
    </div>
  );
}`
    },
    {
      type: 'list',
      title: "9. React Dynamic Flow - Xulosa",
      text: "React ning asosiy ishlash mantig'i quyidagi bosqichlardan iborat:",
      points: [
        "Form yoki Event sodir bo'ladi va state ni yangilaydi.",
        "State o'zgargach, component qayta render bo'ladi.",
        "useEffect ishga tushib, kerakli side effect bajariladi.",
        "map() va conditional rendering yordamida UI yangi holat bilan ekranda chiqadi."
      ]
    },
    {
      type: 'tasks',
      title: "10. Amaliyot Topshiriqlari",
      tasks: [
        "Array ichidagi ma'lumotlarni map() yordamida ekranga chiqaring va unikal key bering",
        "Ternary operator yordamida foydalanuvchi tizimga kirgan yoki kirmaganligini tekshiruvchi conditional rendering yarating",
        "useEffect yordamida tashqi API dan ma'lumot olib kelib list ko'rinishida ko'rsating",
        "Controlled input yordamida Form yaratib, inputdagi yozuvni real vaqt rejimida ekranda aks ettiring",
        "Dependency array turlarini ([] va [state]) amalda sinab ko'rib, ularning farqini kuzating"
      ]
    }
  ]
};