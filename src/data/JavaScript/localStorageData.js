export const localStorageData = {
  id: 'browser-storage',
  title: '14. Brauzerda Ma\'lumot Saqlash (Storage)',
  heading: 'Brauzerda Ma\'lumot Saqlash[cite: 68]',
  subheading: 'JavaScript yordamida brauzerda ma\'lumotlarni qanday saqlash va boshqarishni o\'rganamiz[cite: 68].',
  sections: [
    {
      type: 'list',
      title: '1. Brauzer Saqlashi (Browser Storage) Nima?[cite: 69]',
      text: 'Veb-saytlarga foydalanuvchi ma\'lumotlarini brauzer ichida saqlash imkonini beradi[cite: 69]. Bu orqali sayt foydalanuvchi sozlamalarini, login holatini yoki boshqa ma\'lumotlarni eslab qolishi mumkin[cite: 69].',
      points: [
        'Page refresh qilishga qaramay ma\'lumotlar saqlanadi[cite: 69].',
        'Serverga so\'rov yuborishni kamaytiradi[cite: 69].',
        'Tez ishlaydi va samarali[cite: 69].',
        'Asosiy misollar: Login holati, Theme (dark/light), Til tanlovi, Shopping cart[cite: 69].'
      ]
    },
    {
      type: 'code',
      title: '2. localStorage[cite: 70]',
      text: 'localStorage - brauzerda doimiy ma\'lumot saqlash usuli[cite: 70]. Bu ma\'lumotlar brauzerni qayta ishga tushirish yoki page refresh qilishdan keyin ham saqlanib qoladi[cite: 70]. Faqat kod yoki brauzer sozlamalaridan o\'chirilganda ma\'lumotlar yo\'qoladi[cite: 70].',
      code: 'localStorage.setItem("theme", "dark");[cite: 70]\nlocalStorage.setItem("username", "Ali");[cite: 70]\nlocalStorage.setItem("language", "uz");[cite: 70]\nconst theme = localStorage.getItem("theme");[cite: 70]\nconsole.log(theme); // "dark"[cite: 70]'
    },
    {
      type: 'code',
      title: '3. localStorage Metodlari[cite: 71]',
      text: 'localStorage bilan ishlash uchun asosiy metodlar: setItem(), getItem(), removeItem() va clear()[cite: 71].',
      code: 'localStorage.setItem("key", "value"); // Ma\'lumot saqlash[cite: 71]\nconst data = localStorage.getItem("key"); // Ma\'lumot o\'qish[cite: 71]\nlocalStorage.removeItem("key"); // Ma\'lumotni o\'chirish[cite: 71]\nlocalStorage.clear(); // Barcha ma\'lumotlarni tozalash[cite: 71]'
    },
    {
      type: 'code',
      title: '4. sessionStorage[cite: 72]',
      text: 'sessionStorage - ma\'lumotni faqat browser tab ochiq bo\'lganda saqlaydi[cite: 72]. Bu localStorage dan farqli ravishda, tab yopilganda ma\'lumotlar avtomatik ravishda o\'chiriladi[cite: 72]. Page refresh qilinganda saqlanib qoladi, lekin yangi tab ochilganda bo\'sh bo\'ladi[cite: 72].',
      code: 'sessionStorage.setItem("token", "12345");[cite: 72]\nsessionStorage.setItem("step", "payment");[cite: 72]\nconst token = sessionStorage.getItem("token");[cite: 72]\nconsole.log(token); // "12345"[cite: 72]'
    },
    {
      type: 'list',
      title: '5. localStorage vs sessionStorage vs Cookies Taqqoslanishi[cite: 73]',
      text: 'Ular o\'xshash API ga ega, lekin ma\'lumotlarni saqlash muddati va maqsadi boshqachadir[cite: 73].',
      points: [
        'LocalStorage: Doimiy saqlash, hech qachon muddat tugamaydi, faqat qo\'lda o\'chiriladi[cite: 73].',
        'SessionStorage: Vaqtinchalik saqlash, tab yopilganda o\'chiriladi[cite: 73].',
        'Cookies: Server va mijoz o\'rtasida almashinadi, hajm chegarasi ~4KB[cite: 74].'
      ]
    },
    {
      type: 'code',
      title: '6. Cookies[cite: 74]',
      text: 'Cookie - kichik ma\'lumot bo\'lib, server va browser o\'rtasida uzatiladi[cite: 74]. Bu authentication va session management uchun eng ko\'p ishlatiladigan usul[cite: 74].',
      code: 'document.cookie = "username=Ali";[cite: 74]\ndocument.cookie = "theme=dark; expires=Fri, 31 Dec 2027 12:00:00 UTC";[cite: 74]\ndocument.cookie = "session=123; path=/dashboard";[cite: 74]'
    },
    {
      type: 'list',
      title: '7. Qachon Qaysi Birini Ishlatish Kerak?[cite: 75]',
      text: 'Har bir storage turi o\'zining maqsadi bo\'yicha tanlanadi[cite: 75]:',
      points: [
        'localStorage: Doimiy ma\'lumotlar (Theme sozlamalari, Username, Til tanlovi)[cite: 75].',
        'sessionStorage: Vaqtinchalik ma\'lumotlar (Login session, Form ma\'lumotlari, Checkout bosqichlari)[cite: 75].',
        'Cookies: Authentication va server bilan ishlash (Remember me, User tracking)[cite: 75].'
      ]
    },
    {
      type: 'tasks',
      title: '8. Amaliy Topshiriqlar[cite: 75]',
      tasks: [
        'Task 1: Button bosilganda theme = "dark" ni localStorage ga saqlang[cite: 75].',
        'Task 2: Input ga yozilgan username ni sessionStorage ga saqlang[cite: 75].',
        'Task 3: Cookie yarating (user=Vali) va expiration vaqtini qo\'shing[cite: 75].',
        'Task 4: Page yuklanganda, agar localStorage da theme="dark" bo\'lsa, body ga dark class qo\'shing[cite: 75].',
        'Task 5: Logout tugmasi bosilganda localStorage va sessionStorage ni tozalang[cite: 75].'
      ]
    }
  ]
};