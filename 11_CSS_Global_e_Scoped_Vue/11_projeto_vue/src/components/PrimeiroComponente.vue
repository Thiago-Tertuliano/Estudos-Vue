<template> 
<div>
    <h1 class="titulo">Olá Vue!</h1>
    <p>Meu nome é: {{ nome }} e sou {{ profissao }}</p>
</div>
</template>

<script> 
    export default {
        name: 'PrimeiroComponente',
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