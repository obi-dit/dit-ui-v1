import eslintConfigPrettier from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import withNuxt from "./.nuxt/eslint.config.mjs";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default withNuxt([
  {
    ignores: [
      ".nitro/**",
      ".nuxt/**",
      ".output/**",
      ".vscode/**",
      "dist/**",
      "node_modules/**",
      "coverage/**",
      "**/*.svg",
    ],
  },
  {
    languageOptions: {
      globals: {
        useStorage: "readonly",
        useUser: "readonly",
        ref: "readonly",
        computed: "readonly",
        definePageMeta: "readonly",
        defineNuxtRouteMiddleware: "readonly",
        useRoute: "readonly",
        useRouter: "readonly",
        useRuntimeConfig: "readonly",
        useRequestHeaders: "readonly",
        // Add others as needed
      },
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      ...eslintConfigPrettier.rules,
      ...eslintPluginPrettierRecommended.rules,
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
          singleQuote: false,
          singleAttributePerLine: true,
          trailingComma: "all",
          tabWidth: 2,
          useTabs: false,
          bracketSpacing: true,
          jsxBracketSameLine: false,
          semi: true,
        },
      ],
      "no-console": "warn",
      "no-empty": "warn",
      "vue/multi-word-component-names": "off",
      "vue/first-attribute-linebreak": "off",
    },
    settings: {
      "vue-i18n": {
        localeDir: "./localization/*.json",
        messageSyntaxVersion: "^9.0.0",
      },
    },
  },
])
  .prepend()
  .override("nuxt/typescript/rules", {
    rules: {
      "@typescript-eslint/ban-types": "off",
    },
  });
