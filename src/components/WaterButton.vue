<template>
  <div class="water-button">
    <VBtn icon="mdi-cup" class="drink-button" color="white"
      :style="`background: linear-gradient(to bottom, #eee 0% , #eee ${waterarea} , #4fc3f7 ${emptyarea} , #4fc3f7 100% )`"
      @click="drinkWater()">
    </VBtn>
    <!-- {{ countingSec / 1000 }} / -->
    <!-- {{ drinkingIntervalModel / 1000 }} -->
  </div>
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
      this.drinkOneCup();
    },
    resetClock() {
      this.grantNoti();

      clearTimeout(this.timer);
      clearInterval(this.trigger);
      clearInterval(this.counting);

      let ms = 200;
      let substract = this.countingSec / ms;
      let drink = setInterval(() => {
        if (ms !== 0) {
          this.countingSec -= substract;
          ms--;
        } else {
          this.countingSec = 0;
          clearInterval(drink);
          this.countdown();
        }
      }, 1)

    },
    countdown() {
      this.counting = setInterval(() => {
        if (this.countingSec < this.drinkingIntervalModel) {
          this.countingSec += 20;
        } else { }
      }, 20)

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
    ...mapActions(useNotificationStore, ['grantNoti']),
    ...mapActions(useWaterStore, ['drinkOneCup']),
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

<style scoped lang="scss">
.drink-button {
  height: 400px !important;
  width: 400px !important;
}
</style>

<style lang="scss">
.water-button {
  height: 100%;
  display: grid;
  place-items: center;
}

.drink-button {
  .v-btn__content {
    font-size: 9rem !important;
    color: white !important;
  }
}
</style>
