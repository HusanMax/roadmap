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
git push`,
      output: `origin  https://github.com/foydalanuvchi/loyiha.git (fetch)
origin  https://github.com/foydalanuvchi/loyiha.git (push)

branch 'main' set up to track 'origin/main'.
To https://github.com/foydalanuvchi/loyiha.git
 * [new branch]      main -> main`
    },
    {
      type: 'code',
      lang: 'bash',
      title: 'GitHub dan olish',
      code: `git clone https://github.com/foydalanuvchi/loyiha.git   # loyihani birinchi marta yuklab olish
cd loyiha

git fetch                      # yangiliklarni yuklab oladi, lekin birlashtirmaydi
git pull                       # fetch + merge: yangiliklarni olib, joriy branchga qo'shadi`,
      output: `Cloning into 'loyiha'...
remote: Enumerating objects: 24, done.
Receiving objects: 100% (24/24), done.

Already up to date.`
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
      type: 'quiz',
      title: "Bilimingizni sinab ko'ring",
      questions: [
        {
          q: 'Lokal loyihani birinchi marta GitHub ga yuborish uchun qaysi buyruq kerak?',
          options: [
          "git remote add origin URL, so'ng git push -u origin main",
          'git upload',
          'git send github',
          'git clone URL'
          ],
          answer: 0,
          explain: 'Avval remote ulanadi, keyin push qilinadi.'
        },
        {
          q: 'Boshqa odam GitHub ga yangilik yubordi. Uni kompyuteringizga olish uchun?',
          options: [
          'git push',
          'git pull',
          'git init',
          'git add .'
          ],
          answer: 1,
          explain: "git pull = fetch + merge: yangiliklarni olib, joriy branch ga qo'shadi."
        },
        {
          q: 'Maxfiy kalitingiz (token) tasodifan GitHub ga yuklandi. Birinchi qadam?',
          options: [
          "Faylni o'chirib qo'yish yetarli",
          'Kalitni darhol bekor qilib (revoke), yangisini olish',
          "Repo nomini o'zgartirish",
          'Hech narsa qilmaslik'
          ],
          answer: 1,
          explain: 'Kalit tarixda qoladi va avtomatik skanerlar uni topishi mumkin — avval kalitni almashtiring.'
        }
      ]
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
