export const errorHandlingData = {
  id: 'error-handling',
  title: '11. Error Handling (Xatolarni Boshqarish)',
  heading: 'JavaScript Error Handling',
  subheading: 'Xatolar nima, ularni try...catch, throw va finally yordamida boshqarish.',
  sections: [
    {
      type: 'list',
      title: '1. Error nima?',
      text: 'JavaScript\'da error - bu dastur ishlayotganda yuzaga keladigan muammo. Xatolar API so\'rovlari, shakl tekshiruvi yoki ma\'lumotlarni tahlil qilish paytida yuzaga keladi. Agar xato boshqarilmasa, dastur to\'xtab qoladi va foydalanuvchi oynasi ishlamay qoladi. Bu veb-saytlarda yoqimsiz tajriba yaratadi.',
      points: [
        'JSON.parse xatosi: JSON.parse(\'{invalid json}\'); -> SyntaxError.',
        'Undefined o\'zgaruvchi: console.log(user.name) -> ReferenceError.',
        'API so\'rovi muvaffaqiyatsiz: fetch(\'/api/data\').then(...) -> NetworkError.'
      ]
    },
    {
      type: 'code',
      title: '2. try...catch Asoslari',
      text: 'try...catch - bu xatolarni ushlab olish va dasturni to\'xtab qolishidan saqlash uchun mo\'ljallangan tuzilma. Bu dasturning ishlashini to\'xtatmasdan xato yuzaga kelsa ham boshqa ishlar bajarishga imkon beradi.',
      code: 'try {\n  // Xatoga sabab bo\'lishi mumkin bo\'lgan kod\n  let x = y + 1;\n} catch (error) {\n  // Xato yuzaga kelsa ishlaydigan kod\n  console.log("Something went wrong");\n}\n\ntry {\n  console.log(userName);\n} catch (error) {\n  console.log("Variable not found");\n}'
    },
    {
      type: 'code',
      title: '3. Error Obyekti Haqida',
      text: 'catch bloki xato obyektini qabul qiladi. Bu obyekt xato haqida muhim ma\'lumotlarni o\'z ichiga oladi: error.message (xato haqida tushunarli matn), error.stack (qo\'ng\'iroq to\'plami - xato qayerda yuzaga keldi), error.name (xato turi: SyntaxError, ReferenceError, TypeError va boshqalar).',
      code: '// ReferenceError misoli\ntry {\n  console.log(userName);\n} catch (error) {\n  console.log(error.name);\n  console.log(error.message);\n}\n\n// TypeError misoli\ntry {\n  let user = null;\n  user.login();\n} catch (error) {\n  console.log(error.name);\n  console.log(error.message);\n}'
    },
    {
      type: 'code',
      title: '4. finally Bloki',
      text: 'finally bloki har doim ishlaydi - xato bo\'lsa ham, bo\'lmasa ham. Bu resurslarni tozalash, yuklash ko\'rsatkichini yopish yoki boshqa yakunlovchi ishlarni bajarish uchun ideal.',
      code: 'try {\n  console.log("Processing order");\n} catch (error) {\n  console.log("Error happened");\n} finally {\n  console.log("Process finished");\n}'
    },
    {
      type: 'code',
      title: '5. throw Operator',
      text: 'throw - bu dasturchi o\'zi xato yaratish va uni boshqarish uchun ishlatadi. Bu shakl tekshiruvi yoki API so\'rovlarida foydalanuvchi kiritgan ma\'lumotlar noto\'g\'ri bo\'lganda foydali.',
      code: 'function validateUsername(username) {\n  if (username.length < 3) {\n    throw new Error(\'Foydalanuvchi nomi juda qisqa. Kamida 3 ta belgi kerak\');\n  }\n  if (username.length > 20) {\n    throw new Error(\'Foydalanuvchi nomi juda uzun. 20 belgidan oshmasligi kerak\');\n  }\n  return true;\n}\n\ntry {\n  validateUsername(\'ab\');\n} catch (error) {\n  console.log(error.message);\n}'
    },
    {
      type: 'code',
      title: '6. Form Validation Misoli',
      text: 'Haqiqiy veb-saytlarda shakl tekshiruvi juda muhim. Barcha maydonlar to\'g\'ri to\'ldirilganligini tekshirish va foydalanuvchiga aniq xabarlar berish kerak.',
      code: 'function validatePassword(password) {\n  if (password.length < 6) {\n    throw new Error(\'Parol kamida 6 ta belgi bo\\\'lishi kerak\');\n  }\n  if (!/[A-Z]/.test(password)) {\n    throw new Error(\'Parol katta harfni o\\\'z ichiga olishi kerak\');\n  }\n}\n\nfunction validateRegistration(userData) {\n  try {\n    validatePassword(userData.password);\n    validateUsername(userData.username);\n    return { success: true };\n  } catch (error) {\n    return { success: false, message: error.message };\n  }\n}'
    },
    {
      type: 'challenge',
      lang: 'js',
      title: "Mini vazifa: xavfsiz JSON o'qish",
      story: "Serverdan kelgan JSON ba'zan buzuq bo'ladi. Dastur yiqilib qolmasligi kerak.",
      task: "xavfsizParse(matn) funksiyasini try...catch bilan yozing: to'g'ri JSON bo'lsa obyektni, xato bo'lsa null qaytarsin.",
      starter: `function xavfsizParse(matn) {
  // try...catch dan foydalaning
}

console.log(xavfsizParse('{"ism": "Ali"}'));
console.log(xavfsizParse("buzuq json"));`,
      tests: [
        { name: "to'g'ri JSON obyekt qaytaradi", expr: 'xavfsizParse(\'{"a":1}\').a === 1' },
        { name: 'buzuq JSON null qaytaradi', expr: "xavfsizParse('{buzuq') === null" },
        { name: "bo'sh matn null qaytaradi", expr: "xavfsizParse('') === null" }
      ],
      hint: 'try { return JSON.parse(matn); } catch (e) { return null; }',
      solution: `function xavfsizParse(matn) {
  try {
    return JSON.parse(matn);
  } catch (e) {
    return null;
  }
}`
    },
    {
      type: 'tasks',
      title: '7. Amaliy Mashqlar',
      tasks: [
        'Agar username bo\'sh bo\'lsa throw new Error("Username required") chiqaring, try...catch yordamida xatoni ushlang va error.message ni chiqaring.',
        'Agar parol uzunligi 6 dan kichik bo\'lsa throw new Error("Password too short") chiqaring va catch ichida xato matnini chiqaring.',
        'Agar amount > balance bo\'lsa throw new Error("Not enough balance") chiqarilsin.',
        'try ichida "Processing order" chiqaring, finally ichida "Order process finished" chiqaring va finally har doim ishlashini ko\'rsating.'
      ]
    }
  ]
};