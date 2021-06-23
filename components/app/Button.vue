<template>
  <div>
    <a 
      v-if="(tag == `a`)"
      :href="path"
      :class="`button ${type}`">{{ value }}</a>
    <button
      v-else
      :class="`button ${type}`">{{ value }}</button>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: false,
      default: ""
    },
    tag: {
      type: String,
      required: false,
      default: 'button'
    },
    type: {
      type: String,
      required: false,
      default: "primary"
    },
    path: {
      type: String,
      required: false,
      default: null
    }
  },
  mounted() {
    console.log(this.tag)
  }
}
</script>