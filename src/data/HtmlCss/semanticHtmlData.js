export const semanticHtmlData = {
  id: 'semantic-html',
  title: '4. Semantik HTML',
  heading: 'Semantik HTML',
  subheading: 'Faqat div emas: ma\'noli teglar bilan sahifani to\'g\'ri tuzish.',
  sections: [
    {
      type: 'list',
      title: 'Semantik teg nima?',
      text: 'Semantik teg o\'z nomi bilan mazmunini bildiradi. <header> — "bu sahifaning yuqori qismi" degani, <div> esa hech narsani anglatmaydi.',
      points: [
        'Qidiruv tizimlari (SEO) sahifani yaxshiroq tushunadi',
        'Ekran o\'qigichlar (accessibility) navigatsiyasi osonlashadi',
        'Kod o\'qilishi va qo\'llab-quvvatlanishi yaxshilanadi'
      ]
    },
    {
      type: 'code',
      lang: 'markup',
      title: 'Sahifaning semantik tuzilmasi',
      code: `<body>
  <header>
    <h1>Mening blogim</h1>
    <nav>
      <a href="/">Bosh sahifa</a>
      <a href="/maqolalar">Maqolalar</a>
      <a href="/aloqa">Aloqa</a>
    </nav>
  </header>

  <main>
    <article>
      <h2>Maqola sarlavhasi</h2>
      <p>Maqola matni...</p>
    </article>

    <aside>
      <h3>Tegishli maqolalar</h3>
    </aside>
  </main>

  <footer>
    <p>&copy; 2026 Barcha huquqlar himoyalangan</p>
  </footer>
</body>`
    },
    {
      type: 'comparison',
      title: 'Asosiy semantik teglar',
      cards: [
        { title: 'header / footer', subtitle: 'Yuqori va pastki qism', desc: 'Sahifa yoki bo\'limning kirish va yakunlovchi qismi.' },
        { title: 'nav / main', subtitle: 'Navigatsiya va asosiy qism', desc: 'nav — havolalar guruhi; main — sahifada faqat bitta asosiy tarkib.' },
        { title: 'section / article / aside', subtitle: 'Mazmunli bloklar', desc: 'article — mustaqil mazmun, section — mavzuviy bo\'lim, aside — yon qism.' }
      ]
    },
    {
      type: 'code',
      lang: 'markup',
      title: 'Qo\'shimcha semantik teglar',
      code: `<figure>
  <img src="grafik.png" alt="Oylik sotuv grafigi" />
  <figcaption>1-rasm: Oylik sotuv</figcaption>
</figure>

<time datetime="2026-11-17">17-noyabr, 2026</time>

<details>
  <summary>Batafsil o'qish</summary>
  <p>Yashirin matn shu yerda.</p>
</details>

<address>Toshkent sh., Amir Temur ko'chasi 1</address>`
    },
    {
      type: 'rule',
      title: 'Qachon div ishlatiladi?',
      points: [
        'Mos semantik teg bo\'lmasa, faqat CSS uchun guruhlashda div ishlating',
        'Sahifada bitta h1 va bitta main bo\'lsin',
        'Sarlavhalar tartibini buzmang: h1 → h2 → h3 (daraja tashlab o\'tmang)'
      ],
      rule: 'Avval ma\'noni o\'ylang, keyin ko\'rinishni: "Bu nima?" degan savolga mos teg tanlang.'
    },
    {
      type: 'tasks',
      title: 'Amaliyot mashqlari',
      tasks: [
        'Blog sahifasini faqat div ishlatib yozing, so\'ng semantik teglarga o\'zgartiring',
        'figure va figcaption bilan rasm qo\'shing',
        'details va summary bilan "Ko\'p so\'raladigan savollar" bo\'limini yarating'
      ]
    }
  ]
};
