<template> 
<div>
    <h1 class="titulo">Olá Vue!</h1>
    <p>Meu nome é: {{ nome }} e sou {{ profissao }}</p>
    <MultiplosEventos/>
    <reutilizacao/> <!-- Componente reutilização não interfere nos outros componentes do mesmo arquivo -->
    <reutilizacao/>
</div>
</template>

<script> 
    import MultiplosEventos from './MultiplosEventos.vue';
    import Reutilizacao from './Reutilizacao.vue' // Importando o componente Reutilização
    export default {
        name: 'PrimeiroComponente',
        components: {
            MultiplosEventos,
                Reutilizacao, // Registrando o componente Reutilização
        },
        data() { 
            return {
                nome: 'Thiago Matos Tertuliano',
                profissao: 'Desenvolvedor Front-end',
            }
        }
    }
</script>

<style>
    .titulo{
        color: yellow;
    }
</style>