<template>
  <div>
    <div @click="getContent()">W</div>
    <h1>{{ page.title }}</h1>
    <div class="body">
      <nuxt-content :document="page" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const page = await $content('hello').fetch()
    // const [prev, next] = await $content('page')
    //                            .only(['title', 'slug'])
    //                            .sortBy('createdAt', 'asc')
    //                           //  .surround(params.slug)
    //                            .fetch()
    return {
      page,
      // prev,
      // next
    }
  },

  methods: {
    getContent() {
      console.log(this.page);
    }
  }
}
</script>