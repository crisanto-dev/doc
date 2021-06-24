<template>
  <div class="coaching">
    <div class="sidebar-coaching"></div>
    <div class="body-coaching">
      <h1>{{ article.title }}</h1>
      <div class="body">
        <nuxt-content :document="article"></nuxt-content>
      </div>
    </div>
    <div class="sidebar-coaching"></div>
  </div>
</template>

<script>
export default {
  async asyncData({$content, params, i18n, error}) {
    const article = await $content(i18n.locale + '/coaching/php', params.slug)
      .fetch()
      .catch(err => {
        error({ statusCode: 404, message: this.$t('error.404')})
      })

    return {
      article
    }
  }
}
</script>