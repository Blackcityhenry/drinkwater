import WaterButton from './components/WaterButton.vue'
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
    }
  ]
})

export default router;
