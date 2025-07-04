<template>
  <div>
    <Header/> 
    <PrimeiroComponente/>
    <p class="teste">O dado de teste é: {{ testando }}</p>
    <LifeCycle/> 
    <Pessoa/>
  </div>
</template>

<script>
  import Header from './components/Header.vue' 
  import LifeCycle from './components/LifeCycle.vue';
  import PrimeiroComponente from './components/PrimeiroComponente.vue'
  import Pessoa from './components/Pessoa.vue';

  export default { 
    name: 'App', 
    components: {
      PrimeiroComponente,
      LifeCycle,
      Pessoa,
      Header, 
    },
    data() { 
      return {
        testando: 'Teste de componente',
      }
    }
  }

</script>

<style> 
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