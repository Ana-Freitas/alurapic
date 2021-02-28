<template>
  <div class="corpo">
    <nav>
      <ul>       
          <li v-for="router in routes" :key="router.path">
              <router-link :to="router.path ? router.path : '/'"> {{ router.titulo}}</router-link>
          </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>

import {routes} from './routes';

export default{
  data(){
    return {
      routes
    }
  }    
}

</script>

<style>
  .corpo{
    font-family: Helvetica, sans-serif;
    width: 96%;
    margin: 0 auto;
  }
</style>
