import { defineStore } from "pinia";

export const useNotificationStore = defineStore('notification', {
  state() {
    return {
      notification: null,
    }
  },
  actions: {
    grantNoti() {
      Notification.requestPermission().then(
        permission => {
          if (permission === 'granted') {
            this.notificaiton = true;
          } else if (permission === 'denied') {
            this.notification = false;
          }
        }
      )
    },
  }
})
