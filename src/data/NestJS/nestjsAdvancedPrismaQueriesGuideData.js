export const nestjsAdvancedPrismaQueriesGuideData = {
  id: 'nestjs-advanced-prisma-queries-guide',
  title: '8 Advanced Prisma Queries',
  heading: 'Search, Filter, Sort va Pagination',
  subheading: "Professional backend API yaratish uchun qidiruv, filtrlash, tartibga solish va sahifalash texnikalarini o'rganish.",
  sections: [
    {
      type: 'text',
      title: '1. Muammo: CRUD Nima Uchun Yetarli Emas?',
      text: "Agar database'da 500,000 ta mahsulot bo'lsa va `GET /products` barchasini birdan yuklasa, frontend juda sekin ishlaydi. Amazon va OLX'da ma'lumotlar birdan yuklanmaydi — foydalanuvchi qidiruv (Search), filter (Filter), tartibga solish (Sort) va sahifalash (Pagination) orqali kerakli ma'lumotni oladi."
    },
    {
      type: 'code',
      title: '2. Asos: Query Parameters (@Query)',
      text: "Backend URL orqali qo'shimcha ma'lumot olishi mumkin (masalan: `GET /products?search=iphone`, `GET /products?page=2`, `GET /products?limit=5`). Controller'da `@Query()` parametri URL'dagi qiymatlarni avtomatik o'qiydi va Service'ga uzatadi.",
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
      text: "Prisma `where` yordamida matn bo'yicha filter qiladi. `contains` matn ichidan qidirishni ta'minlasa, `mode: 'insensitive'` katta-kichik harf farqini yo'qotadi (iPhone = iphone).",
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
      text: "• **contains** — matnning istalgan joyidan qidiradi (Pro → MacBook Pro, iPad Pro).\n• **startsWith** — matn boshidan qidiradi (Mac → MacBook Air, MacBook Pro).\n• **endsWith** — matn oxiridan qidiradi (Pro → MacBook Pro, iPad Pro).\n*Qachon qaysi biri? contains umumiy qidiruv uchun, startsWith brend nomi uchun, endsWith esa model yoki kengaytma uchun ishlatiladi.*"
    },
    {
      type: 'code',
      title: '5. Filter: Narx Bo\'yicha Raqamli Filterlar',
      text: "Foydalanuvchi narx oralig'i bo'yicha filter qilishni xohlaganda `gt`, `gte`, `lt`, `lte` operatorlari ishlatiladi.",
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

// URL misoli: /products?minPrice=500&maxPrice=1500`
    },
    {
      type: 'code',
      title: '6. Sort: Natijalarni Tartibga Solish (orderBy)',
      text: "Foydalanuvchi mahsulotlarni arzondan qimmatga yoki qimmatdan arzinga qarab saralashini ta'minlash uchun `orderBy` ishlatiladi.",
      code: `// URL misoli: /products?sort=asc yoki /products?sort=desc

// Service ichida orderBy:
orderBy: {
  price: sort === 'desc' ? 'desc' : 'asc',
}

// asc  — Ascending (Eng arzon → Eng qimmat: 100, 300, 700)
// desc — Descending (Eng qimmat → Eng arzon: 1200, 700, 300)`
    },
    {
      type: 'code',
      title: '7. Pagination: Sahifalash (skip + take)',
      text: "Professional API hech qachon minglab ma'lumotlarni birdan yubormaydi. `take` nechta element olinishini, `skip` esa nechta element tashlab yuborilishini belgilaydi.",
      code: `// URL misoli: /products?page=2&limit=5

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

-- page: hozirgi sahifa, limit: har sahifadagi mahsulotlar soni.`
    },
    {
      type: 'text',
      title: '8. To\'liq Production-Level URL So\'rovi',
      text: "Barcha texnikalarni bitta so'zda birlashtirish:\n`GET /products?search=iphone&minPrice=500&maxPrice=3000&sort=desc&page=2&limit=5`\nUshbu so'rov orqali tizim matnni qidiradi, ko'rsatilgan narx oralig'ida filtrlaydi, kamayish tartibida saralaydi va kerakli sahifa natijalarini qaytaradi."
    },
    {
      type: 'comparison',
      title: '9. Yakuniy Xulosalar va Arxiv',
      text: "Advanced Prisma Queries bo'yicha asosiy vositalar va xulosalar.",
      cards: [
        {
          title: '@Query()',
          subtitle: 'URL qiymatlari',
          desc: "Query parametrlarni o'qib Controller'ga uzatadi."
        },
        {
          title: 'where + contains',
          subtitle: 'Matnli qidiruv',
          desc: "Hissiz (insensitive) rejimda matn ichidan qidiradi."
        },
        {
          title: 'gt, gte, lt, lte',
          subtitle: 'Raqamli filter',
          desc: "Narx va boshqa raqamli qiymatlar bo'yicha chegaralaydi."
        },
        {
          title: 'skip + take',
          subtitle: 'Pagination',
          desc: "Sahifalash orqali server yuklamasini keskin kamaytiradi."
        }
      ],
      actionsTitle: 'Natija:',
      actions: [
        "Endi siz Amazon, Instagram va Netflix kabi production darajasidagi API'larni bemalol qura olasiz!"
      ]
    }
  ]
};