export const cssSelectorsAdvancedData = {
  id: 'css-selectors-advanced',
  title: '14. Selektorlar: atribut, pseudo, combinator',
  heading: 'CSS selektorlari (chuqur)',
  subheading: 'Elementni aniq va qulay tanlash usullari: atribut, holat, qism va munosabat bo\'yicha.',
  sections: [
    {
      type: 'code',
      lang: 'css',
      title: 'Atribut selektorlari',
      text: 'Elementni uning atributi yoki atribut qiymati bo\'yicha tanlaydi.',
      code: `a[target] { }                    /* target atributi bor */
a[target="_blank"] { }           /* qiymati aynan shu */
a[href^="https"] { }             /* https bilan BOSHLANADI */
a[href$=".pdf"] { }              /* .pdf bilan TUGAYDI */
a[href*="example"] { }           /* ichida BOR */
input[type="checkbox"] { }

/* Misol: PDF havolalarga ikonka */
a[href$=".pdf"]::after { content: " 📄"; }`
    },
    {
      type: 'code',
      lang: 'css',
      title: 'Pseudo-class (holat)',
      text: 'Element qaysi holatda ekanini bildiradi: ustiga kelindi, fokus oldi, tanlangan, birinchi farzand va hokazo. Ikki nuqta (:) bilan yoziladi.',
      code: `a:hover { color: tomato; }              /* sichqoncha ustida */
a:visited { color: purple; }            /* ko'rilgan havola */
button:active { transform: scale(0.97); } /* bosilgan paytda */
input:focus { outline: 2px solid dodgerblue; }
input:disabled { opacity: 0.5; }
input:checked + label { font-weight: bold; }
input:invalid { border-color: red; }

li:first-child { }          /* birinchi farzand */
li:last-child { }
li:nth-child(2) { }         /* 2-element */
li:nth-child(odd) { }       /* toq elementlar */
li:nth-child(3n) { }        /* har uchinchisi */
p:not(.note) { }            /* .note bo'lmagan p lar */
:is(h1, h2, h3) span { }    /* ro'yxatdan istalgani */`
    },
    {
      type: 'code',
      lang: 'css',
      title: 'Pseudo-element (qism)',
      text: 'Element ichidagi qismni yoki unga virtual element qo\'shishni ta\'minlaydi. Ikki ikki nuqta (::) bilan yoziladi.',
      code: `p::first-line { font-weight: bold; }
p::first-letter { font-size: 2em; float: left; }
::selection { background: gold; }          /* belgilangan matn */
input::placeholder { color: #9ca3af; }

/* ::before va ::after — content bilan virtual element qo'shadi */
.required::after {
  content: " *";
  color: red;
}

.quote::before {
  content: "“";
  font-size: 3rem;
}`
    },
    {
      type: 'comparison',
      title: 'Combinator (munosabat) selektorlari',
      cards: [
        { title: 'A B (bo\'shliq)', subtitle: 'Avlod', desc: 'A ichidagi istalgan chuqurlikdagi B elementlar. Masalan: nav a.' },
        { title: 'A > B', subtitle: 'Bevosita farzand', desc: 'Faqat A ning to\'g\'ridan-to\'g\'ri bolalari. Masalan: ul > li.' },
        { title: 'A + B / A ~ B', subtitle: 'Qo\'shni', desc: '+ — darhol keyingi qo\'shni; ~ — A dan keyingi barcha qo\'shnilar.' }
      ]
    },
    {
      type: 'code',
      lang: 'css',
      title: 'Combinator misollari',
      code: `/* h2 dan DARHOL keyingi p */
h2 + p { font-size: 1.2em; }

/* h2 dan keyingi barcha p lar (bir ota ichida) */
h2 ~ p { color: gray; }

/* Faqat to'g'ridan-to'g'ri farzandlar */
.menu > li { display: inline-block; }

/* Bir necha class birga: ikkalasi ham bor element */
.btn.primary { background: #e44d26; }`
    },
    {
      type: 'visual',
      visual: 'selectors',
      title: 'Sinab ko\'ring',
      text: 'Yuqoridagi selektorlarni (masalan: li:first-child, ul > li, a:not(.btn)) o\'yinchoqda yozib ko\'ring.'
    },
    {
      type: 'tasks',
      title: 'Amaliyot mashqlari',
      tasks: [
        'Barcha tashqi (https bilan boshlanuvchi) havolalarga ikonka qo\'shing',
        'Jadvalda juft qatorlarni nth-child(even) bilan boshqa rangga bo\'yang',
        '::before bilan sarlavha oldiga bezak qo\'shing',
        'h2 + p bilan har bir sarlavhadan keyingi birinchi abzatsni ajrating'
      ]
    },
    {
      type: 'list',
      title: 'Qo\'shimcha o\'qish (MDN)',
      points: [
        'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors',
        'https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes',
        'https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements'
      ]
    }
  ]
};
