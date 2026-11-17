export const gitBranchData = {
  id: 'git-branch',
  title: '3. Branch va merge',
  heading: 'Branch (shox) va merge (birlashtirish)',
  subheading: 'Asosiy kodga tegmasdan yangi imkoniyat ustida xavfsiz ishlash.',
  sections: [
    {
      type: 'list',
      title: 'Branch nima?',
      text: 'Branch — commit tarixining mustaqil chizig\'i. main branchni buzmasdan alohida shoxda yangi funksiya yoki tuzatish ustida ishlaysiz, tayyor bo\'lgach birlashtirasiz.',
      points: [
        'main — asosiy, har doim ishlaydigan kod',
        'feature/login, fix/navbar-bug — yangi ish uchun alohida shoxlar',
        'Branch yaratish juda tez va arzon — ko\'p yarating'
      ]
    },
    {
      type: 'code',
      lang: 'bash',
      title: 'Branch bilan ishlash',
      code: `git branch                      # branch lar ro'yxati (* — hozirgisi)
git branch feature/login        # yangi branch yaratish
git switch feature/login        # unga o'tish
git switch -c feature/cart      # yaratish va o'tish (birga)

# ... ishlang va commit qiling ...

git switch main                 # main ga qaytish
git merge feature/login         # feature/login ni main ga qo'shish
git branch -d feature/login     # tayyor bo'lgan branch ni o'chirish`
    },
    {
      type: 'visual',
      visual: 'gitGraph',
      title: 'Commit grafigini o\'zingiz yarating',
      text: 'Tugmalarni bosing: commit qo\'shing, yangi branch oching, o\'tib yuring va merge qiling. Grafik o\'zgarishini ko\'ring.'
    },
    {
      type: 'comparison',
      title: 'Merge turlari',
      cards: [
        { title: 'Fast-forward', subtitle: 'Chiziq davom etadi', desc: 'main da yangi commit bo\'lmasa, git faqat ko\'rsatkichni oldinga suradi.' },
        { title: 'Merge commit', subtitle: 'Ikki shox birlashadi', desc: 'Ikkala tomonda ham commit bo\'lsa, git yangi "birlashtiruvchi" commit yaratadi.' },
        { title: 'Conflict', subtitle: 'Bir qator ikki xil', desc: 'Ikkala shoxda bir qator o\'zgargan bo\'lsa, git sizdan tanlashni so\'raydi.' }
      ]
    },
    {
      type: 'rule',
      title: 'Branch nomlash',
      points: [
        'feature/nom — yangi imkoniyat',
        'fix/nom — xatoni tuzatish',
        'Kichik harf, tire bilan: feature/user-profile'
      ],
      rule: 'Har bir vazifa uchun alohida branch oching va u kichik bo\'lsin — tekshirish va birlashtirish oson bo\'ladi.'
    },
    {
      type: 'tasks',
      title: 'Amaliyot mashqlari',
      tasks: [
        'feature/about branch yarating, unda 2 ta commit qiling va main ga merge qiling',
        'Vizual grafikda fast-forward va merge commit ni solishtiring',
        'Ishi tugagan branch ni o\'chiring'
      ]
    }
  ]
};
