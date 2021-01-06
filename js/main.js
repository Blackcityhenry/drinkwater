axios.defaults.baseURL = 'https://api.jsonbin.io';
axios.defaults.headers.common['collection-id'] = '5ff559b5a2070e409d6eb5a8';
axios.defaults.headers.common['secret-key'] = '$2b$10$bDqR4LrowIPy5rSABN9wAOEdt70bAjulXqAlBgc9IE5cReu4sPaQu';

var drinkwater = new Vue(
  {
    el: '#app',
    vuetify: new Vuetify(),
    data: {
      login: {
        username: '',
        password: '',
      },
      reg: {
        username: '',
        nickname: '',
        password: '',
        confirmPassword: ''
      },
      user: {
        username: '',
        nickname: '',
        hashed: '',
        cups: ''
      },
      theme: 'light-blue lighten-2',
      text: 'light-blue--text text--lighten-2',
      info: false,
      noti: null,
      timer: null,
      countingSec: 0,
      counting: null,
      trigger: null,
      drinkwaterInterval: 3600000,
      setting: false,
      recurringNoti: true,
      drinkwaterOption: [
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
      ]
      ,
      cupsOfWaterDrank: 0,
      loginDialog: false,
      showRegister: false
    },
    computed:{
      isLoggedin(){
        return localStorage.getItem('drinkWaterUser') !== null;
      },
      waterlevel: function(){
        var temp = this.countingSec / this.drinkwaterInterval * 100;
        return temp;
      },
      waterarea: function(){
        var temp;
        temp = this.waterlevel - 1 > 0 ? this.waterlevel - 1 : 0;
        temp += '%';
        return temp;
      },
      emptyarea: function(){
        var temp;
        temp = this.waterlevel - 1 < 0 ? 0 : this.waterlevel + 1;
        temp += '%';
        return temp;
      }
    },
    watch:{
      recurringNoti(boolean){
        localStorage.setItem('recurringNoti', boolean);
      },
      drinkwaterInterval(timeout){
        localStorage.setItem('drinkwaterInterval', timeout);

        this.resetClock();
      },
      cupsOfWaterDrank(cups){
        localStorage.setItem('cupsOfWaterDrank', cups);
      }
    },
    methods: {
      showLogin(){
        this.loginDialog = true;
        this.showRegister = false;
      },
      showRegister(){

      },
      resetClock(){
        this.grantNoti();

        clearTimeout(this.timer);
        clearInterval(this.trigger);
        clearInterval(this.counting);
        var drink = setInterval(()=>{
          if ( this. countingSec > 0){
            this.countingSec -= 10000
          } else {
            clearInterval(drink);
          }
        }, 1)

        this.countdown();

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
      drinkWater(){
        this.resetClock();
        this.cupsOfWaterDrank++;
      },
      countdown(){
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

        if ( this.recurringNoti ){

          this.trigger = setInterval(()=>{
            new Notification('見字飲水！');
            new Audio('./audio/water.mp3').play();
          },1000)

        } else {

          new Notification('見字飲水！');
          new Audio('./audio/water.mp3').play();

        }

      },
      getStoredSetting(){
        this.recurringNoti = localStorage.getItem('recurringNoti') == 'true';
        localStorage.getItem('drinkwaterInterval') !== null ? this.drinkwaterInterval = JSON.parse(localStorage.getItem('drinkwaterInterval')) : '';
        localStorage.getItem('cupsOfWaterDrank') !== null ? this.cupsOfWaterDrank = JSON.parse(localStorage.getItem('cupsOfWaterDrank')) : '';
      }
    },
    created(){
      this.getStoredSetting();
      this.checkPermission();
      this.countdown();
    }
  }
);
