Tailwind:
How to install:
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss-cli@latest init

src/
├── assets/ # Статичные файлы (изображения, шрифты, иконки)
├── components/ # Основная папка для компонентов
│ ├── atoms/ # Атомы (кнопки, инпуты, иконки)
│ ├── molecules/ # Молекулы (формы, карточки товаров, частикомпонентов)
│ ├── organisms/ # Организмы (навигация, списки товаров)
│ └── templates/ # Шаблоны (Header, Footer, MainLayout)
│ ├── Header.jsx
│ ├── Footer.jsx
│ └── MainLayout.jsx
├── features/ # Функциональные модули
│ ├── cart/ # Корзина
│ └── auth/ # Аутентификация
├── pages/ # Страницы приложения
│ ├── Home.jsx
│ ├── Product.jsx
│ └── ...
├── store/ # Хранилище состояния
│ ├── actions/ # Действия (если используешь)
│ ├── reducers/ # Редьюсеры (если не на RTK)
│ ├── slices/ # Слайсы для Redux Toolkit
│ ├── selectors/ # Селекторы
│ └── store.js # Инициализация store
├── services/ # API-запросы (axios, fetch и т.д.)
├── styles/ # Tailwind config и глобальные стили
│ ├── tailwind.config.js
│ └── index.css
├── utils/ # Вспомогательные функции и хелперы
└── App.js # Основной компонент приложения
