import { defineStore } from "pinia";

export const useWaterStore = defineStore('water', {
  state() {
    return {
      cupOfWaterDrank: 0,
    }
  }
})

