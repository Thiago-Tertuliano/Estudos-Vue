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

            this.lifeCycle(); 
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