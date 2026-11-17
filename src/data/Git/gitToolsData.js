export const gitToolsData = {
  id: 'git-tools',
  title: '10. gh CLI va qo\'shimcha vositalar',
  heading: 'GitHub CLI, Desktop va boshqa vositalar',
  subheading: 'Terminaldan GitHub bilan ishlash va ish jarayonini tezlashtiradigan xizmatlar.',
  sections: [
    {
      type: 'code',
      lang: 'bash',
      title: 'GitHub CLI (gh)',
      text: 'gh — GitHub ni brauzersiz, terminaldan boshqarish dasturi. cli.github.com dan o\'rnatiladi.',
      code: `gh auth login                       # akkauntga kirish (brauzer orqali)

gh repo create mening-repom --public --source=. --push   # lokal papkadan repo yaratib yuborish
gh repo clone OWNER/REPO            # loyihani clone qilish

gh pr create                        # pull request yaratish (so'rovlar bilan)
gh pr list --repo OWNER/REPO        # ochiq PR lar ro'yxati
gh issue list --repo OWNER/REPO     # ochiq issue lar ro'yxati`
    },
    {
      type: 'comparison',
      title: 'GitHub vositalari',
      cards: [
        { title: 'GitHub Desktop', subtitle: 'Grafik interfeys', desc: 'Buyruqlarni yodlamasdan commit, branch va push ni tugmalar bilan bajarish.' },
        { title: 'Codespaces', subtitle: 'Bulutdagi muhit', desc: 'Repozitoriya uchun brauzerda ochiladigan tayyor dasturlash muhiti: hech narsa o\'rnatish shart emas.' },
        { title: 'GitHub Copilot', subtitle: 'AI yordamchi', desc: 'Muharrirda kod taklif qiladi va savollarga javob beradi; taklif qilingan kodni doim tekshirib ko\'ring.' }
      ]
    },
    {
      type: 'list',
      title: 'Yana nimalar bor?',
      points: [
        'GitHub Pages — statik saytni bepul joylashtirish',
        'GitHub Actions — avtomatik test, build va deploy (CI/CD)',
        'GitHub Packages — o\'z paketlaringizni (npm, Docker) saqlash',
        'REST va GraphQL API — GitHub ma\'lumotlarini dasturdan boshqarish',
        'Webhooks — repozitoriyada voqea bo\'lganda tashqi servisga xabar yuborish',
        'GitHub Education — talabalar uchun bepul imkoniyatlar to\'plami'
      ]
    },
    {
      type: 'code',
      lang: 'bash',
      title: 'Foydali Git buyruqlari to\'plami',
      code: `git log --oneline -10               # oxirgi 10 commit
git log --author="Ism" --since="1 week ago"
git show abc1234                    # bitta commit ichi
git blame src/App.jsx               # har bir qatorni kim yozgani
git shortlog -sn                    # kim nechta commit qilgan
git cherry-pick abc1234             # bitta commit ni boshqa branch ga ko'chirish
git clean -n                        # kuzatilmayotgan fayllar (oldin ko'rib chiqish)
git config --global alias.st status # qisqa buyruq: git st`
    },
    {
      type: 'quiz',
      title: "Bilimingizni sinab ko'ring",
      questions: [
        {
          q: 'Terminaldan GitHub bilan ishlash vositasi qaysi?',
          options: [
          'gh (GitHub CLI)',
          'gitlab',
          'ghostty',
          'npm'
          ],
          answer: 0,
          explain: 'gh pr create, gh repo clone kabi buyruqlar bilan brauzersiz ishlash mumkin.'
        }
      ]
    },
    {
      type: 'tasks',
      title: 'Amaliyot mashqlari',
      tasks: [
        'gh ni o\'rnating va gh auth login qiling',
        'gh repo create bilan yangi repo yarating va yuboring',
        'git blame bilan o\'z fayllaringizdan birini ko\'rib chiqing',
        'Biror loyihani Codespaces da oching (agar akkauntingizda mavjud bo\'lsa)'
      ]
    },
    {
      type: 'list',
      title: 'Hujjat',
      points: [
        'https://docs.github.com/en/github-cli/github-cli/quickstart',
        'https://docs.github.com/en/pages',
        'https://docs.github.com/en/actions',
        'https://docs.github.com/en/codespaces'
      ]
    }
  ]
};
