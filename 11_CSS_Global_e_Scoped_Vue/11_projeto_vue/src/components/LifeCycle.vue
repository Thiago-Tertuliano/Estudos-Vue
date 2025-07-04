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
        created() { 
            setTimeout(() => { 
                this.nome = 'Thiago Matos Tertuliano';
            }, 2000);

            this.lifeCycle(); // Chamando o método lifeCycle quando o componente é criado
        },
        mounted() { 
            setTimeout(() => {
                this.nome = 'José Paulo';
            }, 1000);
        },
        methods: {
            lifeCycle() {
                console.log('Executou')
            }
        }
    }
</script>