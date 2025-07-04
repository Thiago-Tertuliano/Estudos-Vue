<template>
  <PrimeiroComponente/> <!-- Importando o componente PrimeiroComponente -->
</template>

<script>
  import PrimeiroComponente from './components/PrimeiroComponente.vue'; // Importando o componente da pasta components do arquivo PrimeiroComponente.vue

  export default { // Export Default é usado para exportar um objeto que define o componente Vue
    name: 'App', // Nome do componente principal da aplicação que no caso é App.vue
    components: { // Declarando os componentes que serão utilizados dentro deste componente
      PrimeiroComponente
    }
  }

</script>