export const reactRouterData = {
  id: 'react-router-tailwind',
  title: '4. React Router DOM, Tailwind CSS va Responsive Navbar',
  heading: 'React Router DOM, Tailwind CSS va Responsive Navbar',
  subheading: 'React Router DOM, Tailwind CSS va Lucide React yordamida zamonaviy va moslashuvchan (responsive) navigatsiya tizimini qurish.',
  sections: [
    {
      type: 'comparison',
      title: '1. React Router DOM Nima?',
      text: 'Single Page Application (SPA) - oddiy HTML saytlarda har bir link bosilganda page refresh bo\'ladi. React Router DOM esa butun sahifani qayta yuklamasdan, faqat kerakli componentni ko\'rsatadi.',
      cards: [
        { title: 'Oddiy HTML', subtitle: 'Page refresh', desc: 'Har link bosilganda sahifa to\'liq yangilanadi.' },
        { title: 'React Router', subtitle: 'Refreshsiz navigation', desc: 'Sahifani qayta yuklamasdan tezkor o\'tish.' },
        { title: 'SPA Afzalligi', subtitle: 'Yuqori tezlik', desc: 'Foydalanuvchi tajribasi ancha silliq va qulay bo\'ladi.' }
      ],
      actionsTitle: 'Asosiy xususiyatlari:',
      actions: [
        'BrowserRouter yordamida butun ilovani routing bilan o\'rash',
        'Routes va Route yordamida URL manzillarini componentlarga bog\'lash',
        'Link component orqali sahifani refresh qilmasdan o\'tish',
        'State va ma\'lumotlarni saqlab qolish'
      ]
    },
    {
      type: 'code',
      title: '2. React Router DOM O\'rnatish va BrowserRouter Sozlash',
      text: 'Loyihaga router o\'rnatish va main.jsx faylida App komponentini BrowserRouter bilan o\'rash kerak.',
      code: `// 1-qadam: O'rnatish\nnpm install react-router-dom\n\n// 2-qadam: main.jsx sozlash\nimport { BrowserRouter } from "react-router-dom";\nimport ReactDOM from "react-dom/client";\nimport App from "./App";\n\nReactDOM.createRoot(\n  document.getElementById("root")\n).render(\n  <BrowserRouter>\n    <App />\n  </BrowserRouter>\n);`
    },
    {
      type: 'code',
      title: '3. Routes va Route – Sahifalarni Ulash',
      text: 'Routes ichida har bir URL manzili uchun alohida Route belgilanadi. Path URL manzilini, element esa shu URL da ko\'rsatiladigan komponentni aniqlaydi.',
      code: `import { Routes, Route } from "react-router-dom";\n\nfunction App() {\n  return (\n    <Routes>\n      <Route path="/" element={<Home />} />\n      <Route path="/books" element={<Books />} />\n      <Route path="/about" element={<About />} />\n    </Routes>\n  );\n}`
    },
    {
      type: 'rule',
      title: '4. Link Component vs Tag',
      points: [
        '<a> tagi ishlatilganda sahifa to\'liq refresh bo\'ladi va barcha state\'lar yo\'qoladi.',
        '<Link> component ishlatilganda sahifa refreshsiz ishlaydi va barcha state saqlanib qoladi.'
      ],
      rule: 'Qoida: SPA ilovalarida ichki sahifalarga o\'tish uchun har doim <Link to="..."> dan foydalaning!'
    },
    {
      type: 'list',
      title: '5. Responsive Design va Tailwind Breakpoints',
      text: 'Tailwind CSS mobil-first yondashuvini ishlatadi (avval kichik ekran, keyin katta ekranlar uchun stillar beriladi).',
      points: [
        'Mobil (sukut bo\'yicha, 0px+)',
        'sm (640px+)',
        'md (768px+)',
        'lg (1024px+)',
        'xl (1280px+)',
        'hidden md:flex: Mobilda yashirin, md va undan katta ekranlarda ko\'rinadi.',
        'md:hidden: Mobilda ko\'rinadi, md ekranidan boshlab yashiriladi.'
      ]
    },
    {
      type: 'code',
      title: '6. Responsive Navbar va useState Logikasi',
      text: 'Mobile menu holatini boshqarish uchun useState hookidan va Lucide React ikonalaridan (Menu, X) foydalaniladi.',
      code: `import React, { useState } from "react";\nimport { Link } from "react-router-dom";\nimport { Menu, X } from "lucide-react";\n\nexport default function Navbar() {\n  const [open, setOpen] = useState(false);\n\n  return (\n    <nav className="bg-black text-white p-5 flex justify-between items-center">\n      <Link to="/" className="text-2xl font-bold">Books App</Link>\n      \n      {/* Desktop Menu */}\n      <div className="hidden md:flex gap-6">\n        <Link to="/">Home</Link>\n        <Link to="/books">Books</Link>\n      </div>\n\n      {/* Mobile Button */}\n      <button onClick={() => setOpen(!open)} className="md:hidden">\n        {open ? <X size={32} /> : <Menu size={32} />}\n      </button>\n\n      {/* Mobile Dropdown */}\n      {open && (\n        <div className="absolute top-20 left-0 w-full bg-gray-900 flex flex-col items-center gap-6 py-8 md:hidden">\n          <Link to="/" onClick={() => setOpen(false)}>Home</Link>\n          <Link to="/books" onClick={() => setOpen(false)}>Books</Link>\n        </div>\n      )}\n    </nav>\n  );\n}`
    },
    {
      type: 'tasks',
      title: '7. Amaliyot Topshiriqlari',
      tasks: [
        'Loyihaga react-router-dom ni o\'rnating va main.jsx da BrowserRouter ni ulang',
        'App.jsx ichida Routes va Route componentlari yordamida Home va Books sahifalarini ulang',
        '<a> teglari o\'rniga <Link to="..."> componentidan foydalanib ko\'ring',
        'Tailwind CSS breakpointlari (hidden, md:flex, md:hidden) yordamida responsive navbar tuzing',
        'useState va Lucide React ikonalaridan foydalanib mobile menu (hamburger) ochilib-yopilish logikasini yozing'
      ]
    }
  ]
};