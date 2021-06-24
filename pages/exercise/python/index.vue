<template>
  <div class="exercise">
    
  </div>
</template>

<script>
export default {
  async asyncData({$content, i18n, error}) {
    const exercises = await $content(i18n.locale + '/exercise/python')
      .fetch()
      .catch(err => {
        error({ statusCode: 404, message: "Page not Found"})
      })

    return {
      exercises
    }
  }
}
</script>