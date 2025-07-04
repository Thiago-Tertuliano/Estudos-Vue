<template>
    <div>
        <button @click="ativar">Clique Aqui!</button> <!-- Evento de clique -->
        <span v-show="ativou">Ativado!</span> <!-- Exibe "Ativado!" quando ativou é true -->
    </div>
</template>

<script>
    export default {
        name: 'Reutilizacao', 
        data() {
            return {
                ativou: false // Variável para controlar o estado de ativação
            }
        },
        methods: {
            ativar() { // Método chamado ao clicar no botão
                this.ativou = !this.ativou; // Alterna o estado de ativação
            }
        }
    }
</script>