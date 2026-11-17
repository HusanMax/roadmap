export const responsiveData = {
  id: 'responsive',
  title: '9. Responsive dizayn',
  heading: 'Responsive dizayn',
  subheading: 'Sayt telefonda, planshetda va kompyuterda bir xil yaxshi ko\'rinishi uchun.',
  sections: [
    {
      type: 'list',
      title: 'Responsive nima?',
      text: 'Responsive dizayn — sahifa ekran o\'lchamiga qarab moslashishi.',
      points: [
        'HTML <head> da viewport meta teg bo\'lishi shart',
        'Qat\'iy px o\'rniga %, rem, fr, max-width kabi moslashuvchan birliklar',
        'Mobile-first: avval telefon uchun yozib, keyin kattaroq ekranlar uchun kengaytiriladi'
      ]
    },
    {
      type: 'code',
      lang: 'markup',
      title: 'Viewport meta tegi',
      code: `<meta name="viewport" content="width=device-width, initial-scale=1.0" />`
    },
    {
      type: 'code',
      lang: 'css',
      title: 'Media query',
      text: 'Shart bajarilganda gina ishlaydigan CSS qoidalari. Mobile-first yondashuvda min-width ishlatiladi.',
      code: `/* Asosiy (mobil) stillar */
.cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

/* Planshet: 768px dan keng */
@media (min-width: 768px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Kompyuter: 1024px dan keng */
@media (min-width: 1024px) {
  .cards {
    grid-template-columns: repeat(4, 1fr);
  }
}`
    },
    {
      type: 'comparison',
      title: 'Odatiy breakpoint lar',
      cards: [
        { title: '< 768px', subtitle: 'Telefon', desc: 'Bitta ustun, hamburger menyu, katta bosiladigan tugmalar.' },
        { title: '768px – 1024px', subtitle: 'Planshet', desc: 'Ikki ustun, ixchamroq navigatsiya.' },
        { title: '> 1024px', subtitle: 'Kompyuter', desc: 'To\'liq maket: yon panel, 3–4 ustun.' }
      ]
    },
    {
      type: 'code',
      lang: 'css',
      title: 'Moslashuvchan o\'lcham texnikalari',
      code: `img { max-width: 100%; height: auto; }

.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}

/* Ekranga qarab o'zgaruvchi shrift: min, tavsiya, max */
h1 { font-size: clamp(1.8rem, 5vw, 3rem); }

/* Qorong'u rejim */
@media (prefers-color-scheme: dark) {
  body { background: #111; color: #eee; }
}`
    },
    {
      type: 'rule',
      title: 'Tekshirish',
      points: [
        'DevTools da (F12) "Toggle device toolbar" ni yoqib turli qurilmalarni sinang',
        'Tugmalar telefonda kamida 44px balandlikda bo\'lsin',
        'Gorizontal scroll chiqmasligini tekshiring'
      ],
      rule: 'Mobile-first: kichik ekrandan boshlang, kengayganda qoidalar qo\'shing — kod qisqa va tartibli bo\'ladi.'
    },
    {
      type: 'visual',
      visual: 'responsive',
      title: "Ekran kengligini o'zgartirib ko'ring",
      text: "Sliderni suring: breakpoint larda maket qanday o'zgaradi."
    },
    {
      type: 'tasks',
      title: 'Amaliyot mashqlari',
      tasks: [
        'Oldingi sahifangizga viewport meta tegini qo\'shing',
        '768px da navbar ni vertikaldan gorizontalga o\'zgartiring',
        'clamp() bilan moslashuvchan sarlavha yarating',
        'DevTools da iPhone va iPad o\'lchamlarida sinab ko\'ring'
      ]
    }
  ]
};
