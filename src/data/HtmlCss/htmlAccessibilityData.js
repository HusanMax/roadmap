export const htmlAccessibilityData = {
  id: 'html-accessibility',
  title: '13. Accessibility va HTML xatolarini topish',
  heading: 'Accessibility (qulaylik) va HTML debugging',
  subheading: 'Sayt barcha foydalanuvchilar uchun, shu jumladan ekran o\'qigich va klaviatura bilan ishlaydiganlar uchun ham ishlashi kerak.',
  sections: [
    {
      type: 'list',
      title: 'Accessibility nima uchun kerak?',
      text: 'Foydalanuvchilarning bir qismi ko\'rish, eshitish yoki harakatlanishda qiyinchilikka ega. Ba\'zilari faqat klaviatura yoki ekran o\'qigich ishlatadi. Yaxshi HTML ularning ko\'pchiligiga qo\'shimcha kodsiz yordam beradi.',
      points: [
        'To\'g\'ri semantik teglar ishlating (button, nav, main, label...)',
        'Rasmlarga mazmunli alt matn yozing (bezak rasm uchun alt="")',
        'Forma maydonlarini label bilan bog\'lang',
        'Sarlavhalar tartibi mantiqiy bo\'lsin (h1 → h2 → h3)',
        'Havola matni tushunarli bo\'lsin: "Bu yerni bosing" emas, "Narxlar jadvalini ko\'rish"'
      ]
    },
    {
      type: 'code',
      lang: 'markup',
      title: 'Jadvalni qulay qilish',
      text: 'caption — jadval sarlavhasi, scope — sarlavha katak ustunga yoki qatorga tegishliligini bildiradi. Ekran o\'qigich shu orqali har bir katakni to\'g\'ri o\'qiydi.',
      code: `<table>
  <caption>2026-yil birinchi chorak savdosi (mln so'm)</caption>
  <thead>
    <tr>
      <th scope="col">Oy</th>
      <th scope="col">Daromad</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Yanvar</th>
      <td>120</td>
    </tr>
    <tr>
      <th scope="row">Fevral</th>
      <td>135</td>
    </tr>
  </tbody>
</table>`
    },
    {
      type: 'code',
      lang: 'markup',
      title: 'button va ARIA',
      text: 'Tugma uchun <button> ishlating — u klaviatura (Tab, Enter, Space) bilan o\'zi ishlaydi. div ni tugmaga aylantirish ko\'p qo\'shimcha kod talab qiladi. ARIA atributlari faqat standart teglar yetmaganda ishlatiladi.',
      code: `<!-- To'g'ri -->
<button type="button">Saqlash</button>

<!-- Matnsiz tugma: aria-label bilan nom beriladi -->
<button type="button" aria-label="Menyuni yopish">✕</button>

<!-- Dinamik xabar: o'zgarganda ekran o'qigich o'qib beradi -->
<div role="status" aria-live="polite">3 ta element saqlandi</div>

<!-- Ochiluvchi menyu holati -->
<button aria-expanded="false" aria-controls="menu">Menyu</button>
<ul id="menu" hidden>...</ul>`
    },
    {
      type: 'comparison',
      title: 'ARIA qoidalari',
      cards: [
        { title: '1-qoida', subtitle: 'Avval HTML', desc: 'Tayyor teg (button, nav, dialog) bor bo\'lsa, ARIA kerak emas.' },
        { title: '2-qoida', subtitle: 'Klaviatura', desc: 'Har bir interaktiv element Tab bilan fokus olishi va Enter/Space bilan ishlashi kerak.' },
        { title: '3-qoida', subtitle: 'Tekshiring', desc: 'Sayt bilan sichqonchasiz ishlab ko\'ring va ekran o\'qigich bilan sinang.' }
      ]
    },
    {
      type: 'list',
      title: 'HTML xatolarini topish (debugging)',
      points: [
        'W3C Markup Validator (validator.w3.org) — yopilmagan teg va noto\'g\'ri atributlarni ko\'rsatadi',
        'DevTools → Elements: brauzer HTML ni qanday tushunganini ko\'ring (brauzer ayrim xatolarni o\'zi tuzatadi)',
        'Odatiy xatolar: yopilmagan teg, noto\'g\'ri joylashtirish (p ichida div), takrorlangan id',
        'Lighthouse (DevTools) — accessibility ballini hisoblab, nimani tuzatish kerakligini aytadi'
      ]
    },
    {
      type: 'rule',
      title: 'Matn va rang',
      points: [
        'Matn va fon rangi orasidagi kontrast kamida 4.5:1 bo\'lishi tavsiya etiladi',
        'Ma\'noni faqat rang bilan bildirmang (masalan xatoni faqat qizil rang bilan)',
        'Fokus holatini (outline) yashirmang — klaviatura foydalanuvchisi qayerdaligini ko\'rishi kerak'
      ],
      rule: 'Yaxshi accessibility — hamma uchun qulay sayt, qidiruv tizimlari uchun ham tushunarli sayt.'
    },
    {
      type: 'tasks',
      title: 'Amaliyot mashqlari',
      tasks: [
        'Sahifangizni faqat Tab va Enter tugmalari bilan boshqarib ko\'ring',
        'Oldingi jadvalingizga caption va scope qo\'shing',
        'Sahifani W3C validatoridan o\'tkazing va xatolarni tuzating',
        'DevTools Lighthouse bilan Accessibility hisobotini oling'
      ]
    },
    {
      type: 'list',
      title: 'Qo\'shimcha o\'qish (MDN)',
      points: [
        'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility',
        'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA'
      ]
    }
  ]
};
