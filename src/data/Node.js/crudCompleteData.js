export const crudCompleteData = {
  id: 'crud-complete',
  title: '7. CRUD ni To\'liq Yakunlash (GET by ID, PUT, DELETE)',
  heading: 'CRUD ni To\'liq Yakunlash',
  subheading: 'Express va MongoDB bilan GET by ID, PUT, DELETE - validation, error handling va status codes bilan birga.',
  sections: [
    {
      type: 'list',
      title: '1. Route Parameters va Dinamik URL',
      text: ':id - bu dynamic parameter bo\'lib, foydalanuvchi so\'roviga qarab o\'zgaradi. Request ichida bu qiymatga req.params.id orqali kiriladi.',
      points: [
        'Dinamik parametr: Har xil qiymat bo\'lishi mumkin va so\'rovga qarab o\'zgaradi.',
        'Parametrga kirish: Request ichida req.params.id orqali olinadi.',
        'Misol request: /books/65f2a1b3c4d5e6f7.'
      ]
    },
    {
      type: 'code',
      title: '2. GET /books/:id - Bitta Kitobni Olish',
      text: 'Bu route database\'dan bitta kitobni _id bo\'yicha topadi. Kitob topilmasa 404 Not Found, xatolik yuz berganda 500 Server Error qaytaradi.',
      code: 'exports.getBookById = async (req, res) => {\n  try {\n    const book = await Book.findById(req.params.id);\n    if (!book) {\n      return res.status(404).json({\n        message: "Book not found"\n      });\n    }\n    res.status(200).json(book);\n  } catch (error) {\n    res.status(500).json({\n      message: "Server error"\n    });\n  }\n};'
    },
    {
      type: 'code',
      title: '3. PUT /books/:id - Kitobni Yangilash',
      text: 'Mavjud kitobni ID bo\'yicha topib yangilaydi. findByIdAndUpdate() funksiyasi uchta argument qabul qiladi: document ID si, req.body (yangi ma\'lumotlar) va { new: true } (yangilangan ma\'lumotni qaytaradi).',
      code: 'exports.updateBook = async (req, res) => {\n  try {\n    const book = await Book.findByIdAndUpdate(\n      req.params.id,\n      req.body,\n      { new: true }\n    );\n    if (!book) {\n      return res.status(404).json({\n        message: "Book not found"\n      });\n    }\n    res.status(200).json(book);\n  } catch (error) {\n    res.status(500).json({\n      message: "Server error"\n    });\n  }\n};'
    },
    {
      type: 'code',
      title: '4. DELETE /books/:id - Kitobni O\'chirish',
      text: 'findByIdAndDelete() dokumentni topadi va darhol database\'dan o\'chiradi. Kitob topilmasa null qaytaradi, shuning uchun if (!book) tekshiruvi majburiy.',
      code: 'exports.deleteBook = async (req, res) => {\n  try {\n    const book = await Book.findByIdAndDelete(req.params.id);\n    if (!book) {\n      return res.status(404).json({\n        message: "Book not found"\n      });\n    }\n    res.status(200).json({\n      message: "Book deleted"\n    });\n  } catch (error) {\n    res.status(500).json({\n      message: "Server error"\n    });\n  }\n};'
    },
    {
      type: 'code',
      title: '5. Validation - Required Fields',
      text: 'Foydalanuvchi jo\'natgan ma\'lumotni tekshirish (validation) server xatolarining oldini oladi. Barcha majburiy maydonlar mavjudligini tekshirib, bo\'sh bo\'lsa 400 Bad Request qaytariladi.',
      code: 'exports.createBook = async (req, res) => {\n  const { nomi, muallif, sahifasi, janr } = req.body;\n  if (!nomi || !muallif || !sahifasi || !janr) {\n    return res.status(400).json({\n      message: "All fields are required"\n    });\n  }\n  // ... davomi\n};'
    },
    {
      type: 'list',
      title: '6. Number Validation',
      text: 'Faqat field mavjudligini emas, uning turini (type) ham tekshirish kerak. Sahifalar soni raqam bo\'lishi shart.',
      points: [
        'Type tekshiruvi: Agar sahifasi type\'i number bo\'lmasa, 400 va "Pages must be a number" xabari qaytariladi.',
        'Musbat son tekshiruvi: Sahifalar soni 0 yoki manfiy bo\'lsa, "Pages must be a positive number" xabari qaytariladi.',
        'Avtomatik format: JSON body orqali yuborilgan raqamlar odatda number tipida keladi.'
      ]
    },
    {
      type: 'code',
      title: '7. Error Handling va Try-Catch',
      text: 'Har bir async controller\'da try-catch ishlatilishi shart. Bu server crash bo\'lishining oldini oladi. Try kodni ishga tushiradi, catch esa xatoni ushlab 500 status kodi bilan qaytaradi.',
      code: 'try {\n  const books = await Book.find();\n  res.status(200).json(books);\n} catch (error) {\n  res.status(500).json({\n    message: error.message\n  });\n};'
    },
    {
      type: 'list',
      title: '8. HTTP Status Codes',
      text: 'Har bir server javobi bilan birga to\'g\'ri status code yuborilishi professional backend development\'ning asosi hisoblanadi.',
      points: [
        '200 OK: GET, PUT, DELETE so\'rovlari muvaffaqiyatli bajarildi.',
        '201 Created: POST - yangi record yaratildi.',
        '400 Bad Request: Validation yoki so\'rov xatosi.',
        '404 Not Found: Record topilmadi.',
        '500 Server Error: Database yoki ichki server xatosi.'
      ]
    },
    {
      type: 'code',
      title: '9. To\'liq Routes Xulosa',
      text: 'To\'liq CRUD API uchun barcha routelarning ro\'yxati:',
      code: 'router.get("/books", controller.getBooks);\nrouter.post("/books", controller.createBook);\nrouter.get("/books/:id", controller.getBookById);\nrouter.put("/books/:id", controller.updateBook);\nrouter.delete("/books/:id", controller.deleteBook);'
    }
  ]
};