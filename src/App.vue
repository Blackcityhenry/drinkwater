<template>
  <div id="app">
    <water-header />
    <v-container fill-height class="justify-center">
      <router-view/>
    </v-container>
  </div>
</template>

<style lang="scss">
.drink-button{
  height: 400px !important;
  width: 400px !important;

  .v-icon{
    font-size: 12rem !important;
  }
}

</style>

<script>
import WaterHeader from '@/components/WaterHeader.vue'
</script>
