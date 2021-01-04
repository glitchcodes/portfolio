<template>
    <div class="container">
        <div class="hero">
            <div class="container">
                <h3>Portfolio</h3>
                <p class="subtitle">All of my works are listed here</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {}
    },
    head () {
        return {
            title: 'Portfolio',
            meta: [
                { hid: 'description', name: 'description', content: 'My recent completed works built with modern technology' },
                { hid: 'og:title', property: 'og:title', content: 'Portfolio - GlitchDZN' },
                { hid: 'og:description', property: 'og:description', content: 'My recent completed works built with modern technology' }
            ]
        }
    }
}
</script>

<style scoped lang="scss">
.hero {
    background: rgb(56, 64, 95);
    padding: 10rem 2rem;
    border-radius: 1rem;
    p { margin-bottom: 0; }
}
</style>
