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
          <nuxt-link :to="blog.path">
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
  async asyncData({$content}) {
    const blogs = await $content('blog')
                  .only(['title', 'path'])
                  .sortBy('createdAt', 'asc')
                  .fetch()
    console.log(blogs)
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