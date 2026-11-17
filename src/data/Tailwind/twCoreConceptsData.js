export const twCoreConceptsData = {
  id: 'tw-core-concepts',
  tailwind: true,
  title: '9. Asosiy tushunchalar va v3 → v4',
  heading: 'Tailwind ning ishlash tamoyillari',
  subheading: 'Preflight, class lar qanday topiladi, dinamik class xatosi va eski versiyadan o\'tish.',
  sections: [
    {
      type: 'list',
      title: 'Preflight — boshlang\'ich stillar',
      text: 'Tailwind o\'z bazaviy reset stilini avtomatik qo\'shadi. Bu brauzerlar orasidagi farqlarni tekislaydi.',
      points: [
        'Sarlavhalar va abzatslardan standart o\'lcham va margin olib tashlanadi: h1 ham oddiy matn kabi ko\'rinadi',
        'Ro\'yxatlarda nuqta/raqam yo\'q (list-disc, list-decimal bilan qaytarish mumkin)',
        'Rasmlar block, border-box hamma elementda yoqilgan',
        'Shuning uchun matn o\'lchami va qalinligini o\'zingiz class bilan berasiz'
      ]
    },
    {
      type: 'code',
      lang: 'markup',
      title: 'Tailwind class larni qanday topadi',
      text: 'Tailwind fayllaringizni oddiy matn sifatida o\'qiydi va class nomiga o\'xshagan so\'zlarni qidiradi. U kodni tushunmaydi, shuning uchun to\'liq class nomi kodda yozilgan bo\'lishi kerak.',
      code: `<!-- XATO: to'liq nom kodda yo'q, CSS yaratilmaydi -->
<div class="text-{{ error ? 'red' : 'green' }}-600"></div>

<!-- TO'G'RI: to'liq nomlar yozilgan -->
<div class="{{ error ? 'text-red-600' : 'text-green-600' }}"></div>`
    },
    {
      type: 'code',
      lang: 'jsx',
      title: 'React da dinamik class',
      code: `// XATO: bg-\${color}-600 ni Tailwind topa olmaydi
function Button({ color }) {
  return <button className={\`bg-\${color}-600\`}>Tugma</button>
}

// TO'G'RI: to'liq class lar xaritasi
const colorVariants = {
  blue: 'bg-blue-600 hover:bg-blue-500 text-white',
  red: 'bg-red-500 hover:bg-red-400 text-white',
  yellow: 'bg-yellow-300 hover:bg-yellow-400 text-black',
}

function Button({ color, children }) {
  return <button className={'rounded px-4 py-2 ' + colorVariants[color]}>{children}</button>
}`
    },
    {
      type: 'code',
      lang: 'css',
      title: 'Kodda uchramaydigan class ni majburan qo\'shish',
      code: `@import "tailwindcss";
@source inline("underline");     /* "safelist" o'rniga v4 da shu ishlatiladi */`
    },
    {
      type: 'comparison',
      title: 'v3 dan v4 ga asosiy farqlar',
      cards: [
        { title: 'Import', subtitle: '@import "tailwindcss"', desc: 'Eski @tailwind base/components/utilities o\'rniga bitta qator.' },
        { title: 'Sozlash', subtitle: '@theme (CSS ichida)', desc: 'JS konfig fayli (tailwind.config.js) avtomatik o\'qilmaydi; qiymatlar CSS o\'zgaruvchi sifatida beriladi.' },
        { title: 'Nomlar', subtitle: 'bg-linear-*, shadow-xs', desc: 'Gradient, soya, blur va rounded nomlari o\'zgargan.' }
      ]
    },
    {
      type: 'list',
      title: 'Yangi versiyaga o\'tish',
      points: [
        'v4 brauzerlar talabi: Chrome 111+, Safari 16.4+, Firefox 128+; eskilari uchun v3.4 da qoling',
        'Avtomatik migratsiya: npx @tailwindcss/upgrade (Node.js 20+), yangi branch da ishga tushirib, o\'zgarishlarni ko\'zdan kechiring',
        'Muhim modifikator oxiriga yoziladi: flex! (eski !flex ham ishlaydi)',
        'Maxsus utility class: @utility yordamida e\'lon qilinadi',
        'Sass/Less/Stylus preprosessorlari v4 bilan qo\'llab-quvvatlanmaydi'
      ]
    },
    {
      type: 'code',
      lang: 'css',
      title: 'Maxsus utility va dizayn qiymatlari',
      code: `@import "tailwindcss";

@theme {
  --color-brand: oklch(0.65 0.2 35);
  --font-display: "Poppins", sans-serif;
}

/* O'z utility class ingiz: hover:, md: kabi variantlar bilan ishlaydi */
@utility content-auto {
  content-visibility: auto;
}

/* Arbitrary qiymatda CSS o'zgaruvchi: v4 da qavs bilan */
/* <div class="bg-(--brand-color)"> */`
    },
    {
      type: 'tasks',
      title: 'Amaliyot mashqlari',
      tasks: [
        'Dinamik class xatosini ataylab yarating va uni xarita (object) bilan tuzating',
        'Preflight tufayli h1 oddiy ko\'rinishini tekshiring va class bilan bezang',
        'Eski v3 loyihasida upgrade vositasini yangi branch da sinab ko\'ring',
        '@utility bilan o\'zingizning bitta class ingizni yarating'
      ]
    },
    {
      type: 'list',
      title: 'Hujjat',
      points: [
        'https://tailwindcss.com/docs/preflight',
        'https://tailwindcss.com/docs/detecting-classes-in-source-files',
        'https://tailwindcss.com/docs/upgrade-guide',
        'https://tailwindcss.com/docs/adding-custom-styles'
      ]
    }
  ]
};
