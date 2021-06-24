<template>
  <div class="profile">
    <div class="profile-background"></div>
    <div class="profile-content">
      <div class="profile-panel">
        <div class="panel">
          <div class="profile-image">
            <figure class="image">
              <img :src="image" :alt="name">
            </figure>
            <h1 class="title">{{ name }}</h1>
          </div>
          
          <h2 class="title">{{ $t('projects.text') }}</h2>
          <div class="projects">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Cristian Antonio Escalante Hernandez",
      image: "https://i.blogs.es/35c5da/dddd/450_1000.jpg"
    }
  }
}
</script>