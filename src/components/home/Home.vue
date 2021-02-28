<template>

  <div>
    <h1 class="centralizado">{{title}}</h1>
    <input type="search" class="filtro" @input="filtro = $event.target.value" placeholder="filtre por parte do título">

    {{filtro}}
    <ul class="lista-fotos"> 
      <li  class="lista-fotos-item" v-for="foto of fotosComFiltro" :key="foto.titulo">
          <meu-painel :titulo="foto.titulo">
            <imagem-responsiva v-meu-transform:scale.animate="1.2" :url="foto.url" :titulo="foto.titulo"/>
            <meu-botao 
            tipo="button" 
            rotulo="REMOVER" 
            :confirmacao="true"
            estilo="perigo"
            @botaoAtivado="remove($event, foto)"/>
          </meu-painel>
      </li>
    </ul>
  </div>
</template>

<script>
import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue';
import Painel from '../shared/painel/Painel.vue';
import Botao from '../shared/botao/Botao.vue';

export default{

  components: {
  'meu-painel': Painel,
   'imagem-responsiva': ImagemResponsiva,
   'meu-botao': Botao
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

  methods: {
    remove($event, foto){
     // alert($event); // passa dados do componente para o pai
      alert('Remove the photo: ' + foto.titulo);
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
