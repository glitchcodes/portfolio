<template>
  <div class="container">
      <nuxt-link to="/portfolio" class="button button-secondary" style="margin: 5rem 0;">
          <client-only>
              <font-awesome-icon :icon="['fas', 'arrow-left']" />
          </client-only>
          <span style="margin-left: 1rem;">Return to Portfolio</span>
      </nuxt-link>

      <h2 style="margin-bottom: 5rem;">{{ work!.name }}</h2>

      <div class="row" style="margin-bottom: 2rem;">
          <div class="column column-25">
              <p class="subtitle">Description</p>
          </div>
          <div class="column">
              <p>{{ work!.description }}</p>
          </div>
      </div>

      <div class="row">
          <div class="column column-25">
              <p class="subtitle">Type of Work</p>
          </div>
          <div class="column">
              {{ work!.services }}
          </div>
      </div>

      <h3 style="margin: 4rem 0;">Screenshots</h3>

      <div class="screenshots row">
          <div class="column" v-for="screenshot in work!.work_screenshots" :key="work!.image">
              <div class="portfolio-item">
                  <img :src="fetchScreenshot(screenshot.image)" :alt="work!.name" />
              </div>
          </div>
      </div>
  </div>
</template>

<script setup lang="ts">
    import { Database } from "~/types/database";

    const route = useRoute();
    const client = useSupabaseClient<Database>()

    // Fetch item
    const { data: work } = await useFetch(`/api/works/${route.params.slug}`);

    const fetchScreenshot = (image: string | null) => {
        const { data } = client.storage.from('portfolio').getPublicUrl(image!);

        return data.publicUrl
    }

    useHead({
        title: work.value!.name,
        meta: [
            { name: 'description', content: work.value!.description },
            { property: 'og:title', content: work.value!.name },
            { property: 'og:description', content: work.value!.description }
        ]
    })
</script>

<style scoped lang="scss">
.portfolio-item {
    width: 100%;
    img {
        border-radius: 1rem;
    }
    p {
        color: white;
    }
}
@media (min-width: 40.0rem) {
    .screenshots.row {
        flex-wrap: wrap;
        .column {
            width: calc(50% - 1rem)!important;
            padding: 1rem;
        }
    }
}
</style>
