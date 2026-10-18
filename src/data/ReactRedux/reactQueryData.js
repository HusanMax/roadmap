export const reactQueryData = {
  id: 'react-query',
  title: '12. React Query (TanStack Query)',
  heading: 'React Query',
  subheading: 'Server holatini boshqarish va ma\'lumotlarni fetch qilish uchun eng mashhur React kutubxonasi.',
  sections: [
    {
      type: 'comparison',
      title: '1. useEffect + Axios bilan Muammo',
      text: 'An\'anaviy usulda ma\'lumot olish ko\'plab qo\'lda bajariladigan amallarni talab qiladi. Manual loading, manual error, manual refetch va takrorlanuvchi kodlar yuzaga keladi.',
      cards: [
        { title: 'Manual Loading', subtitle: 'Qo\'lda boshqarish', desc: 'setLoading(true/false) ni har safar qo\'lda yozish kerak.' },
        { title: 'Manual Error', subtitle: 'Xatoliklarni tutish', desc: 'Try-catch bloklari orqali xatolarni qo\'lda boshqarish.' },
        { title: 'Repeated Code', subtitle: 'Takrorlanish', desc: 'Har bir komponentda bir xil fetch logic\'ni takrorlash.' }
      ],
      actionsTitle: 'An\'anaviy yondashuv kamchiliklari:',
      actions: [
        'useEffect va useState\'larni ortiqcha ko\'p ishlatish',
        'Cache boshqaruvi mavjud emas',
        'Avtomatik refetch qilish imkoniyati yo\'q'
      ]
    },
    {
      type: 'code',
      title: '2. Loyihani Sozlash va O\'rnatish',
      text: 'React Query\'ni ishlatishdan oldin uni loyihaga o\'rnatish zarur. TanStack Query - server holatini boshqarish uchun eng mashhur kutubxona.',
      code: `npm install @tanstack/react-query`
    },
    {
      type: 'code',
      title: '3. QueryClient Yaratish (main.jsx)',
      text: 'QueryClient cache va query\'larni boshqaradi, QueryClientProvider esa React Query\'ni butun ilovaga ulaydi.',
      code: `import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);`
    },
    {
      type: 'code',
      title: '4. Service Layer - bookService.js',
      text: 'API mantiqini UI\'dan ajratish uchun alohida service fayl yaratiladi. Bu kodni toza va qayta foydalanish mumkin qiladi.',
      code: `import axios from "axios";

export async function getBooks() {
  const response = await axios.get("https://booksbackend-3rhc.onrender.com/books");
  return response.data;
}`
    },
    {
      type: 'code',
      title: '5. useQuery bilan Ma\'lumot Olish',
      text: 'useQuery hook\'i yordamida ma\'lumotlar olinadi. queryKey cache\'ni boshqarish uchun noyob nom, queryFn esa ma\'lumot olish funksiyasidir.',
      code: `import { useQuery } from "@tanstack/react-query";
import { getBooks } from "./services/bookService";

function App() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["books"],
    queryFn: getBooks,
  });

  return <div>Hello</div>;
}`
    },
    {
      type: 'comparison',
      title: '6. Avtomatik Loading & Xato Boshqaruvi',
      text: 'React Query isLoading va error holatlarini avtomatik ravishda taqdim etadi.',
      cards: [
        { title: 'Oldingi usul', desc: 'useState, setLoading, setError - barchasi qo\'lda yozilar edi.' },
        { title: 'React Query', desc: 'isLoading va error avtomatik tarzda beriladi.' }
      ],
      actionsTitle: 'Shartli tekshiruvlar:',
      actions: [
        'if (isLoading) return <h1>Loading...</h1>;',
        'if (error) return <h1>Error!</h1>;'
      ]
    },
    {
      type: 'code',
      title: '7. Ma\'lumotni Ekranda Ko\'rsatish',
      text: 'React Query olingan ma\'lumotni cache\'ga saqlaydi va komponentda data orqali render qilinadi.',
      code: `return (
  <div>
    <h1>Books</h1>
    {data.map((book) => (
      <div key={book._id}>
        <h2>{book.nomi}</h2>
      </div>
    ))}
  </div>
);`
    },
    {
      type: 'code',
      title: '8. useMutation bilan Ma\'lumot Yaratish',
      text: 'POST, PUT, DELETE kabi ma\'lumot yozish amallari uchun useMutation ishlatiladi. useMutation avtomatik ishga tushmaydi, uning uchun mutate() funksiyasini chaqirish kerak.',
      code: `export async function createBook(book) {
  const response = await axios.post("https://booksbackend-3rhc.onrender.com/books", book);
  return response.data;
}

const mutation = useMutation({
  mutationFn: createBook,
});

// Mutate chaqiruvi:
mutation.mutate({
  nomi: "React",
  muallif: "Ali",
  sahifasi: 200,
  janr: "Programming",
});`
    },
    {
      type: 'code',
      title: '9. Cache va invalidateQueries',
      text: 'Mutation muvaffaqiyatli yakunlangach, onSuccess ichida invalidateQueries orqali cache eskiradi va ma\'lumotlar avtomatik qayta yuklanadi.',
      code: `const queryClient = useQueryClient();

const mutation = useMutation({
  mutationFn: createBook,
  onSuccess() {
    queryClient.invalidateQueries({
      queryKey: ["books"]
    });
  },
});`
    },
    {
      type: 'tasks',
      title: '10. Amaliyot Topshiriqlari',
      tasks: [
        'Loyihaga @tanstack/react-query kutubxonasini o\'rnating.',
        'main.jsx faylida QueryClient va QueryClientProvider\'ni sozlang.',
        'Service layer yaratib getBooks funksiyasini yozing.',
        'useQuery yordamida ma\'lumotlarni olib, avtomatik loading va error holatlarini boshqaring.',
        'useMutation va invalidateQueries yordamida yangi ma\'lumot qo\'shish hamda cache\'ni yangilashni amalga oshiring.'
      ]
    }
  ]
};