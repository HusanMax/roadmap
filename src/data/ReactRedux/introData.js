
export const reactIntroData = {
  id: 'react-intro',
  title: '1. React: Kirish va Asoslar',
  heading: 'React: Kirish va Asoslar',
  subheading:
    "Component asosida UI yaratishni o'rganamiz — JSX, Props, State va Events bilan.",

  sections: [
    {
      type: 'comparison',
      title: '1. React nima?',
      text: "React — Meta (Facebook) tomonidan yaratilgan, foydalanuvchi interfeyslarini yaratishga mo'ljallangan JavaScript kutubxonasi. React UI yaratishni soddalashtiradi, kodni tartibli va qayta ishlatiladigan holga keltiradi.",
      cards: [
        {
          title: 'Library',
          subtitle: 'UI uchun JavaScript library',
          desc: "React — foydalanuvchi interfeysi yaratish uchun JavaScript kutubxonasi."
        },
        {
          title: 'Components',
          subtitle: 'Qayta ishlatiladigan UI qismlari',
          desc: "Interfeys kichik, mustaqil va qayta ishlatiladigan component'larga bo'linadi."
        },
        {
          title: 'Reactive',
          subtitle: 'UI avtomatik yangilanadi',
          desc: "Ma'lumot yoki state o'zgarganda React kerakli UI qismini qayta render qiladi."
        }
      ],
      actionsTitle: 'Nima uchun React kerak?',
      actions: [
        "Oddiy JavaScript bilan DOM boshqarish katta loyihalarda murakkablashadi.",
        "React UI kodini component'larga bo'lib tartibli yozishga yordam beradi.",
        "Bir component'ni turli ma'lumotlar bilan qayta ishlatish mumkin.",
        "State o'zgarganda interfeys avtomatik yangilanadi."
      ]
    },
    {
      type: 'code',
      title: '2. Oddiy JavaScript va React usuli',
      text: "Oddiy JavaScript'da DOM elementlarini qo'lda topib o'zgartiramiz. React'da esa UI qanday ko'rinishda bo'lishini JSX orqali tasvirlaymiz.",
      code: `// Oddiy JavaScript
document.getElementById("title").innerHTML = "Hello"

// React usuli
function App() {
  return <h1>Hello React</h1>
}`
    },
    {
      type: 'list',
      title: '3. SPA — Single Page Application',
      text: "React bilan qurilgan ilovalar ko'pincha Single Page Application (SPA) bo'ladi. Bunday ilovada sahifa to'liq qayta yuklanmaydi, faqat kerakli qism yangilanadi.",
      points: [
        "Tez: sahifa har bir o'zgarishda qayta yuklanmaydi.",
        "Silliq: foydalanuvchi tajribasi yaxshilanadi.",
        "Samarali: faqat o'zgargan UI qismi qayta render qilinadi.",
        "API orqali yangi ma'lumot olinib, interface ichida ko'rsatilishi mumkin."
      ]
    },
    {
      type: 'code',
      title: "4. React loyiha tuzilmasi",
      text: "React loyihasida asosiy kodlar odatda src papkasida joylashadi. Component'lar alohida components papkasida saqlanadi.",
      code: `my-app/
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   └── components/
│       └── Card.jsx
├── index.html
└── package.json`
    },
    {
      type: 'list',
      title: '5. Asosiy fayllar vazifasi',
      text: "Har bir fayl React ilovasida alohida vazifani bajaradi.",
      points: [
        "main.jsx: React ilovasining boshlanish nuqtasi. Root component shu yerda render qilinadi.",
        "App.jsx: asosiy component. Boshqa component'lar odatda shu yerda yig'iladi.",
        "components/: qayta ishlatiladigan kichik component'lar saqlanadigan papka.",
        "index.html: React ilovasi brauzerga yuklanadigan asosiy HTML fayl.",
        "package.json: loyiha dependency'lari va script'lari saqlanadigan fayl."
      ]
    },
    {
      type: 'code',
      title: '6. main.jsx — React ilovasini render qilish',
      text: "Vite bilan yaratilgan React loyihasida main.jsx App component'ini root element ichiga render qiladi.",
      code: `import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)`
    },
    {
      type: 'code',
      title: '7. JSX nima?',
      text: "JSX (JavaScript XML) React component ichida HTML'ga o'xshash sintaksis bilan UI yozish imkonini beradi. JSX brauzer tomonidan emas, Vite yoki Babel kabi build tool tomonidan JavaScript'ga aylantiriladi.",
      code: `function App() {
  return (
    <div>
      <h1>Hello React!</h1>
      <p>JSX bilan UI yaratish</p>
    </div>
  )
}`
    },
    {
      type: 'rule',
      title: '8. JSX qoidalari',
      points: [
        "Bitta parent element: barcha JSX elementlari bitta wrapper ichida bo'lishi kerak. Buning uchun <div> yoki fragment (<>...</>) ishlatiladi.",
        "className: CSS class berishda HTML dagi class emas, className ishlatiladi.",
        "JavaScript {} ichida: JSX ichida o'zgaruvchi, funksiya natijasi va boshqa JavaScript ifodalari {} ichida yoziladi.",
        "Elementlarni yopish kerak: masalan, <img />, <input /> yoki <div></div>."
      ],
      rule: "Qoida: JSX ichida bir nechta element qaytarilsa, ular bitta root element yoki Fragment ichida bo'lishi shart."
    },
    {
      type: 'code',
      title: '9. JSX qoidalariga misol',
      text: "Quyidagi misolda bitta parent element, className va JavaScript ifodasi ishlatilgan.",
      code: `function App() {
  const name = "Ali"

  return (
    <div className="container">
      <h1>Salom, {name}</h1>
    </div>
  )
}`
    },
    {
      type: 'code',
      title: '10. Component nima?',
      text: "Component — mustaqil va qayta ishlatilishi mumkin bo'lgan UI qismi. React ilovasi ko'plab component'lardan tashkil topadi. Component nomi katta harf bilan boshlanishi kerak.",
      code: `// Component yaratish
function Card() {
  return (
    <div>
      <h1>Card Component</h1>
    </div>
  )
}

// Component ishlatish
function App() {
  return (
    <div>
      <Card />
      <Card />
    </div>
  )
}`
    },
    {
      type: 'list',
      title: "11. Component'larning afzalligi",
      text: "Component'lar LEGO g'ishtlari kabi: har birini alohida yaratib, kerakli joyda istalgancha birlashtirish mumkin.",
      points: [
        "Qayta ishlatish: bir component'ni bir necha joyda ishlatish mumkin.",
        "Tartibli kod: katta interfeys kichik qismlarga bo'linadi.",
        "Oson boshqarish: har bir component o'z vazifasiga ega bo'ladi.",
        "Oson test qilish: component'larni alohida tekshirish mumkin."
      ]
    },
    {
      type: 'code',
      title: "12. Props — ma'lumot yuborish",
      text: "Props parent component'dan child component'ga ma'lumot yuborish usuli. Props faqat yuqoridan pastga, ya'ni parent'dan child'ga uzatiladi.",
      code: `// Parent: ma'lumot yuborish
function App() {
  return (
    <div>
      <Card title="React" />
      <Card title="JavaScript" />
    </div>
  )
}

// Child: ma'lumot qabul qilish
function Card(props) {
  return <h1>{props.title}</h1>
}`
    },
    {
      type: 'code',
      title: '13. Props destructuring',
      text: "Props obyektini to'g'ridan-to'g'ri destructuring qilib olish kodni qisqaroq va o'qilishi osonroq qiladi.",
      code: `function Card({ title, description }) {
  return (
    <article>
      <h2>{title}</h2>
      <p>{description}</p>
    </article>
  )
}

function App() {
  return (
    <Card
      title="React"
      description="JavaScript UI kutubxonasi"
    />
  )
}`
    },
    {
      type: 'list',
      title: '14. Props xususiyatlari',
      text: "Props component'ni turli ma'lumotlar bilan qayta ishlatishga yordam beradi.",
      points: [
        "Props parent component tomonidan yuboriladi.",
        "Child component props'ni qabul qiladi va ekranga chiqarishi mumkin.",
        "Props read-only, ya'ni child component ichida to'g'ridan-to'g'ri o'zgartirilmaydi.",
        "Bir component turli props qiymatlari bilan qayta-qayta ishlatiladi.",
        "children props orqali component ichiga JSX kontent yuborish mumkin."
      ]
    },
    {
      type: 'code',
      title: '15. State — useState Hook',
      text: "State — component ichidagi o'zgaruvchan ma'lumot. State o'zgarganda React UI'ni avtomatik qayta render qiladi. useState joriy qiymat va uni o'zgartiruvchi funksiyani qaytaradi.",
      code: `import { useState } from "react"

function App() {
  // [qiymat, o'zgartiruvchi] = useState(boshlang'ichQiymat)
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => setCount((oldCount) => oldCount + 1)}>
        +
      </button>
    </div>
  )
}`
    },
    {
      type: 'list',
      title: '16. useState qanday ishlaydi?',
      text: "useState React'dagi eng ko'p ishlatiladigan hook'lardan biridir.",
      points: [
        "useState(0) boshlang'ich qiymat sifatida 0 ni beradi.",
        "count — state'ning hozirgi qiymati.",
        "setCount — count qiymatini o'zgartiruvchi funksiya.",
        "setCount ishlatilganda React component'ni qayta render qiladi.",
        "Event'lar, masalan onClick, state'ni o'zgartirish uchun ishlatiladi."
      ]
    },
    {
      type: 'code',
      title: '17. React ishlash jarayoni — to‘liq misol',
      text: "React'da Component, JSX, Props, State va Event tushunchalari birgalikda ishlaydi.",
      code: `import { useState } from "react"

function Counter({ title }) {
  const [count, setCount] = useState(0)

  return (
    <section>
      <h2>{title}</h2>
      <h1>{count}</h1>

      <button onClick={() => setCount((oldCount) => oldCount + 1)}>
        +1
      </button>
    </section>
  )
}

function App() {
  return <Counter title="React Counter" />
}

export default App`
    },
    {
      type: 'list',
      title: '18. Xulosa',
      text: "React component asosida foydalanuvchi interfeyslarini yaratishga yordam beradi. Asosiy tushunchalar birgalikda ishlaydi.",
      points: [
        "Component: UI'ni kichik va qayta ishlatiladigan bo'laklarga ajratadi.",
        "JSX: JavaScript ichida UI yozish imkonini beradi.",
        "Props: parent component'dan child component'ga ma'lumot yuboradi.",
        "State: component ichidagi o'zgaruvchan ma'lumotni saqlaydi.",
        "Event: foydalanuvchi harakatlarini, masalan onClick hodisasini boshqaradi."
      ]
    }
  ]
};
