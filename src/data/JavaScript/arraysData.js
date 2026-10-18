export const arraysData = {
  id: 'arrays-iterables',
  title: '6. Arraylar va Iterables',
  heading: 'JavaScript arraylar va iterables - Asoslar',
  subheading: 'Array - tartiblangan elementlar yig\'indisi: indekslar 0 dan boshlanadi. Iterables - sikl orqali ketma-ket o\'tilishi mumkin bo\'lgan obyektlar.',
  sections: [
    {
      type: 'list',
      title: '1. Arraylar va Iterables Tushunchasi',
      text: 'Array - tartiblangan elementlar yig\'indisi bo\'lib, indekslar 0 dan boshlanadi. Iterables - sikl orqali ketma-ket o\'tilishi mumkin bo\'lgan obyektlar (array, string, Map, Set). Array iterable bo\'lgani uchun biz unga for...of bilan oson ishlov bera olamiz.',
      points: [
        'Muhim qoida: Array indekslari 0-bosqichdan boshlanadi.',
        'Array length: Oxirgi indeks + 1 ni bildiradi.',
        'Iterable: for...of bilan aylantirish mumkin.',
        'Real hayotdagi misol: Mahsulotlar ro\'yxatini (cart yoki katalog) ketma-ket ko\'rib chiqish, har biri uchun amal bajarish.'
      ]
    },
    {
      type: 'code',
      title: '2. for...of sikli tushuntirishi',
      text: 'for...of iterable obyektlar ustida qulay aylantirish uchun ishlatiladi. U elementning o\'zini oladi (indeks emas). for esa indeks yoki shart asosida ishlaydi va har xil strukturalarda ko\'proq nazorat beradi.',
      code: 'const users = ["Ali", "Laylo", "Oybek"];\nfor (const u of users) {\n  console.log(u);\n}\n\nconst msgs = ["Salom", "Xabar 1", "Xabar 2"];\nfor (const m of msgs) {\n  console.log("Yuborilmoqda:", m);\n}'
    },
    {
      type: 'code',
      title: '3. push(), pop(), shift(), unshift() - massivni o\'zgartirish',
      text: 'Bular mutatsion metodlar - original arrayni o\'zgartiradi. push/pop oxirgi element bilan ishlaydi; unshift/shift boshida ishlaydi. shift/unshift odatda sekinroq ishlaydi, chunki indekslarni siljitadi.',
      code: 'const cart = ["olma", "banan"];\ncart.push("nok"); // ["olma", "banan", "nok"]\nconst last = cart.pop(); // "nok"\n// unshift() boshiga qo\'shadi, shift() boshidan o\'chiradi.'
    },
    {
      type: 'code',
      title: '4. map() metodi - transformatsiya qilish',
      text: 'map() har bir elementga funksiya qo\'llaydi va yangi array qaytaradi. Original array o\'zgarmaydi. map elementlar sonini o\'zgartirmaydi - length saqlanadi.',
      code: 'const prices = [100, 200, 300];\nconst withTax = prices.map(p => p * 1.1);\n// Real hayot: API dan kelgan narxlarni foydalanuvchi ko\'rinishiga formatlash (valyuta, chegirma hisoblash).'
    },
    {
      type: 'code',
      title: '5. filter() metodi - shartga moslarni tanlash',
      text: 'filter() har bir elementni sinab, true qaytarganlarini yangi arrayga oladi. filter originalni o\'zgartirmaydi. map va filter farqi: map transformatsiya qiladi, filter esa tanlab oladi.',
      code: 'const users = [{name: "Ali", active: true}, {name: "Laylo", active: false}];\nconst active = users.filter(u => u.active);\n// filter length kamayishi yoki teng bo\'lishi mumkin.'
    },
    {
      type: 'code',
      title: '6. find() vs filter() - farqlash',
      text: 'find() - shartga mos keluvchi birinchi elementni qaytaradi yoki topilmasa undefined. filter() esa barcha mos elementlarni arrayga oladi. Agar bitta element kerak bo\'lsa find, ko\'p element kerak bo\'lsa filter ishlatiladi.',
      code: 'const users = [{id: 1, name: "A"}, {id: 2, name: "B"}];\nconst one = users.find(u => u.id === 2);\nconst many = users.filter(u => u.name === "A");\n// Real hayot: ID bo\'yicha foydalanuvchini topish (profilni yuklash) uchun find eng ma\'quli.'
    },
    {
      type: 'code',
      title: '7. forEach() - har bir element uchun yon effektlar',
      text: 'forEach() har bir element uchun funksiyani chaqiradi, ammo yangi array qaytarmaydi - undefined qaytaradi. Uni console.log, DOM yangilash, network so\'rov yuborish uchun ishlatamiz.',
      code: 'const arr = [1, 2, 3];\narr.forEach(n => console.log("raqam", n));\n// Agar natija array kerak bo\'lsa map yoki filter ishlating.'
    },
    {
      type: 'code',
      title: '8. includes(), slice(), splice() - tekshirish va kesish',
      text: 'includes(value) - boolean qaytaradi (element mavjudmi?). slice(start, end) - nusxa ko\'chirib yangi array qaytaradi. splice(start, deleteCount, ...) - mutatsion metod bo\'lib, arraydan elementlarni olib tashlaydi yoki qo\'shadi.',
      code: 'const names = ["A", "B", "C", "D"];\nconst part = names.slice(1, 3); // ["B", "C"]\nconst hasB = names.includes("B"); // true\n// splice originalni o\'zgartiradi, shuning uchun ehtiyot bo\'lish kerak.'
    },
    {
      type: 'code',
      title: '9. reduce() va metodlarni zanjirlash',
      text: 'reduce() massivni bir qiymatga kamaytiradi: accumulator (yig\'uvchi) va current (joriy element) yordamida ishlaydi. Initial value (boshlang\'ich accumulator) berish tavsiya etiladi.',
      code: 'const prices = [10, 20, 30];\nconst total = prices.reduce((acc, p) => acc + p, 0); // 60\n// Real hayot: savatdagi mahsulotlarning umumiy narxini hisoblash, statistik hisobotlar.'
    },
    {
      type: 'tasks',
      title: '10. Amaliyot Topshiriqlari',
      tasks: [
        'for...of yordamida arrayni aylantiring va elementlarni konsolga chiqaring.',
        'push yordamida arrayga yangi element qo\'shing.',
        'pop bilan oxirgi elementni o\'chirib, natijasini konsolga yozing.',
        'map yordamida raqamlarni ikki barobarga ko\'paytiring.',
        'filter yordamida musbat yoki kerakli qiymatlarni tanlang.',
        'find bilan bir elementni ID orqali toping.',
        'forEach yordamida elementlarni log qiling.',
        'includes bilan qiymat mavjudligini tekshiring.',
        'slice bilan arraydan preview nusxasini yarating (originalni o\'zgartirmang).',
        'reduce bilan umumiy summani hisoblang (total price).'
      ]
    }
  ]
};