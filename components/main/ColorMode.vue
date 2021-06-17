<template>
  <div class="color-mode">
    <fa-layers 
      class="fa-2x"
      @click="toggleColorMode()">
      <client-only>
        <fa 
          v-if="darkMode"
          :icon="['fas', `moon`]"  />
        <fa 
          v-else
          :icon="['fas', `sun`]"  />
      </client-only>
    </fa-layers>
  </div>
</template>

<script>
export default {
  data () {
    return {
      darkMode: (this.$colorMode.preference == 'dark')
    }
  },
  methods: {
    
    toggleColorMode() {
      this.darkMode = !this.darkMode
      if(this.darkMode) {
        this.$colorMode.preference = 'dark'
      }else {
        this.$colorMode.preference = 'light'
      }
    }
  }
}
</script>

<style>
@import url('@/assets/css/color-mode.css');
</style>