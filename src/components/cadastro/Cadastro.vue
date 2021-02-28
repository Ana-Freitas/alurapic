<template>

  <div>
    <h1 class="centralizado">Cadastro</h1>
    <h2 class="centralizado"> {{foto.titulo}} </h2>

    <form @submit.prevent="gravar()">
      <div class="controle">
        <label for="titulo">TÍTULO</label>
        <input @input="foto.titulo = $event.target.value" :value="foto.titulo" id="titulo" autocomplete="off">
      </div>

      <div class="controle">
        <label for="url">URL</label>
        <input @input="foto.url = $event.target.value" id="url" autocomplete="off" :value="foto.url">
        <imagem-responsiva :titulo="foto.titulo" :url="foto.url"/>
      </div>

      <div class="controle">
        <label for="descricao">DESCRIÇÃO</label>
        <textarea @input="foto.descricao= $event.target.value" id="descricao" autocomplete="off" :value="foto.descricao"></textarea>
      </div>

      <div class="centralizado">
        <meu-botao rotulo="GRAVAR" tipo="submit"/>
        <router-link to="/"><meu-botao rotulo="VOLTAR" tipo="button"/></router-link>
      </div>

    </form>
  </div>
</template>
 <script>
import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue'
import Botao from '../shared/botao/Botao.vue';

export default {

  components: {
    'imagem-responsiva': ImagemResponsiva, 
    'meu-botao': Botao
  },

  data() {
    return {

      foto: {
        titulo: '',
        url: '', 
        descricao: ''
      }
    }
  },

  methods: {
      gravar(){
          console.log('ENVIAR DADOS PARA A API');
          this.limpar();
      },

      limpar(){

          this.foto = {
              titulo: '',
              url: '',
              descricao: ''
          }
      }
  }

}
</script>

 <style scoped>
    .centralizado {
        text-align: center;
    }

    .controle {
        font-size: 1.2em;
        margin-bottom: 20px;
    }

    .controle label{
        display: block;
        font-weight: bold;
    }

    .controle label+input, .controle textarea {
        width: 100%;
        font-size: inherit;
        border-radius: 5px;
    }
 </style>