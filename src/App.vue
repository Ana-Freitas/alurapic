<template>
  <div>
    <h1>{{title}}</h1>
    <img v-bind:src="foto.url" :alt="foto.titulo">
  </div>
</template>

<script>
export default{
  data() {
    return {
      title: 'AluraPic',
      foto: {
        url:"https://media.gazetadopovo.com.br/viver-bem/2018/11/dog3-768x587-0e01be20.jpg",
        titulo: "cachorro"
      }
    }
  }
}
</script>

<style>
</style>
