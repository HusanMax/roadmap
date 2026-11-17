export const twProjectsData = {
  id: 'tw-projects',
  tailwind: true,
  title: '6. Amaliy komponentlar va React',
  heading: 'Tailwind bilan tayyor komponentlar',
  subheading: 'Navbar, kartochka, forma va React komponentlarida ishlatish.',
  sections: [
    {
      type: 'code',
      lang: 'jsx',
      title: 'Kartochka',
      code: `function ProductCard({ title, price, image }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-xl">
      <img className="h-48 w-full object-cover" src={image} alt={title} />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="mt-1 text-gray-500">{price} so'm</p>
        <button className="mt-4 w-full rounded-lg bg-sky-500 py-2 font-semibold text-white hover:bg-sky-600">
          Savatga
        </button>
      </div>
    </div>
  )
}`
    },
    {
      type: 'code',
      lang: 'jsx',
      title: 'Responsive navbar',
      code: `function Navbar() {
  return (
    <header className="sticky top-0 z-10 bg-white shadow">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="/" className="text-xl font-bold text-sky-600">Logo</a>
        <ul className="hidden gap-6 md:flex">
          <li><a className="hover:text-sky-600" href="/">Bosh</a></li>
          <li><a className="hover:text-sky-600" href="/about">Haqida</a></li>
          <li><a className="hover:text-sky-600" href="/contact">Aloqa</a></li>
        </ul>
        <button className="md:hidden">☰</button>
      </nav>
    </header>
  )
}`
    },
    {
      type: 'code',
      lang: 'jsx',
      title: 'Forma',
      code: `function LoginForm() {
  return (
    <form className="mx-auto w-full max-w-sm space-y-4 rounded-2xl bg-white p-6 shadow">
      <h2 className="text-center text-2xl font-bold">Kirish</h2>
      <input
        type="email"
        placeholder="Email"
        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
      />
      <input
        type="password"
        placeholder="Parol"
        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
      />
      <button className="w-full rounded-lg bg-sky-500 py-2 font-semibold text-white hover:bg-sky-600">
        Kirish
      </button>
    </form>
  )
}`
    },
    {
      type: 'code',
      lang: 'jsx',
      title: 'Shartli class lar',
      text: 'React da class ni holatga qarab o\'zgartirish uchun shablon qatori yoki clsx kutubxonasidan foydalaniladi. Class nomlarini to\'liq yozing (text-${color}-500 kabi yig\'ib bo\'lmaydi).',
      code: `// To'g'ri: to'liq class nomlari
const styles = {
  success: 'bg-green-100 text-green-700',
  error: 'bg-red-100 text-red-700',
}

function Alert({ type, children }) {
  return <div className={'rounded p-3 ' + styles[type]}>{children}</div>
}

// clsx bilan
// npm install clsx
// <button className={clsx('rounded px-4 py-2', active && 'bg-sky-500 text-white')}>`
    },
    {
      type: 'tasks',
      title: 'Amaliyot mashqlari',
      tasks: [
        'Mahsulot kartochkalari to\'plamini yarating (grid + ProductCard)',
        'Responsive navbar: mobilda hamburger menyu ochiladigan qiling',
        'Kirish formasini Tailwind bilan bezang',
        'Alert komponentini 3 xil tur bilan yarating'
      ]
    }
  ]
};
