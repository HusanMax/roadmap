export const cssCascadeData = {
  id: 'css-cascade',
  title: '15. Cascade, specificity, inheritance',
  heading: 'Cascade, Specificity va Inheritance',
  subheading: 'Bir elementga bir necha qoida tegsa, qaysi biri g\'olib bo\'ladi?',
  sections: [
    {
      type: 'list',
      title: 'Uchta asosiy tushuncha',
      points: [
        'Cascade (kaskad) — qoidalar to\'qnashganda g\'olibni aniqlash tizimi',
        'Specificity (aniqlik) — selektor qanchalik aniq bo\'lsa, shunchalik kuchli',
        'Inheritance (meros) — ba\'zi xususiyatlar (color, font-family) ota elementdan bolalarga o\'tadi, ba\'zilari (border, margin) o\'tmaydi'
      ]
    },
    {
      type: 'code',
      lang: 'css',
      title: 'Qaysi qoida g\'olib?',
      text: 'Tartib: 1) muhimlik (!important), 2) specificity, 3) yozilish tartibi — keyingisi ustun.',
      code: `p { color: black; }                 /* teg: eng kuchsiz */
.text { color: blue; }              /* class */
#intro { color: green; }            /* id */

/* <p id="intro" class="text">  → matn YASHIL (id g'olib) */

p { color: red; }
p { color: orange; }                /* bir xil — keyingisi g'olib */

p { color: purple !important; }     /* hammasidan ustun (undan qoching!) */`
    },
    {
      type: 'comparison',
      title: 'Specificity hisobi (a, b, c)',
      cards: [
        { title: 'a — id', subtitle: '#nav → (1,0,0)', desc: 'Har bir id selektori eng katta og\'irlikka ega.' },
        { title: 'b — class va boshqalar', subtitle: '.btn, [type], :hover → (0,1,0)', desc: 'Class, atribut va pseudo-class lar shu guruhga kiradi.' },
        { title: 'c — teg', subtitle: 'p, ::before → (0,0,1)', desc: 'Teg va pseudo-element lar eng kichik og\'irlikda.' }
      ]
    },
    {
      type: 'visual',
      visual: 'specificity',
      title: 'Specificity kalkulyatori',
      text: 'Istalgan selektorni yozing: u (a, b, c) ballari qanday hisoblanishini ko\'rsatadi. Ballarni chapdan o\'ngga solishtiring.'
    },
    {
      type: 'code',
      lang: 'css',
      title: 'Meros (inheritance) boshqaruvi',
      code: `body { color: #1f2937; font-family: sans-serif; } /* hamma bolalarga o'tadi */

.box {
  border: 1px solid;          /* meros bo'lmaydi */
}

/* Qiymatni majburan boshqarish */
a { color: inherit; }         /* otasining rangini oladi */
.reset { color: initial; }    /* brauzerning boshlang'ich qiymati */
.reset2 { all: unset; }       /* hammasini bekor qiladi */`
    },
    {
      type: 'code',
      lang: 'css',
      title: 'Cascade layers (@layer)',
      text: 'Katta loyihada qoidalarni qatlamlarga bo\'lib, qaysi qatlam ustunligini oldindan belgilash mumkin. Keyingi qatlam oldingisidan ustun, specificity dan qat\'i nazar.',
      code: `@layer reset, base, components, utilities;

@layer reset {
  * { margin: 0; box-sizing: border-box; }
}

@layer components {
  .btn { background: #e44d26; padding: 10px 20px; }
}

@layer utilities {
  .hidden { display: none; }    /* components dan ustun */
}`
    },
    {
      type: 'rule',
      title: 'Yaxshi amaliyot',
      points: [
        'Asosan class selektorlardan foydalaning, id va !important dan qoching',
        'Juda uzun selektorlar (nav ul li a span) yozmang — ularni bekor qilish qiyin',
        'Muammo bo\'lsa DevTools → Styles: chizib tashlangan qoida bekor bo\'lgan'
      ],
      rule: 'Maqsad — kam va tekis specificity: shunda stillarni o\'zgartirish oson bo\'ladi.'
    },
    {
      type: 'tasks',
      title: 'Amaliyot mashqlari',
      tasks: [
        'Bir elementga teg, class va id orqali turli rang bering va natijani kuzating',
        'Kalkulyatorda #nav .item a:hover selektori ballini hisoblang',
        'DevTools da bekor qilingan (chizilgan) qoidani toping',
        'Uch qatlamli @layer tizimi yarating'
      ]
    },
    {
      type: 'list',
      title: 'Qo\'shimcha o\'qish (MDN)',
      points: [
        'https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade',
        'https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity',
        'https://developer.mozilla.org/en-US/docs/Web/CSS/@layer'
      ]
    }
  ]
};
