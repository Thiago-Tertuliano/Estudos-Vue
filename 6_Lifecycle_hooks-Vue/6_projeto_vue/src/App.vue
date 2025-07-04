<template>
  <div> 
    <PrimeiroComponente/>
    <p>O dado de teste é: {{ testando }}</p>
    <LifeCycle/> <!-- Importando o componente LifeCycle.vue para ser utilizado no componente App.vue-->
  </div>
</template>

<script>
  import LifeCycle from './components/LifeCycle.vue';
  import PrimeiroComponente from './components/PrimeiroComponente.vue'; 

  export default { 
    name: 'App', 
    components: {
      PrimeiroComponente,
      LifeCycle // Importando o componente LifeCycle.vue para ser utilizado no componente App.vue
    },
    data() { 
      return {
        testando: 'Teste de componente',
      }
    }
  }

</script>