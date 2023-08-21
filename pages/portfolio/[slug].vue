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

      <div class="row" style="margin-bottom: 2rem;">
          <div class="column column-25">
              <p class="subtitle">Type of Work</p>
          </div>
          <div class="column">
              {{ work!.services }}
          </div>
      </div>

      <div v-if="work.example_title.length > 0" class="row">
          <div class="column column-25">
              <p class="subtitle">Example</p>
          </div>
          <div class="column">
              <a :href="work.example_link" class="button button-primary">
                  {{ work.example_title }}
              </a>
          </div>
      </div>

      <!-- Testimonials -->
      <h3 v-if="work.work_testimonials.length > 0" style="margin: 4rem 0;">Testimonials</h3>

      <div class="testimonials row">
          <div class="column">
              <div class="card" v-for="testimony in work.work_testimonials" :key="`testimony-${ testimony.id }`">
                  <p style="font-style: italic">"{{ testimony.testimony }}"</p>

                  <p class="subtitle" style="margin-bottom: 0">
                      {{ testimony.reviewer }}
                      <br>
                      {{ testimony.reviewer_role }}
                  </p>
              </div>
          </div>
      </div>
      <!-- Testimonials -->

      <!-- Screenshots -->
      <h3 v-if="work.work_screenshots.length > 0" style="margin: 4rem 0;">Screenshots</h3>

      <div v-if="work.work_screenshots.length > 0" class="screenshots row">
          <div class="column" v-for="screenshot in work.work_screenshots" :key="work.image">
              <div class="portfolio-item">
                  <picture>
                      <source type="image/webp" :srcset="screenshot.image + '.webp'">
                      <img :src="screenshot.image + '.png'" :alt="work.name" />
                  </picture>
              </div>
          </div>
      </div>
      <!-- Screenshots -->
  </div>
</template>

<script setup lang="ts">
    const route = useRoute();

    // Fetch item
    const { data: work } = await useFetch(`/api/works/${route.params.slug}`);

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

.card {
    background: var(--bg-secondary-alt);
    border: 1px solid #d4d4d8;
    border-radius: 1rem;
    padding: 3rem;
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
    p {
        color: var(--text-primary);
    }
}

.dark-mode .card {
    background: var(--bg-primary-alt);
    border-color: #3f3f46;
}
</style>
