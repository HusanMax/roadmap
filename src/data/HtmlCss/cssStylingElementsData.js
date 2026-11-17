export const cssStylingElementsData = {
  id: 'css-styling-elements',
  title: '18. Forma, jadval, rasmni bezash va DevTools',
  heading: 'Forma, jadval va rasmlarni bezash, CSS debugging',
  subheading: 'Maxsus elementlarni chiroyli qilish va CSS muammolarini brauzerda topish.',
  sections: [
    {
      type: 'code',
      lang: 'css',
      title: 'Rasm va media elementlar',
      code: `img, video {
  max-width: 100%;
  height: auto;
  display: block;          /* qator ostidagi ortiqcha bo'shliqni yo'qotadi */
}

.avatar {
  width: 80px; height: 80px;
  object-fit: cover;       /* rasm cho'zilmaydi, kesiladi */
  object-position: center top;
  border-radius: 50%;
}`
    },
    {
      type: 'code',
      lang: 'css',
      title: 'Formalarni bezash',
      text: 'Forma elementlari shrift va o\'lchamni o\'zi meros qilmaydi, shuning uchun alohida beriladi.',
      code: `input, textarea, select, button {
  font: inherit;                 /* sahifa shriftini olsin */
  padding: 10px 14px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  box-sizing: border-box;
}

input:focus {
  outline: none;
  border-color: #e44d26;
  box-shadow: 0 0 0 3px rgba(228, 77, 38, 0.25);
}

input:invalid:not(:placeholder-shown) { border-color: #ef4444; }

button {
  background: #e44d26;
  color: #fff;
  border: none;
  cursor: pointer;
}
button:hover { background: #c23a17; }
button:disabled { opacity: 0.5; cursor: not-allowed; }

input[type="checkbox"] { accent-color: #e44d26; }`,
      html: `<form style="display:grid;gap:10px;max-width:280px"><input placeholder="Ismingiz"/><input type="email" placeholder="Email (focus qiling)"/><label><input type="checkbox"/> Roziman</label><button>Yuborish</button><button disabled>Faol emas</button></form>`
    },
    {
      type: 'code',
      lang: 'css',
      title: 'Jadvalni bezash',
      code: `table {
  border-collapse: collapse;     /* qo'sh chiziqlar birlashadi */
  width: 100%;
}

th, td {
  padding: 10px 14px;
  border: 1px solid #e2e8f0;
  text-align: left;
}

thead th { background: #1f2937; color: #fff; }
tbody tr:nth-child(even) { background: #f1f5f9; }   /* zebra */
tbody tr:hover { background: #fde8e1; }

caption { caption-side: bottom; font-style: italic; }`,
      html: `<table><caption>Talabalar</caption><thead><tr><th>Ism</th><th>Yosh</th></tr></thead><tbody><tr><td>Ali</td><td>22</td></tr><tr><td>Vali</td><td>25</td></tr><tr><td>Hasan</td><td>19</td></tr></tbody></table>`
    },
    {
      type: 'list',
      title: 'CSS xatolarini topish (DevTools)',
      points: [
        'F12 → Elements → elementni tanlang: o\'ng tomonda Styles paneli unga tegishli barcha qoidalarni ko\'rsatadi',
        'Chizib tashlangan qoida bekor bo\'lgan (boshqa qoida ustun yoki xususiyat noto\'g\'ri)',
        'Computed tab — elementning yakuniy hisoblangan qiymatlari va Box Model diagrammasi',
        'Qiymatlarni to\'g\'ridan-to\'g\'ri tahrirlab, natijani darhol ko\'rish mumkin',
        'Odatiy sabablar: selektor xato yozilgan, fayl ulanmagan, specificity yetmayapti, xususiyat nomi xato'
      ]
    },
    {
      type: 'rule',
      title: 'CSS ni tartibli saqlash',
      points: [
        'Bir xil qiymatlarni CSS o\'zgaruvchilarga (--primary) chiqaring',
        'Nom berishda izchillik: .card, .card-title, .card-body',
        'Qoidalarni mantiqiy guruhlang: reset, umumiy, komponentlar, yordamchi',
        'Ishlatilmaydigan stillarni o\'chiring'
      ],
      rule: 'Kodni ertaga o\'zingiz ham, boshqalar ham tushunadigan qilib yozing.'
    },
    {
      type: 'tasks',
      title: 'Amaliyot mashqlari',
      tasks: [
        'Ro\'yxatdan o\'tish formasini chiroyli qiling: focus holati, xato rangi',
        'Zebra va hover effektli jadval yarating',
        'Dumaloq avatar rasm yarating (object-fit: cover)',
        'DevTools da biror elementning stilini jonli o\'zgartirib, kodga ko\'chiring'
      ]
    },
    {
      type: 'list',
      title: 'Qo\'shimcha o\'qish (MDN)',
      points: [
        'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS',
        'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Styling_tables',
        'https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Styling_web_forms'
      ]
    }
  ]
};
