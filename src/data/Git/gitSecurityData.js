export const gitSecurityData = {
  id: 'git-security',
  title: '9. Xavfsizlik va akkaunt himoyasi',
  heading: 'GitHub da xavfsizlik',
  subheading: 'Akkaunt, kalitlar va kod bazasini himoya qilish vositalari.',
  sections: [
    {
      type: 'list',
      title: 'Akkauntni himoya qilish',
      points: [
        'Ikki bosqichli autentifikatsiya (2FA) ni yoqing: parol ochilib ketsa ham akkaunt himoyada qoladi',
        'Kuchli va takrorlanmaydigan parol, parollar menejeridan foydalaning',
        'Personal Access Token ga kerakli minimal huquqni bering va muddat belgilang',
        'SSH kalitlarni vaqti-vaqti bilan ko\'rib chiqib, keraksizini o\'chiring (Settings → SSH and GPG keys)'
      ]
    },
    {
      type: 'comparison',
      title: 'Repozitoriya xavfsizlik vositalari',
      cards: [
        { title: 'Dependabot', subtitle: 'Alerts va updates', desc: 'Ma\'lum zaiflikka ega kutubxonalarni aniqlaydi va yangilash uchun avtomatik PR ochishi mumkin.' },
        { title: 'Secret scanning', subtitle: 'Sirlarni topish', desc: 'Koda tasodifan yozilib qolgan kalit va parollarni aniqlab, ogohlantiradi.' },
        { title: 'Code scanning', subtitle: 'Kod tahlili', desc: 'Yangi yoki o\'zgargan kodda zaiflik va xatolarni merge dan oldin topadi.' }
      ]
    },
    {
      type: 'list',
      title: 'Boshqa muhim narsalar',
      points: [
        'Security policy (SECURITY.md): zaiflikni qanday maxfiy xabar qilish kerakligini yozadi',
        'Repository security advisories: ochiq loyihada zaiflikni maxfiy muhokama qilish va tuzatish',
        'Branch protection: tekshiruvsiz kod main ga tushmasligini ta\'minlaydi',
        'Secrets (Settings → Secrets and variables): Actions uchun kalitlarni kodga yozmasdan saqlash'
      ]
    },
    {
      type: 'code',
      lang: 'bash',
      title: 'Tasodifan yuklangan sirni qanday tuzatish',
      text: 'Avvalo kalitni darhol bekor qiling (revoke) va yangisini oling. Faqat faylni o\'chirish yetmaydi, chunki kalit commit tarixida qoladi.',
      code: `# 1. Servisda kalitni bekor qiling va yangisini yarating (eng muhimi!)
# 2. Kodda kalitni muhit o'zgaruvchisiga o'tkazing:
echo ".env" >> .gitignore
git rm --cached .env
git commit -m "Sirlarni kodlardan olib tashlash"

# 3. Tarixdan tozalash — murakkab, maxsus vosita (git filter-repo) talab qiladi`
    },
    {
      type: 'code',
      lang: 'yaml',
      title: 'Dependabot ni yoqish',
      text: '.github/dependabot.yml fayl bilan kutubxonalarni haftada bir marta avtomatik yangilashni sozlash mumkin.',
      code: `version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"`
    },
    {
      type: 'rule',
      title: 'Oltin qoidalar',
      points: [
        'Sirni hech qachon kodga yozmang — .env va Secrets dan foydalaning',
        '2FA ni hamma uchun yoqing',
        'Kutubxonalarni muntazam yangilab turing',
        'Ommaviy (public) repozitoriyaga yuklashdan oldin fayllarni ko\'zdan kechiring'
      ],
      rule: 'Public repoga yuklangan kalit bir necha daqiqada avtomatik skanerlar tomonidan topilishi mumkin — darhol almashtiring.'
    },
    {
      type: 'tasks',
      title: 'Amaliyot mashqlari',
      tasks: [
        'Akkauntingizda 2FA yoqilganini tekshiring',
        'Repozitoriyangizda Security bo\'limidagi Dependabot alerts ni yoqing',
        'dependabot.yml yarating va birinchi avtomatik PR ni ko\'ring',
        'SECURITY.md fayl qo\'shing'
      ]
    },
    {
      type: 'list',
      title: 'Hujjat',
      points: [
        'https://docs.github.com/en/code-security',
        'https://docs.github.com/en/authentication'
      ]
    }
  ]
};
