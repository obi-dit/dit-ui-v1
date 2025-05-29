export default defineAppConfig({
  // https://ui.nuxt.com/getting-started/theme#design-system
  ui: {
    colors: {
      primary: "emerald",
      neutral: "slate",
      "accent-blue": "#1877F",
    },

    input: {
      slots: {
        root: "w-full !h-[44px] ",
        body: "",
        base: "h-full !bg-transparent focus:border-transparent !text-primary",
      },
    },

    formField: {
      slots: {
        label: "text-gray-700",
      },
    },

    button: {
      slots: {
        base: "!focus-visible:outline-none !focus:ring-0 !ring-0",
      },
      defaultVariants: {
        // Set default button color to neutral
        // color: 'neutral'
      },
    },
  },
});
