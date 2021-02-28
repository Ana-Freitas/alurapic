<template>

  <div>
    <h1 class="centralizado">{{title}}</h1>
    <input type="search" class="filtro" @input="filtro = $event.target.value" placeholder="filtre por parte do título">

    {{filtro}}
    <ul class="lista-fotos"> 
      <li  class="lista-fotos-item" v-for="foto of fotosComFiltro" :key="foto.titulo">
          <meu-painel :titulo="foto.titulo">
            <imagem-responsiva :url="foto.url" :titulo="foto.titulo"></imagem-responsiva>
          </meu-painel>
      </li>
    </ul>
  </div>
</template>

<script>
import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue';
import Painel from '../shared/painel/Painel.vue';

export default{

  components: {
  'meu-painel': Painel,
   'imagem-responsiva': ImagemResponsiva
  },

  data() {
    return {
      title: 'AluraPic',
      fotos: [],
      filtro: ''
    }
  },

  computed: {
    fotosComFiltro(){
      if(this.filtro){
        let reg = new RegExp(this.filtro.trim(), 'i');
        return this.fotos.filter(foto=>reg.test(foto.titulo));
      }
        
      return this.fotos;
    }
  },

  created() {
    this.$http.get("http://localhost:3000/v1/fotos")
    .then(res => res.json())
    .then(fotos => this.fotos = fotos, error => console.log(error));
  }
}
</script>

<style>
  .centralizado {
    text-align: center;
  }

  .lista-fotos{
    list-style: none;
  }

  .lista-fotos .lista-fotos-item{
    display: inline-block;
  }

  .filtro {
    display: block;
    width: 100%;
  }
</style>
