import { defineStore } from "pinia";

export const useSettingStore = defineStore('setting', {
  state() {
    return {
      notiMp3: "water.mp3",
      drinkingIntervalModel: 1800000,
      recurringNoti: false
    }
  }
})
