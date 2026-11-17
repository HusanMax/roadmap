export const htmlFormsTablesData = {
  id: 'html-forms-tables',
  title: '3. Jadval va Formalar',
  heading: 'HTML: jadvallar va formalar',
  subheading: 'Ma\'lumotni tartibli ko\'rsatish va foydalanuvchidan ma\'lumot olish.',
  sections: [
    {
      type: 'code',
      lang: 'markup',
      title: 'Jadval tuzilmasi',
      text: 'Jadval table, qatorlar tr, sarlavha katak th, oddiy katak td bilan yoziladi. thead, tbody, tfoot jadvalni qismlarga ajratadi.',
      code: `<table>
  <thead>
    <tr>
      <th>Ism</th>
      <th>Yosh</th>
      <th>Shahar</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ali</td>
      <td>22</td>
      <td>Toshkent</td>
    </tr>
    <tr>
      <td>Vali</td>
      <td>25</td>
      <td>Samarqand</td>
    </tr>
  </tbody>
</table>`
    },
    {
      type: 'code',
      lang: 'markup',
      title: 'Kataklarni birlashtirish',
      text: 'colspan — ustunlarni, rowspan — qatorlarni birlashtiradi.',
      code: `<tr>
  <td colspan="2">Ikki ustunga cho'zilgan katak</td>
  <td>Oddiy</td>
</tr>
<tr>
  <td rowspan="2">Ikki qatorga</td>
  <td>A</td>
  <td>B</td>
</tr>`
    },
    {
      type: 'code',
      lang: 'markup',
      title: 'Forma yaratish',
      text: 'form ichida input, textarea, select kabi maydonlar bo\'ladi. label maydon nomini bildiradi va for orqali input id si bilan bog\'lanadi.',
      code: `<form action="/royxatdan-otish" method="post">
  <label for="name">Ismingiz</label>
  <input type="text" id="name" name="name" placeholder="Ismingizni yozing" required />

  <label for="email">Email</label>
  <input type="email" id="email" name="email" required />

  <label for="pass">Parol</label>
  <input type="password" id="pass" name="password" minlength="8" required />

  <label for="msg">Xabar</label>
  <textarea id="msg" name="message" rows="4"></textarea>

  <button type="submit">Yuborish</button>
</form>`
    },
    {
      type: 'comparison',
      title: 'Input turlari',
      cards: [
        { title: 'text / email / password', subtitle: 'Matn kiritish', desc: 'email formatni, password esa belgilarni yashirib ko\'rsatadi.' },
        { title: 'number / date / range', subtitle: 'Son va sana', desc: 'Brauzer o\'zi maxsus tanlagich chiqaradi, min va max chegaralari bor.' },
        { title: 'checkbox / radio', subtitle: 'Tanlash', desc: 'checkbox — bir nechta, radio — faqat bittasini tanlash (name bir xil bo\'lishi kerak).' }
      ]
    },
    {
      type: 'code',
      lang: 'markup',
      title: 'Tanlov elementlari',
      code: `<!-- Ochiluvchi ro'yxat -->
<select name="city">
  <option value="">Shaharni tanlang</option>
  <option value="tashkent">Toshkent</option>
  <option value="samarkand">Samarqand</option>
</select>

<!-- Radio: name bir xil -->
<label><input type="radio" name="gender" value="male" /> Erkak</label>
<label><input type="radio" name="gender" value="female" /> Ayol</label>

<!-- Checkbox -->
<label><input type="checkbox" name="agree" /> Shartlarga roziman</label>`
    },
    {
      type: 'rule',
      title: 'Forma qoidalari',
      points: [
        'Har bir maydonga label yozing — qulaylik va accessibility uchun',
        'name atributisiz maydon qiymati serverga yuborilmaydi',
        'required, minlength, pattern kabi atributlar brauzerning o\'z tekshiruvini yoqadi',
        'Tugma turini aniq yozing: type="submit" yoki type="button"'
      ],
      rule: 'Brauzer tekshiruvi yetarli emas: ma\'lumotni serverda ham albatta tekshiring.'
    },
    {
      type: 'challenge',
      lang: 'html',
      title: 'Mini vazifa: obuna formasi',
      story: "Yangiliklar saytiga obuna bo'lish formasini yaratyapsiz. Foydalanuvchi email kiritishi va rozilik belgisini qo'yishi kerak.",
      task: "form ichida: label bilan bog'langan majburiy (required) email input, checkbox va submit tugmasini yarating.",
      starter: `<form>
  <!-- maydonlarni qo'shing -->
</form>`,
      tests: [
        { name: 'form bor', expr: "!!document.querySelector('form')" },
        { name: 'email turidagi required input bor', expr: "!!document.querySelector('input[type=email][required]')" },
        { name: "label for orqali inputga bog'langan", expr: '(function(){var i=document.querySelector(\'input[type=email]\'); return !!i && !!i.id && !!document.querySelector(\'label[for="\'+i.id+\'"]\');})()' },
        { name: 'checkbox bor', expr: "!!document.querySelector('input[type=checkbox]')" },
        { name: 'submit tugma bor', expr: "!!document.querySelector('button[type=submit], input[type=submit]')" }
      ],
      hint: '<label for="email">Email</label> va <input type="email" id="email" required> — for va id bir xil bo\'lsin.',
      solution: `<form>
  <label for="email">Email</label>
  <input type="email" id="email" name="email" required>
  <label><input type="checkbox" name="agree"> Shartlarga roziman</label>
  <button type="submit">Obuna bo'lish</button>
</form>`
    },
    {
      type: 'tasks',
      title: 'Amaliyot mashqlari',
      tasks: [
        '3 ta ustunli talabalar jadvalini yarating',
        'Ro\'yxatdan o\'tish formasi: ism, email, parol, shahar, rozilik',
        'Jadvalda colspan bilan umumiy qator yarating',
        'Forma maydonlariga required va minlength qo\'shing'
      ]
    }
  ]
};
