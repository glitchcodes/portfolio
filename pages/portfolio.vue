<template>
    <div class="container">
        <div class="hero">
            <div class="container">
                <h3>Portfolio</h3>
                <p class="subtitle">
                    All of my works are listed here
                </p>
                <nuxt-link to="/" class="button button-primary" style="margin-top: 2.5rem">
                    Return to homepage
                </nuxt-link>
            </div>
        </div>
        <div class="row" style="margin-top: 2rem;">
            <div class="column column-md-50" v-for="item in works" :key="item.slug">
                <div class="portfolio-item">
                    <img :src="fetchBG(item.background)" :alt="item.name" />
                    <p style="font-size: 2rem;">{{ item.name }}</p>
                </div>
            </div>
<!--            <div class="column">-->
<!--                <div class="card">-->
<!--                    <img src="/usercord-1.png" alt="Usercord" class="card-preview" />-->

<!--                    <div class="card-body">-->
<!--                        <h5>Usercord</h5>-->

<!--                        <div class="badges">-->
<!--                            <span class="badge">Vue.js</span>-->
<!--                            <span class="badge">Laravel</span>-->
<!--                            <span class="badge">MySQL</span>-->
<!--                            <span class="badge">Websockets</span>-->
<!--                        </div>-->

<!--                        <p>-->
<!--                            A social media website integrated with Discord features.-->
<!--                        </p>-->

<!--                        <p>-->
<!--                            Features a timeline, profiles, messaging system,-->
<!--                            post/poll creation, following/follow system, and settings.-->
<!--                        </p>-->

<!--                        <p>-->
<!--                            Can automatically display user's joined Discord servers and detect activity presence.-->
<!--                        </p>-->

<!--                        <a class="button button-secondary" style="margin-bottom: 0;" target="_blank" href="https://github.com/glitchcodes/Swesence">-->
<!--                            View Screenshots-->
<!--                        </a>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--            <div class="column">-->
<!--                <div class="card">-->
<!--                    <img src="/swesence.png" alt="Swesence" class="card-preview" />-->

<!--                    <div class="card-body">-->
<!--                        <h5>Swesence</h5>-->

<!--                        <div class="badges">-->
<!--                            <span class="badge">Vue.js</span>-->
<!--                            <span class="badge">Electron.js</span>-->
<!--                            <span class="badge">Element-Plus</span>-->
<!--                        </div>-->

<!--                        <p>-->
<!--                            A small hobby project that updates the person's Discord activity to any of the selected Nintendo Switch game.-->
<!--                        </p>-->

<!--                        <a class="button button-secondary" style="margin-bottom: 0;" target="_blank" href="https://github.com/glitchcodes/Swesence">-->
<!--                            View on Github-->
<!--                        </a>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--            <div class="column">-->
<!--                <div class="card">-->
<!--                    <img src="/discord-marketplace.png" alt="Discord Marketplace" class="card-preview" />-->

<!--                    <div class="card-body">-->
<!--                        <h5>Discord Marketplace</h5>-->

<!--                        <div class="badges">-->
<!--                            <span class="badge">Vue.js</span>-->
<!--                            <span class="badge">Laravel</span>-->
<!--                            <span class="badge">MariaDB</span>-->
<!--                        </div>-->

<!--                        <p>-->
<!--                            A marketplace that is aimed for users to offer their services. Targeted for Discord audience.-->
<!--                        </p>-->

<!--                        <a class="button button-secondary" style="margin-bottom: 0;" target="_blank" href="https://web.archive.org/web/20200704205042/http://discordmarketplace.com/">-->
<!--                            View on Archive.org-->
<!--                        </a>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
        </div>
    </div>
</template>

<script lang="ts" setup>
useHead({
    title: 'Portfolio',
    meta: [
        { name: 'description', content: 'My recent completed works built with modern technology' },
        { property: 'og:title', content: 'Portfolio - GlitchDZN' },
        { property: 'og:description', content: 'My recent completed works built with modern technology' }
    ]
})

// Supabase client
const client = useSupabaseClient();

// Fetch porfolio items
const { data: works } = await useFetch('/api/works');

const fetchBG = (image: string) => {
    const { data } = client.storage.from('portfolio').getPublicUrl(image);

    return data.publicUrl
}
</script>

<style lang="scss" scoped>
.hero {
    background: rgb(56, 64, 95);
    padding: 10rem 2rem;
    border-radius: 1rem;
    p { margin-bottom: 0; }
}

.card {
    background: darken($primary, 10%);
    border-radius: 8px;
    .card-preview {
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }
    .card-body {
        padding: 1em;
        h5 {
            font-weight: bold;
            margin-bottom: 0;
        }
    }
}

.badges {
    margin-bottom: 2rem;
    .badge {
        background-color: $tertiary;
        border-radius: 15px;
        display: inline-block;
        font-size: 10px;
        padding: 4px 10px;
        margin-right: 5px;
        &:last-child {
            margin-right: 0;
        }
    }
}

.portfolio-item {
    width: 100%;
    img {
        border-radius: 1rem;
    }
}
</style>