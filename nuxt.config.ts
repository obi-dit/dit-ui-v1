// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  ssr: true,
  nitro: {
    prerender: {
      routes: ["/", "/about", "/contact"],
    },
  },
  // routeRules: {
  //   "/": {
  //     ssr: false,
  //   },
  // },
  devtools: { enabled: true },
  imports: {
    autoImport: true,
  },
  devServer: {
    host: "0.0.0.0",
  },
  modules: [
    ...(process.env.NODE_ENV === "development"
      ? ["@nuxt/test-utils", "@nuxt/eslint"]
      : []),
    "@nuxt/ui",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/scripts",
    "@pinia/nuxt",
    "@vueuse/nuxt",
  ],

  // ssr: false,
  spaLoadingTemplate: "public/loader.html",
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

  app: {
    baseURL: process.env.NUXT_PUBLIC_PATH || "/", // Directory project is installed in
    // buildAssetsDir, // Folder to host built packages in .nuxt relative to baseURL
    // cdnURL, // Host url
    pageTransition: {
      name: "nuxt-page-fade",
      mode: "out-in",
    },
    layoutTransition: {
      name: "nuxt-layout-fade",
      mode: "out-in",
    },
    head: {
      title: "DIT | Empowering Future Technologists in AI, IT & Digital Media",
      htmlAttrs: {
        lang: "en",
      },
      link: [
        {
          rel: "shortcut icon",
          href: "/dit_favicon.png",
        },
        {
          rel: "apple-touch-icon",
          href: "/dit_favicon.png",
        },

        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
        },
      ],

      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scaleWorkskuad=1",
        },
        {
          name: "description",
          content: "DIT",
        },
        { hid: "og-type", property: "og:type", content: "website" },
        {
          hid: "og-title",
          property: "og:title",
          content:
            "DIT | Empowering Future Technologists in AI, IT & Digital Media",
        },

        {
          hid: "og:image",
          property: "og:image",
          content: (process.env.NUXT_PUBLIC_PATH || "/") + `dit_favicon.png`,
        },
        {
          hid: "t-type",
          name: "twitter:card",
          content: "summary_large_image",
        },
      ],
    },
  },

  runtimeConfig: {
    public: {
      inStaging: Boolean(process.env.NUXT_IN_STAGING) || false,
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
