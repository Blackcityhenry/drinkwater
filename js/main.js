var drinkwater = new Vue(
  {
    el: '#app',
    vuetify: new Vuetify(),
    data: {
      theme: 'light-blue lighten-2',
      text: 'light-blue--text text--lighten-2',
      info: false,
      noti: null,
      timer: null,
      trigger: null
    },
    methods: {
      resetClock(){
        this.grantNoti();

        clearTimeout(this.timer);
        clearInterval(this.trigger);

        this.countDownOneHour();
      },
      grantNoti(){
        Notification.requestPermission().then(
          permission => {
            if ( permission == 'granted' ){
              this.noti = true;
            } else if ( permission == 'denied' ){
              this.noti = false;
            }
          }
        )
      },
      checkPermission(){
        this.noti = Notification.permission == 'granted';
      },
      countDownOneHour(){

        this.timer = setTimeout(()=>{
          this.triggerNoti();
        }, 3600000)
        // testing mode
        // }, 10000)
      },
      triggerNoti(){

        this.trigger = setInterval(()=>{
          new Notification('見字飲水！');
          new Audio('./audio/water.mp3').play();
        },1000)
      }
    },
    created(){
      this.checkPermission();
      this.countDownOneHour();
    }
  }
);
