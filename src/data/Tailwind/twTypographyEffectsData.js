export const twTypographyEffectsData = {
  id: 'tw-typography-effects',
  tailwind: true,
  title: '7. Matn, fon, gradient va effektlar',
  heading: 'Tailwind: matn, fon, chegara, gradient va filtrlar',
  subheading: 'Hujjatning Typography, Backgrounds, Borders, Effects va Filters bo\'limlaridagi eng ko\'p kerak bo\'ladigan class lar.',
  sections: [
    {
      type: 'code',
      lang: 'markup',
      title: 'Typography (matn)',
      code: `<p class="font-sans text-base">Standart shrift</p>
<p class="font-serif italic">Serif, kursiv</p>
<p class="font-mono text-sm">Monospace (kod uchun)</p>

<p class="font-light">300</p>  <p class="font-medium">500</p>  <p class="font-bold">700</p>

<p class="leading-tight">Qatorlar zich</p>
<p class="leading-loose">Qatorlar keng</p>
<p class="tracking-wide uppercase">Harflar orasi kengaytirilgan</p>

<!-- Uzun matnni 3 qatorga qisqartirish ("..." bilan) -->
<p class="line-clamp-3">Juda uzun matn ...</p>

<!-- Bir qatorda kesish -->
<p class="truncate">Uzun sarlavha bir qatorda kesiladi</p>

<a class="underline decoration-sky-500 decoration-2 underline-offset-4">Bezakli chiziq</a>`
    },
    {
      type: 'code',
      lang: 'markup',
      title: 'Fon va gradient',
      text: 'Tailwind v4 da gradient uchun bg-linear-to-* class lari ishlatiladi (v3 dagi bg-gradient-to-* o\'rniga). Ranglar from-, via-, to- bilan beriladi.',
      code: `<div class="bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 p-8"></div>

<!-- Burchak va to'xtash joylari -->
<div class="bg-linear-65 from-purple-500 from-10% to-pink-500 to-90% p-8"></div>

<!-- Fon rasmi -->
<div class="bg-[url('/hero.jpg')] bg-cover bg-center h-64"></div>

<!-- Matnni gradient rangda -->
<h1 class="bg-linear-to-r from-sky-400 to-emerald-400 bg-clip-text text-5xl font-extrabold text-transparent">
  Gradient matn
</h1>`
    },
    {
      type: 'code',
      lang: 'markup',
      title: 'Chegara, outline va ring',
      code: `<div class="border border-gray-300"></div>
<div class="border-b-2 border-sky-500"></div>        <!-- faqat pastki -->
<div class="divide-y divide-gray-200">                <!-- bolalar orasida chiziq -->
  <p>Birinchi</p><p>Ikkinchi</p><p>Uchinchi</p>
</div>

<button class="outline-2 outline-offset-2 outline-sky-500">Outline</button>
<button class="ring-2 ring-sky-500">Ring (soya shaklidagi halqa)</button>`
    },
    {
      type: 'code',
      lang: 'markup',
      title: 'Soya, shaffoflik, filtrlar',
      code: `<div class="shadow-sm">kichik</div>
<div class="shadow-lg shadow-sky-500/30">rangli soya</div>
<div class="opacity-50">yarim shaffof</div>

<img class="grayscale hover:grayscale-0 transition" src="rasm.jpg" alt="" />
<img class="blur-sm brightness-75" src="rasm.jpg" alt="" />

<!-- Shisha effekti -->
<div class="backdrop-blur-md bg-white/20 rounded-xl p-6">Shaffof panel</div>`
    },
    {
      type: 'visual',
      visual: 'effects',
      title: 'Gradient va soya laboratoriyasi',
      text: 'Qiymatlarni o\'zgartirib, tayyor CSS ni oling. Tailwind da shu qiymatlar bg-linear-*, from-/to-, shadow-*, rounded-* class lariga mos keladi.'
    },
    {
      type: 'rule',
      title: 'Tailwind v4 da nomlar o\'zgargan',
      points: [
        'shadow-sm → shadow-xs, shadow → shadow-sm (v3 dan keyin kichraytirilgan)',
        'rounded-sm → rounded-xs, rounded → rounded-sm; blur-sm → blur-xs, blur → blur-sm',
        'outline-none → outline-hidden; ring (3px) → ring-3 (endi oddiy ring 1px)',
        'Eski nomlar ham hozircha ishlaydi, lekin yangi loyihada yangi nomlarni yozing'
      ],
      rule: 'Eski darslik yoki Stack Overflow dagi kodni ko\'chirganda versiyaga e\'tibor bering: v3 va v4 nomlari farq qilishi mumkin.'
    },
    {
      type: 'tasks',
      title: 'Amaliyot mashqlari',
      tasks: [
        'bg-linear-to-r bilan 3 rangli gradient hero yarating',
        'Gradient rangli sarlavha (bg-clip-text) qiling',
        'line-clamp-2 bilan uzun tavsifni 2 qatorga qisqartiring',
        'backdrop-blur bilan shisha effektli karta yarating'
      ]
    },
    {
      type: 'list',
      title: 'Hujjat',
      points: [
        'https://tailwindcss.com/docs/background-image',
        'https://tailwindcss.com/docs/box-shadow',
        'https://tailwindcss.com/docs/filter'
      ]
    }
  ]
};
