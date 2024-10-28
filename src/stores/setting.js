import { defineStore } from "pinia";

export const useSettingStore = defineStore('setting', {
  state() {
    return {
      notiMp3: localStorage.getItem("notiMp3") || "water.mp3",
      drinkingIntervalModel: JSON.parse(localStorage.getItem("drinkingIntervalModel")) || 1800000,
      recurringNoti: JSON.parse(localStorage.getItem("recurringNoti")) || false
    }
  }
})
