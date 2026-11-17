export const gitGithubData = {
  id: 'git-github',
  title: '4. GitHub bilan ishlash',
  heading: 'GitHub: remote, push va pull',
  subheading: 'Lokal loyihani internetga yuklash va boshqalar bilan ulashish.',
  sections: [
    {
      type: 'list',
      title: 'Boshlash',
      points: [
        'github.com da ro\'yxatdan o\'ting',
        'New repository tugmasi bilan bo\'sh repozitoriya yarating (README siz bo\'lsa osonroq)',
        'GitHub ko\'rsatgan manzilni (https yoki SSH) nusxalab oling'
      ]
    },
    {
      type: 'code',
      lang: 'bash',
      title: 'Lokal loyihani GitHub ga yuborish',
      code: `git remote add origin https://github.com/foydalanuvchi/loyiha.git
git remote -v                  # ulangan remote larni ko'rish

git branch -M main             # asosiy branch nomi main bo'lsin
git push -u origin main        # birinchi marta yuborish (-u — keyingi safar faqat "git push")

# Keyingi o'zgarishlar
git add .
git commit -m "Yangi bo'lim qo'shildi"
git push`
    },
    {
      type: 'code',
      lang: 'bash',
      title: 'GitHub dan olish',
      code: `git clone https://github.com/foydalanuvchi/loyiha.git   # loyihani birinchi marta yuklab olish
cd loyiha

git fetch                      # yangiliklarni yuklab oladi, lekin birlashtirmaydi
git pull                       # fetch + merge: yangiliklarni olib, joriy branchga qo'shadi`
    },
    {
      type: 'comparison',
      title: 'Autentifikatsiya',
      cards: [
        { title: 'HTTPS + token', subtitle: 'Oson boshlash', desc: 'Parol o\'rniga GitHub da yaratilgan Personal Access Token ishlatiladi.' },
        { title: 'SSH kalit', subtitle: 'Qulay va xavfsiz', desc: 'ssh-keygen bilan kalit yaratib, ochiq qismini GitHub ga qo\'shasiz. Keyin parol so\'ralmaydi.' },
        { title: 'GitHub CLI', subtitle: 'gh auth login', desc: 'Buyruq qatori vositasi: brauzer orqali kirish va PR yaratish.' }
      ]
    },
    {
      type: 'code',
      lang: 'bash',
      title: 'SSH kalit yaratish',
      code: `ssh-keygen -t ed25519 -C "email@example.com"
cat ~/.ssh/id_ed25519.pub        # ochiq kalitni nusxalab, GitHub → Settings → SSH keys ga qo'shing
ssh -T git@github.com            # ulanishni tekshirish`
    },
    {
      type: 'rule',
      title: 'Muhim qoidalar',
      points: [
        'push dan oldin pull qiling: boshqalar yuborgan o\'zgarishlar bilan to\'qnashmaslik uchun',
        'Maxfiy ma\'lumotni (parol, kalit) hech qachon repozitoriyaga yuklamang',
        'README.md yozing: loyiha nima va qanday ishga tushiriladi',
        'Token va SSH maxfiy kalitini hech kimga bermang'
      ],
      rule: 'Kuniga kamida bir marta push qiling: kod xavfsiz saqlanadi va jamoa yangiliklarni ko\'radi.'
    },
    {
      type: 'tasks',
      title: 'Amaliyot mashqlari',
      tasks: [
        'GitHub da yangi repozitoriya yarating va lokal loyihani yuboring',
        'SSH kalit yarating va GitHub ga qo\'shing',
        'Loyihani boshqa papkaga clone qiling, o\'zgartirib push qiling, asl papkada pull qiling',
        'README.md ga loyiha tavsifini yozing'
      ]
    },
    {
      type: 'list',
      title: 'Qo\'shimcha o\'qish',
      points: ['https://docs.github.com/en/get-started/start-your-journey/hello-world']
    }
  ]
};
