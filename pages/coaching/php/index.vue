<template>
  <div class="coaching">

    <div class="body">
      <div
        v-show="articles.length">
        <ul>
          <li
            v-for="article in articles"
            :key="article.path">
            <nuxt-link :to="article.path">{{ article.title }}</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({$content, params}) {
    const articles = await $content('coaching/php')
      .only(['title', 'path'])
      .fetch()
    return {
      articles
    }
  }
}
</script>