<template>
  <div class="profile">
    <div class="profile-background"></div>
    <div class="profile-content">
      <div class="profile-panel">
        <div class="panel">
          <h1>{{ name }}</h1>
        </div>
      </div>
      <div class="profile-sidebar">
        <div class="profile-card">
          <figure>
            <img :src="image" :alt="name">
          </figure>
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