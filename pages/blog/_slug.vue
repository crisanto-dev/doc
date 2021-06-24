<template>
  <div class="blog">
    <div class="blog-sidebar"></div>
    <div class="blog-body">
      <h1 >{{ blog.title }}</h1>
      <div class="body">
        <nuxt-content :document="blog"/>
      </div>
      <prev-next :prev="prev" :next="next" />
    </div>
    <div class="blog-sidebar"></div>
  </div>
</template>

<script>
import Vue from 'vue'
import AppCopyButton from '@/components/main/CopyButton'
export default {
  async asyncData({ $content, params, error, i18n}) {

    const blog = await $content(i18n.locale + '/blog', params.slug)
      .fetch()
      .catch((err) => {
        error({statusCode: 404, message: "$t('error.404')"})
      });
    const [prev, next] = await $content(i18n.locale + '/blog')
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
  // colorMode: 'light',
  layout: 'blog',
  methods: {
    getBlog() {
      console.log(this.blog)
    }
  },
  mounted() {
    // this.$colorMode.preference = 'dark'
    setTimeout(() => {
      const blocks = document.getElementsByClassName('nuxt-content-highlight')

      for (const block of blocks) {
        const CopyButton = Vue.extend(AppCopyButton)
        const component = new CopyButton().$mount()
        block.appendChild(component.$el)
      }
    }, 100)
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