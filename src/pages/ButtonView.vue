<template>
  <div class="button-view">
    <WaterButton />
    <WaterCups />
  </div>
</template>

<script>
import WaterButton from '../components/WaterButton.vue'
import WaterCups from '../components/WaterCups.vue';

export default {
  name: 'ButtonView',
  components: {
    WaterButton,
    WaterCups
  }
}
</script>

<style lang="scss" scoped>
.button-view {
  display: grid;
  height: 100%;
}
</style>
