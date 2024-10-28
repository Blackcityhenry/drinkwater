<template>
  <div class="button-view">
    <WaterButton />
  </div>
</template>

<script>
import WaterButton from '../components/WaterButton.vue'

export default {
  name: 'ButtonView',
  components: {
    WaterButton
  }
}
</script>

<style lang="scss" scoped>
.button-view {
  display: grid;
  height: 100%;
}
</style>
