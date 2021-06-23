<template>
  <div class="exercise">
    <div class="exercise-sidebar"></div>
    <div class="exercise-body">
      <h1>{{ exercise.title }}</h1>
      <div class="body">
        <nuxt-content :document="exercise"></nuxt-content>
      </div>
    </div>
    <div class="exercise-sidebar"></div>
  </div>
</template>

<script>
export default {
  layout: 'blog',
  async asyncData({$content, params}) {
    const exercise = await $content('exercise/python', params.slug).fetch()

    return {
      exercise
    }
  }
}
</script>