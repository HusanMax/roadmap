export const htmlHeadTextData = {
  id: 'html-head-text',
  title: '11. Head va qo\'shimcha matn teglari',
  heading: 'HTML: <head> va matnning qo\'shimcha imkoniyatlari',
  subheading: 'Sahifa metama\'lumotlari hamda iqtibos, kod, qisqartma kabi ma\'noli matn teglari.',
  sections: [
    {
      type: 'list',
      title: '<head> ichida nimalar bo\'ladi?',
      text: '<head> foydalanuvchiga ko\'rinmaydi, lekin brauzer, qidiruv tizimi va ijtimoiy tarmoqlar uchun sahifa haqida muhim ma\'lumot beradi.',
      points: [
        '<title> — brauzer tabi va qidiruv natijasidagi sarlavha',
        '<meta charset> — belgilar kodlash turi (UTF-8)',
        '<meta name="description"> — qidiruv natijasida sarlavha ostida chiqadigan qisqa tavsif',
        '<link rel="stylesheet"> — CSS faylni ulash, <link rel="icon"> — sayt belgisi (favicon)',
        '<script> — JavaScript ulash (defer atributi bilan HTML yuklangandan keyin ishlaydi)'
      ]
    },
    {
      type: 'code',
      lang: 'markup',
      title: 'To\'liq <head> namunasi',
      code: `<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Mening portfoliom — Ali Valiyev</title>
  <meta name="description" content="Frontend dasturchi Ali Valiyevning ishlari va aloqa ma'lumotlari." />

  <link rel="icon" href="favicon.ico" />
  <link rel="stylesheet" href="css/style.css" />

  <!-- Ijtimoiy tarmoqda havola ulashilganda ko'rinishi (Open Graph) -->
  <meta property="og:title" content="Ali Valiyev — portfolio" />
  <meta property="og:image" content="https://example.com/preview.png" />

  <script src="js/app.js" defer></script>
</head>`
    },
    {
      type: 'code',
      lang: 'markup',
      title: 'Matnning qo\'shimcha teglari',
      text: 'Har bir teg ko\'rinishdan tashqari ma\'no ham beradi — shuning uchun faqat bezash maqsadida emas, mazmuniga qarab tanlang.',
      code: `<!-- Katta iqtibos va qisqa iqtibos -->
<blockquote cite="https://example.com">
  <p>Yaxshi kod — o'zi o'zini tushuntiradigan koddir.</p>
</blockquote>
<p>U <q>sinab ko'rish — eng yaxshi o'qish</q> degan edi.</p>

<!-- Manba nomi -->
<p>Kitob: <cite>Toza kod</cite></p>

<!-- Qisqartma -->
<p><abbr title="HyperText Markup Language">HTML</abbr> — belgilash tili.</p>

<!-- Kod, klaviatura, natija -->
<p>Buyruq: <code>npm install</code>, tugma: <kbd>Ctrl</kbd> + <kbd>C</kbd></p>
<pre><code>function salom() {
  return "Salom";
}</code></pre>

<!-- Yuqori va quyi indeks -->
<p>H<sub>2</sub>O va E = mc<sup>2</sup></p>

<!-- Aloqa ma'lumoti -->
<address>Toshkent, Amir Temur ko'chasi 1<br /><a href="tel:+998901234567">+998 90 123 45 67</a></address>`
    },
    {
      type: 'comparison',
      title: 'Ko\'rinishi o\'xshash, ma\'nosi boshqa',
      cards: [
        { title: '<b> va <strong>', subtitle: 'Qalin matn', desc: '<strong> — muhimlik, <b> — shunchaki ajratish (ma\'nosiz).' },
        { title: '<i> va <em>', subtitle: 'Kursiv matn', desc: '<em> — ma\'noda urg\'u, <i> — chet so\'z yoki atama kabi alohida matn.' },
        { title: '<pre> va <code>', subtitle: 'Kod ko\'rsatish', desc: '<pre> bo\'sh joy va qator o\'tishni saqlaydi, <code> esa matnni kod deb belgilaydi.' }
      ]
    },
    {
      type: 'list',
      title: 'Maxsus belgilar (HTML entity)',
      text: '< va > belgilari teg boshlanishi hisoblanadi, shuning uchun ularni matnda maxsus yozuv bilan chiqaramiz:',
      points: [
        '&lt; → <   &gt; → >   &amp; → &',
        '&quot; → "   &nbsp; → uzilmaydigan bo\'sh joy',
        '&copy; → ©   &euro; → €'
      ]
    },
    {
      type: 'tasks',
      title: 'Amaliyot mashqlari',
      tasks: [
        'O\'z sahifangiz uchun to\'liq <head> yozing: title, description, favicon, CSS',
        'Mashhur kishining gapini blockquote va cite bilan formalang',
        'Dasturlash qisqartmalarini (CSS, API, DOM) abbr bilan izohlang',
        'pre va code yordamida kod namunasi chiqaring'
      ]
    },
    {
      type: 'list',
      title: 'Qo\'shimcha o\'qish (MDN)',
      points: [
        'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head',
        'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta',
        'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote'
      ]
    }
  ]
};
