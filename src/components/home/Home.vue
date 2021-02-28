<template>

  <div>
    <h1 class="centralizado">{{title}}</h1>
    <p v-show="mensagem" class="centralizado"> {{ mensagem }}</p>
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
            @botaoAtivado="remover($event, foto)"/>
          </meu-painel>
      </li>
    </ul>
  </div>
</template>

<script>
import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue';
import Painel from '../shared/painel/Painel.vue';
import Botao from '../shared/botao/Botao.vue';
import Transform from '../../directives/Transform';

export default{

  components: {
  'meu-painel': Painel,
   'imagem-responsiva': ImagemResponsiva,
   'meu-botao': Botao
  },
  
  directives: {
    'meu-transform': Transform
  },

  data() {
    return {
      title: 'AluraPic',
      fotos: [],
      filtro: '',
      mensagem: ''
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
    remover($event, foto){
     // alert($event); // passa dados do componente para o pai
       this.$http.delete(`http://localhost:3000/v1/fotos/${foto._id}`)
       .then(() => {
          let indice = this.fotos.indexOf(foto);
          this.fotos.splice(indice, 1);
          this.mensagem = 'Foto removida com sucesso'
         }, err => {
         console.log(err);
         this.mensagem =  'Não foi possível remover a foto'
       });
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
