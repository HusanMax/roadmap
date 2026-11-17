export const cssBasicsData = {
  id: 'css-basics',
  title: '5. CSS asoslari',
  heading: 'CSS asoslari',
  subheading: 'Sahifani bezash: selektorlar, ranglar, shriftlar va birliklar.',
  sections: [
    {
      type: 'list',
      title: 'CSS nima?',
      text: 'CSS (Cascading Style Sheets) HTML elementlarining tashqi ko\'rinishini belgilaydi: rang, shrift, o\'lcham, joylashuv.',
      points: [
        'Qoida = selektor + { xususiyat: qiymat; }',
        'Cascading — bir necha qoida to\'qnashsa, qaysi biri g\'olib bo\'lishini belgilovchi tizim',
        'HTML va CSS ni ajratish kodni toza va qayta ishlatiladigan qiladi'
      ]
    },
    {
      type: 'code',
      lang: 'css',
      title: 'CSS ni ulash usullari',
      text: 'Eng yaxshi usul — alohida .css fayl ulash.',
      code: `/* 1. Tashqi fayl (tavsiya etiladi) — HTML <head> ichida:
   <link rel="stylesheet" href="style.css"> */

/* 2. Ichki — <style> tegi ichida:
   <style> p { color: red; } </style> */

/* 3. Inline — to'g'ridan-to'g'ri tegda (iloji boricha ishlatmang):
   <p style="color: red;">Matn</p> */

p {
  color: red;
  font-size: 18px;
}`
    },
    {
      type: 'code',
      lang: 'css',
      title: 'Selektorlar',
      code: `/* Teg bo'yicha */
h1 { color: #e44d26; }

/* Class bo'yicha (. bilan) — ko'p elementga */
.card { background: #fff; }

/* ID bo'yicha (# bilan) — sahifada bitta */
#logo { width: 120px; }

/* Guruhlash */
h1, h2, h3 { font-family: sans-serif; }

/* Ichidagi avlod */
nav a { text-decoration: none; }

/* Bevosita farzand */
ul > li { list-style: square; }

/* Pseudo-class */
a:hover { color: tomato; }
li:first-child { font-weight: bold; }
input:focus { outline: 2px solid dodgerblue; }`,
      html: `<h1>Sarlavha h1</h1><h2>Sarlavha h2</h2><h3>Sarlavha h3</h3><div id="logo" style="background:#e5e7eb">#logo</div><div class="card">.card element</div><nav><a href="#">Havola</a> <a href="#">Havola 2</a></nav><ul><li>Bir</li><li>Ikki</li><li>Uch</li></ul><input placeholder="Bosib ko'ring (focus)"/>`
    },
    {
      type: 'comparison',
      title: 'Ranglar berish usullari',
      cards: [
        { title: 'Nomi / HEX', subtitle: 'red, #e44d26', desc: 'Eng ko\'p ishlatiladi. HEX — #RRGGBB formatida.' },
        { title: 'rgb / rgba', subtitle: 'rgb(228, 77, 38)', desc: 'rgba oxirgi parametri — shaffoflik (0 dan 1 gacha).' },
        { title: 'hsl', subtitle: 'hsl(12, 77%, 52%)', desc: 'Rang burchagi, to\'yinganlik va yorug\'lik — rang tanlash qulay.' }
      ]
    },
    {
      type: 'code',
      lang: 'css',
      title: 'Matn va shrift',
      code: `body {
  font-family: "Inter", Arial, sans-serif;
  font-size: 16px;
  line-height: 1.6;        /* qatorlar orasi */
  color: #1f2937;
}

h1 {
  font-weight: 700;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
}

a {
  text-decoration: none;
}`,
      html: `<h1>Katta sarlavha</h1><p>Oddiy abzats matni bu yerda. Qatorlar orasi line-height bilan boshqariladi, shuning uchun matn o'qishga qulay bo'ladi.</p><a href="#">Havola (tagi chizilmagan)</a>`
    },
    {
      type: 'list',
      title: 'O\'lchov birliklari',
      points: [
        'px — aniq piksel, o\'zgarmas',
        'rem — ildiz (html) shrift o\'lchamiga nisbatan, shriftlar uchun eng yaxshi tanlov',
        'em — joriy elementning shrift o\'lchamiga nisbatan',
        '% — ota elementga nisbatan foiz',
        'vw / vh — ekran kengligi / balandligining 1%'
      ]
    },
    {
      type: 'rule',
      title: 'Specificity (ustunlik) tartibi',
      points: [
        'Inline style  >  #id  >  .class  >  teg',
        'Bir xil darajada bo\'lsa — keyin yozilgani g\'olib',
        '!important eng kuchli, lekin undan qochish kerak'
      ],
      rule: 'Asosan class selektorlardan foydalaning: ular oddiy, qayta ishlatiladi va boshqarish oson.'
    },
    {
      type: 'visual',
      visual: 'selectors',
      title: "Selektorlar o'yinchog'i",
      text: "Selektorni yozing yoki tugmalardan tanlang: mos kelgan elementlar sahifada qizil ramka bilan yoritiladi."
    },
    {
      type: 'challenge',
      lang: 'css',
      title: 'Mini vazifa: brend ranglari',
      story: "Kompaniya yangi dizayn qo'llanmasini berdi: sarlavha rangi #e44d26, abzats matni #334155 va 18px, tugma foni #e44d26 (oq matn) bo'lishi kerak.",
      task: 'CSS yozib shu uchta talabni bajaring.',
      html: `<h1>Mening saytim</h1>
<p class="intro">Salom! Bu CSS bilan bezaladigan sahifa.</p>
<a href="#" class="btn">Boshlash</a>`,
      starter: `/* CSS kodingizni yozing */
h1 {

}
`,
      tests: [
        { name: 'h1 rangi #e44d26', expr: "getComputedStyle(document.querySelector('h1')).color === 'rgb(228, 77, 38)'" },
        { name: 'p.intro rangi #334155', expr: "getComputedStyle(document.querySelector('.intro')).color === 'rgb(51, 65, 85)'" },
        { name: 'p.intro 18px', expr: "getComputedStyle(document.querySelector('.intro')).fontSize === '18px'" },
        { name: 'tugma foni #e44d26', expr: "getComputedStyle(document.querySelector('.btn')).backgroundColor === 'rgb(228, 77, 38)'" },
        { name: 'tugma matni oq', expr: "getComputedStyle(document.querySelector('.btn')).color === 'rgb(255, 255, 255)'" }
      ],
      hint: 'h1 { color: #e44d26; } .intro { color: #334155; font-size: 18px; } .btn { background: #e44d26; color: #fff; }',
      solution: `h1 { color: #e44d26; }
.intro { color: #334155; font-size: 18px; }
.btn {
  background: #e44d26;
  color: #fff;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 6px;
}`
    },
    {
      type: 'playground',
      lang: 'css',
      title: 'Tajriba: CSS bilan bezang',
      text: "Ranglar, o'lcham va soyani o'zgartirib ko'ring. Yangi qoidalar qo'shing!",
      html: `<h1>Mening saytim</h1>
<p class="intro">Salom! Bu CSS bilan bezaladigan sahifa.</p>
<a href="#" class="btn">Boshlash</a>`,
      code: `.btn {
  background: #e44d26;
  color: white;
  padding: 10px 22px;
  border-radius: 8px;
  text-decoration: none;
}
.btn:hover {
  background: #c23a17;
}
h1 { color: #1f2937; }`
    },
    {
      type: 'tasks',
      title: 'Amaliyot mashqlari',
      tasks: [
        'Alohida style.css yarating va HTML ga ulang',
        'Sarlavha, abzats va havolalar uchun rang va shrift belgilang',
        'a:hover bilan havolaga sichqoncha tegganda rang o\'zgartiring',
        'Bitta class ni bir nechta elementga qo\'llang'
      ]
    }
  ]
};
