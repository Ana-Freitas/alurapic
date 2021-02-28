<template>
  <div>
    <h1>{{title}}</h1>
    <ul>
      <li v-for="foto of fotos">
        <img :src="foto.url" :alt="foto.titulo">
      </li>
    </ul>
   
    
  </div>
</template>

<script>
export default{
  data() {
    return {
      title: 'AluraPic',
      fotos: []
    }
  },

  created() {
    let promise = this.$http.get("http://localhost:3000/v1/fotos")
    .then(res => res.json())
    .then(fotos => this.fotos = fotos, error => console.log(error));
  }
}
</script>

<style>
</style>
