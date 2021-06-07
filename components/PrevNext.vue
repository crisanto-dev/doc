<template>
  <div class="prev-next">
    <div class="prev">
      <nuxt-link v-if="(prev != null)" :to="prev.path">
         {{ prev.title }}
      </nuxt-link>
    </div>
    <div class="next">
      <nuxt-link v-if="(next != null)" :to="next.path">
        {{ next.title }} 
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      required: false,
      default: null
    },
    next: {
      type: Object,
      required: false,
      default: null
    }
  }

}
</script>