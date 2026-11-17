export const gitWorkflowData = {
  id: 'git-workflow',
  title: '7. Workflow, tag va GitHub imkoniyatlari',
  heading: 'Ish tartibi va GitHub qo\'shimcha imkoniyatlari',
  subheading: 'Professional ish usullari: tag, release, Pages, Actions va profil.',
  sections: [
    {
      type: 'list',
      title: 'Tavsiya etilgan kundalik tartib',
      points: [
        'Ish boshlashdan oldin: git switch main && git pull',
        'Yangi vazifa uchun branch oching: git switch -c feature/nom',
        'Kichik, mantiqiy commit lar qiling',
        'Tayyor bo\'lsa, push qilib PR oching',
        'Tasdiqlangach merge qiling va branch ni o\'chiring'
      ]
    },
    {
      type: 'code',
      lang: 'bash',
      title: 'Tag — versiyani belgilash',
      code: `git tag v1.0.0                       # joriy commit ga belgi
git tag -a v1.1.0 -m "Yangi dizayn"  # izohli tag
git tag                              # ro'yxat
git push origin v1.0.0               # tag ni GitHub ga yuborish
# GitHub da tag asosida "Release" yaratish mumkin`,
      output: `v1.0.0
v1.1.0`
    },
    {
      type: 'comparison',
      title: 'GitHub imkoniyatlari',
      cards: [
        { title: 'GitHub Pages', subtitle: 'Bepul hosting', desc: 'Statik saytni (HTML yoki build natijasi) to\'g\'ridan-to\'g\'ri repozitoriyadan joylashtiradi.' },
        { title: 'GitHub Actions', subtitle: 'Avtomatlashtirish', desc: 'Push yoki PR da test, build va deploy ni avtomatik ishga tushiradi (CI/CD).' },
        { title: 'Projects / Issues', subtitle: 'Vazifalar boshqaruvi', desc: 'Kanban doska va vazifalar ro\'yxati bilan jamoa ishini rejalashtirish.' }
      ]
    },
    {
      type: 'code',
      lang: 'yaml',
      title: 'Oddiy GitHub Actions (CI) namunasi',
      text: '.github/workflows/ci.yml faylida yoziladi. Har safar push qilinganda loyiha o\'rnatilib, build qilinadi.',
      code: `name: CI
on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build`
    },
    {
      type: 'rule',
      title: 'Portfolio sifatida GitHub',
      points: [
        'Profil README.md (foydalanuvchi-nomi nomli repo) — o\'zingiz haqingizda sahifa',
        'Har bir loyihada tushunarli README: nima, qanday ishga tushadi, skrinshot',
        'Doimiy va izchil commit lar — faol dasturchi ekanligingizning belgisi',
        'Pin qilingan eng yaxshi 6 ta loyiha'
      ],
      rule: 'Ish beruvchilar ko\'pincha avval GitHub profilingizga qaraydi — uni tartibli saqlang.'
    },
    {
      type: 'quiz',
      title: "Bilimingizni sinab ko'ring",
      questions: [
        {
          q: 'Release uchun versiyani belgilashda nima ishlatiladi?',
          options: [
          'git tag v1.0.0',
          'git label',
          'git stamp',
          'git version'
          ],
          answer: 0,
          explain: "Tag ma'lum commit ga o'zgarmas nom beradi."
        },
        {
          q: 'GitHub Actions nima qiladi?',
          options: [
          'Rasmlarni tahrirlaydi',
          'Push yoki PR da test, build va deploy ni avtomatik ishga tushiradi',
          'Parolni saqlaydi',
          'Kodni yozib beradi'
          ],
          answer: 1,
          explain: 'Actions — CI/CD avtomatlashtirish vositasi.'
        }
      ]
    },
    {
      type: 'tasks',
      title: 'Amaliyot mashqlari',
      tasks: [
        'Loyihangizga v1.0.0 tag qo\'ying va GitHub da Release yarating',
        'Loyihani GitHub Pages ga joylashtiring',
        'Yuqoridagi CI faylini yarating va push dan keyin Actions bo\'limida natijani ko\'ring',
        'Profil README yarating'
      ]
    },
    {
      type: 'list',
      title: 'Qo\'shimcha o\'qish',
      points: ['https://docs.github.com/en/pages', 'https://docs.github.com/en/actions']
    }
  ]
};
