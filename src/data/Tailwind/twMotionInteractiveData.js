export const twMotionInteractiveData = {
  id: 'tw-motion-interactive',
  tailwind: true,
  title: '8. Transition, transform va interaktivlik',
  heading: 'Tailwind: animatsiya, transform va interaktivlik',
  subheading: 'Silliq o\'tish, siljitish, burish va kursor, scroll, tanlash kabi interaktiv sozlamalar.',
  sections: [
    {
      type: 'code',
      lang: 'markup',
      title: 'Transition',
      code: `<button class="bg-sky-500 transition duration-300 ease-in-out hover:bg-sky-700">
  Rang silliq o'zgaradi
</button>

<!-- Faqat ma'lum xususiyatni animatsiya qilish -->
<div class="transition-transform duration-500 hover:scale-110">Kattalashadi</div>
<div class="transition-opacity delay-150 hover:opacity-70">Kechikib xiralashadi</div>`
    },
    {
      type: 'code',
      lang: 'markup',
      title: 'Transform',
      code: `<div class="translate-x-4 -translate-y-2">Siljitish</div>
<div class="rotate-45">Burish</div>
<div class="scale-125">Kattalashtirish</div>
<div class="skew-y-3">Qiyshaytirish</div>
<div class="origin-top-left rotate-12">Burilish nuqtasi</div>

<!-- Ko'tariladigan karta -->
<div class="transition duration-300 hover:-translate-y-2 hover:shadow-xl">Karta</div>`
    },
    {
      type: 'code',
      lang: 'markup',
      title: 'Animatsiya',
      code: `<div class="size-8 animate-spin rounded-full border-4 border-sky-500 border-t-transparent"></div>
<span class="animate-pulse">Yuklanmoqda</span>
<span class="animate-bounce">↓</span>
<span class="animate-ping inline-flex h-3 w-3 rounded-full bg-sky-400"></span>`
    },
    {
      type: 'visual',
      visual: 'transition',
      title: 'Transition va animatsiyani sinab ko\'ring',
      text: 'Davomiylik va tezlik egri chizig\'i Tailwind da duration-*, ease-* class lariga mos keladi.'
    },
    {
      type: 'code',
      lang: 'markup',
      title: 'Interaktivlik class lari',
      code: `<button class="cursor-pointer">Pointer kursor</button>
<button class="cursor-not-allowed opacity-50" disabled>Taqiqlangan</button>

<p class="select-none">Matnni belgilab bo'lmaydi</p>
<div class="pointer-events-none">Bosishlarga javob bermaydi</div>

<input type="checkbox" class="accent-sky-500" />
<textarea class="resize-none"></textarea>

<!-- Silliq scroll va scroll snap -->
<html class="scroll-smooth"></html>
<div class="flex snap-x snap-mandatory gap-4 overflow-x-auto">
  <div class="w-64 shrink-0 snap-center">1</div>
  <div class="w-64 shrink-0 snap-center">2</div>
  <div class="w-64 shrink-0 snap-center">3</div>
</div>`
    },
    {
      type: 'rule',
      title: 'Yaxshi amaliyot',
      points: [
        'Animatsiya uchun transform va opacity ni afzal ko\'ring — tez ishlaydi',
        'Animatsiyani yoqtirmaydigan foydalanuvchilar uchun motion-reduce: variantidan foydalaning',
        'hover: ta\'siri v4 da faqat hover qo\'llab-quvvatlaydigan qurilmalarda ishlaydi (telefonda "yopishib qolmaydi")'
      ],
      rule: 'Masalan: animate-spin motion-reduce:animate-none — animatsiyani xohlamaganlar uchun o\'chiradi.'
    },
    {
      type: 'tasks',
      title: 'Amaliyot mashqlari',
      tasks: [
        'Hover da ko\'tariladigan va soyasi kattalashadigan karta yarating',
        'animate-spin bilan yuklanish ikonkasi yozing',
        'snap-x bilan gorizontal karusel yarating',
        'Tugmaga cursor-pointer, active:scale-95 va transition qo\'shing'
      ]
    },
    {
      type: 'list',
      title: 'Hujjat',
      points: [
        'https://tailwindcss.com/docs/transition-property',
        'https://tailwindcss.com/docs/animation',
        'https://tailwindcss.com/docs/scroll-snap-type'
      ]
    }
  ]
};
