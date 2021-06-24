<template>
  <div class="footer-bar">
    <div>
      <MainColorMode />
    </div>
    <div class="lang-color">
      <select v-model="lang">
        <option :value="$i18n.locale" disabled>{{ $i18n.locale }}</option>
        <option 
          v-for="locale in availableLocales"
          :key="locale.code"
          :value="locale.code">{{ locale.code }}</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      lang: this.$i18n.locale
    }
  },
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  },
  watch: {
    lang: function (newval) {
      this.$i18n.locale = newval
      // switchLocalePath
      this.$router.push(this.switchLocalePath(newval))
    }
  }
  
}
</script>

<style>
@import url('@/assets/css/footer-bar.css');
</style>