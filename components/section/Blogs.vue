<template>
  <div class="section">
    <h4 class="title">{{ title }}</h4>
    <div class="blog">
      <div
        v-for="blog in blogs"
        :key="blog.path"
        class="section-blog">
          <CardsSimple 
            :title="blog.title"
            :description="blog.description"
            :path="blog.path" />
      </div>
    </div>
    <div class="section-footer">
      <AppButton 
        value="Ver todos" 
        path="/blog" 
        tag="a"/>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    blogs: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      title: "Recent blogs"
    }
  }
}
</script>