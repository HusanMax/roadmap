export const domStyleEventsData = {
  id: 'browser-storage',
  title: '14. Brauzerda Ma\'lumot Saqlash (Storage)',
  heading: 'Brauzerda Ma\'lumot Saqlash',
  subheading: 'JavaScript yordamida brauzerda ma\'lumotlarni qanday saqlash va boshqarishni o\'rganamiz.',
  sections: [
    {
      type: 'list',
      title: '1. Brauzer Saqlashi (Browser Storage) Nima?',
      text: 'Veb-saytlarga foydalanuvchi ma\'lumotlarini brauzer ichida saqlash imkonini beradi. Bu orqali sayt foydalanuvchi sozlamalarini, login holatini yoki boshqa ma\'lumotlarni eslab qolishi mumkin.',
      points: [
        'Page refresh qilishga qaramay ma\'lumotlar saqlanadi.',
        'Serverga so\'rov yuborishni kamaytiradi.',
        'Tez ishlaydi va samarali.',
        'Asosiy misollar: Login holati, Theme (dark/light), Til tanlovi, Shopping cart.'
      ]
    },
    {
      type: 'code',
      title: '2. localStorage',
      text: 'localStorage - brauzerda doimiy ma\'lumot saqlash usuli. Bu ma\'lumotlar brauzerni qayta ishga tushirish yoki page refresh qilishdan keyin ham saqlanib qoladi. Faqat kod yoki brauzer sozlamalaridan o\'chirilganda ma\'lumotlar yo\'qoladi.',
      code: 'localStorage.setItem("theme", "dark");\nlocalStorage.setItem("username", "Ali");\nlocalStorage.setItem("language", "uz");\nconst theme = localStorage.getItem("theme");\nconsole.log(theme); // "dark"'
    },
    {
      type: 'code',
      title: '3. localStorage Metodlari',
      text: 'localStorage bilan ishlash uchun asosiy metodlar: setItem(), getItem(), removeItem() va clear().',
      code: 'localStorage.setItem("key", "value"); // Ma\'lumot saqlash\nconst data = localStorage.getItem("key"); // Ma\'lumot o\'qish\nlocalStorage.removeItem("key"); // Ma\'lumotni o\'chirish\nlocalStorage.clear(); // Barcha ma\'lumotlarni tozalash'
    },
    {
      type: 'code',
      title: '4. sessionStorage',
      text: 'sessionStorage - ma\'lumotni faqat browser tab ochiq bo\'lganda saqlaydi. Bu localStorage dan farqli ravishda, tab yopilganda ma\'lumotlar avtomatik ravishda o\'chiriladi. Page refresh qilinganda saqlanib qoladi, lekin yangi tab ochilganda bo\'sh bo\'ladi.',
      code: 'sessionStorage.setItem("token", "12345");\nsessionStorage.setItem("step", "payment");\nconst token = sessionStorage.getItem("token");\nconsole.log(token); // "12345"'
    },
    {
      type: 'list',
      title: '5. localStorage vs sessionStorage vs Cookies Taqqoslanishi',
      text: 'Ular o\'xshash API ga ega, lekin ma\'lumotlarni saqlash muddati va maqsadi boshqachadir.',
      points: [
        'LocalStorage: Doimiy saqlash, hech qachon muddat tugamaydi, faqat qo\'lda o\'chiriladi.',
        'SessionStorage: Vaqtinchalik saqlash, tab yopilganda o\'chiriladi.',
        'Cookies: Server va mijoz o\'rtasida almashinadi, hajm chegarasi ~4KB.'
      ]
    },
    {
      type: 'code',
      title: '6. Cookies',
      text: 'Cookie - kichik ma\'lumot bo\'lib, server va browser o\'rtasida uzatiladi. Bu authentication va session management uchun eng ko\'p ishlatiladigan usul.',
      code: 'document.cookie = "username=Ali";\ndocument.cookie = "theme=dark; expires=Fri, 31 Dec 2027 12:00:00 UTC";\ndocument.cookie = "session=123; path=/dashboard";'
    },
    {
      type: 'list',
      title: '7. Qachon Qaysi Birini Ishlatish Kerak?',
      text: 'Har bir storage turi o\'zining maqsadi bo\'yicha tanlanadi:',
      points: [
        'localStorage: Doimiy ma\'lumotlar (Theme sozlamalari, Username, Til tanlovi).',
        'sessionStorage: Vaqtinchalik ma\'lumotlar (Login session, Form ma\'lumotlari, Checkout bosqichlari).',
        'Cookies: Authentication va server bilan ishlash (Remember me, User tracking).'
      ]
    },
    {
      type: 'tasks',
      title: '8. Amaliy Topshiriqlar',
      tasks: [
        'Task 1: Button bosilganda theme = "dark" ni localStorage ga saqlang.',
        'Task 2: Input ga yozilgan username ni sessionStorage ga saqlang.',
        'Task 3: Cookie yarating (user=Vali) va expiration vaqtini qo\'shing.',
        'Task 4: Page yuklanganda, agar localStorage da theme="dark" bo\'lsa, body ga dark class qo\'shing.',
        'Task 5: Logout tugmasi bosilganda localStorage va sessionStorage ni tozalang.'
      ]
    }
  ]
};