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
    nitro: {
        prerender: {
            autoSubfolderIndex: false
        }
    },
    css: [
        '~/assets/css/main.scss',
        'milligram',
        '@fortawesome/fontawesome-svg-core/styles.css'
    ],
    modules: [
        '@nuxtjs/google-fonts',
        '@nuxtjs/color-mode',
        '@nuxtjs/supabase'
    ],
    googleFonts: {
        display: 'swap',
        families: {
            Karla: [400, 700]
        }
    }
})
