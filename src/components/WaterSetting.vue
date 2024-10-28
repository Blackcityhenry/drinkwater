<template>
  <VTooltip location="bottom" text="設定">
    <template v-slot:activator="{ props }">
      <VBtn v-bind="props" @click="settingDialogModel = true" icon="mdi-cog" class="text-white">
      </VBtn>
    </template>
  </VTooltip>
  <v-dialog v-model="settingDialogModel" width="700">
    <v-card>
      <v-card-title>
        設定
      </v-card-title>
      <v-card-text>
        <v-select v-model="drinkingIntervalModel" label="隔幾耐飲一次水" color="primary" :items="drinkwaterOption"
          item-value="interval" item-title="text"></v-select>
        <VSelect v-model="notiMp3" label="通知聲" color="primary" :items="notiOption" appendIcon="mdi-play"
          @click:append="playDemo">
        </VSelect>
        <v-switch color="primary" v-model="recurringNoti" label="提到你飲為止"></v-switch>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <VBtn class="bg-primary" @click="settingDialogModel = false">收皮</VBtn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { VBtn, VTooltip, VDialog } from 'vuetify/components';
import { useSettingStore } from '../stores/setting';
import { mapWritableState } from 'pinia';

export default {
  name: 'WaterSetting',
  components: {
    VBtn,
    VTooltip,
    VDialog
  },
  data() {
    return {
      settingDialogModel: false,
      notiOption: [
        "water.mp3",
        "minecraft-drinking.mp3"
      ],
      drinkwaterOption: [
        {
          interval: 10000,
          text: '十秒鐘'
        },
        {
          interval: 900000,
          text: '三個字'
        },
        {
          interval: 1800000,
          text: '半個鐘'
        },
        {
          interval: 3600000,
          text: '一個鐘'
        },
        {
          interval: 5400000,
          text: '個半鐘'
        },
        {
          interval: 7200000,
          text: '兩個鐘'
        },
      ],
    }
  },
  computed: {
    ...mapWritableState(useSettingStore, ['notiMp3', 'drinkingIntervalModel', 'recurringNoti'])
  },
  methods: {
    playDemo() {
      new Audio(`../../audio/${this.notiMp3}`).play();
    }
  },
  watch: {
    notiMp3(string) {
      localStorage.setItem('notiMp3', string);
    },
     drinkingIntervalModel(value) {
      localStorage.setItem('drinkingIntervalModel', JSON.stringify(value));
    },
     recurringNoti(value) {
      localStorage.setItem('recurringNoti', JSON.stringify(value));
    },

  }
}
</script>

<style lang="scss" scoped></style>
