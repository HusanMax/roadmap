export const gitFlowIssuesData = {
  id: 'git-flow-issues',
  title: '8. GitHub Flow, Issues va repo sozlamalari',
  heading: 'GitHub Flow, Issues va repozitoriya boshqaruvi',
  subheading: 'GitHub hujjatidagi tavsiya etilgan ish tartibi va jamoaviy vositalar.',
  sections: [
    {
      type: 'list',
      title: 'GitHub Flow — 6 qadam',
      text: 'GitHub tavsiya qiladigan yengil, branch ga asoslangan ish tartibi. Hamma ish bitta oddiy aylanishdan iborat.',
      points: [
        '1. Branch yarating: qisqa va tushunarli nom bering; asosiy branch tegilmay qoladi',
        '2. O\'zgarish kiriting: commit va push qiling, har bir commit bitta tugallangan ish bo\'lsin',
        '3. Pull request oching: nima o\'zgargani va nima uchunligini yozing; fikr olish uchun "draft" ham ochish mumkin',
        '4. Izohlarga javob bering: reviewer fikrlariga yangi commit lar bilan javob bering, PR o\'zi yangilanadi',
        '5. Merge qiling: tasdiqlangach birlashtiring; avval conflict va branch himoyasi talablarini bajaring',
        '6. Branch ni o\'chiring: ish tugadi, PR va commit tarixi saqlanib qoladi (kerak bo\'lsa branch tiklanadi)'
      ]
    },
    {
      type: 'visual',
      visual: 'gitGraph',
      title: 'GitHub Flow ni grafikda takrorlang',
      text: 'Yangi branch oching, 2 ta commit qiling, main ga qaytib merge qiling — bu GitHub Flow ning 1, 2 va 5-qadamlari.'
    },
    {
      type: 'comparison',
      title: 'Issues, Discussions, Projects',
      cards: [
        { title: 'Issues', subtitle: 'Vazifa va xatolar', desc: 'Xato, vazifa yoki g\'oyani yozib, belgi (label), mas\'ul shaxs va milestone biriktirish mumkin.' },
        { title: 'Discussions', subtitle: 'Muhokama maydoni', desc: 'Savol-javob va g\'oyalar uchun forum: vazifa emas, suhbat uchun.' },
        { title: 'Pull Requests', subtitle: 'Kod muhokamasi', desc: 'Aniq kod o\'zgarishi haqida tekshiruv va tasdiq.' }
      ]
    },
    {
      type: 'code',
      lang: 'bash',
      title: 'Issue va PR ni bog\'lash',
      text: 'PR tavsifi yoki commit xabarida maxsus so\'zlar yozilsa, PR merge bo\'lganda issue avtomatik yopiladi.',
      code: `# PR tavsifida yoki commit xabarida:
Closes #12
Fixes #12
Resolves #12

# Misol commit:
git commit -m "Kirish formasidagi xato tuzatildi. Fixes #12"`
    },
    {
      type: 'list',
      title: 'Repozitoriya sozlamalari (Settings)',
      points: [
        'Visibility: public (hammaga ko\'rinadi) yoki private (faqat ruxsat berilganlarga)',
        'Collaborators va Teams: kimga yozish huquqi berilishi',
        'Branch protection (qoidalar): main ga to\'g\'ridan-to\'g\'ri push qilishni taqiqlash, PR va tasdiqni majburiy qilish',
        'README.md, LICENSE (litsenziya), CONTRIBUTING.md — loyiha uchun yo\'riqnoma fayllari',
        'Topics va About: loyiha tavsifi va teglar, qidirishda yordam beradi'
      ]
    },
    {
      type: 'rule',
      title: 'Yaxshi README tarkibi',
      points: [
        'Loyiha nima qiladi (1–2 gap) va skrinshot',
        'O\'rnatish va ishga tushirish buyruqlari',
        'Ishlatilgan texnologiyalar',
        'Hissa qo\'shish yo\'riqnomasi va litsenziya'
      ],
      rule: 'Boshqa odam README ni o\'qib, loyihani 5 daqiqada ishga tushira olishi kerak.'
    },
    {
      type: 'quiz',
      title: "Bilimingizni sinab ko'ring",
      questions: [
        {
          q: 'GitHub Flow da kod main ga qanday tushadi?',
          options: [
          "To'g'ridan-to'g'ri push bilan",
          'Branch → commit → pull request → review → merge',
          'Faqat zip fayl orqali',
          'Email orqali'
          ],
          answer: 1,
          explain: "Har bir ish alohida branch da bajarilib, PR orqali ko'rib chiqilgach birlashtiriladi."
        },
        {
          q: "Xatoni yoki g'oyani kuzatib borish uchun GitHub ning qaysi bo'limidan foydalaniladi?",
          options: [
          'Issues',
          'Releases',
          'Packages',
          'Pages'
          ],
          answer: 0,
          explain: "Issues — vazifa, xato va takliflar ro'yxati."
        }
      ]
    },
    {
      type: 'tasks',
      title: 'Amaliyot mashqlari',
      tasks: [
        'Repozitoriyangizda Issue oching, label qo\'shing',
        'Issue raqamiga "Closes #N" yozilgan PR yarating va merge qilib, issue yopilganini ko\'ring',
        'main branch uchun himoya qoidasini yoqing (Settings → Branches)',
        'LICENSE fayl qo\'shing (masalan MIT)'
      ]
    },
    {
      type: 'list',
      title: 'Hujjat',
      points: [
        'https://docs.github.com/en/get-started/using-github/github-flow',
        'https://docs.github.com/en/issues',
        'https://docs.github.com/en/repositories'
      ]
    }
  ]
};
