export const positionAnimationData = {
  id: 'position-animation',
  title: '10. Position, Transition, Animation',
  heading: 'Position, Transition va Animation',
  subheading: 'Elementlarni aniq joylashtirish va sahifani jonlantirish.',
  sections: [
    {
      type: 'comparison',
      title: 'position qiymatlari',
      cards: [
        { title: 'static / relative', subtitle: 'Odatiy joyda', desc: 'static — odatiy. relative — o\'z joyiga nisbatan siljitish mumkin va absolute uchun "ota" bo\'ladi.' },
        { title: 'absolute', subtitle: 'Eng yaqin ota ichida', desc: 'Oqimdan chiqadi, eng yaqin positioned ota elementga nisbatan joylashadi.' },
        { title: 'fixed / sticky', subtitle: 'Ekranga yopishgan', desc: 'fixed — doim ekranda; sticky — scroll paytida belgilangan joyga yopishadi.' }
      ]
    },
    {
      type: 'code',
      lang: 'css',
      title: 'Position misollari',
      code: `.card {
  position: relative;          /* badge uchun ota */
}

.badge {
  position: absolute;
  top: 10px;
  right: 10px;                 /* kartochkaning o'ng yuqori burchagi */
}

.header {
  position: sticky;
  top: 0;                      /* scroll qilganda tepada qoladi */
  z-index: 100;                /* boshqa elementlar ustida turadi */
}

.chat-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
}`
    },
    {
      type: 'code',
      lang: 'css',
      title: 'Transition (silliq o\'tish)',
      text: 'Xususiyat o\'zgarganda (masalan hover da) ko\'rinish birdaniga emas, silliq o\'zgaradi.',
      code: `.btn {
  background: #e44d26;
  color: #fff;
  padding: 12px 24px;
  border-radius: 8px;
  transition: background 0.3s ease, transform 0.2s ease;
}

.btn:hover {
  background: #c23a17;
  transform: translateY(-3px) scale(1.05);
}`
    },
    {
      type: 'code',
      lang: 'css',
      title: 'Transform',
      code: `.box {
  transform: translateX(50px);   /* siljitish */
  transform: rotate(45deg);      /* burish */
  transform: scale(1.2);         /* kattalashtirish */
  transform: translateY(-10px) rotate(5deg); /* birgalikda */
}`
    },
    {
      type: 'code',
      lang: 'css',
      title: 'Keyframes animatsiya',
      text: '@keyframes bosqichlarni belgilaydi, animation esa uni elementga qo\'llaydi.',
      code: `@keyframes pulse {
  0%   { transform: scale(1); }
  50%  { transform: scale(1.15); }
  100% { transform: scale(1); }
}

.heart {
  animation: pulse 1.2s ease-in-out infinite;
  /* nomi | davomiyligi | tezlik egri chizig'i | takrorlanish */
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

.fade { animation: fadeIn 0.6s ease forwards; }`
    },
    {
      type: 'code',
      lang: 'css',
      title: 'CSS o\'zgaruvchilari',
      text: 'Takrorlanadigan qiymatlarni (rang, o\'lcham) bir joyda saqlab, kerak joyda ishlatish mumkin.',
      code: `:root {
  --primary: #e44d26;
  --radius: 12px;
  --gap: 16px;
}

.btn {
  background: var(--primary);
  border-radius: var(--radius);
}

.dark {
  --primary: #ff7a50;   /* faqat shu qismda qiymat o'zgaradi */
}`
    },
    {
      type: 'rule',
      title: 'Samaradorlik',
      points: [
        'Animatsiya uchun transform va opacity ni afzal ko\'ring: ular tez va silliq ishlaydi',
        'width, height, top, left ni animatsiya qilish sahifani sekinlashtirishi mumkin',
        'Animatsiyani ko\'p ishlatmang — foydalanuvchini chalg\'itadi'
      ],
      rule: 'prefers-reduced-motion media query bilan animatsiyani yoqtirmaydigan foydalanuvchilar uchun o\'chirib qo\'ying.'
    },
    {
      type: 'tasks',
      title: 'Amaliyot mashqlari',
      tasks: [
        'Kartochkaning burchagiga absolute bilan "Yangi" belgisini qo\'ying',
        'Scroll qilganda tepada qotib turadigan navbar yarating (sticky)',
        'Tugmaga hover da transition va transform qo\'shing',
        'Yuklanish animatsiyasi (aylanuvchi doira) @keyframes bilan yozing',
        'Ranglar uchun CSS o\'zgaruvchilar tizimini yarating'
      ]
    }
  ]
};
