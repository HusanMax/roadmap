export const gitIntroData = {
  id: 'git-intro',
  title: '1. Git nima va sozlash',
  heading: 'Git: versiyalarni boshqarish tizimi',
  subheading: 'Kod o\'zgarishlarini saqlash, orqaga qaytish va jamoa bilan ishlash.',
  sections: [
    {
      type: 'list',
      title: 'Git nima uchun kerak?',
      text: 'Git — loyiha tarixini saqlaydigan dastur. Har bir o\'zgarish "commit" sifatida yozib boriladi, xohlagan paytda eski holatga qaytish mumkin.',
      points: [
        'Fayllarning "final_v2_oxirgi_ENG_OXIRGI" nusxalarini yaratish kerak emas',
        'Kim, qachon va nima o\'zgartirgani ko\'rinib turadi',
        'Bir necha kishi bir loyihada to\'qnashmasdan ishlay oladi',
        'Xato qilsangiz, ishlaydigan holatga qaytish oson'
      ]
    },
    {
      type: 'comparison',
      title: 'Git va GitHub — bir narsa emas',
      cards: [
        { title: 'Git', subtitle: 'Kompyuteringizdagi dastur', desc: 'Versiyalarni lokal saqlaydi, internet shart emas.' },
        { title: 'GitHub', subtitle: 'Internetdagi xizmat', desc: 'Git loyihalarni bulutda saqlaydi, ulashish va hamkorlik uchun.' },
        { title: 'Muqobillar', subtitle: 'GitLab, Bitbucket', desc: 'GitHub ga o\'xshash boshqa xizmatlar, Git bir xil ishlaydi.' }
      ]
    },
    {
      type: 'code',
      lang: 'bash',
      title: 'O\'rnatish va birinchi sozlash',
      text: 'Git ni git-scm.com dan yuklab oling (Linux da: sudo apt install git). Keyin kimligingizni bir marta ko\'rsating — u har bir commit da yoziladi.',
      code: `git --version                                  # o'rnatilganini tekshirish

git config --global user.name  "Ismingiz"
git config --global user.email "email@example.com"
git config --global init.defaultBranch main   # asosiy branch nomi
git config --list                              # sozlamalarni ko'rish`
    },
    {
      type: 'visual',
      visual: 'gitAreas',
      title: 'Git da fayl qayerdan qayerga o\'tadi',
      text: 'Git da fayl to\'rt joydan o\'tadi. Buyruqni bossangiz, u fayllarni qaysi joyga ko\'chirishini ko\'rasiz.'
    },
    {
      type: 'list',
      title: 'To\'rt joy',
      points: [
        'Working directory — siz fayllarni tahrirlaydigan papka',
        'Staging area (index) — keyingi commit ga kiradigan o\'zgarishlar "savati"',
        'Local repository — commit lar saqlanadigan .git papkasi',
        'Remote repository — GitHub dagi nusxa'
      ]
    },
    {
      type: 'tasks',
      title: 'Amaliyot mashqlari',
      tasks: [
        'Git ni o\'rnating va versiyasini tekshiring',
        'user.name va user.email ni sozlang',
        'Git va GitHub farqini o\'z so\'zingiz bilan tushuntiring'
      ]
    }
  ]
};
