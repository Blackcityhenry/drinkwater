<template>
  <div class="water-cups">
    <v-icon>
      mdi-cup-water
    </v-icon>
    一路以嚟你已經飲左{{ cupsOfWaterDrank }}杯水
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import { useWaterStore } from '../stores/water';

export default {
  name: 'WaterCups',
  computed: {
    ...mapState(useWaterStore, ['cupsOfWaterDrank']),
  }
}
</script>

<style lang="scss" scoped>
.water-cups {
  position: absolute;
  bottom: 15px;
  right: 15px;
}
</style>
