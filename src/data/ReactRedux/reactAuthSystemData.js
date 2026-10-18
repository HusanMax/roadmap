export const reactAuthSystemData = {
  id: 'react-auth-system',
  title: '8. React Authentication System',
  heading: 'React Authentication System',
  subheading: 'JWT, Protected Routes, localStorage va Tailwind CSS',
  sections: [
    {
      type: 'comparison',
      title: '1. Authentication va JWT nima?',
      text: 'Foydalanuvchini tizimga kirganini tekshirish jarayoni authentication deb ataladi.',
      cards: [
        { title: 'Authentication', subtitle: 'Tekshirish jarayoni', desc: 'Foydalanuvchini tizimga kirganini tekshirish.' },
        { title: 'JWT Token', subtitle: 'Xavfsiz token', desc: 'Backend tomonidan yaratiladigan xavfsiz token.' },
        { title: 'Protected Route', subtitle: 'Sahifa himoyasi', desc: 'Token bo\'lmasa page\'ga kiritmaydi.' }
      ],
      actionsTitle: 'Frontend roli:',
      actions: [
        'Token\'ni localStorage\'ga saqlaydi',
        'Har bir API request\'da yuboradi',
        'Protected route\'larni himoya qiladi'
      ]
    },
    {
      type: 'list',
      title: '2. Full Project Structure',
      text: 'Katta React loyihalarida papkalar aniq vazifalarga bo\'linadi:',
      points: [
        'components/ - Reusable UI, masalan Navbar kabi qayta ishlatiladigan komponentlar.',
        'pages/ - Har bir route uchun alohida page komponentlari (Home.jsx, Books.jsx, Login.jsx, Register.jsx, Profile.jsx, NotFound.jsx).',
        'routes/ - Protected route logic va token tekshiruvi (ProtectedRoute.jsx).',
        'services/ - Backend API\'ga barcha request\'lar shu yerda (authService.js, bookService.js).'
      ]
    },
    {
      type: 'code',
      title: '3. authService.js - API Request Logic',
      text: 'Frontend backend bilan authService orqali ishlaydi va Axios HTTP request yuboradi.',
      code: `import axios from "axios";

const API = "https://booksbackend-3rhc.onrender.com";

export const registerUser = (user) => {
  return axios.post(\`\${API}/register\`, user);
};

export const loginUser = (user) => {
  return axios.post(\`\${API}/login\`, user);
};

export const getProfile = (token) => {
  return axios.get(\`\${API}/profile\`, {
    headers: {
      Authorization: \`Bearer \${token}\`
    }
  });
};`
    },
    {
      type: 'code',
      title: '4. Register Page',
      text: 'Register sahifasida foydalanuvchi ma\'lumotlari kiritilib, backend\'ga yuboriladi va login sahifasiga yo\'naltiriladi.',
      code: `import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../components/services/authService";

export default function Register() {
  const navigate = useNavigate();
  const [ism, setIsm] = useState("");
  const [familiya, setFamiliya] = useState("");
  const [yosh, setYosh] = useState("");
  const [email, setEmail] = useState("");
  const [parol, setParol] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await registerUser({ ism, familiya, yosh: Number(yosh), email, parol });
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center p-5'>
      <form onSubmit={handleSubmit} className='bg-white shadow-2xl rounded-2xl p-10 w-full sm:w-[500px] flex flex-col gap-5'>
        <h1 className='text-4xl font-bold text-center text-black'>Register</h1>
        <input type='text' placeholder='Ism' value={ism} onChange={(e) => setIsm(e.target.value)} className='border p-3 rounded-xl outline-none text-black' />
        <input type='text' placeholder='Familiya' value={familiya} onChange={(e) => setFamiliya(e.target.value)} className='border p-3 rounded-xl outline-none text-black' />
        <input type='number' placeholder='Yosh' value={yosh} onChange={(e) => setYosh(e.target.value)} className='border p-3 rounded-xl outline-none text-black' />
        <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} className='border p-3 rounded-xl outline-none text-black' />
        <input type='password' placeholder='Parol' value={parol} onChange={(e) => setParol(e.target.value)} className='border p-3 rounded-xl outline-none text-black' />
        <button className='bg-cyan-800 text-white py-3 rounded-xl hover:bg-cyan-700 duration-300'>Register</button>
      </form>
    </div>
  );
}`
    },
    {
      type: 'code',
      title: '5. Login Page va Token Saqlash',
      text: 'Login muvaffaqiyatli bo\'lganda qaytgan JWT token localStorage\'ga saqlanadi va profile sahifasiga o\'tiladi.',
      code: `import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../components/services/authService";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [parol, setParol] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await loginUser({ email, parol });
      localStorage.setItem("token", response.data.token);
      navigate("/profile");
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center p-5'>
      <form onSubmit={handleSubmit} className='bg-white shadow-2xl rounded-2xl p-10 w-full sm:w-[500px] flex flex-col gap-5'>
        <h1 className='text-4xl font-bold text-center text-black'>Login</h1>
        <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} className='border p-3 rounded-xl outline-none text-black' />
        <input type='password' placeholder='Parol' value={parol} onChange={(e) => setParol(e.target.value)} className='border p-3 rounded-xl outline-none text-black' />
        <button className='bg-cyan-800 text-white py-3 rounded-xl hover:bg-cyan-700 duration-300'>Login</button>
      </form>
    </div>
  );
}`
    },
    {
      type: 'code',
      title: '6. ProtectedRoute.jsx - Route Himoyasi',
      text: 'Protected Route token bo\'lmasa foydalanuvchini sahifaga kiritmaydi va login sahifasiga yo\'naltiradi.',
      code: `import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  
  if (!token) {
    return <Navigate to="/login" />;
  }
  
  return children;
}`
    },
    {
      type: 'code',
      title: '7. Profile Page',
      text: 'Profile page protected route hisoblanadi - token mavjud bo\'lmasa ochilmaydi va getProfile orqali ma\'lumot olinadi.',
      code: `import { useEffect, useState } from "react";
import { getProfile } from "../components/services/authService";

export default function Profile() {
  const [user, setUser] = useState(null);

  async function fetchProfile() {
    try {
      const token = localStorage.getItem("token");
      const response = await getProfile(token);
      setUser(response.data.user);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    fetchProfile();
  }, []);

  if (!user) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100 p-5'>
      <div className='bg-white shadow-2xl rounded-2xl p-10 w-full sm:w-[500px]'>
        <h1 className='text-4xl font-bold mb-5 text-black'>Profile</h1>
        <p className='mb-3 text-black'>ID: {user.id}</p>
        <p className='text-black'>Role: {user.role}</p>
      </div>
    </div>
  );
}`
    },
    {
      type: 'code',
      title: '8. Navbar va Logout',
      text: 'Navbar komponentida token holatiga qarab Login/Register yoki Profile/Logout tugmalari ko\'rsatiladi.',
      code: `import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { X, Menu } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  function logout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <nav className="bg-black sticky top-0 z-50 text-white">
      <div className="flex mx-auto px-5 py-5 justify-between items-center max-w-[1440px]">
        <Link to="/" className="text-3xl font-bold text-cyan-400">LIBRARY</Link>
        <div className="hidden md:flex gap-6 items-center">
          <Link to="/">Home</Link>
          <Link to="/books">Books</Link>
          {token ? (
            <>
              <Link to="/profile">Profile</Link>
              <button onClick={logout} className="bg-red-500 px-6 py-2 rounded-2xl">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register" className="bg-cyan-800 px-6 py-2 rounded-2xl">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}`
    },
    {
      type: 'code',
      title: '9. App.jsx - Route Konfiguratsiyasi',
      text: 'Public va Protected route\'lar Routes ichida ProtectedRoute wrapper\'i yordamida sozlanadi.',
      code: `import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Books from "./pages/Books";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/books' element={<Books />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile' element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;`
    },
    {
      type: 'tasks',
      title: '10. Amaliyot Topshiriqlari',
      tasks: [
        'AuthService yordamida register, login va getProfile API so\'rovlarini yozing',
        'Register va Login sahifalarini yaratib, state va form logic\'ni sozlang',
        'Login muvaffaqiyatli bo\'lganda JWT token\'ni localStorage\'ga saqlang',
        'ProtectedRoute komponenti yordamida /profile sahifasini himoya qiling',
        'Token mavjudligiga qarab Navbar\'da Logout/Login holatlarini dinamik ko\'rsating'
      ]
    }
  ]
};