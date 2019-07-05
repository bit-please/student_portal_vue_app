import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Resumes/Show.vue';
import Login from './views/Login.vue';
import Logout from './views/Logout.vue';
import Edit from './views/Resumes/Edit.vue';
import Show from './views/Resumes/Show.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout
    },
    {
      path: '/resumes/:id/edit',
      name: 'resumes-edit',
      component: Edit
    },
    {
      path: '/resumes/:id',
      name: 'resumes-show',
      component: Show
    }
  ]
});
