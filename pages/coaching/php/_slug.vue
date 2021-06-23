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
  async asyncData({$content, params}) {
    const article = await $content('coaching/php', params.slug).fetch()

    return {
      article
    }
  }
}
</script>