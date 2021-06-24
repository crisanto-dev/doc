<template>
  <div class="cb">

    <div class="cb-sidebar"></div>
    <div class="cb-body">
      <h1 class="title">{{ project.title }}</h1>
      <div class="body">
        <nuxt-content :document="project"></nuxt-content>
      </div>
    </div>
    <div class="cb-sidebar"></div>
  </div>
</template>

<script>
export default {
  async asyncData ({$content, params, i18n, error}) {
    const project = await $content(i18n.locale + '/project', params.slug)
      .fetch()
      .catch(err => {
        error({ statusCode: 404, message: "Page not Found"})
      })

      return {
        project
      }
  }
}
</script>