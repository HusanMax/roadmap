export const reduxIntroData = {
  id: 'redux-intro',
  title: '7. Redux O\'rganamiz',
  heading: 'Redux o\'rganamiz!',
  subheading: 'Redux bu state management kutubxonasi bo\'lib, u dasturning barcha ma\'lumotlarini bitta markazda (store) saqlaydi.',
  sections: [
    {
      type: 'comparison',
      title: '1. Redux Nima va Nega Kerak?',
      text: 'Redux - bu dasturning bosh miyasi bo\'lib, u barcha komponentlar bilan ma\'lumotni bo\'lishadi. Props drilling muammosini hal qiladi.',
      cards: [
        { title: 'Store', subtitle: 'Markaziy ombor', desc: 'Dasturning barcha ma\'lumotlari saqlanadigan yagona joy.' },
        { title: 'Action', subtitle: 'Xabar yuborish', desc: '"Nima qilish kerak?" degan xabar.' },
        { title: 'Reducer', subtitle: 'O\'zgartirish', desc: 'Action kelganda store\'dagi ma\'lumotni qanday o\'zgartirishni belgilaydi.' }
      ],
      actionsTitle: 'Redux\'ning asosiy afzalliklari:',
      actions: [
        'Ma\'lumotlarni bitta markazda boshqarish',
        'Props drilling muammosini bartaraf etish',
        'State o\'zgarishini oson kuzatish va nazorat qilish',
        'Katta hajmli React ilovalarini tartibli saqlash'
      ]
    },
    {
      type: 'rule',
      title: '2. Redux\'ning 3 ta Prinsipi',
      points: [
        'Yagona manba - Store: Butun dasturdagi barcha state bitta joyda - store ichida saqlanadi.',
        'State o\'zgarmas (Read-only): State\'ni to\'g\'ridan-to\'g\'ri o\'zgartirib bo\'lmaydi.',
        'O\'zgarishlar sof funksiyalar (Pure Functions) orqali: State qanday o\'zgarishini reducer degan sof funksiya belgilaydi.'
      ],
      rule: 'Qoida: State faqat Action yuborish (dispatch) va Reducer orqali o\'zgartiriladi!'
    },
    {
      type: 'code',
      title: '3. Action Yaratish',
      text: 'Action har doim type xususiyatiga ega bo\'ladi va ba\'zan qo\'shimcha ma\'lumot (payload) ham olib keladi.',
      code: `import { BUY_CAKE } from "./cakeTypes";

export const buyCake = () => {
  return {
    type: BUY_CAKE
  };
};`
    },
    {
      type: 'code',
      title: '4. Reducer Yaratish',
      text: 'Reducer state va action\'ni qabul qiladi hamda yangi state\'ni qaytaradi.',
      code: `import { BUY_CAKE } from "./cakeTypes";

const initialState = {
  numOfCakes: 10
};

const cakeReducer = (state = initialState, action) => {
  switch(action.type) {
    case BUY_CAKE: return {
      ...state,
      numOfCakes: state.numOfCakes - 1
    };
    default: return state;
  }
};

export default cakeReducer;`
    },
    {
      type: 'code',
      title: '5. Store Yaratish',
      text: 'Store - dastur uchun markaziy ma\'lumot ombori bo\'lib, barcha state shu yerda saqlanadi va reducer orqali yangilanadi.',
      code: `import { createStore } from "redux";
import cakeReducer from "./cake/cakeReducer";

const store = createStore(cakeReducer);

export default store;`
    },
    {
      type: 'code',
      title: '6. Komponent va Store O\'rtasidagi Aloqa (useSelector va useDispatch)',
      text: 'useSelector store\'dagi ma\'lumotni olish uchun, useDispatch esa action yuborish uchun ishlatiladi.',
      code: `import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../redux/cake/cakeActions';

function CakeContainer() {
  const numOfCakes = useSelector(state => state.numOfCakes);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Number of cakes: {numOfCakes}</h1>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
}

export default CakeContainer;`
    },
    {
      type: 'code',
      title: '7. CombineReducers – Bir Nechta Reducer\'larni Birlashtirish',
      text: 'Dasturda bir nechta reducer bo\'lsa, combineReducers ularni bitta asosiy reducer\'ga birlashtiradi.',
      code: `import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./cake/cakeReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer
});

export default rootReducer;`
    },
    {
      type: 'tasks',
      title: '8. Amaliyot Topshiriqlari',
      tasks: [
        'Redux kutubxonasini loyihaga o\'rnating va boshlang\'ich store yarating',
        'Cake turidagi action va reducer larni yozib chiqing',
        'createStore yordamida store ni sozlang',
        'useSelector va useDispatch hook lari yordamida komponentni store bilan bog\'lang',
        'combineReducers yordamida bir nechta reducer larni birlashtirishni amalda sinab ko\'ring'
      ]
    }
  ]
};