<template>
  <VBtn icon="mdi-cup" class="drink-button white--text"
    :style="'background: linear-gradient(to bottom, #eee 0% , #eee ' + waterarea + ' , #4fc3f7 ' + emptyarea + ' , #4fc3f7 100% )'"
    @click="drinkWater()">
  </VBtn>
  {{ countingSec }} /
  {{ drinkingIntervalModel }}
</template>

<script>
import { mapActions, mapWritableState, mapState } from 'pinia';

import { useSettingStore } from '../stores/setting';
import { useWaterStore } from '../stores/water';
import { useNotificationStore } from '../stores/notification';

export default {
  name: 'WaterButton',
  data() {
    return {
      countingSec: 0,
      trigger: null,
      timer: null,
      counting: null,
    }
  },
  computed: {
    waterlevel: function () {
      var temp = this.countingSec / this.drinkingIntervalModel * 100;
      return temp;
    },
    waterarea: function () {
      var temp;
      temp = this.waterlevel - 1 > 0 ? this.waterlevel - 1 : 0;
      temp += '%';
      return temp;
    },
    emptyarea: function () {
      var temp;
      temp = this.waterlevel - 1 < 0 ? 0 : this.waterlevel + 1;
      temp += '%';
      return temp;
    },
    ...mapState(useSettingStore, ['drinkingIntervalModel', 'notiMp3', 'recurringNoti']),
    ...mapWritableState(useWaterStore, ['cupsOfWaterDrank']),
  },
  methods: {
    drinkWater() {
      this.resetClock();
      this.cupsOfWaterDrank++;
    },
    resetClock() {
      this.grantNoti();

      clearTimeout(this.timer);
      clearInterval(this.trigger);
      clearInterval(this.counting);

      // for water drinking animation
      var drink = setInterval(() => {
        if (this.countingSec > 10000) {
          this.countingSec -= 10000;
        } else {
          this.countingSec = 0;
          clearInterval(drink);
        }
      }, 1)

      this.countdown();
    },
    countdown() {
      console.log('created')
      this.counting = setInterval(() => {
        if (this.countingSec < this.drinkingIntervalModel) {
          this.countingSec += 1000;
        } else { }
      }, 1000)

      this.timer = setTimeout(() => {
        this.triggerNoti();
      }, this.drinkingIntervalModel)
    },
    triggerNoti() {

      if (this.recurringNoti) {

        this.trigger = setInterval(() => {
          new Notification('見字飲水！');
          new Audio(`./audio/${this.notiMp3}`).play();
        }, 1000)

      } else {
        new Notification('見字飲水！');
        new Audio(`./audio/${this.notiMp3}`).play();
      }
    },
    ...mapActions(useNotificationStore, ['grantNoti'])
  },
  watch: {
    drinkingIntervalModel() {
      this.resetClock()
    }
  },
  created() {
    this.countdown();
  }
}
</script>

<style scoped lang="scss"></style>
