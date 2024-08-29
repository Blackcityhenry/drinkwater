import WaterButton from './components/WaterButton.vue'
import LeaderBoard from './pages/LeaderBoard.vue';
import { createWebHistory, createRouter } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: WaterButton
    },
    {
      path: '/leaderboard',
      name: 'leaderboard',
      component: LeaderBoard
    }
  ]
})

export default router;
