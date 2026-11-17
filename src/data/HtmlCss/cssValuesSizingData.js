export const cssValuesSizingData = {
  id: 'css-values-sizing',
  title: '16. Qiymatlar, birliklar va o\'lchamlar',
  heading: 'CSS qiymatlari, birliklari va o\'lchamlari',
  subheading: 'Elementlar o\'lchamini aniq, moslashuvchan va xavfsiz belgilash.',
  sections: [
    {
      type: 'comparison',
      title: 'Birliklar guruhlari',
      cards: [
        { title: 'Absolyut', subtitle: 'px', desc: 'Qat\'iy o\'lcham. Chegara, soya kabi mayda narsalar uchun yaxshi.' },
        { title: 'Nisbiy (shrift)', subtitle: 'rem, em, ch', desc: 'Shriftga bog\'liq. rem — ildiz shrifti, em — joriy element, ch — "0" belgisi kengligi.' },
        { title: 'Nisbiy (ekran)', subtitle: '%, vw, vh, dvh', desc: 'Ota yoki ekran o\'lchamiga bog\'liq. dvh — mobil brauzer paneliga moslashadi.' }
      ]
    },
    {
      type: 'code',
      lang: 'css',
      title: 'Hisoblash funksiyalari',
      text: 'calc() turli birliklarni birga hisoblaydi, min/max/clamp esa qiymatni chegaralaydi.',
      code: `.sidebar { width: calc(100% - 280px); }       /* aralash birliklar */

.box {
  width: min(90%, 600px);                       /* ikkitasidan kichigi */
  height: max(200px, 30vh);                     /* ikkitasidan kattasi */
}

h1 {
  font-size: clamp(1.8rem, 4vw + 1rem, 3.5rem); /* min, ideal, max */
}

.hero { min-height: 100dvh; }`
    },
    {
      type: 'code',
      lang: 'css',
      title: 'Element o\'lchamini boshqarish',
      code: `.card {
  width: 300px;           /* aniq */
  max-width: 100%;        /* ota elementdan kengaymasin */
  min-height: 200px;      /* kamida shuncha */
  aspect-ratio: 16 / 9;   /* nisbatni saqlash */
}

.fit { width: fit-content; }   /* kontentga mos */
.stretch { width: 100%; }

img { max-width: 100%; height: auto; }`,
      html: `<div class="card" style="background:#e0f2fe">.card: 300px, 16/9</div>`
    },
    {
      type: 'code',
      lang: 'css',
      title: 'Overflow — sig\'masa nima bo\'ladi?',
      text: 'Kontent qutidan katta bo\'lib qolganda overflow xususiyati hal qiladi.',
      code: `.box { height: 120px; }

.a { overflow: visible; }   /* tashqariga chiqib ketadi (odatiy) */
.b { overflow: hidden; }    /* kesib tashlanadi */
.c { overflow: auto; }      /* kerak bo'lsa scroll chiqadi */
.d { overflow-y: auto; overflow-x: hidden; }

/* Uzun matnni "..." bilan qisqartirish */
.title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}`,
      html: `<style>.box{width:100%;border:1px solid #94a3b8;margin-bottom:6px;padding:4px}</style><div class="box a">overflow: visible — juda uzun matn qutidan tashqariga chiqib ketishi mumkin, balandlik cheklangan. Uzun matn uzun matn uzun matn uzun matn.</div><div class="box b">overflow: hidden — ortiqcha matn kesiladi. Uzun matn uzun matn uzun matn uzun matn uzun matn uzun matn.</div><div class="box c">overflow: auto — scroll chiqadi. Uzun matn uzun matn uzun matn uzun matn uzun matn uzun matn uzun matn.</div><div class="title" style="width:200px">Juda uzun sarlavha bir qatorga sig'maydi</div>`
    },
    {
      type: 'rule',
      title: 'Qaysi birlikni tanlash?',
      points: [
        'Matn o\'lchami: rem (foydalanuvchi brauzer sozlamasiga mos keladi)',
        'Kenglik: % yoki max-width bilan, qat\'iy px dan qoching',
        'Chegara, soya, mayda ofsetlar: px',
        'Balandlik: iloji boricha berilmaydi — kontent o\'zi aniqlasin'
      ],
      rule: 'Balandlikni qat\'iy bermang: kontent ko\'paysa, u overflow qilib sahifani buzadi.'
    },
    {
      type: 'tasks',
      title: 'Amaliyot mashqlari',
      tasks: [
        'Sarlavha uchun clamp() bilan moslashuvchan shrift yozing',
        'calc() bilan yon panel (280px) va qolgan joyni egallovchi asosiy qism yarating',
        'aspect-ratio bilan 16:9 video konteyner yarating',
        'Uzun sarlavhani text-overflow: ellipsis bilan qisqartiring'
      ]
    },
    {
      type: 'list',
      title: 'Qo\'shimcha o\'qish (MDN)',
      points: [
        'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Values_and_units',
        'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Sizing',
        'https://developer.mozilla.org/en-US/docs/Web/CSS/overflow'
      ]
    }
  ]
};
