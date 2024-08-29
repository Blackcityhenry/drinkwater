<template>
  <VTooltip location="bottom" text="設定">
    <template v-slot:activator="{props}"> 
      <VBtn v-bind="props" @click="setting = true" icon="mdi-cog">
      </VBtn>
    </template>
  </VTooltip>
</template>

<script>
import { VBtn, VTooltip } from 'vuetify/components';

export default {
  name: 'WaterSetting',
  components: {
    VBtn,
    VTooltip
  }
}
</script>

<style lang="scss" scoped>


</style>
