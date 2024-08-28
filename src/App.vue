<script setup>
import WaterHeader from './components/WaterHeader.vue'
import WaterButton from './components/WaterButton.vue'
import { VApp } from 'vuetify/components';
import { RouterView } from 'vue-router'
</script>

<template>
  <VApp>
    <WaterHeader />
    <RouterView />
  </VApp>
</template>

