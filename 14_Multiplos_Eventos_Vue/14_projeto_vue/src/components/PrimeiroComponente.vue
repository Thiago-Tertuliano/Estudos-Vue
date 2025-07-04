<template> 
<div>
    <h1 class="titulo">Olá Vue!</h1>
    <p>Meu nome é: {{ nome }} e sou {{ profissao }}</p>
    <MultiplosEventos/>
</div>
</template>

<script> 
    import MultiplosEventos from './MultiplosEventos.vue';
    export default {
        name: 'PrimeiroComponente',
        components: {
            MultiplosEventos,
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