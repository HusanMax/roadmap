export const boxModelData = {
  id: 'box-model',
  title: '6. Box Model va Display',
  heading: 'Box Model va Display',
  subheading: 'Har bir element — to\'rtburchak quti. Uning o\'lchamlari qanday hisoblanadi?',
  sections: [
    {
      type: 'list',
      title: 'Box Model qatlamlari',
      text: 'Ichkaridan tashqariga qarab:',
      points: [
        'Content — matn yoki rasm joylashgan asosiy qism',
        'Padding — kontent va chegara orasidagi ichki bo\'shliq',
        'Border — chegara chizig\'i',
        'Margin — elementning tashqi bo\'shlig\'i (boshqa elementlardan uzoqligi)'
      ]
    },
    {
      type: 'code',
      lang: 'css',
      title: 'Padding, border va margin',
      code: `.card {
  width: 300px;
  padding: 20px;                 /* to'rt tomondan */
  border: 2px solid #e44d26;
  margin: 16px auto;             /* yuqori-past 16px, yon tomonlar avto (markazlash) */
  border-radius: 12px;
}

/* Qisqa yozuv tartibi: yuqori, o'ng, past, chap (soat strelkasi bo'yicha) */
.box { padding: 10px 20px 10px 20px; }
.box2 { margin: 10px 20px; }       /* yuqori-past | chap-o'ng */`,
      html: `<div class="card">Kartochka</div><div class="box" style="background:#fde8e1">Box: padding 10px 20px</div>`
    },
    {
      type: 'code',
      lang: 'css',
      title: 'box-sizing: border-box',
      text: 'Odatda width faqat kontentni o\'lchaydi, padding va border ustiga qo\'shiladi. border-box esa ularni width ichiga kiritadi — hisoblash ancha oson.',
      code: `*,
*::before,
*::after {
  box-sizing: border-box;
}

.card {
  width: 300px;
  padding: 20px;
  border: 2px solid #333;
  /* Umumiy kenglik aynan 300px bo'ladi */
}`,
      html: `<div class="card" style="background:#e0f2fe">Umumiy kenglik aynan 300px</div>`
    },
    {
      type: 'comparison',
      title: 'display xususiyati',
      cards: [
        { title: 'block', subtitle: 'div, p, h1', desc: 'Yangi qatordan boshlanadi, butun kenglikni oladi, width/height ishlaydi.' },
        { title: 'inline', subtitle: 'span, a', desc: 'Qator ichida turadi, width va height ishlamaydi.' },
        { title: 'inline-block', subtitle: 'Ikkalasining aralashmasi', desc: 'Qator ichida turadi, lekin width/height berish mumkin.' }
      ]
    },
    {
      type: 'code',
      lang: 'css',
      title: 'Ko\'rinishni boshqarish',
      code: `.hidden { display: none; }          /* joyi ham yo'qoladi */
.invisible { visibility: hidden; }  /* joyi saqlanadi */

.box {
  width: 50%;
  max-width: 600px;
  min-height: 200px;
  overflow: auto;                   /* ortiqcha kontent uchun scroll */
}

img { max-width: 100%; height: auto; } /* rasm sig'maydi — kichrayadi */`
    },
    {
      type: 'rule',
      title: 'Margin collapse',
      points: [
        'Vertikal margin lar bir-birini "yutib" yuboradi: 30px va 20px o\'rtasida 50px emas, 30px bo\'ladi',
        'Gorizontal margin lar qo\'shiladi',
        'Margin manfiy bo\'lishi ham mumkin'
      ],
      rule: 'Brauzerda F12 (DevTools) ni oching: Box Model diagrammasi har bir qatlamni rang bilan ko\'rsatadi.'
    },
    {
      type: 'visual',
      visual: 'boxModel',
      title: "Box Model — jonli diagramma",
      text: "Sliderlarni suring: padding, border va margin elementning umumiy o'lchamiga qanday ta'sir qilishini ko'ring."
    },
    {
      type: 'tasks',
      title: 'Amaliyot mashqlari',
      tasks: [
        'Kartochka yarating: padding, border, border-radius, margin',
        'box-sizing: border-box yoqilganda va yoqilmaganda kenglikni solishtiring',
        'Bloklarni margin: 0 auto bilan markazlang',
        'DevTools da kartochkaning box modelini tekshiring'
      ]
    }
  ]
};
