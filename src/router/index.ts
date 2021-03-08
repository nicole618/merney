import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Money from '@/views/Money.vue';
import Labels from '@/views/Labels.vue';
import Statistics from '@/views/Statistics.vue';
import NoFound from '@/views/NoFound.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: 'money'
  },
  {
    path:'/money',
    component:Money
  },
  {
    path:"/labels",
    component:Labels
  },
  {
    path:"/statistics",
    component:Statistics
  },
  {
    // 排除以上匹配项后，其他路径进入404
    path: '*',
    component:NoFound
  }
];

const router = new VueRouter({
                               routes
                             });

export default router;
