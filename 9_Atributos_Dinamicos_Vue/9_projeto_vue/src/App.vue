<template>
  <div> 
    <PrimeiroComponente/>
    <p>O dado de teste é: {{ testando }}</p>
    <LifeCycle/> 
    <Pessoa/>
  </div>
</template>

<script>
  import LifeCycle from './components/LifeCycle.vue';
  import PrimeiroComponente from './components/PrimeiroComponente.vue'
  import Pessoa from './components/Pessoa.vue';

  export default { 
    name: 'App', 
    components: {
      PrimeiroComponente,
      LifeCycle,
      Pessoa,
    },
    data() { 
      return {
        testando: 'Teste de componente',
      }
    }
  }

</script>