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
      type: 'challenge',
      lang: 'css',
      title: 'Mini vazifa: mobil va kompyuter uchun maket',
      story: "Do'kon sayti telefonda bitta ustunda, kengligi 600px dan katta ekranlarda esa 3 ta ustunda ko'rinishi kerak.",
      task: "Media query yozing: min-width: 600px bo'lganda .products 3 ustunli bo'lsin (asosiy holat 1 ustun).",
      html: `<style>.products div{background:#10b981;color:#fff;padding:24px;border-radius:8px;text-align:center}</style><div class="products"><div>Mahsulot 1</div><div>Mahsulot 2</div><div>Mahsulot 3</div></div>`,
      starter: `.products {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
}

/* media query qo'shing */
`,
      tests: [
        { name: '@media (min-width: 600px) yozilgan', expr: "Array.from(document.styleSheets).some(function(s){return Array.from(s.cssRules).some(function(r){return r.media && /min-width:\\s*600px/.test(r.media.mediaText);});})" },
        { name: "Keng ekranda .products 3 ustunli bo'ladi", expr: "(function(){ var ok=false; Array.from(document.styleSheets).forEach(function(s){ Array.from(s.cssRules).forEach(function(r){ if(r.media && /min-width:\\s*600px/.test(r.media.mediaText)){ Array.from(r.cssRules).forEach(function(q){ var g=q.style && q.style.gridTemplateColumns; if(q.selectorText==='.products' && g && (/repeat\\(\\s*3/.test(g) || g.trim().split(/\\s+/).length===3)) ok=true; }); } }); }); return ok; })()" },
        { name: 'Asosiy holatda 1 ustun qoladi', expr: "Array.from(document.styleSheets).some(function(s){return Array.from(s.cssRules).some(function(r){return r.selectorText==='.products' && /^1fr$/.test(r.style.gridTemplateColumns.trim());});})" }
      ],
      hint: '@media (min-width: 600px) { .products { grid-template-columns: repeat(3, 1fr); } }',
      solution: `.products {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
}

@media (min-width: 600px) {
  .products {
    grid-template-columns: repeat(3, 1fr);
  }
}`
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
