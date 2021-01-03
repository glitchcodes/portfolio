export default {
    // Target (https://go.nuxtjs.dev/config-target)
    target: 'static',

    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        titleTemplate: '%s | GlitchDZN',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'og:image', property: 'og:image', content: 'https://glitchcodes.netlify.app/favicon.ico' }
        ],
        link: [
            { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: true },
            { rel: 'stylesheet preload', as: 'style', href: 'https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap', crossOrigin: 'anonymous' },
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        'milligram',
        '@/assets/css/main.scss'
    ],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        { src: '~plugins/webfont.js', ssr: false }
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
    // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module'
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
    ],

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
    }
}
