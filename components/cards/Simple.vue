<template>
  <div class="card">
    <div class="simple">
      <nuxt-link :to="path">{{ title }}</nuxt-link>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    path: {
      type: String,
      required: true
    }
  }
}
</script>