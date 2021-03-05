import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from './routes';
import './directives/Transform';
import VeeValidate from 'vee-validate';
import msg from './pt_BR';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/teste.css';

import './assets/js/teste.js';
import 'jquery/dist/jquery.js';
import 'bootstrap/dist/js/bootstrap.js';

Vue.use(VueResource);
/* Colocaremos dessa forma apenas para entendimento, pois nao temos a URL de produção
Vue.http.options.root =  process.env.API_URL ? process.env.API_URL : 'http://localhost:3000'; */
Vue.http.options.root =  process.env.API_URL ? 'http://localhost:3000' : 'http://localhost:3000';
Vue.use(VueRouter);


const router = new VueRouter({
  routes,
  mode: 'history'}) //ou routes: routes, como é o mesmo nome, podemos deixar implicito

Vue.use(VeeValidate, {
  locale: 'pt_BR',
  dictionary: {
    pt_BR: {
      messages: msg
    }
  }
});

new Vue({
  el: '#app',
  router, //ou router: router
  render: h => h(App)
})
