export const fullReactCrudData = {
  id: 'full-react-crud',
  title: '3. Full React CRUD Application',
  heading: 'Full React CRUD Application',
  subheading: 'React frontend va Express backend ni ulab, to\'liq CRUD application quramiz. Axios orqali API bilan ishlaymiz, Tailwind CSS bilan stillaymiz.',
  sections: [
    {
      type: 'comparison',
      title: "1. Kirish va Operatsiyalar",
      text: "Bugungi darsda React frontend va Express backend ni ulab, to'liq CRUD application quramiz.",
      cards: [
        { title: "GET Request", subtitle: "Ko'rish", desc: "Kitoblar ro'yxatini GET request bilan olamiz." },
        { title: "POST Request", subtitle: "Qo'shish", desc: "Yangi kitob POST request bilan yaratamiz." },
        { title: "PUT / DELETE", subtitle: "Tahrirlash va O'chirish", desc: "Mavjud kitobni PUT bilan yangilaymiz va DELETE bilan o'chiramiz." }
      ],
      actionsTitle: "Asosiy vositalar:",
      actions: [
        "React va Vite (Frontend UI)",
        "Axios (HTTP Client)",
        "Express.js (Backend API)",
        "MongoDB (Database) va Tailwind CSS (Styling)"
      ]
    },
    {
      type: 'list',
      title: "2. Professional React Folder Structure",
      text: "Katta React loyihalarda kod papkalarga bo'linadi - bu kodni tartibli va boshqarishni osonlashtiradi.",
      points: [
        "components/: Qayta ishlatiladigan UI qismlar - BookCard, BookForm.",
        "pages/: Sahifa darajasidagi komponentlar - Home.jsx.",
        "services/: Barcha API request logic - bookService.js."
      ]
    },
    {
      type: 'code',
      title: "3. Axios Service Layer",
      text: "Axios - HTTP request yuborish uchun ishlatiladigan kutubxona. API request larni alohida service faylda yozish professional yondashuv hisoblanadi.",
      code: `import axios from "axios";

const API = "https://booksbackend-3rhc.onrender.com/books";

export const getBooks = () => {
  return axios.get(API);
};

export const createBook = (book) => {
  return axios.post(API, book);
};

export const removeBook = (id) => {
  return axios.delete(\`\${API}/\${id}\`);
};

export const updateBook = (id, book) => {
  return axios.put(\`\${API}/\${id}\`, book);
};`
    },
    {
      type: 'code',
      title: "4. BookForm Component",
      text: "Form component foydalanuvchi ma'lumot kiritishi uchun ishlatiladi. Input lar state orqali boshqariladi - controlled component pattern.",
      code: `function BookForm({
  nomi, setNomi, muallif, setMuallif, sahifasi, setSahifasi, janr, setJanr, handleSubmit, editingId,
}) {
  return (
    <form
      onSubmit={handleSubmit}
      className='bg-white p-6 rounded-2xl shadow-lg flex flex-col gap-4 mb-10'>
      <input
        type='text'
        placeholder='Book name'
        value={nomi}
        onChange={(e) => setNomi(e.target.value)}
        className='border p-3 rounded-lg'
      />
      <input
        type='text'
        placeholder='Author'
        value={muallif}
        onChange={(e) => setMuallif(e.target.value)}
        className='border p-3 rounded-lg'
      />
      <input
        type='number'
        placeholder='Pages'
        value={sahifasi}
        onChange={(e) => setSahifasi(e.target.value)}
        className='border p-3 rounded-lg'
      />
      <input
        type='text'
        placeholder='Genre'
        value={janr}
        onChange={(e) => setJanr(e.target.value)}
        className='border p-3 rounded-lg'
      />
      <button className='bg-black text-white py-3 rounded-lg'>
        {editingId ? "Update Book" : "Add Book"}
      </button>
    </form>
  );
}

export default BookForm;`
    },
    {
      type: 'code',
      title: "5. BookCard Component",
      text: "Har bir kitob alohida component sifatida chiqariladi. Props orqali parent component dan ma'lumot va funksiyalar uzatiladi.",
      code: `function BookCard({
  book, editBook, deleteBook,
}) {
  return (
    <div className='bg-white p-6 rounded-2xl shadow-lg'>
      <h2 className='text-2xl font-bold mb-3'>
        {book.nomi}
      </h2>
      <p className='mb-2'>
        <span className='font-bold'>Muallif:</span> {book.muallif}
      </p>
      <p className='mb-2'>
        <span className='font-bold'>Sahifasi:</span> {book.sahifasi}
      </p>
      <p className='mb-5'>
        <span className='font-bold'>Janr:</span> {book.janr}
      </p>
      <div className='flex gap-3'>
        <button
          onClick={() => editBook(book)}
          className='bg-yellow-400 px-4 py-2 rounded-lg'>
          Edit
        </button>
        <button
          onClick={() => deleteBook(book._id)}
          className='bg-red-500 text-white px-4 py-2 rounded-lg'>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookCard;`
    },
    {
      type: 'code',
      title: "6. GET Request - useEffect bilan",
      text: "Component load bo'lganda backend dan kitoblar ro'yxati olinadi. useEffect component birinchi marta render bo'lganda ishga tushadigan hook.",
      code: `async function fetchBooks() {
  try {
    const response = await getBooks();
    setBooks(response.data);
  } catch (error) {
    console.log(error.message);
  }
}

useEffect(() => {
  fetchBooks();
}, []);`
    },
    {
      type: 'code',
      title: "7. CREATE & UPDATE (POST / PUT Request)",
      text: "Foydalanuvchi formni to'ldirib yuborsa, Axios POST yoki PUT orqali ma'lumot backend ga yuboriladi va state yangilanadi.",
      code: `async function handleSubmit(e) {
  e.preventDefault();
  const newBook = { nomi, muallif, sahifasi, janr };
  try {
    if (editingId) {
      const response = await updateBook(editingId, newBook);
      const updatedBooks = books.map((book) =>
        book._id === editingId ? response.data : book
      );
      setBooks(updatedBooks);
      setEditingId(null);
    } else {
      const response = await createBook(newBook);
      setBooks([...books, response.data]);
    }
    setNomi("");
    setMuallif("");
    setSahifasi("");
    setJanr("");
  } catch (error) {
    console.log(error.message);
  }
}`
    },
    {
      type: 'code',
      title: "8. DELETE Request",
      text: "Delete tugmasi bosilganda Axios DELETE request yuboriladi, so'ng state filter orqali yangilanadi va UI avtomatik o'zgaradi.",
      code: `async function deleteBook(id) {
  try {
    await removeBook(id);
    const filteredBooks = books.filter((book) => book._id !== id);
    setBooks(filteredBooks);
  } catch (error) {
    console.log(error.message);
  }
}`
    },
    {
      type: 'tasks',
      title: "9. Amaliyot Topshiriqlari",
      tasks: [
        "Professional folder structure (components, pages, services) asosida loyiha papkalarini yarating",
        "Axios yordamida bookService.js faylida barcha GET, POST, PUT, DELETE so'rovlarini yozing",
        "BookForm va BookCard komponentlarini yaratib, ularni Tailwind CSS bilan bezang",
        "useEffect orqali sahifa yuklanganda kitoblar ro'yxatini backend dan olib keling",
        "To'liq CRUD (qo'shish, o'chirish, tahrirlash) amallarini React state va backend bilan bog'lab ishga tushiring"
      ]
    }
  ]
};