export default defineAppConfig({
  ui: {
    colors: {
      primary: "sangria",
      neutral: "slate",
    },
    button: {
      variants: {
        size: {
          "2xl": {
            base: "px-8 py-4 text-lg font-bold gap-2",
            leadingIcon: "size-7",
            leadingAvatarSize: "xs",
            trailingIcon: "size-7",
          },
        },
      },
    },
  },
  uiPro: {
    container: {
      base: "max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8",
    },
    prose: {
      badge: {
        base: "rounded-full",
      },
      h1: {
        slots: {
          base: "text-4xl text-(--ui-text-highlighted) font-bold mb-8 scroll-mt-[calc(45px+var(--ui-header-height))] lg:scroll-mt-(--ui-header-height)",
          link: "inline-flex items-center gap-2",
        },
      },
      p: {
        base: "my-5 leading-7 text-pretty",
      },
    },
    pageSection: {
      slots: {
        root: "relative isolate",
        container:
          "flex flex-col lg:grid py-16 sm:py-24 lg:py-32 gap-8 sm:gap-16",
        wrapper: "",
        headline: "mb-3",
        leading: "flex items-center mb-6",
        leadingIcon: "size-10 shrink-0 text-(--ui-primary)",
        title:
          "text-3xl sm:text-4xl lg:text-5xl text-pretty tracking-tight font-bold text-(--ui-text-highlighted)",
        description: "text-base sm:text-lg text-(--ui-text-muted)",
        links: "mt-8 flex flex-wrap gap-x-6 gap-y-3",
        features: "mt-8 grid",
      },
      variants: {
        orientation: {
          vertical: {
            title: "text-left",
            description: "text-left text-balance",
          },
        },
        headline: {
          true: {
            headline:
              "font-semibold text-(--ui-primary) flex items-center gap-1.5",
          },
        },
        title: {
          true: {
            description: "mt-6",
          },
        },
        description: {
          true: "",
        },
        features: {
          true: "",
        },
      },
      compoundVariants: [
        {
          orientation: "vertical",
          title: true,
          class: {
            features: "mt-16",
          },
        },
        {
          orientation: "vertical",
          description: true,
          class: {
            features: "mt-16",
          },
        },
        {
          orientation: "vertical",
          features: true,
          class: {
            links: "mt-16",
          },
        },
      ],
    },
  },
});
