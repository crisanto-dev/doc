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
  
}
</script>