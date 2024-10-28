import ButtonView from './pages/ButtonView.vue'
import LeaderBoardView from './pages/LeaderBoardView.vue';
import { createWebHistory, createRouter } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ButtonView
    },
    {
      path: '/leaderboard',
      name: 'leaderboard',
      component: LeaderBoardView
    }
  ]
})

export default router;
