<template>
  <div class="search">
    <input type="text" v-model="search" :placeholder="placeholder">
  </div>
</template>

<script>
export default {
  data () {
    return {
      search: "",
      placeholder: "Search the docs."
    }
  },
  methods: {
    getData () {

    }
  },
  watch: {
    search: {
      function (prev, next) {
        console.log(prev, next)
      }
    }
  }
}
</script>