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
      countingSec: 0,
      counting: null,
      trigger: null,
      drinkwaterInterval: 3600000
    },
    computed:{
      waterlevel: function(){
        var temp = this.countingSec / this.drinkwaterInterval * 100;
        return temp;
      },
      waterarea: function(){
        var temp;
        temp = this.waterlevel - 2 > 0 ? this.waterlevel - 2 : 0;
        temp += '%';
        return temp;
      },
      emptyarea: function(){
        var temp;
        temp = this.waterlevel - 2 < 0 ? 0 : this.waterlevel + 2;
        temp += '%';
        return temp;
      }
    },
    methods: {
      resetClock(){
        this.grantNoti();

        clearTimeout(this.timer);
        clearInterval(this.trigger);
        clearInterval(this.counting);
        var drink = setInterval(()=>{
          if ( this. countingSec > 0){
            this.countingSec -= 1000
          } else {
            clearInterval(drink);
          }
        }, 50)
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
        this.counting = setInterval(()=>{
          if ( this.countingSec < this.drinkwaterInterval ){
            this.countingSec += 1000;
          } else {}
        }, 1000)

        this.timer = setTimeout(()=>{
          this.triggerNoti();
        }, this.drinkwaterInterval)
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
