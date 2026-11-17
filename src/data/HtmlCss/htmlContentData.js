export const htmlContentData = {
  id: 'html-content',
  title: '2. Matn, havola, rasm, ro\'yxat',
  heading: 'HTML: matn, havola, rasm va ro\'yxatlar',
  subheading: 'Sahifa mazmunini yaratadigan eng ko\'p ishlatiladigan teglar.',
  sections: [
    {
      type: 'code',
      lang: 'markup',
      title: 'Sarlavhalar va matn',
      text: 'h1 dan h6 gacha 6 daraja sarlavha bor. h1 sahifada bitta bo\'lgani ma\'qul. Abzats uchun <p> ishlatiladi.',
      code: `<h1>Asosiy sarlavha</h1>
<h2>Bo'lim sarlavhasi</h2>
<h3>Kichik bo'lim</h3>

<p>Bu oddiy abzats. <strong>Qalin</strong>, <em>kursiv</em> va <mark>belgilangan</mark> matn.</p>
<p>Yangi qatorga o'tish uchun<br />br tegi ishlatiladi.</p>`
    },
    {
      type: 'comparison',
      title: 'Matn teglari',
      cards: [
        { title: '<strong>', subtitle: 'Muhim matn', desc: 'Qalin ko\'rinadi, ma\'no jihatdan muhimlikni bildiradi.' },
        { title: '<em>', subtitle: 'Urg\'u', desc: 'Kursiv ko\'rinadi, ma\'noda urg\'u beradi.' },
        { title: '<span>', subtitle: 'Inline konteyner', desc: 'Matnning bir qismini CSS bilan bezash uchun, o\'zi hech narsa o\'zgartirmaydi.' }
      ]
    },
    {
      type: 'code',
      lang: 'markup',
      title: 'Havolalar (a)',
      text: 'href — manzil, target="_blank" — yangi tabda ochadi. Tashqi saytga o\'tganda rel="noopener" qo\'shish xavfsizroq.',
      code: `<a href="https://developer.mozilla.org">Tashqi sayt</a>
<a href="about.html">Ichki sahifa</a>
<a href="#contact">Sahifa ichidagi bo'limga</a>
<a href="https://example.com" target="_blank" rel="noopener">Yangi tabda</a>
<a href="mailto:info@example.com">Email yuborish</a>
<a href="tel:+998901234567">Qo'ng'iroq qilish</a>`
    },
    {
      type: 'code',
      lang: 'markup',
      title: 'Rasmlar (img)',
      text: 'alt atributi majburiy hisoblanadi: rasm yuklanmasa yoki ko\'zi ojiz foydalanuvchi uchun matn o\'rnida ko\'rinadi. width/height sahifa "sakramasligi" uchun foydali.',
      code: `<img src="images/manzara.jpg" alt="Tog' manzarasi" width="400" height="260" />

<!-- Rasmni havola qilish -->
<a href="katta.jpg">
  <img src="kichik.jpg" alt="Katta rasmni ochish" />
</a>`
    },
    {
      type: 'code',
      lang: 'markup',
      title: 'Ro\'yxatlar',
      text: 'Tartibsiz (ul), tartibli (ol) va ta\'rif (dl) ro\'yxatlari. Har bir band <li> bilan yoziladi.',
      code: `<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>

<ol>
  <li>Skelet yozish</li>
  <li>Bezash</li>
  <li>Jonlantirish</li>
</ol>

<dl>
  <dt>HTML</dt>
  <dd>Sahifa tuzilmasi</dd>
</dl>`
    },
    {
      type: 'list',
      title: 'Block va Inline elementlar',
      points: [
        'Block: yangi qatordan boshlanadi va to\'liq kenglikni egallaydi (div, p, h1, ul)',
        'Inline: qator ichida turadi, faqat o\'z kengligicha joy oladi (span, a, strong, img)',
        '<div> — block konteyner, <span> — inline konteyner; ikkalasi ham ma\'nosiz, faqat guruhlash uchun'
      ]
    },
    {
      type: 'challenge',
      lang: 'html',
      title: 'Mini vazifa: ovqat retsepti sahifasi',
      story: 'Oshxona blogida palov retseptini joylashtirmoqchisiz: sarlavha, rasm, masalliqlar va tayyorlash qadamlari.',
      task: 'h2 sarlavha, alt matnli img, masalliqlar uchun ul (kamida 3 ta li), qadamlar uchun ol (kamida 3 ta li) va a havola yarating.',
      starter: `<!-- Retsept sahifasini yozing -->
`,
      tests: [
        { name: 'h2 sarlavha bor', expr: "!!document.querySelector('h2')" },
        { name: 'img da alt matni bor', expr: "(function(){var i=document.querySelector('img'); return !!i && i.getAttribute('alt') && i.getAttribute('alt').trim().length>0;})()" },
        { name: 'ul da kamida 3 ta li', expr: "document.querySelectorAll('ul li').length >= 3" },
        { name: 'ol da kamida 3 ta li', expr: "document.querySelectorAll('ol li').length >= 3" },
        { name: 'a havola va href bor', expr: "!!document.querySelector('a[href]')" }
      ],
      hint: '<ul><li>Guruch</li>...</ul> va <ol><li>Piyoz qovuring</li>...</ol> shaklida yozing.',
      solution: `<h2>Palov retsepti</h2>
<img src="palov.jpg" alt="Dimlangan palov" width="200">
<h3>Masalliqlar</h3>
<ul>
  <li>Guruch</li>
  <li>Go'sht</li>
  <li>Sabzi</li>
</ul>
<h3>Tayyorlash</h3>
<ol>
  <li>Go'shtni qovuring</li>
  <li>Sabzi qo'shing</li>
  <li>Guruchni solib dimlang</li>
</ol>
<a href="https://example.com/retseptlar">Boshqa retseptlar</a>`
    },
    {
      type: 'tasks',
      title: 'Amaliyot mashqlari',
      tasks: [
        'O\'zingiz haqingizda sahifa: h1, h2, abzatslar',
        'Sevimli 5 ta texnologiyangiz ro\'yxatini ul bilan chiqaring',
        'Rasm qo\'shing va alt matn yozing',
        'Uchta havola yarating: tashqi, ichki va email',
        'Tartibli ro\'yxatda ovqat retseptining qadamlarini yozing'
      ]
    }
  ]
};
