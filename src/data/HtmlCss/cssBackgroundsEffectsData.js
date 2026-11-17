export const cssBackgroundsEffectsData = {
  id: 'css-backgrounds-effects',
  title: '17. Fon, chegara va effektlar',
  heading: 'Fon, chegara, soya va filtrlar',
  subheading: 'Gradient, fon rasmi, yumaloq burchaklar, soya va filtr effektlari bilan bezash.',
  sections: [
    {
      type: 'code',
      lang: 'css',
      title: 'Fon (background)',
      code: `.hero {
  background-color: #0f172a;
  background-image: url("hero.jpg");
  background-size: cover;          /* butun qutini qoplaydi */
  background-position: center;
  background-repeat: no-repeat;
}

/* Qisqa yozuv */
.banner { background: #111 url("pattern.png") repeat; }

/* Bir nechta fon birga: yuqoridagisi birinchi */
.card {
  background:
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("rasm.jpg") center / cover;
}`
    },
    {
      type: 'code',
      lang: 'css',
      title: 'Gradientlar',
      code: `.g1 { background: linear-gradient(90deg, #e44d26, #f59e0b); }        /* chapdan o'ngga */
.g2 { background: linear-gradient(to bottom right, #6366f1, #ec4899); }
.g3 { background: radial-gradient(circle, #fff, #1e3a8a); }          /* markazdan */
.g4 { background: conic-gradient(red, yellow, green, blue, red); }   /* aylana bo'ylab */

/* Rang to'xtash joylari */
.g5 { background: linear-gradient(#e44d26 0%, #e44d26 40%, #fff 40%); }`
    },
    {
      type: 'code',
      lang: 'css',
      title: 'Chegara va yumaloq burchak',
      code: `.box {
  border: 2px solid #e44d26;
  border-radius: 12px;               /* yumaloq burchak */
}

.circle {
  width: 100px; height: 100px;
  border-radius: 50%;                /* aylana */
}

.pill { border-radius: 999px; }      /* "tabletka" shakli */
.tab { border-radius: 12px 12px 0 0; }
.line { border-bottom: 3px dashed gray; }
.ring { outline: 3px solid dodgerblue; outline-offset: 4px; }`
    },
    {
      type: 'code',
      lang: 'css',
      title: 'Soya va filtrlar',
      code: `/* box-shadow: x  y  xira-lik  yoyilish  rang */
.card { box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25); }
.inset { box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.4); }   /* ichki soya */

h1 { text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); }

img { filter: grayscale(100%); }
img:hover { filter: none; }
.blur { filter: blur(4px) brightness(0.8); }
.glass { backdrop-filter: blur(10px); background: rgba(255, 255, 255, 0.15); }

.blend { mix-blend-mode: multiply; }
.faded { opacity: 0.6; }`
    },
    {
      type: 'visual',
      visual: 'effects',
      title: 'Gradient va soya laboratoriyasi',
      text: 'Burchak, ranglar, yumaloqlik va soyani o\'zgartirib, tayyor CSS kodni oling.'
    },
    {
      type: 'tasks',
      title: 'Amaliyot mashqlari',
      tasks: [
        'Ikki rangli gradient fonli hero bo\'lim yarating',
        'Fon rasmi ustiga qora yarim shaffof qatlam qo\'ying (gradient bilan)',
        'Hover da ko\'tariladigan soyali kartochka qiling',
        'Rasmga grayscale filtri qo\'yib, hover da ranglantiring'
      ]
    },
    {
      type: 'list',
      title: 'Qo\'shimcha o\'qish (MDN)',
      points: [
        'https://developer.mozilla.org/en-US/docs/Web/CSS/gradient',
        'https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow',
        'https://developer.mozilla.org/en-US/docs/Web/CSS/filter'
      ]
    }
  ]
};
