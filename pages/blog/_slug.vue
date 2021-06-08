<template>
  <div class="blog">
    <div class="sidebar-blog"></div>
    <div class="body-blog">
      <h1 >{{ blog.title }}</h1>
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
    
  },
  methods: {
    
  },
  head() {
    return {
      title: this.blog.title,
      meta: [
        { hid: 'description', name: 'description', content: this.blog.description },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.blog.title },
        { hid: 'og:description', property: 'og:description', content: this.blog.description },
        // Twitter Card
        { hid: 'twitter:title', name: 'twitter:title', content: this.blog.title },
        { hid: 'twitter:description', name: 'twitter:description', content: this.blog.description }
      ]
    }
  }
}
</script>