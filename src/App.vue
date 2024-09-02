<script setup>
import WaterHeader from './components/WaterHeader.vue'
import { VApp } from 'vuetify/components';
import { RouterView } from 'vue-router'
</script>

<template>
  <VApp>
    <VLayout>
      <WaterHeader />
      <VMain>
        <RouterView />
      </VMain>
    </VLayout>
  </VApp>
</template>
