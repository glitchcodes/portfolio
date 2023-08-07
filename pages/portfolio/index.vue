<template>
    <div class="container">
        <div class="hero">
            <div class="container">
                <h3>Portfolio</h3>
                <p>
                    All of my works are listed here
                </p>
                <nuxt-link to="/" class="button button-secondary" style="margin-top: 2.5rem">
                    <client-only>
                        <font-awesome-icon :icon="['fas', 'arrow-left']" />
                    </client-only>
                    <span style="margin-left: 1rem;">Return to homepage</span>
                </nuxt-link>
            </div>
        </div>
        <div class="row" style="margin-top: 2rem;">
            <div class="column" v-for="item in works" :key="item.slug">
                <nuxt-link :to="'/portfolio/' + item.slug" class="portfolio-item">
                    <picture>
                        <source type="image/webp" :srcset="item.background + '.webp'">
                        <img :src="item.background + '.png'" :alt="item.name" />
                    </picture>
                    <p style="font-size: 2rem;">{{ item.name }}</p>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { Database } from "~/types/database";

useHead({
    title: 'Portfolio',
    meta: [
        { name: 'description', content: 'My recent completed works built with modern technology' },
        { property: 'og:title', content: 'Portfolio - GlitchDZN' },
        { property: 'og:description', content: 'My recent completed works built with modern technology' }
    ]
})

// Supabase client
const client = useSupabaseClient<Database>();

// Fetch portfolio items
const { pending, data: works } = useLazyFetch('/api/works');
</script>

<style lang="scss" scoped>
.hero {
    background-color: #06d6a0;
    background-image: url(/hero.png);
    background-size: cover;
    padding: 10rem 2rem;
    border-radius: 1rem;
    font-weight: 600;
    p { margin-bottom: 0; }
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
        transition: 0.3s;
        &:hover {
            transform: scale(1.01);
        }
    }
    p {
        color: white;
    }
}

</style>
