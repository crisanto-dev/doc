<template>
  <div class="prev-next">
    <div class="prev">
      <nuxt-link 
        v-if="(prev != null)" 
        :to="localePath(`/blog/${prev.slug}`)"
        :alt="prev.title">
        <fa icon="arrow-left"  />
         {{ delimite(prev.title) }}
      </nuxt-link>
    </div>
    <div class="next">
      <nuxt-link 
        v-if="(next != null)" 
        :to="localePath(`/blog/${next.slug}`)"
        :alt="next.title">
        <!-- <fa-layers class="fa-2x"> -->
        <!-- </fa-layers> -->
        {{ delimite(next.title) }} 
        <fa icon="arrow-right"  />
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
  },
  methods: {
    delimite(str) {
      return str.substring(0, 25) + "..."
    }
  }
}
</script>