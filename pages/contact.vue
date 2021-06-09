<template>
  <div class="about">
    <h1>{{ page.title }}</h1>
    <div class="body">
      <nuxt-content :document="page" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({$content}) {
    const page = await $content('contact').fetch()
    return {
      page
    }
  },
  layout: 'page'

}
</script>