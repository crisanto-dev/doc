<template>
  <div class="section">
    <h4 class="title">{{ title }}</h4>
    <div class="coach">
      <div
        v-for="coach in coachs"
        :key="coach.path"
        class="section-blog">
          <CardsSimple 
            :title="coach.title"
            :description="coach.description"
            :path="coach.path" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    coachs: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      title: "Recent coach"
    }
  }
}
</script>