<template>
  <div class="blog">
    <div class="blog-sidebar">

    </div>
    <div class="blog-body">
      <h1 @click="getBlog()">{{ title }}</h1>
      <ul class="list">
        <li 
          v-for="blog in blogs"
          :key="blog.path"
          class="list-item">
          <nuxt-link :to="`/blog/${blog.slug}`">
            {{ blog.title }}
          </nuxt-link>
        </li>
      </ul>
    </div>
    <div class="blog-sidebar"></div>
  </div>
</template>
<script>
export default {
  async asyncData({$content, i18n, error}) {
    const blogs = await $content(i18n.locale + '/blog')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()
      .catch(err => {
        error({ statusCode: 404, message: "Page not Found"})
      })
    return {
      blogs
    }
  },
  data() {
    return {
      title: "Blogs"
    }
  },
  methods: {
    getBlog() {
      console.log(this.blogs)
    }
  }
}
</script>