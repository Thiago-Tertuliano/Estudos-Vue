<template>
    <h1>Meu nome é: {{ nome }}</h1>
</template>

<script>
    export default {
        name: 'LifeCycle',
        data() {
            return {
                nome: 'N/A',
            }
        },
        created() { // O hook "created" é chamado quando o componente é criado, mas antes de ser montado no DOM. É o primeiro hook a ser chamado.
            setTimeout(() => { // Setando um timeout para simular uma requisição assíncrona, onde o nome será atualizado após 2 segundos. Esse hook é utilizado para inicializar dados.
                this.nome = 'Thiago Matos Tertuliano';
            }, 2000);
        },
        mounted() { // O hook "mounted" é chamado quando o componente é montado no DOM, ou seja, quando ele está visível na tela. Esse hook é utilizado para manipular o DOM ou fazer requisições assícronas.
            setTimeout(() => {
                this.nome = 'José Paulo';
            }, 1000);
        },
    }
</script>