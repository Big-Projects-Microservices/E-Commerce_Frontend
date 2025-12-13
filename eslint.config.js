import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import pluginImport from "eslint-plugin-import";

export default [
  { ignores: ["dist"] },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      // --- НОВЫЙ ПЛАГИН ---
      import: pluginImport,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      // ОПЦИОНАЛЬНО: Правила для предотвращения проблем с импортами
      "import/no-unresolved": "error",
      "import/named": "error",
      "import/default": "error",
      "import/namespace": "error",
    },
    // --- НОВАЯ СЕКЦИЯ: НАСТРОЙКА РАЗРЕШЕНИЯ АЛИАСОВ ---
    settings: {
      "import/resolver": {
        alias: {
          // Скопируйте те же алиасы, что и в vite.config.js,
          // но с указанием папки 'src' относительно корня проекта.
          map: [
            ["@atoms", "./src/components/atoms"],
            ["@molecules", "./src/components/molecules"],
            ["@organisms", "./src/components/organisms"],
            ["@templates", "./src/components/templates"],
            ["@pages", "./src/pages"],
            ["@recoil", "./src/recoil"],
            ["@services", "./src/services"],
            ["@styles", "./src/styles"],
            ["@data", "./src/data"],
            ["@src", "./src"],
          ],
          extensions: [".js", ".jsx"],
        },
      },
    },
  },
];
