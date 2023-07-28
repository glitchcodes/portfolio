// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        pageTransition: { name: 'slide-right' },
        head: {
            titleTemplate: '%s - GlitchDZN'
        }
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/assets/css/_variables.scss";',
                }
            }
        }
    },
    experimental: {
        payloadExtraction: false
    },
    css: [
        '~/assets/css/main.scss',
        'milligram'
    ],
    modules: [
        '@nuxtjs/google-fonts'
    ],
    googleFonts: {
        display: 'swap',
        families: {
            Karla: [400, 700]
        }
    }
})
