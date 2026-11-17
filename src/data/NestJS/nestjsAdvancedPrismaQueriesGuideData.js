export const nestjsAdvancedPrismaQueriesGuideData = {
  id: 'nestjs-advanced-prisma-queries-guide',
  title: '8 Advanced Prisma Queries',
  heading: 'Search, Filter, Sort va Pagination',
  subheading: "Professional backend API yaratish uchun qidiruv, filtrlash, tartibga solish va sahifalash texnikalarini o'rganish.",
  sections: [
    {
      type: 'text',
      title: '1. Muammo: CRUD Nima Uchun Yetarli Emas?',
      text: "Agar database'da 500,000 ta mahsulot bo'lsa va `GET /products` barchasini birdan yuklasa, frontend juda sekin ishlaydi[cite: 37]. Amazon va OLX'da ma'lumotlar birdan yuklanmaydi — foydalanuvchi qidiruv (Search), filter (Filter), tartibga solish (Sort) va sahifalash (Pagination) orqali kerakli ma'lumotni oladi[cite: 37]."
    },
    {
      type: 'code',
      title: '2. Asos: Query Parameters (@Query)',
      text: "Backend URL orqali qo'shimcha ma'lumot olishi mumkin (masalan: `GET /products?search=iphone`, `GET /products?page=2`, `GET /products?limit=5`)[cite: 38]. Controller'da `@Query()` parametri URL'dagi qiymatlarni avtomatik o'qiydi va Service'ga uzatadi[cite: 38].",
      code: `// Controller misoli:
@Get()
getProducts(
  @Query('search') search?: string,
  @Query('minPrice') minPrice?: string,
  @Query('maxPrice') maxPrice?: string,
  @Query('sort') sort?: string,
  @Query('page') page?: string,
  @Query('limit') limit?: string,
) {
  return this.productsService.getProducts({ search, minPrice, maxPrice, sort, page, limit });
}`
    },
    {
      type: 'code',
      title: '3. Search: where + contains',
      text: "Prisma `where` yordamida matn bo'yicha filter qiladi[cite: 39]. `contains` matn ichidan qidirishni ta'minlasa, `mode: 'insensitive'` katta-kichik harf farqini yo'qotadi (iPhone = iphone)[cite: 39].",
      code: `// Service ichida qidiruv:
async getProducts(search?: string) {
  return this.prisma.product.findMany({
    where: {
      title: {
        contains: search,
        mode: 'insensitive', // Katta-kichik harfga e'tibor bermaydi
      },
    },
  });
}`
    },
    {
      type: 'text',
      title: '4. Search Turlari: contains, startsWith va endsWith',
      text: "• **contains** — matnning istalgan joyidan qidiradi (Pro → MacBook Pro, iPad Pro)[cite: 41].\n• **startsWith** — matn boshidan qidiradi (Mac → MacBook Air, MacBook Pro)[cite: 41].\n• **endsWith** — matn oxiridan qidiradi (Pro → MacBook Pro, iPad Pro)[cite: 41].\n*Qachon qaysi biri? contains umumiy qidiruv uchun, startsWith brend nomi uchun, endsWith esa model yoki kengaytma uchun ishlatiladi[cite: 41].*"
    },
    {
      type: 'code',
      title: '5. Filter: Narx Bo\'yicha Raqamli Filterlar',
      text: "Foydalanuvchi narx oralig'i bo'yicha filter qilishni xohlaganda `gt`, `gte`, `lt`, `lte` operatorlari ishlatiladi[cite: 44].",
      code: `// Raqamli operatorlar:
// gt  — Greater Than (>)
// gte — Greater or Equal (>=)
// lt  — Less Than (<)
// lte — Less or Equal (<=)

// Service ichida narx filtri:
price: {
  gte: minPrice ? Number(minPrice) : undefined,
  lte: maxPrice ? Number(maxPrice) : undefined,
}

// URL misoli: /products?minPrice=500&maxPrice=1500[cite: 46]`
    },
    {
      type: 'code',
      title: '6. Sort: Natijalarni Tartibga Solish (orderBy)',
      text: "Foydalanuvchi mahsulotlarni arzondan qimmatga yoki qimmatdan arzinga qarab saralashini ta'minlash uchun `orderBy` ishlatiladi[cite: 47].",
      code: `// URL misoli: /products?sort=asc yoki /products?sort=desc[cite: 47]

// Service ichida orderBy:
orderBy: {
  price: sort === 'desc' ? 'desc' : 'asc',
}

// asc  — Ascending (Eng arzon → Eng qimmat: 100, 300, 700)[cite: 47]
// desc — Descending (Eng qimmat → Eng arzon: 1200, 700, 300)[cite: 47]`
    },
    {
      type: 'code',
      title: '7. Pagination: Sahifalash (skip + take)',
      text: "Professional API hech qachon minglab ma'lumotlarni birdan yubormaydi[cite: 48]. `take` nechta element olinishini, `skip` esa nechta element tashlab yuborilishini belgilaydi[cite: 48].",
      code: `// URL misoli: /products?page=2&limit=5[cite: 49]

const currentPage = Number(page) || 1;
const take = Number(limit) || 5;
const skip = (currentPage - 1) * take;

// Prisma findMany ichida:
const products = await this.prisma.product.findMany({
  where: { ... },
  orderBy: { ... },
  skip,
  take,
});

-- page: hozirgi sahifa, limit: har sahifadagi mahsulotlar soni[cite: 48].`
    },
    {
      type: 'text',
      title: '8. To\'liq Production-Level URL So\'rovi',
      text: "Barcha texnikalarni bitta so'zda birlashtirish:\n`GET /products?search=iphone&minPrice=500&maxPrice=3000&sort=desc&page=2&limit=5`[cite: 50]\nUshbu so'rov orqali tizim matnni qidiradi, ko'rsatilgan narx oralig'ida filtrlaydi, kamayish tartibida saralaydi va kerakli sahifa natijalarini qaytaradi[cite: 50]."
    },
    {
      type: 'comparison',
      title: '9. Yakuniy Xulosalar va Arxiv',
      text: "Advanced Prisma Queries bo'yicha asosiy vositalar va xulosalar[cite: 50].",
      cards: [
        {
          title: '@Query()',
          subtitle: 'URL qiymatlari',
          desc: "Query parametrlarni o'qib Controller'ga uzatadi[cite: 50]."
        },
        {
          title: 'where + contains',
          subtitle: 'Matnli qidiruv',
          desc: "Hissiz (insensitive) rejimda matn ichidan qidiradi[cite: 50]."
        },
        {
          title: 'gt, gte, lt, lte',
          subtitle: 'Raqamli filter',
          desc: "Narx va boshqa raqamli qiymatlar bo'yicha chegaralaydi[cite: 50]."
        },
        {
          title: 'skip + take',
          subtitle: 'Pagination',
          desc: "Sahifalash orqali server yuklamasini keskin kamaytiradi[cite: 50]."
        }
      ],
      actionsTitle: 'Natija:',
      actions: [
        "Endi siz Amazon, Instagram va Netflix kabi production darajasidagi API'larni bemalol qura olasiz[cite: 50]!"
      ]
    }
  ]
};