<template>
  <div>
    <Header/> <!-- Incluindo o componente Header no template principal -->>
    <PrimeiroComponente/>
    <p class="teste">O dado de teste é: {{ testando }}</p>
    <LifeCycle/> 
    <Pessoa/>
  </div>
</template>

<script>
  import Header from './components/Header.vue' // Importando o componente Header
  import LifeCycle from './components/LifeCycle.vue';
  import PrimeiroComponente from './components/PrimeiroComponente.vue'
  import Pessoa from './components/Pessoa.vue';

  export default { 
    name: 'App', 
    components: {
      PrimeiroComponente,
      LifeCycle,
      Pessoa,
      Header, // Registrando o componente Header para ser utilizado no template principal 
    },
    data() { 
      return {
        testando: 'Teste de componente',
      }
    }
  }

</script>

<style> /* Global styles para todo arquivo app.vue, não apenas para os componentes */
  body {
    background-color: darkgrey;
    color: aliceblue;
  }

  a {
    color: red;
  }

  .teste {
    color: blueviolet;
  }
</style>