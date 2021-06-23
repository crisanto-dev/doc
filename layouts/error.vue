<template>
  <div class="error">
    <div class="error-sidebar"></div>
    <div class="error-body">
      <h1 v-if="error.statusCode === 404">{{ error.message }}</h1>
      <h1 v-else>An error occurred</h1>
      <NuxtLink to="/">Home page</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'page' // you can set a custom layout for the error page
}
</script>