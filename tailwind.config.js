// tailwind.config.js
export default {
  content: [
    "./index.html", // или путь к твоему HTML файлу
    "./src/**/*.{js,jsx,ts,tsx}", // для файлов в папке src (React компоненты)
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
