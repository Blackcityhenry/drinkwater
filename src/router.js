import Vue from 'vue'
import Router from 'vue-router'
import WaterButton from './components/WaterButton.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: WaterButton
    },
    {
      path: '/leaderboard',
      name: 'leaderboard',
    }
  ]
})
