export const reactUiLibrariesData = {
  id: 'react-ui-libraries',
  title: '5. React UI Librarylar',
  heading: 'React UI Librarylar',
  subheading: 'Ant Design, Chakra UI, Shadcn/UI va boshqa zamonaviy kutubxonalar yordamida tezkor hamda professional UI yaratish.',
  sections: [
    {
      type: 'comparison',
      title: '1. UI Library Nima?',
      text: 'UI Library - bu oldindan tayyorlangan UI komponentlar to\'plami: Button, Card, Input, Dialog, Table, Modal, Dropdown va boshqalar. Oddiy Tailwind yoki CSS bilan har safar hamma narsani qo\'lda yozish kerak - UI Library bu jarayonni tezlashtiradi.',
      cards: [
        { title: 'Oddiy CSS bilan', subtitle: 'Qo\'lda yozish', desc: 'Har bir element stillarini noldan yozish talab etiladi.' },
        { title: 'UI Library bilan', subtitle: 'Tayyor komponentlar', desc: '<Button variant="primary"> kabi tayyor teglardan foydalaniladi.' },
        { title: 'Tezlik va Qulaylik', subtitle: 'Vaqtni tejash', desc: 'Dizayn va funksionallik biriktirilgan holda beriladi.' }
      ],
      actionsTitle: 'UI Library afzalliklari:',
      actions: [
        'Faster Development: Har bir komponentni noldan yozish shart emas',
        'Consistent Design: Barcha sahifalarda bir xil dizayn tizimi',
        'Better Accessibility: Barcha standartlarga mos keladigan komponentlar',
        'Responsive: Mobil va desktop uchun avtomatik moslashuv'
      ]
    },
    {
      type: 'list',
      title: '2. Eng Mashhur React UI Librarylar',
      text: 'Bozordagi eng mashhur kutubxonalar va ularning asosiy xususiyatlari:',
      points: [
        'Shadcn/UI: Tailwind + to\'liq nazorat imkoniyati.',
        'Material UI (MUI): Google Material Design asosida ishlaydi.',
        'Ant Design: Admin panellar, CRM va ERP tizimlari uchun ideal.',
        'Chakra UI: Boshlang\'ichlar uchun juda oson va tushunarli props API.',
        'Mantine: Dashboard va og\'ir loyihalar uchun keng komponentlar to\'plami.'
      ]
    },
    {
      type: 'code',
      title: '3. Shadcn/UI – Zamonaviy Tanlov',
      text: 'Shadcn/UI an\'anaviy kutubxonalardan farq qiladi - u komponentlarni package sifatida o\'rnatmaydi, balki source code\'ni loyihangizga nusxa qiladi.',
      code: `// Loyiha tuzilishi:
src/
  components/
    ui/
      button.jsx
      card.jsx
      dialog.jsx

// O'rnatish bosqichlari:
npm install -D tailwindcss
npx shadcn@latest init
npx shadcn@latest add button`
    },
    {
      type: 'code',
      title: '4. Button, Input va Card Komponentlari',
      text: 'Shadcn/UI yordamida turli xil variantdagi elementlarni chaqirish va ishlatish:',
      code: `import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

// Button variantlari
<Button>Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Delete</Button>

// Input
<Input type="email" placeholder="Email manzil" />

// Card
<Card>
  <CardHeader>
    <CardTitle>React Frontend</CardTitle>
  </CardHeader>
  <CardContent>
    <p>UI Library darsi</p>
    <Button>Boshlash</Button>
  </CardContent>
</Card>`
    },
    {
      type: 'code',
      title: '5. Dialog Komponenti - Real Loyiha Misoli',
      text: 'Dialog - bu popup oyna bo\'lib, foydalanuvchidan tasdiqlash yoki ma\'lumot kiritishni so\'rash uchun ishlatiladi.',
      code: `import {
  Dialog, DialogTrigger,
  DialogContent, DialogHeader,
  DialogTitle, DialogFooter
} from "@/components/ui/dialog";

<Dialog>
  <DialogTrigger asChild>
    <Button variant="destructive">O'chirish</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Kitobni o'chirasizmi?</DialogTitle>
    </DialogHeader>
    <p>Bu amalni qaytarib bo'lmaydi.</p>
    <DialogFooter>
      <Button variant="outline">Bekor qilish</Button>
      <Button variant="destructive">Ha, o'chirish</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`
    },
    {
      type: 'list',
      title: '6. Qaysi UI Library ni Tanlash Kerak?',
      text: 'Loyihaning turiga qarab to\'g\'ri kutubxonani tanlash muhim:',
      points: [
        'Startup loyiha uchun: Shadcn/UI.',
        'Korporativ ilova uchun: Material UI.',
        'Admin paneli / CRM uchun: Ant Design.',
        'Boshlang\'ich loyiha uchun: Chakra UI.',
        'Dashboard loyiha uchun: Mantine.'
      ]
    },
    {
      type: 'tasks',
      title: '7. Amaliyot Topshiriqlari',
      tasks: [
        'Tailwind CSS o\'rnatilgan loyihada shadcn/ui ni sozlang (npx shadcn@latest init)',
        'Proyektga button va card komponentlarini qo\'shib ko\'ring',
        'Dialog komponenti yordamida ma\'lumotni o\'chirishni tasdiqlovchi modal oyna yarating',
        'Forma elementlari (Input va Button) yordamida kichik interaktiv qism yasang',
        'Loyihangiz talabidan kelib chiqib mos keladigan UI kutubxonasini tanlang'
      ]
    }
  ]
};