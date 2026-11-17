export const twLayoutData = {
  id: 'tw-layout',
  tailwind: true,
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
      type: 'challenge',
      lang: 'html',
      title: 'Mini vazifa: navbar (Tailwind)',
      story: "Saytda navigatsiya paneli kerak: logo chapda, havolalar o'ngda, hamma vertikal o'rtada, ichki bo'shliq 16px.",
      task: 'div ga flex, justify-between, items-center va p-4 class larini bering.',
      starter: `<nav class="">
  <span class="font-bold">Logo</span>
  <div>Bosh · Haqida · Aloqa</div>
</nav>`,
      tests: [
        { name: 'flex', expr: "getComputedStyle(document.querySelector('nav')).display === 'flex'" },
        { name: 'justify-between', expr: "getComputedStyle(document.querySelector('nav')).justifyContent === 'space-between'" },
        { name: 'items-center', expr: "getComputedStyle(document.querySelector('nav')).alignItems === 'center'" },
        { name: 'p-4 (16px)', expr: "getComputedStyle(document.querySelector('nav')).paddingTop === '16px'" }
      ],
      hint: 'class="flex justify-between items-center p-4"',
      solution: `<nav class="flex justify-between items-center p-4 bg-gray-100">
  <span class="font-bold">Logo</span>
  <div>Bosh · Haqida · Aloqa</div>
</nav>`
    },
    {
      type: 'playground',
      lang: 'html',
      title: 'Tajriba: Tailwind bilan kartochka',
      text: "Class larni o'zgartiring: rang, soya, burchak, o'lcham.",
      code: `<div class="max-w-sm rounded-2xl bg-white p-6 shadow-xl">
  <h3 class="text-xl font-bold text-gray-800">Tailwind kartochka</h3>
  <p class="mt-2 text-gray-500">Class larni o'zgartirib ko'ring!</p>
  <button class="mt-4 rounded-lg bg-emerald-500 px-4 py-2 font-semibold text-white hover:bg-emerald-600">Boshlash</button>
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
