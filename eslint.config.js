import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { globalIgnores } from "eslint/config";
import reactPlugin from "eslint-plugin-react";
import jsxA11y from "eslint-plugin-jsx-a11y";
import prettier from "eslint-plugin-prettier";
import importPlugin from "eslint-plugin-import";

export default tseslint.config([
    globalIgnores(["dist"]),
    {
        files: ["**/*.{ts,tsx}"],
        extends: [
            js.configs.recommended,
            tseslint.configs.recommended,
            reactHooks.configs["recommended-latest"],
            reactRefresh.configs.vite,
        ],
        plugins: {
            react: reactPlugin,
            "jsx-a11y": jsxA11y,
            prettier: prettier,
            import: importPlugin,
        },
        rules: {
            ...jsxA11y.configs.recommended.rules,
            ...reactPlugin.configs.recommended.rules,
            "react/react-in-jsx-scope": "off",
            "react/prop-types": "off",
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",
            "prettier/prettier": "error",
            "import/order": [
                "warn",
                {
                    groups: [
                        "builtin", // встроенные модули Node.js
                        "external", // внешние библиотеки
                        "internal", // внутренние алиасы проекта
                        ["parent", "sibling", "index"], // относительные импорты
                    ],
                    "newlines-between": "always", // пустая строка между группами
                    alphabetize: { order: "asc", caseInsensitive: true }, // сортировка по алфавиту
                },
            ],
        },
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        settings: {
            react: { version: "detect" },
        },
    },
]);
