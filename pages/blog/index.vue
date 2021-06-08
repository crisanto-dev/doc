<template>
  <div class="blog">
    <div class="sidebar-blog">

    </div>
    <div class="body-blog">
      <h1 @click="getBlog()">{{ title }}</h1>
      <ul>
        <li 
          v-for="blog in blogs"
          :key="blog.path">
          <nuxt-link :to="blog.path">
            {{ blog.title }}
          </nuxt-link>
        </li>
      </ul>
    </div>
    <div class="sidebar-blog"></div>
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