import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
// export default defineNuxtConfig({

// })

// import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  serverMiddleware: [
    { path: "/server-api", handler: "~/server-middleware/index.ts" },
  ],
  css: ['vuetify/lib/styles/main.sass'],
  build: {
    transpile: ['vuetify']
  },
  vite: {
    plugins: [
      {
        // https://github.com/nuxt/framework/issues/2798
        configResolved(config) {
          const vuetifyIdx = config.plugins.findIndex(
            (plugin) => plugin.name === "vuetify:import"
          );
          const vueIdx = config.plugins.findIndex(
            (plugin) => plugin.name === "vite:vue"
          );
          if (~vuetifyIdx && vuetifyIdx < vueIdx) {
            const vuetifyPlugin = config.plugins[vuetifyIdx];
            // @ts-ignore
            config.plugins.splice(vuetifyIdx, 1);
            // @ts-ignore
            config.plugins.splice(vueIdx, 0, vuetifyPlugin);
          }
        },
      },
    ],
    define: {
      "process.env.DEBUG": "false",
    },
  },
})