export const twCustomizeData = {
  id: 'tw-customize',
  title: '5. Sozlash: tema, @apply, animatsiya',
  heading: 'Tailwind ni o\'zingizga moslash',
  subheading: 'Ranglar, shriftlar, o\'z class lar va animatsiyalar bilan ishlash.',
  sections: [
    {
      type: 'code',
      lang: 'css',
      title: 'Tema o\'zgaruvchilari (@theme)',
      text: 'Tailwind v4 da sozlash to\'g\'ridan-to\'g\'ri CSS faylda @theme bilan qilinadi. Qo\'shilgan qiymatlar avtomatik class larga aylanadi.',
      code: `@import "tailwindcss";

@theme {
  --color-brand: #e44d26;
  --color-brand-dark: #c23a17;
  --font-display: "Poppins", sans-serif;
  --breakpoint-3xl: 1920px;
}

/* Endi ishlatish mumkin: bg-brand, text-brand-dark, font-display, 3xl: */`
    },
    {
      type: 'code',
      lang: 'markup',
      title: 'O\'z ranglaringizni ishlatish',
      code: `<button class="bg-brand hover:bg-brand-dark rounded px-4 py-2 font-display text-white">
  Brend tugma
</button>`
    },
    {
      type: 'code',
      lang: 'css',
      title: '@apply va @layer',
      text: 'Bir xil class to\'plami ko\'p takrorlansa, uni bitta nomga yig\'ish mumkin. Lekin oldin komponentga (React) ajratishni o\'ylab ko\'ring. Variantlar (hover:, md:) bilan ishlaydigan o\'z class ingiz uchun v4 da @utility ishlatiladi.',
      code: `@layer components {
  .btn-primary {
    @apply rounded-lg bg-sky-500 px-4 py-2 font-semibold text-white
           transition hover:bg-sky-600;
  }
}`
    },
    {
      type: 'code',
      lang: 'markup',
      title: 'Transition va animatsiya',
      code: `<!-- Silliq o'tish -->
<button class="transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">Ko'tariladi</button>

<!-- Tayyor animatsiyalar -->
<div class="animate-spin h-8 w-8 rounded-full border-4 border-sky-500 border-t-transparent"></div>
<span class="animate-pulse">Yuklanmoqda...</span>
<div class="animate-bounce">↓</div>

<!-- Transform -->
<div class="rotate-6 scale-110 skew-x-3">Aylangan va kattalashgan</div>`
    },
    {
      type: 'rule',
      title: 'Qachon nimadan foydalanish?',
      points: [
        'Bir marta ishlatiladigan stil — to\'g\'ridan-to\'g\'ri class',
        'Ko\'p joyda takrorlanadigan UI qismi — React komponent',
        'Rang va shrift kabi dizayn qiymatlari — @theme',
        '@apply — kamdan-kam, kerak bo\'lganda'
      ],
      rule: 'Takrorlanishni @apply bilan emas, komponent yaratib hal qiling.'
    },
    {
      type: 'tasks',
      title: 'Amaliyot mashqlari',
      tasks: [
        '@theme ga o\'zingizning brend rangingizni qo\'shing va ishlating',
        'Hover da ko\'tariladigan soyali kartochka yarating',
        'animate-spin bilan yuklanish indikatori yarating'
      ]
    }
  ]
};
