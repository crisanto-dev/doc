<template>
  <div>
    <MainProfile> 
      <div
        v-for="project in projects"
        :key="project.path"
        class="project">
          <CardsProject :project="project"/>
      </div>
    </MainProfile>
    <section>
      <SectionBlogs :blogs="blogs"></SectionBlogs>
    </section>
    <section>
      <SectionCoaching :coachs="coachs"></SectionCoaching>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({$content, error, i18n}) {
    const blogs = await $content(i18n.locale + '/blog').only(['title','slug', 'description', 'path', 'createdAt'])
      .sortBy('createdAt', 'desc')
      .limit(6)
      .fetch()
      .catch(err => {
        error({ statusCode: 404, message: 'Page not found' })
      })
    const projects = await $content(i18n.locale + '/project')
      .only(['title', 'description', 'path', 'createdAt', 'tags'])
      .limit(6)
      .sortBy('createdAt', 'desc')
      .fetch()
    const coachs = await $content(i18n.locale + '/coaching', {deep: true}).only(['title', 'path', 'description'])
      .sortBy('createdAt', 'desc')
      .limit(6)
      .fetch()
    return {
      blogs,
      projects,
      coachs
    }
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
/* .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
} */
</style>
