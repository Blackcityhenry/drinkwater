axios.defaults.baseURL = 'https://api.fighter.hk/water'

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home'
    },
    {
      path: '/leaderboard',
      name: 'leaderboard'
    }
  ]
})

const store = new Vuex.Store(
  {
    state: {
      leaderboard: []
    },
    getters:{},
    mutations: {
      thenLeaderboard(state, res){
        state.leaderboard = res.data;
      }
    },
    actions: {
      fetchLeaderboard({commit}){
        return axios.get('/leaderboard')
        .then(
          res => {
            commit('thenLeaderboard', res);
          }
        )
      }
    },
  }
)

router.beforeEach((to, from, next)=>{
  if( to.name === 'leaderboard' ){
    store.dispatch('fetchLeaderboard');
  }
  next();
})

var drinkwater = new Vue(
  {
    el: '#app',
    vuetify: new Vuetify(),
    router,
    store,
    data: {
      login: {
        username: '',
      },
      reg: {
        username: '',
        nickname: '',
      },
      user: {
        username: '',
        nickname: '',
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
      showRegister: false,
      showUsername: {
        type: 'password',
        icon: 'mdi-eye-off'
      },
      usernameError: false,
      leaderboardHeader: [{
        text: '排名',
        value: 'rank'
      },{
        text: '人名',
        value: 'ppl'
      },{
        text: '飲左',
        value: 'cups'
      }]
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
      },
      ...Vuex.mapState([
        'leaderboard'
      ])
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
      toggleShowUsername(){
        if ( this.showUsername.type === 'password' ){
          this.showUsername.type = 'text';
          this.showUsername.icon = 'mdi-eye';
        } else {
          this.showUsername.type = 'password';
          this.showUsername.icon = 'mdi-eye-off';
        }
      },
      checkUser(){
        var data = {
          "username": this.reg.username
        };
        axios.post('/checkuser?', data).
        then(
          res=>{
            this.usernameError = JSON.parse(res.data.result);
            console.log(this.usernameError);
          }
        )
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
