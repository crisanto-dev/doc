<template>
  <div class="search">
    <input type="text" v-model="search" :placeholder="placeholder">
    <div 
      v-show="focus && items.length"
      class="search-items">
      <ul class="items">
        <li 
          v-for="item in items"
          :key="item.path"
          class="item"
          @click="searchFind()">
          <nuxt-link 
            :to="item.path"
            >{{ item.title }}</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      search: "",
      placeholder: "Search the docs.",
      items: [],
      focus: false
    }
  },
  methods: {
    searchFind () {
      this.focus = false
      this.search = ''
    }
  },
  watch: {
    async search (search) {
      if(!search) {
        this.items = []
        return
      }

      this.items = await this.$content('', {deep:true})
        .only(['title', 'path'])
        .sortBy('createdAt', 'asc')
        .limit(12)
        .search('title', search)
        .fetch()
      this.focus = true
      console.log(this.items)
    }
    
  }
}
</script>

<style>
@import url('@/assets/css/search.css');
</style>