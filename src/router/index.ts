import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Money from '@/views/Money.vue';
import Labels from '@/views/Labels.vue';
import Statistics from '@/views/Statistics.vue';
import NoFound from '@/views/NoFound.vue';
import AddLabel from '@/views/AddLabel.vue';
import EditLabel from '@/views/EditLabel.vue';

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
    path:"/labels/add",
    component:AddLabel
  },
  {
    path:"/labels/edit/:id",
    component:EditLabel
  },
  {
    path:"/statistics",
    component:Statistics
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
