export const flexboxData = {
  id: 'flexbox',
  title: '7. Flexbox',
  heading: 'CSS Flexbox',
  subheading: 'Elementlarni bir o\'qda (qator yoki ustun) qulay joylashtirish.',
  sections: [
    {
      type: 'list',
      title: 'Flexbox nima?',
      text: 'Ota elementga display: flex berilsa, uning farzandlari "flex elementlar"ga aylanadi va oson tekislanadi.',
      points: [
        'Bir o\'lchamli maket: qator (row) yoki ustun (column)',
        'Navigatsiya, kartochkalar qatori, markazlash uchun ideal',
        'Ikki o\'q: asosiy (main axis) va ko\'ndalang (cross axis)'
      ]
    },
    {
      type: 'code',
      lang: 'css',
      title: 'Asosiy xususiyatlar (ota elementda)',
      code: `.container {
  display: flex;
  flex-direction: row;          /* row | column | row-reverse | column-reverse */
  justify-content: space-between; /* asosiy o'q bo'ylab */
  align-items: center;          /* ko'ndalang o'q bo'ylab */
  flex-wrap: wrap;              /* sig'masa keyingi qatorga */
  gap: 16px;                    /* elementlar orasi */
}`,
      html: `<style>.item{background:#e44d26;color:#fff;padding:14px 20px;border-radius:6px;font-weight:bold}.container{border:2px dashed #94a3b8;padding:8px}</style><div class="container"><div class="item">1</div><div class="item">2</div><div class="item">3</div></div>`
    },
    {
      type: 'comparison',
      title: 'justify-content qiymatlari',
      cards: [
        { title: 'flex-start / flex-end', subtitle: 'Boshiga / oxiriga', desc: 'Elementlar asosiy o\'qning boshida yoki oxirida to\'planadi.' },
        { title: 'center', subtitle: 'Markazga', desc: 'Elementlar o\'rtada joylashadi.' },
        { title: 'space-between / space-around', subtitle: 'Oraliq bo\'shliq', desc: 'Bo\'sh joy elementlar orasida teng taqsimlanadi.' }
      ]
    },
    {
      type: 'code',
      lang: 'css',
      title: 'Farzand elementlarda',
      code: `.item {
  flex: 1;              /* bo'sh joyni teng bo'lib oladi */
  /* flex: grow shrink basis  →  flex: 1 1 0 */
}

.item-wide {
  flex: 2;              /* boshqalardan 2 baravar keng */
}

.item-fixed {
  flex: 0 0 200px;      /* aniq 200px, kengaymaydi ham, qisqarmaydi ham */
}

.special {
  align-self: flex-end; /* faqat shu element boshqacha tekislanadi */
  order: -1;            /* tartibni o'zgartirish */
}`,
      html: `<style>.box{display:flex;gap:8px;border:2px dashed #94a3b8;padding:8px}.box div{background:#2965f1;color:#fff;padding:12px;border-radius:6px;text-align:center}</style><div class="box"><div class="item">flex: 1</div><div class="item-wide">flex: 2</div><div class="item-fixed">200px</div><div class="special">special</div></div>`
    },
    {
      type: 'code',
      lang: 'css',
      title: 'Misol: navigatsiya paneli',
      code: `.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  background: #1f2937;
}

.nav-links {
  display: flex;
  gap: 20px;
  list-style: none;
}`,
      html: `<ul class="nav-links"><li>Bosh</li><li>Haqida</li><li>Aloqa</li></ul>`
    },
    {
      type: 'code',
      lang: 'css',
      title: 'Elementni mukammal markazlash',
      text: 'Oldin og\'riqli vazifa bo\'lgan markazlash endi 3 qatorda:',
      code: `.center {
  display: flex;
  justify-content: center;  /* gorizontal */
  align-items: center;      /* vertikal */
  min-height: 100vh;
}`,
      html: `<style>.center{border:2px dashed #94a3b8;min-height:160px!important}.center div{background:#10b981;color:#fff;padding:12px 20px;border-radius:6px}</style><div class="center"><div>Markazda</div></div>`
    },
    {
      type: 'visual',
      visual: 'flexbox',
      title: "Flexbox o'yinchog'i",
      text: "Xususiyatlarni o'zgartiring va elementlar qanday joylashishini jonli kuzating."
    },
    {
      type: 'challenge',
      lang: 'css',
      title: 'Mini vazifa: navbar yasash',
      story: "Saytingiz tepasida navigatsiya paneli kerak: logo chap tomonda, havolalar o'ng tomonda, hammasi vertikal o'rtada.",
      task: "Flexbox yordamida .navbar ni to'g'ri joylashtiring, havolalar orasiga 20px masofa bering.",
      html: `<nav class="navbar"><div class="logo">MyLogo</div><div class="links"><a href="#">Bosh</a><a href="#">Haqida</a><a href="#">Aloqa</a></div></nav>`,
      starter: `/* flexbox yozing */
.navbar {

}

.links {

}
`,
      tests: [
        { name: '.navbar display: flex', expr: "getComputedStyle(document.querySelector('.navbar')).display === 'flex'" },
        { name: 'justify-content: space-between', expr: "getComputedStyle(document.querySelector('.navbar')).justifyContent === 'space-between'" },
        { name: 'align-items: center', expr: "getComputedStyle(document.querySelector('.navbar')).alignItems === 'center'" },
        { name: '.links ham flex', expr: "getComputedStyle(document.querySelector('.links')).display === 'flex'" },
        { name: 'havolalar orasi 20px', expr: "getComputedStyle(document.querySelector('.links')).columnGap === '20px'" }
      ],
      hint: 'Ikkala konteynerga display: flex bering; .links ga gap: 20px.',
      solution: `.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  background: #1f2937;
  color: #fff;
}
.links {
  display: flex;
  gap: 20px;
}`
    },
    {
      type: 'playground',
      lang: 'css',
      title: 'Tajriba: Flexbox ni boshqaring',
      text: "justify-content va align-items qiymatlarini o'zgartirib, elementlar joylashuvini kuzating.",
      html: `<div class="box"><div class="item">1</div><div class="item">2</div><div class="item">3</div></div>`,
      code: `.box {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  height: 160px;
  background: #0f172a;
}
.item {
  background: #e44d26;
  color: #fff;
  padding: 14px 20px;
  border-radius: 8px;
}`
    },
    {
      type: 'quiz',
      title: "Bilimingizni sinab ko'ring",
      questions: [
        {
          q: "Flex elementlarni asosiy o'q bo'ylab o'rtaga qo'yadigan xususiyat?",
          options: [
          'align-items: center',
          'justify-content: center',
          'text-align: center',
          'flex-wrap: center'
          ],
          answer: 1,
          explain: "justify-content asosiy o'q bo'ylab, align-items esa ko'ndalang o'q bo'ylab tekislaydi."
        }
      ]
    },
    {
      type: 'tasks',
      title: 'Amaliyot mashqlari',
      tasks: [
        'Logo chapda, havolalar o\'ngda bo\'lgan navbar yarating',
        'Uchta teng kenglikdagi kartochka qatorini flex: 1 bilan qiling',
        'Elementni sahifa markaziga joylashtiring',
        'flex-wrap va gap bilan moslashuvchan kartochkalar to\'plamini yarating'
      ]
    }
  ]
};
