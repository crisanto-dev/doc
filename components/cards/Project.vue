<template>
  <div class="card card-project">
    <div class="">
      <nuxt-link :to="localePath(project.path.replace(/^(\/es)/, ''))">{{ project.title }}</nuxt-link>
      <p class="description">{{ project.description }}</p>
      <AppTag :tags="project.tags" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      require: true
    }
  }
}
</script>