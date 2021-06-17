<template>
  <div class="tags">
    <ul class="tag-list">
      <li 
        class="tag"
        v-for="tag in tagg"
        :key="tag">
        <span>
          {{ tag }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    tags: {
      type: String,
      required: true
    }
  },
  computed: {
    tagg () {
      console.log(this.tags)
      return this.tags.split(',')
    }
  }

}
</script>