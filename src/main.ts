import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';




Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.component('Nav', Nav);
Vue.component('Layout', Layout);
Vue.component('Icon',Icon);
new Vue({
          router,
          render: h => h(App)
        }).$mount('#app');


