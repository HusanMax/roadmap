export const twResponsiveStatesData = {
  id: 'tw-responsive-states',
  title: '4. Responsive, hover va dark mode',
  heading: 'Variantlar: responsive, holatlar va qorong\'u rejim',
  subheading: 'Class oldiga prefiks qo\'yib, faqat ma\'lum sharoitda ishlashini belgilash.',
  sections: [
    {
      type: 'list',
      title: 'Variant nima?',
      text: 'Variant — class oldiga qo\'yiladigan prefiks va ikki nuqta: md:flex, hover:bg-sky-600. Class faqat shart bajarilganda ishlaydi.',
      points: [
        'Responsive: sm:, md:, lg:, xl:, 2xl: — ekran shu kenglikdan katta bo\'lsa',
        'Holat: hover:, focus:, active:, disabled:',
        'Qorong\'u rejim: dark:',
        'Ro\'yxat: first:, last:, odd:, even:'
      ]
    },
    {
      type: 'comparison',
      title: 'Breakpoint lar (standart)',
      cards: [
        { title: 'sm:', subtitle: '640px dan', desc: 'Katta telefon va undan yuqori.' },
        { title: 'md: / lg:', subtitle: '768px / 1024px', desc: 'Planshet va kichik noutbuk.' },
        { title: 'xl: / 2xl:', subtitle: '1280px / 1536px', desc: 'Katta ekranlar.' }
      ]
    },
    {
      type: 'code',
      lang: 'markup',
      title: 'Mobile-first yozish',
      text: 'Prefikssiz class — hamma ekranda (mobil asosiy). Prefiksli class — shu o\'lchamdan boshlab.',
      code: `<!-- Mobilda ustun, md dan boshlab qator -->
<div class="flex flex-col gap-4 md:flex-row">
  <div class="w-full md:w-1/3">Yon panel</div>
  <div class="w-full md:w-2/3">Asosiy</div>
</div>

<!-- Matn o'lchami ekranga qarab -->
<h1 class="text-2xl sm:text-4xl lg:text-6xl font-bold">Sarlavha</h1>

<!-- Mobilda yashirin, kompyuterda ko'rinadi -->
<nav class="hidden md:block">Menyu</nav>
<button class="md:hidden">☰</button>`
    },
    {
      type: 'visual',
      visual: 'responsive',
      title: 'Ekran kengligini o\'zgartiring',
      text: 'Slayderni suring: sm/md/lg breakpoint larda maket o\'zgarishini ko\'rasiz.'
    },
    {
      type: 'code',
      lang: 'markup',
      title: 'Holat variantlari',
      code: `<button class="rounded bg-sky-500 px-4 py-2 text-white
               transition hover:bg-sky-600 active:scale-95
               focus:outline-none focus:ring-2 focus:ring-sky-300
               disabled:opacity-50 disabled:cursor-not-allowed">
  Yuborish
</button>

<input class="border border-gray-300 p-2 focus:border-sky-500" />

<!-- group: ota ustiga kelganda bolaga ta'sir -->
<div class="group rounded border p-4 hover:bg-sky-50">
  <p class="text-gray-600 group-hover:text-sky-700">Karta ustiga keling</p>
</div>`
    },
    {
      type: 'code',
      lang: 'markup',
      title: 'Qorong\'u rejim (dark mode)',
      text: 'Standartda dark: varianti qurilma sozlamasiga (prefers-color-scheme) qarab ishlaydi.',
      code: `<div class="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
  <h2 class="text-xl font-bold">Sarlavha</h2>
  <p class="text-gray-600 dark:text-gray-400">Matn har ikki rejimda o'qiladi</p>
</div>`
    },
    {
      type: 'tasks',
      title: 'Amaliyot mashqlari',
      tasks: [
        'Mobilda 1 ustun, planshetda 2, kompyuterda 4 ustunli kartochkalar',
        'Tugmaga hover, active va focus holatlarini qo\'shing',
        'Mobilda hamburger tugma, kompyuterda to\'liq menyu ko\'rsating',
        'Sahifaga dark: variantlari bilan qorong\'u rejim qo\'shing'
      ]
    }
  ]
};
