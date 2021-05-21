<template>
  <div class="container">
    <div v-for="zone in universal.PageBuilder" :key="zone.id">
      <!-- <div v-if="zone.__typename === 'ComponentSiteComponentsHeaderBanner'">
            <HeaderBanner :data=zone />

      </div> -->

      <div v-if="zone.__typename === 'ComponentSiteComponentsHero'">
        <Hero :data="zone" />
      </div>

      <!-- <div v-if="zone.__typename === 'ComponentSiteComponentsImageText'">
            <ImageText :data=zone />

      </div> -->

      <div v-if="zone.__typename === 'ComponentSiteComponentsFeatureSection'">
        <FeatureSection :data="zone" />
      </div>

      <div v-if="zone.__typename === 'ComponentSiteComponentsParagraph'">
        <Paragraph :data="zone" />
      </div>

      <div v-if="zone.__typename === 'ComponentSiteComponentsCta'">
        <CTA :data="zone" />
      </div>
    </div>
  </div>
</template>

<script>
import { singlePageQuery } from "~/graphql/queries";

export default {
  data() {
    return {
      universal: []
    };
  },
  apollo: {
    universal: {
      prefetch: true,
      query: singlePageQuery,
      variables() {
        return {
          id: this.$route.query.id
        };
      }
    }
  }
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
