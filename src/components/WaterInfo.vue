<template>
  <VTooltip location="bottom" text="咩嚟">
    <template v-slot:activator="{ props }">
      <VBtn v-bind="props" @click="infoDialogModel = true" icon="mdi-information-outline" class="text-white">
      </VBtn>
    </template>
  </VTooltip>
  <v-dialog v-model="infoDialogModel" width="700">
    <v-card>
      <v-card-title>見字飲水</v-card-title>
      <v-card-text>你可以開住呢個網做其他野，我會每隔一段時間提你飲水。</v-card-text>
      <v-card-text>飲完水就㩒個掣。</v-card-text>
      <v-card-text>如果你早過我提你就飲左水，都可以㩒掣重置計時。</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn v-if="!notification" @click="grantNoti()" class="bg-grey-lighten-3">打開提醒
        </v-btn>
        <v-btn @click="infoDialogModel = false" class="bg-primary">收皮</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapWritableState } from 'pinia';
import { useNotificationStore } from '../stores/notification';
export default {
  name: 'WaterInfo',
  data(){
    return {
      infoDialogModel: false,

    }
  },
  computed: {
    ...mapWritableState(useNotificationStore, ['notification'])
  },
  methods: {
    grantNoti(){
      Notification.requestPermission().then(
        permission => {
          if ( permission === 'granted' ){
            this.notificaiton = true;
          } else if ( permission === 'denied' ){
            this.notification = false;
          }
        }
      )
    },
    getNotiStatus(){
      this.notification = Notification.permission === 'granted';
    }
  },
  created(){
    this.getNotiStatus();
  }
}
</script>

<style>

</style>
