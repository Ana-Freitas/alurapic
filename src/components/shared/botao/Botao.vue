<template>
    <button class="botao" :class="estiloBotao" @click="disparaAcao()" :type="tipo">{{ rotulo }}</button>
</template>

<script>
export default {
    props: {
        tipo: {
            type: String,
            required: true,
        },

        rotulo: {
            type: String,
            required: true
        },

        confirmacao: {
            type: Boolean,
            required: false
        },

        estilo: {
            type: String,
            required: false
        }
    },
    
    methods: {
        disparaAcao(){
            if(this.confirmacao){
                if(confirm("Confirma operação?")){
                    this.$emit('botaoAtivado', new Date());
                }
                return;
            }
            this.$emit('botaoAtivado');
        }
    },

    computed: {
        estiloBotao(){
            if(this.estilo=='perigo'){
                return 'botao-perigo'
            }else{
                return 'botao-padrao'
            }
        }
    }
}
</script>

<style scoped lang="sass">
   @import './Botao.scss';
</style>