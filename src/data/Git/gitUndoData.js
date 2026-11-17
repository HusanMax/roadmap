export const gitUndoData = {
  id: 'git-undo',
  title: '6. Conflict va bekor qilish',
  heading: 'Conflict ni hal qilish va xatoni bekor qilish',
  subheading: 'Muammo bo\'lganda tarixni xavfsiz tuzatish usullari.',
  sections: [
    {
      type: 'code',
      lang: 'bash',
      title: 'Merge conflict qanday ko\'rinadi',
      text: 'Ikki shoxda bir qator turlicha o\'zgargan bo\'lsa, git fayl ichiga belgilar qo\'yadi va qaysi variantni qoldirishni siz hal qilasiz.',
      code: `<<<<<<< HEAD
<h1>Mening saytim</h1>
=======
<h1>Yangi sarlavha</h1>
>>>>>>> feature/title

# 1. Fayldagi <<<<<<<, =======, >>>>>>> belgilarni o'chirib, kerakli variantni qoldiring
# 2. Keyin:
git add index.html
git commit                       # birlashtirish yakunlanadi
# Merge ni bekor qilish uchun:
git merge --abort`
    },
    {
      type: 'comparison',
      title: 'Bekor qilish usullari',
      cards: [
        { title: 'restore', subtitle: 'Fayl o\'zgarishini bekor', desc: 'Hali commit qilinmagan o\'zgarishni oxirgi commit holatiga qaytaradi.' },
        { title: 'revert', subtitle: 'Xavfsiz (ommaviy)', desc: 'Commit ni bekor qiluvchi YANGI commit yaratadi. Tarix saqlanadi — push qilingan uchun mos.' },
        { title: 'reset', subtitle: 'Tarixni qaytarish', desc: 'Shoxni eski commit ga qaytaradi. Faqat push qilinmagan commit lar uchun ishlating.' }
      ]
    },
    {
      type: 'code',
      lang: 'bash',
      title: 'Amaliy buyruqlar',
      code: `# Commit qilinmagan o'zgarishni bekor qilish
git restore src/App.jsx           # fayl o'zgarishi yo'qoladi (ehtiyot bo'ling!)
git restore --staged src/App.jsx  # add ni bekor qilish (o'zgarish saqlanadi)

# Oxirgi commit xabarini tuzatish (push qilinmagan bo'lsa)
git commit --amend -m "To'g'ri xabar"

# Push qilingan commit ni xavfsiz bekor qilish
git revert abc1234

# Oxirgi commit ni bekor qilish, o'zgarishlarni saqlab
git reset --soft HEAD~1
# Oxirgi commit va o'zgarishlarni butunlay o'chirish (xavfli!)
git reset --hard HEAD~1`
    },
    {
      type: 'code',
      lang: 'bash',
      title: 'Stash — vaqtincha yashirish',
      text: 'Yarim ishni commit qilmasdan boshqa branch ga o\'tish kerak bo\'lganda ishlatiladi.',
      code: `git stash                  # o'zgarishlarni vaqtincha chetga qo'yadi
git switch main            # boshqa ishni qiling
git switch feature/x
git stash pop              # yashirilganni qaytarish
git stash list`,
      output: `Saved working directory and index state WIP on feature/x: 7c1d4e2 Navbar qo'shildi
Switched to branch 'main'
Switched to branch 'feature/x'
stash@{0}: WIP on feature/x: 7c1d4e2 Navbar qo'shildi`
    },
    {
      type: 'rule',
      title: 'Xavfsizlik qoidalari',
      points: [
        'Boshqalar olgan (push qilingan) tarixni reset yoki force push bilan o\'zgartirmang',
        'git reset --hard va git restore o\'zgarishlarni qaytarib bo\'lmas darajada o\'chiradi',
        'Yo\'qolgan commit ni git reflog orqali topish mumkin — ko\'pincha qutqaradi'
      ],
      rule: 'Shubha bo\'lsa, avval branch nusxasini oling: git branch zaxira.'
    },
    {
      type: 'tasks',
      title: 'Amaliyot mashqlari',
      tasks: [
        'Ataylab conflict yarating: ikki branch da bir qatorni o\'zgartiring va hal qiling',
        'Noto\'g\'ri commit xabarini --amend bilan tuzating',
        'git stash bilan yarim ishni yashirib, qaytaring',
        'git reflog bilan oxirgi harakatlarni ko\'rib chiqing'
      ]
    }
  ]
};
