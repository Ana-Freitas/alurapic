import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from './routes';
import './directives/Transform';
import VeeValidate from 'vee-validate';


Vue.use(VueResource);
Vue.http.options.root = 'http://localhost:3000';
Vue.use(VueRouter);


const router = new VueRouter({
  routes,
  mode: 'history'}) //ou routes: routes, como é o mesmo nome, podemos deixar implicito

Vue.use(VeeValidate);

new Vue({
  el: '#app',
  router, //ou router: router
  render: h => h(App)
})
