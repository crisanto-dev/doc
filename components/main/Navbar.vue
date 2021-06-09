<template>
  <div class="navbar">
    <div class="container">
      <div class="navbar-content">
        <div class="brand">
          <nuxt-link to="/">
            Doc
          </nuxt-link>
        </div>
        <div class="center">
          <MainSearch />
        </div>
        <div class="burger">
          <div 
            class=""
            @click="burger = !burger">
            <fa
              v-if="!burger"
              icon="bars"></fa>
            <fa
            v-else
            icon="times"></fa>
          </div>
        </div>
        <div class="menu">
          <ul>
            <li>
              <nuxt-link to="/">Home</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/blog">Blog</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      burger: false
    }
  }
}
</script>