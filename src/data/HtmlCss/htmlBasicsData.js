export const htmlBasicsData = {
  id: 'html-basics',
  title: '1. HTML asoslari',
  heading: 'HTML asoslari',
  subheading: 'Veb-sahifaning skeleti: HTML nima va hujjat qanday tuziladi?',
  sections: [
    {
      type: 'list',
      title: 'HTML nima?',
      text: 'HTML (HyperText Markup Language) — veb-sahifa tarkibini tavsiflovchi belgilash tili. Dasturlash tili emas: u brauzerga "bu sarlavha, bu abzats, bu rasm" deb aytadi.',
      points: [
        'Sahifaning tuzilmasi va mazmunini belgilaydi (matn, rasm, havola, forma)',
        'CSS — ko\'rinishini (rang, joylashuv), JavaScript esa xatti-harakatini boshqaradi',
        'Fayl kengaytmasi: .html, brauzerda to\'g\'ridan-to\'g\'ri ochiladi',
        'Hozirgi versiya — HTML5'
      ]
    },
    {
      type: 'code',
      lang: 'markup',
      title: 'Hujjatning minimal tuzilmasi',
      text: 'Har bir HTML sahifa shu skeletdan boshlanadi. <head> ichida sahifa haqida ma\'lumot, <body> ichida esa foydalanuvchi ko\'radigan tarkib bo\'ladi.',
      code: `<!DOCTYPE html>
<html lang="uz">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mening birinchi sahifam</title>
  </head>
  <body>
    <h1>Salom, dunyo!</h1>
    <p>Bu mening birinchi HTML sahifam.</p>
  </body>
</html>`
    },
    {
      type: 'list',
      title: 'Qismlarning vazifasi',
      points: [
        '<!DOCTYPE html> — brauzerga hujjat HTML5 ekanini bildiradi',
        '<html lang="uz"> — ildiz element, lang — sahifa tili (qidiruv va ekran o\'qigichlar uchun muhim)',
        '<meta charset="UTF-8"> — o\'zbekcha harflar (o\', g\', sh) to\'g\'ri chiqishi uchun',
        '<meta name="viewport"> — mobil qurilmalarda to\'g\'ri masshtab uchun',
        '<title> — brauzer tabida ko\'rinadigan sarlavha'
      ]
    },
    {
      type: 'code',
      lang: 'markup',
      title: 'Teg, atribut va element',
      text: 'Element = ochuvchi teg + tarkib + yopuvchi teg. Atributlar ochuvchi tegga qo\'shimcha ma\'lumot beradi.',
      code: `<!-- teg:  <a>  ...  </a>   atribut: href   qiymat: "https://example.com" -->
<a href="https://example.com" target="_blank">Saytga o'tish</a>

<!-- Yopuvchi tegi yo'q (bo'sh) elementlar -->
<img src="rasm.jpg" alt="Rasm tavsifi" />
<br />
<hr />
<input type="text" />`
    },
    {
      type: 'rule',
      title: 'Muhim qoidalar',
      points: [
        'Teglar to\'g\'ri joylashtirilishi (nesting) kerak: avval ichkisi yopiladi',
        'Teg va atribut nomlari kichik harfda yoziladi',
        'Atribut qiymatlari qo\'shtirnoq ichida beriladi',
        'Izoh: <!-- ... --> ichida yoziladi, brauzerda ko\'rinmaydi'
      ],
      rule: 'Kodni tartibli yozing: har bir ichki element uchun 2 ta bo\'sh joy (indent) qoldiring.'
    },
    {
      type: 'visual',
      visual: 'htmlTree',
      title: "DOM daraxti: HTML kodi brauzerda qanday daraxtga aylanadi",
      text: "Brauzer HTML ni o'qib, elementlardan iborat daraxt (DOM) yaratadi. Ichma-ich joylashgan elementlar ota-bola munosabatida bo'ladi."
    },
    {
      type: 'tasks',
      title: 'Amaliyot mashqlari',
      tasks: [
        'index.html fayl yarating va minimal skeletni yozing',
        'O\'zingiz haqingizda sarlavha (h1) va 2 ta abzats (p) yozing',
        'Sahifa tilini lang="uz" qilib, title ni o\'zgartiring',
        'Kod ichiga izoh qoldiring va brauzerda ko\'rinmasligini tekshiring'
      ]
    }
  ]
};
