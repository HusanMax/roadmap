export const twUtilitiesData = {
  id: 'tw-utilities',
  tailwind: true,
  title: '2. Utility class lar: o\'lcham, rang, matn',
  heading: 'Asosiy utility class lar',
  subheading: 'Spacing, o\'lcham, rang, shrift va chegara bilan ishlash.',
  sections: [
    {
      type: 'list',
      title: 'O\'lchov tizimi',
      text: 'Tailwind da raqam 0.25rem (4px) ga teng: p-1 = 4px, p-2 = 8px, p-4 = 16px, p-8 = 32px.',
      points: [
        'p-4 — to\'rt tomondan padding; px-4 — chap-o\'ng; py-2 — yuqori-past; pt-2, pr-2, pb-2, pl-2',
        'm-4, mx-auto, my-2, mt-6 — margin (mx-auto elementni markazlaydi)',
        'w-64, h-32 — aniq o\'lcham; w-full — 100%; w-1/2 — yarmi; max-w-md — maksimal kenglik',
        'space-x-4, space-y-2 — bolalar orasidagi masofa (gap-4 ham mumkin)'
      ]
    },
    {
      type: 'code',
      lang: 'markup',
      title: 'Matn va ranglar',
      code: `<p class="text-lg font-semibold text-gray-700">O'rtacha, yarim qalin</p>
<p class="text-sm text-gray-500 italic">Kichik, kursiv</p>
<h2 class="text-4xl font-extrabold tracking-tight text-center">Katta sarlavha</h2>
<p class="uppercase leading-relaxed">Qatorlar orasi kengroq</p>
<a class="text-sky-600 underline hover:text-sky-800" href="#">Havola</a>

<!-- Rang: rang-nomi-ochlik (50 dan 950 gacha) -->
<div class="bg-sky-500 text-white">Fon va matn rangi</div>
<div class="bg-red-100 text-red-700 border border-red-300">Ogohlantirish</div>
<div class="bg-sky-500/50">Yarim shaffof fon (/50)</div>`
    },
    {
      type: 'code',
      lang: 'markup',
      title: 'Chegara, burchak, soya',
      code: `<div class="border border-gray-300 rounded-lg">Yumaloq chegara</div>
<div class="border-2 border-dashed border-sky-500 rounded-xl">Punktir</div>
<img class="w-20 h-20 rounded-full object-cover" src="avatar.jpg" alt="" />
<div class="shadow-md">O'rtacha soya</div>
<div class="shadow-xl rounded-2xl">Katta soya</div>
<button class="ring-2 ring-sky-500 ring-offset-2">Halqa</button>`
    },
    {
      type: 'visual',
      visual: 'tailwindPlayground',
      title: 'Class larni yoqib-o\'chirib ko\'ring',
      text: 'Tugmalarni bosing: har bir class qutiga qanday ta\'sir qilishini ko\'ring.'
    },
    {
      type: 'rule',
      title: 'Eslab qoling',
      points: [
        'Class nomlari qisqa va izchil: m (margin), p (padding), w (width), h (height), text, bg, border',
        'Yo\'nalish harflari: t (top), r (right), b (bottom), l (left), x (gorizontal), y (vertikal)',
        'Ixtiyoriy qiymat kerak bo\'lsa kvadrat qavs: w-[300px], bg-[#1da1f2]'
      ],
      rule: 'Raqam ko\'paygan sari o\'lcham ham ko\'payadi: 4 → 16px, 8 → 32px, 16 → 64px.'
    },
    {
      type: 'tasks',
      title: 'Amaliyot mashqlari',
      tasks: [
        'Kartochka yarating: padding, yumaloq burchak, soya, oq fon',
        'Dumaloq avatar rasm yarating (w-20 h-20 rounded-full)',
        'Xabar qutilari: muvaffaqiyat (yashil), xato (qizil), ogohlantirish (sariq)',
        'w-[342px] kabi ixtiyoriy qiymatni sinab ko\'ring'
      ]
    }
  ]
};
