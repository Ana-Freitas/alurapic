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
      fotos: [
        {
          url:"https://media.gazetadopovo.com.br/viver-bem/2018/11/dog3-768x587-0e01be20.jpg",
          titulo: "cachorro"
        },
        {
          url:"https://blackwhitepet.com.br/resources/img/racas-de-cachorro-pastor-alemao.jpg",
          titulo: "Pastor Alemao"
        }
      ]
    }
  }
}
</script>

<style>
</style>
