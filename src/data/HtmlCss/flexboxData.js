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
}`
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
}`
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
}`
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
}`
    },
    {
      type: 'visual',
      visual: 'flexbox',
      title: "Flexbox o'yinchog'i",
      text: "Xususiyatlarni o'zgartiring va elementlar qanday joylashishini jonli kuzating."
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
