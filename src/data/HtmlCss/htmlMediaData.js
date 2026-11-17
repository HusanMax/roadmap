export const htmlMediaData = {
  id: 'html-media',
  title: '12. Video, audio, SVG va iframe',
  heading: 'HTML: media va tashqi kontent',
  subheading: 'Sahifaga video, audio, vektor grafika va boshqa sahifalarni qo\'shish.',
  sections: [
    {
      type: 'code',
      lang: 'markup',
      title: 'Video (video)',
      text: 'Brauzer o\'zining pleyerini ko\'rsatadi. Bir nechta format (source) berilsa, brauzer o\'zi qo\'llab-quvvatlaganini tanlaydi.',
      code: `<video controls width="640" poster="oldindan-korinish.jpg">
  <source src="video.webm" type="video/webm" />
  <source src="video.mp4" type="video/mp4" />
  <track kind="subtitles" src="uz.vtt" srclang="uz" label="O'zbekcha" />
  Brauzeringiz video ni qo'llab-quvvatlamaydi.
</video>`
    },
    {
      type: 'code',
      lang: 'markup',
      title: 'Audio (audio)',
      code: `<audio controls>
  <source src="qoshiq.mp3" type="audio/mpeg" />
  <source src="qoshiq.ogg" type="audio/ogg" />
  Brauzeringiz audio ni qo'llab-quvvatlamaydi.
</audio>`
    },
    {
      type: 'list',
      title: 'Muhim atributlar',
      points: [
        'controls — pleyer tugmalarini ko\'rsatadi (bo\'lmasa, video ko\'rinadi, lekin boshqarib bo\'lmaydi)',
        'autoplay — o\'zi boshlanadi (brauzerlar odatda ovozsiz holda ruxsat beradi, shuning uchun muted bilan birga)',
        'loop — tugagach qayta boshlanadi; muted — ovozsiz',
        'preload — oldindan yuklash darajasi: none | metadata | auto',
        'track — subtitr va tavsiflar; ko\'zi ojiz yoki eshitmaydigan foydalanuvchilar uchun muhim'
      ]
    },
    {
      type: 'code',
      lang: 'markup',
      title: 'SVG — vektor grafika',
      text: 'SVG kattalashtirilganda xiralashmaydi, kodi kichik, CSS bilan ranglarini o\'zgartirish mumkin. Ikonkalar va logotiplar uchun ideal.',
      code: `<!-- Tashqi fayl sifatida -->
<img src="logo.svg" alt="Kompaniya logotipi" width="120" />

<!-- Kod ichida (inline) — CSS bilan boshqariladi -->
<svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <circle cx="60" cy="60" r="50" fill="#e44d26" />
  <rect x="35" y="35" width="50" height="50" rx="8" fill="white" />
</svg>`
    },
    {
      type: 'code',
      lang: 'markup',
      title: 'iframe — boshqa sahifani joylash',
      text: 'Xarita, YouTube video va boshqa tashqi kontent iframe orqali qo\'shiladi.',
      code: `<iframe
  src="https://www.openstreetmap.org/export/embed.html"
  width="600"
  height="400"
  title="Ofis joylashuvi xaritasi"
  loading="lazy"
  sandbox="allow-scripts allow-same-origin"
></iframe>`
    },
    {
      type: 'rule',
      title: 'Xavfsizlik va tezlik',
      points: [
        'Ishonchsiz sahifalarni iframe ga joylashda sandbox atributini ishlating',
        'Ba\'zi saytlar iframe ichida ochilishni taqiqlaydi (X-Frame-Options)',
        'loading="lazy" — rasm va iframe faqat ko\'rinish oynasiga yaqinlashganda yuklanadi',
        'Katta video o\'rniga poster rasmi va preload="none" sahifani tezlashtiradi'
      ],
      rule: 'Har bir media uchun matnli muqobil bering: alt, track yoki transkript.'
    },
    {
      type: 'tasks',
      title: 'Amaliyot mashqlari',
      tasks: [
        'Poster va subtitrli video joylashtiring',
        'Audio pleyer yarating',
        'O\'zingizning oddiy SVG logotipingizni (doira + to\'rtburchak) chizing',
        'Sahifaga xarita iframe qo\'shing va loading="lazy" bering'
      ]
    },
    {
      type: 'list',
      title: 'Qo\'shimcha o\'qish (MDN)',
      points: [
        'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video',
        'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe',
        'https://developer.mozilla.org/en-US/docs/Web/SVG'
      ]
    }
  ]
};
