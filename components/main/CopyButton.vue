<template>
  <button ref="copy" class="copy">
    <!-- <fa icon="arrow-left"  /> -->
    <fa v-if="state === 'copied'" class="w-5 h-5" icon="clipboard-check"/>
    <fa v-else class="w-5 h-5"  icon="clipboard"/>
  </button>
</template>

<script>
import Clipboard from 'clipboard'

export default {
  data () {
    return {
      state: 'init'
    }
  },
  mounted () {
    const copyCode = new Clipboard(this.$refs.copy, {
      target (trigger) {
        return trigger.previousElementSibling
      }
    })

    copyCode.on('success', (event) => {
      event.clearSelection()
      this.state = 'copied'
      window.setTimeout(() => {
        this.state = 'init'
      }, 2000)
    })
  }
}
</script>
