export const gitCollabData = {
  id: 'git-collab',
  title: '5. Pull request va jamoa bilan ishlash',
  heading: 'Pull Request, fork va code review',
  subheading: 'Boshqalar bilan birga ishlash va kodni tekshirtirish.',
  sections: [
    {
      type: 'list',
      title: 'Pull Request (PR) nima?',
      text: 'PR — "mening shoximdagi o\'zgarishlarni main ga qo\'shing" degan so\'rov. Birlashtirishdan oldin jamoa kodni ko\'rib chiqadi, izoh qoldiradi, testlar avtomatik ishlaydi.',
      points: [
        'Kodni birga tekshirish (code review) — xatolarni erta topadi',
        'O\'zgarishlar muhokamasi bir joyda saqlanadi',
        'main ga to\'g\'ridan-to\'g\'ri push qilish o\'rniga xavfsizroq yo\'l'
      ]
    },
    {
      type: 'code',
      lang: 'bash',
      title: 'PR yaratish bosqichlari',
      code: `git switch -c feature/contact-form      # 1. yangi branch
# ... kod yozing, commit qiling ...
git push -u origin feature/contact-form # 2. branch ni GitHub ga yuboring

# 3. GitHub da "Compare & pull request" tugmasi chiqadi → bosing
# 4. Sarlavha va tavsif yozing, reviewer tanlang
# 5. Tasdiqlangach "Merge pull request" bosiladi
# 6. Lokal tarafda:
git switch main
git pull
git branch -d feature/contact-form`
    },
    {
      type: 'comparison',
      title: 'Ish usullari',
      cards: [
        { title: 'Bitta repo', subtitle: 'Jamoa a\'zolari', desc: 'Hammaning yozish huquqi bor, har kim o\'z branch ida ishlaydi.' },
        { title: 'Fork', subtitle: 'Begona loyiha', desc: 'Loyiha nusxasi o\'z akkauntingizga olinadi, o\'zgartirib, asl loyihaga PR yuborasiz.' },
        { title: 'Issue', subtitle: 'Vazifa va xatolar', desc: 'Muammo yoki g\'oyani GitHub Issues da yozib, PR bilan bog\'lash mumkin.' }
      ]
    },
    {
      type: 'code',
      lang: 'bash',
      title: 'Fork bilan ishlash',
      code: `# GitHub da "Fork" tugmasini bosing, so'ng:
git clone https://github.com/SIZ/loyiha.git
git remote add upstream https://github.com/ASLI/loyiha.git   # asl loyihani ham ulash

git fetch upstream
git merge upstream/main          # asl loyihadagi yangiliklarni olish`
    },
    {
      type: 'rule',
      title: 'Yaxshi PR',
      points: [
        'Kichik va bitta maqsadli bo\'lsin (500 qatordan kam)',
        'Sarlavha nima qilinganini aytsin, tavsifda nima uchun va qanday tekshirish yozilsin',
        'Review izohlariga xotirjam javob bering va tuzating',
        'Merge qilishdan oldin conflict yo\'qligini tekshiring'
      ],
      rule: 'PR — kod haqida suhbat. Izohlar sizga emas, kodga tegishli.'
    },
    {
      type: 'tasks',
      title: 'Amaliyot mashqlari',
      tasks: [
        'O\'z repozitoriyangizda branch ochib, PR yarating va o\'zingiz merge qiling',
        'Biror ochiq loyihani fork qiling (kichik tuzatish uchun)',
        'GitHub Issues da vazifa oching va PR da "Closes #1" deb yozib bog\'lang'
      ]
    }
  ]
};
