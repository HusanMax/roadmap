export const gridData = {
  id: 'grid',
  title: '8. CSS Grid',
  heading: 'CSS Grid',
  subheading: 'Qator va ustunlardan iborat ikki o\'lchamli maketlar.',
  sections: [
    {
      type: 'comparison',
      title: 'Flexbox va Grid farqi',
      cards: [
        { title: 'Flexbox', subtitle: 'Bir o\'lchamli', desc: 'Faqat qator yoki ustun bo\'ylab. Kontentga qarab moslashadi.' },
        { title: 'Grid', subtitle: 'Ikki o\'lchamli', desc: 'Bir vaqtda qator va ustunlar. Maketga qarab joylashtiradi.' },
        { title: 'Birga', subtitle: 'Ko\'pincha ikkalasi', desc: 'Sahifa maketi — Grid, ichidagi elementlar tekislanishi — Flexbox.' }
      ]
    },
    {
      type: 'code',
      lang: 'css',
      title: 'Grid yaratish',
      text: 'fr — "fraction", bo\'sh joyning ulushi. repeat(3, 1fr) — uchta teng ustun.',
      code: `.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);   /* 3 ta teng ustun */
  grid-template-rows: auto;
  gap: 20px;
}

/* Aralash o'lchamlar */
.layout {
  display: grid;
  grid-template-columns: 250px 1fr;        /* yon panel 250px, qolgani asosiy */
}`
    },
    {
      type: 'code',
      lang: 'css',
      title: 'Elementni bir necha katakka cho\'zish',
      code: `.header {
  grid-column: 1 / -1;        /* birinchi ustundan oxirgisigacha */
}

.big {
  grid-column: span 2;        /* 2 ustun */
  grid-row: span 2;           /* 2 qator */
}`
    },
    {
      type: 'code',
      lang: 'css',
      title: 'grid-template-areas bilan maket',
      text: 'Sahifa maketini matn ko\'rinishida chizib chiqish mumkin:',
      code: `.page {
  display: grid;
  grid-template-columns: 220px 1fr;
  grid-template-rows: 70px 1fr 60px;
  grid-template-areas:
    "header  header"
    "sidebar main"
    "footer  footer";
  min-height: 100vh;
}

header  { grid-area: header; }
aside   { grid-area: sidebar; }
main    { grid-area: main; }
footer  { grid-area: footer; }`
    },
    {
      type: 'code',
      lang: 'css',
      title: 'Responsiv kartochkalar (media query siz)',
      text: 'auto-fit va minmax birgalikda ekran kengligiga qarab ustunlar sonini o\'zi tanlaydi:',
      code: `.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
}`
    },
    {
      type: 'visual',
      visual: 'grid',
      title: "Grid — jonli namuna",
      text: "Ustunlar soni va gap ni o'zgartiring, katakni cho'zib ko'ring."
    },
    {
      type: 'tasks',
      title: 'Amaliyot mashqlari',
      tasks: [
        '3x3 katakli grid yarating va gap bering',
        'header, sidebar, main, footer maketini grid-template-areas bilan tuzing',
        'Bitta kartochkani 2 ustunga cho\'zing',
        'auto-fit + minmax bilan 6 ta kartochka galereyasini yarating'
      ]
    }
  ]
};
