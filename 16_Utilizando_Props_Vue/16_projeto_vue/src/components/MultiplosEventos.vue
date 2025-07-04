<template>
    <div>
        <button @click="primeiro($event), segundo($event)">Ativar Múltiplos Eventos</button> <!-- @click é usado para capturar o evento de clique -->
        <p>{{ multiplos_eventos }}</p>
    </div>
</template>

<script>
    export default {
        name: 'MultiplosEventos',
        data() {
            return {
                multiplos_eventos: 'Clique no botão para ativar múltiplos eventos!' 
            }
        },
        methods: { 
            primeiro(e){ // Captura o evento de clique 
                this.multiplos_eventos = 'Primeiro evento ativado!';
                console.log('Primeiro evento ativado!', e)
            },
            segundo(e){
                setTimeout(() => this.multiplos_eventos = 'Segundo evento ativado!', 500); // Define um atraso de 500ms antes de atualizar a mensagem
                    console.log('Segundo evento ativado!', e)
                }
            }
        }
</script>

<style scoped>
    div {
        margin: 100px;
    }
</style>