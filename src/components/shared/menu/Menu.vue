<template>
    <nav>
      <ul>       
          <li v-for="rota in rotas" :key="rota.path">
              <router-link :to="rota.path ? rota.path : '/'"> {{ rota.titulo}}</router-link>
          </li>
      </ul>
    </nav>

</template>

<script>
export default {
    props: {
        rotas: {
            type: Array,  //podemos definir o tipo da propriedade a ser recebida
            required: true
        }
    }
}
</script>

<style scoped>

</style>