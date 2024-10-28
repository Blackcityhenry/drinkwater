import { defineStore } from "pinia";

export const useWaterStore = defineStore('water', {
  state() {
    return {
      cupsOfWaterDrank: localStorage.getItem('cupsOfWaterDrank') || 0,
    }
  },
  actions: {
    drinkOneCup() {
      this.cupsOfWaterDrank++;
      localStorage.setItem('cupsOfWaterDrank', this.cupsOfWaterDrank);
    }
  }
})

