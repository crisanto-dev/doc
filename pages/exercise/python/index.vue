<template>
  <div class="exercise">
    
  </div>
</template>

<script>
export default {
  async asyncData({$content}) {
    const exercises = await $content('exercise/python').fetch()

    return {
      exercises
    }
  }
}
</script>