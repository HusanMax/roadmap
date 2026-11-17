export const twIntroData = {
  id: 'tw-intro',
  tailwind: true,
  title: '1. Tailwind nima va o\'rnatish',
  heading: 'Tailwind CSS: kirish va o\'rnatish',
  subheading: 'Utility-first CSS framework: stilni HTML ichidagi tayyor class lar bilan yozish.',
  sections: [
    {
      type: 'list',
      title: 'Tailwind CSS nima?',
      text: 'Tailwind — tayyor kichik "utility" class lar to\'plami. Alohida CSS fayl yozish o\'rniga, class larni to\'g\'ridan-to\'g\'ri elementga qo\'shasiz.',
      points: [
        'p-4 = padding, text-center = matnni markazlash, bg-sky-500 = fon rangi',
        'Class nomlari o\'ylab topilmaydi — tayyor tizim bor, tezroq ishlaysiz',
        'Ishlatilmagan class lar yakuniy CSS ga kirmaydi, fayl hajmi kichik bo\'ladi',
        'Dizayn tizimi (ranglar, o\'lchamlar) bir xil bo\'lgani uchun sayt izchil chiqadi'
      ]
    },
    {
      type: 'comparison',
      title: 'Oddiy CSS va Tailwind',
      cards: [
        { title: 'Oddiy CSS', subtitle: 'Alohida fayl', desc: 'Class nomi o\'ylab topiladi (.card), stil boshqa faylda yoziladi.' },
        { title: 'Tailwind', subtitle: 'HTML ichida', desc: 'Stil element yonida turadi, fayllar orasida o\'tish kerak emas.' },
        { title: 'Birga', subtitle: 'Mumkin', desc: 'Murakkab joylarda oddiy CSS ham ishlatsa bo\'ladi.' }
      ]
    },
    {
      type: 'code',
      lang: 'bash',
      title: 'Vite loyihasiga o\'rnatish',
      text: 'Tailwind v4 uchun alohida Vite plagini mavjud — sozlash juda oson.',
      code: `npm install tailwindcss @tailwindcss/vite`
    },
    {
      type: 'code',
      lang: 'jsx',
      title: 'vite.config.js ga plaginni qo\'shish',
      code: `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})`
    },
    {
      type: 'code',
      lang: 'css',
      title: 'CSS faylga ulash',
      text: 'Asosiy CSS fayl (masalan src/index.css) ning boshiga bitta qator yoziladi.',
      code: `@import "tailwindcss";`
    },
    {
      type: 'code',
      lang: 'markup',
      title: 'Birinchi ishlatish',
      code: `<h1 class="text-3xl font-bold text-sky-600 underline">
  Salom, Tailwind!
</h1>`
    },
    {
      type: 'list',
      title: 'Qulay vositalar',
      points: [
        'VS Code kengaytmasi "Tailwind CSS IntelliSense" — class lar bo\'yicha avtomatik to\'ldirish',
        'Prettier plugin: prettier-plugin-tailwindcss — class larni to\'g\'ri tartibda saralaydi',
        'Rasmiy hujjat: tailwindcss.com/docs — qidiruv orqali istalgan class ni topasiz'
      ]
    },
    {
      type: 'quiz',
      title: "Bilimingizni sinab ko'ring",
      questions: [
        {
          q: 'Tailwind v4 ni CSS faylga ulash uchun qaysi qator yoziladi?',
          options: [
          '@import "tailwindcss";',
          '@tailwind all;',
          'import tailwind',
          '@use tailwind'
          ],
          answer: 0,
          explain: 'v4 da bitta @import qatori yetarli.'
        },
        {
          q: "Tailwind ning asosiy g'oyasi nima?",
          options: [
          'Tayyor komponentlar (button, navbar)',
          "Kichik utility class larni elementga to'g'ridan-to'g'ri yozish",
          'Faqat JS bilan bezash',
          'Alohida CSS faylni majburiy qilish'
          ],
          answer: 1,
          explain: 'Utility-first: p-4, text-center, bg-sky-500 kabi kichik class lar.'
        }
      ]
    },
    {
      type: 'tasks',
      title: 'Amaliyot mashqlari',
      tasks: [
        'Yangi Vite loyiha oching va Tailwind ni o\'rnating',
        'h1 ga uchta turli class bering va natijani ko\'ring',
        'VS Code da IntelliSense kengaytmasini o\'rnating'
      ]
    },
    {
      type: 'list',
      title: 'Qo\'shimcha o\'qish',
      points: ['https://tailwindcss.com/docs/installation/using-vite']
    }
  ]
};
