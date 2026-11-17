export const gitBasicsData = {
  id: 'git-basics',
  title: '2. Asosiy buyruqlar',
  heading: 'Git ning kundalik buyruqlari',
  subheading: 'init, status, add, commit, log, diff — har kuni ishlatiladigan beshlik.',
  sections: [
    {
      type: 'code',
      lang: 'bash',
      title: 'Repozitoriya yaratish va birinchi commit',
      code: `mkdir mening-loyiham && cd mening-loyiham
git init                          # .git papkasi yaratildi

echo "# Mening loyiham" > README.md
git status                        # README.md "untracked" (kuzatilmagan)

git add README.md                 # staging ga qo'shish
git commit -m "Birinchi commit: README qo'shildi"`
    },
    {
      type: 'code',
      lang: 'bash',
      title: 'Kundalik ish aylanishi',
      code: `git status                  # nima o'zgardi?
git diff                    # qatorlar bo'yicha o'zgarishlar (staging ga qo'shilmagan)
git diff --staged           # staging dagi o'zgarishlar

git add .                   # hamma o'zgarishni qo'shish
git add src/App.jsx         # faqat bitta faylni qo'shish
git commit -m "Navbar qo'shildi"
git commit -am "Tezkor tuzatish"   # kuzatilayotgan fayllarni add siz commit (yangi fayllarsiz)

git log                     # commit tarixi
git log --oneline --graph   # qisqa va grafik ko'rinishda`
    },
    {
      type: 'comparison',
      title: 'Commit xabari qanday bo\'lishi kerak?',
      cards: [
        { title: 'Yomon', subtitle: '"fix", "o\'zgarish", "asdf"', desc: 'Keyin nima o\'zgargani tushunarsiz.' },
        { title: 'Yaxshi', subtitle: '"Login formasiga validatsiya qo\'shildi"', desc: 'Nima qilingani aniq, qisqa va tushunarli.' },
        { title: 'Qoida', subtitle: 'Bitta commit — bitta ish', desc: 'Kichik va mantiqiy commit lar tarixni o\'qishni osonlashtiradi.' }
      ]
    },
    {
      type: 'code',
      lang: 'bash',
      title: '.gitignore',
      text: 'Git ga kuzatmaslik kerak bo\'lgan fayllarni ko\'rsatadi: kutubxonalar, build natijasi, parol va kalitlar.',
      code: `# .gitignore
node_modules/
dist/
.env
*.log
.DS_Store`
    },
    {
      type: 'rule',
      title: 'Hech qachon commit qilmang',
      points: [
        'Parollar, API kalitlari va .env fayllari',
        'node_modules papkasi (npm install bilan qayta tiklanadi)',
        'Katta binar fayllar va build natijalari'
      ],
      rule: 'Kalit tasodifan commit bo\'lsa, uni faqat o\'chirish yetmaydi: tarixda qoladi, kalitni almashtiring.'
    },
    {
      type: 'tasks',
      title: 'Amaliyot mashqlari',
      tasks: [
        'Yangi papka oching, git init qiling va 3 ta commit yarating',
        'git diff va git diff --staged farqini ko\'rib chiqing',
        '.gitignore yarating va node_modules ni kiriting',
        'git log --oneline --graph natijasini ko\'ring'
      ]
    },
    {
      type: 'list',
      title: 'Qo\'shimcha o\'qish',
      points: ['https://docs.github.com/en/get-started/using-git/about-git']
    }
  ]
};
