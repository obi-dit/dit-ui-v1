// https://nuxt.com/docs/api/configuration/nuxt-config
import { boolean } from "boolean";
export default defineNuxtConfig({
  devtools: { enabled: true },
  imports: {
    autoImport: true,
  },
  modules: [
    "@nuxt/ui",
    "@nuxt/eslint",
    // '@nuxt/content',
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/test-utils",
    "@pinia/nuxt",
  ],
  ssr: false,
  css: ["assets/css/main.css"],
  pinia: {
    storesDirs: ["./stores/**", "./custom-folder/stores/**"],
  },
  icon: {
    customCollections: [
      {
        prefix: "my-icon",
        dir: "./app/assets/icons",
      },
    ],
  },

  runtimeConfig: {
    public: {
      inStaging: boolean(process.env.NUXT_IN_STAGING) || false,
      uiDomain: process.env.NUXT_UI_DOMAIN,
      uiTopleveldomain: process.env.NUXT_UI_TOPLEVELDOMAIN,
      uiUrl: process.env.NUXT_UI_URL,
      uiFullUrl: process.env.NUXT_UI_FULL_URL,
      siteUrl: process.env.NUXT_UI_FULL_URL,
      publicPath: process.env.NUXT_PUBLIC_PATH,
      apiUrl: process.env.NUXT_API_URL,
      websocketUrl: process.env.NUXT_WEBSOCKET_URL,
    },
  },

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: "2024-11-27",
});
