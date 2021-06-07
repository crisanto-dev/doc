<template>
  <div class="blog">
    <div class="sidebar-blog"></div>
    <div class="body-blog">
      <h1>{{ blog.title }}</h1>
      <div class="body">
        <nuxt-content :document="blog"/>
      </div>
      <prev-next :prev="prev" :next="next" />
    </div>
    <div class="sidebar-blog"></div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const blog = await $content('blog', params.slug).fetch();
    const [prev, next] = await $content('blog')
                                .only(['title', 'path'])
                                .sortBy('createdAt', 'asc')
                                .surround(params.slug)
                                .fetch()
    return {
      blog,
      prev, 
      next
    }
  },
  colorMode: 'light',
  layout: 'blog',
  methods: {
    getBlog() {
      console.log(this.blog)
    }
  },
  mounted() {
    this.$colorMode.preference = 'dark'
  }
}
</script>