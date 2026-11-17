export const twLayoutData = {
  id: 'tw-layout',
  title: '3. Flex va Grid',
  heading: 'Tailwind da maket: Flex va Grid',
  subheading: 'Flexbox va Grid xususiyatlari oddiy class lar bilan.',
  sections: [
    {
      type: 'code',
      lang: 'markup',
      title: 'Flex',
      text: 'flex yozsangiz, ota element flex konteynerga aylanadi. Qolgan sozlamalar — qisqa class lar.',
      code: `<div class="flex items-center justify-between gap-4">
  <div>Chap</div>
  <div>O'rta</div>
  <div>O'ng</div>
</div>

<div class="flex flex-col gap-2">Ustun bo'ylab</div>
<div class="flex flex-wrap gap-4">Sig'masa keyingi qatorga</div>
<div class="flex h-screen items-center justify-center">To'liq markazlash</div>

<!-- Farzand -->
<div class="flex">
  <aside class="w-64 shrink-0">Yon panel</aside>
  <main class="flex-1">Qolgan butun joy</main>
</div>`
    },
    {
      type: 'comparison',
      title: 'Flex class lari',
      cards: [
        { title: 'justify-*', subtitle: 'justify-center, justify-between', desc: 'Asosiy o\'q bo\'ylab joylashuv (start, center, end, between, around).' },
        { title: 'items-*', subtitle: 'items-center, items-start', desc: 'Ko\'ndalang o\'q bo\'ylab tekislash (start, center, end, stretch).' },
        { title: 'flex-1, shrink-0', subtitle: 'Farzandlarda', desc: 'flex-1 — qolgan joyni egallaydi, shrink-0 — qisqarmaydi.' }
      ]
    },
    {
      type: 'code',
      lang: 'markup',
      title: 'Grid',
      code: `<div class="grid grid-cols-3 gap-4">
  <div>1</div><div>2</div><div>3</div>
</div>

<!-- Elementni cho'zish -->
<div class="grid grid-cols-4 gap-4">
  <div class="col-span-2">2 ustun</div>
  <div>1</div>
  <div>1</div>
</div>

<!-- Ekran kengligiga qarab ustunlar soni -->
<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
  ...
</div>`
    },
    {
      type: 'visual',
      visual: 'flexbox',
      title: 'Flex ni jonli sinab ko\'ring',
      text: 'Bu demo oddiy CSS qiymatlarini ko\'rsatadi; Tailwind da ular justify-*, items-*, flex-col kabi class larga mos keladi.'
    },
    {
      type: 'code',
      lang: 'markup',
      title: 'Konteyner va markazlash',
      code: `<div class="mx-auto max-w-5xl px-4">
  <!-- 1024px gacha kenglikdagi, markazlashtirilgan sahifa tarkibi -->
</div>

<nav class="sticky top-0 z-10 bg-white shadow">Yopishqoq navbar</nav>
<div class="relative">
  <span class="absolute right-2 top-2">Burchakdagi belgi</span>
</div>`
    },
    {
      type: 'tasks',
      title: 'Amaliyot mashqlari',
      tasks: [
        'Logo chapda, havolalar o\'ngda bo\'lgan navbar yarating',
        '3 ustunli kartochkalar gridi, mobilda 1 ustun bo\'lsin',
        'Yon panel (w-64) va asosiy qismdan iborat maket tuzing',
        'Sahifa ichidagi elementni to\'liq markazga qo\'ying'
      ]
    }
  ]
};
