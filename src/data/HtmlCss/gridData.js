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
}`,
      html: `<style>.grid div,.layout div{background:#2965f1;color:#fff;padding:18px;border-radius:6px;text-align:center}</style><div class="grid"><div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div></div>`
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
}`,
      html: `<style>.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.grid div{background:#10b981;color:#fff;padding:18px;border-radius:6px;text-align:center}</style><div class="grid"><div class="header">header: 1 / -1</div><div class="big">big: span 2</div><div>3</div><div>4</div><div>5</div></div>`
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
footer  { grid-area: footer; }`,
      html: `<style>.page{min-height:260px!important}.page>*{display:flex;align-items:center;justify-content:center;color:#fff;border-radius:4px;margin:0}header{background:#e44d26}aside{background:#2965f1}main{background:#10b981}footer{background:#a855f7}</style><div class="page"><header>header</header><aside>sidebar</aside><main>main</main><footer>footer</footer></div>`
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
}`,
      html: `<style>.cards div{background:#f59e0b;color:#fff;padding:24px;border-radius:8px;text-align:center}</style><div class="cards"><div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div></div>`
    },
    {
      type: 'visual',
      visual: 'grid',
      title: "Grid — jonli namuna",
      text: "Ustunlar soni va gap ni o'zgartiring, katakni cho'zib ko'ring."
    },
    {
      type: 'challenge',
      lang: 'css',
      title: 'Mini vazifa: rasmlar galereyasi',
      story: 'Fotograf portfoliosi uchun galereya kerak: 3 ustunli, rasmlar orasida 16px masofa.',
      task: 'Grid yordamida .gallery ni 3 ta teng ustunli qiling va gap bering.',
      html: `<style>.gallery div{background:#2965f1;color:#fff;padding:30px;border-radius:8px;text-align:center}</style><div class="gallery"><div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div></div>`,
      starter: `/* grid yozing */
.gallery {

}
`,
      tests: [
        { name: 'display: grid', expr: "getComputedStyle(document.querySelector('.gallery')).display === 'grid'" },
        { name: '3 ta ustun', expr: "(function(){var v=getComputedStyle(document.querySelector('.gallery')).gridTemplateColumns; var m=v.match(/repeat\\((\\d+)/); return m ? +m[1]===3 : v.trim().split(/\\s+/).length===3;})()" },
        { name: 'gap 16px', expr: "getComputedStyle(document.querySelector('.gallery')).rowGap === '16px'" }
      ],
      hint: 'display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;',
      solution: `.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}`
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
