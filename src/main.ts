import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import tagListModel from '@/models/tagListModel';
import recordListModel from '@/models/recordListModel';
import {createRecordId} from '@/lib/createId';


window.recordList = () => {return recordListModel.fetch()};
window.addRecord = (record) => {
  recordListModel.create(record);
}

window.tagList = () => {return tagListModel.fetch()};
window.deleteTag = (id) =>{
  return tagListModel.delete(id);
}
window.addTag = (tag) => {
  return tagListModel.addTag(tag);
}
window.getIcon = () =>{
  return tagListModel.getIcon();
}
window.findTag = (id) =>{
  return tagListModel.findTag(id);
}
window.updateTag = (tag) => {
  tagListModel.updateTag(tag);
}

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.component('Nav', Nav);
Vue.component('Layout', Layout);
Vue.component('Icon',Icon);
new Vue({
          router,
          store,
          render: h => h(App)
        }).$mount('#app');


