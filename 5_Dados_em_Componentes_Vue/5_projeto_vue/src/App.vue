<template>
  <div> <!-- Div no template do componente App.vue serve para agrupar os elementos HTML, e evitar erros de sintaxe, já que o Vue.js exige que o template tenha apenas um elemento raiz. -->
    <PrimeiroComponente/>
    <p>O dado de teste é: {{ testando }}</p>
  </div>
</template>

<script>
  import PrimeiroComponente from './components/PrimeiroComponente.vue'; 

  export default { 
    name: 'App', 
    components: {
      PrimeiroComponente
    },
    data() { // Declarando os dados do componente App.vue, o data é uma função que retorna um objeto com as propriedades do componente, esses dados são reativos, ou seja, se forem alterados, a interface será atualizada automaticamente.
      return {
        testando: 'Teste de componente',
      }
    }
  }

</script>