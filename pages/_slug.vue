<template>
  <div class="article">
    <div class="article-sidebar"></div>
    <div class="article-body">
      <h1>{{ article.title }}</h1>
      <nuxt-content :document="article" />
    </div>
    <div class="article-sidebar"></div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params , error}) {
    
    const article = await $content('', params.slug)
      .fetch()
      .catch((err) => {
        error({ statusCode: 404, message: "Page not Found"})
      })
    
      console.log(article)
    return {
      article
    }
  }
}
</script>