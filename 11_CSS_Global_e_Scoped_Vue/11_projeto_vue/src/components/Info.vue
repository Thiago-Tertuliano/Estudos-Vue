<template>
    <div>
        <p v-if="esta_trabalhando">Estou trabalhando</p>
        <p v-else>Estou em busca de novas oportunidades</p>
        <p>Aprendendo Vue.js</p>
        <p>As seguintes coisas:</p>
        <ul>
            <li>Componentes</li>
            <li>Reatividade</li>
            <li>Linguagem</li>
            <li>Tecnologia</li>
        </ul>
        <div>
            <button @click="showEmail">{{ textoBotao }}</button>
        </div>
        <p v-show="mostrar_email">Mande uma mensagem para: {{ email }}</p>
        <p>Para acessar meu portfólio <a v-bind:href="meu_link" target="_blank">basta clicar aqui</a></p>
        <Picture/>
    </div>
</template>

<script>
    import Picture from './Picture.vue';
    export default {
        name: 'Info',
        components: {
            Picture,
        },
        data() {
            return {
                esta_trabalhando: true,
                mostrar_email: true,
                email: 'thiago@gmail.com',
                meu_link: 'https://google.com',
                textoBotao: 'Mostrar e-mail', // Texto do botão que alterna a visibilidade do email
            }
        },
        methods: {
            showEmail() {
                console.log('Mostrando e-mail');
                this.mostrar_email = !this.mostrar_email; // Alterna a visibilidade do email ao clicar no botão
                if(!this.mostrar_email) {
                    this.textoBotao = 'Mostrar e-mail'; // Atualiza o texto do botão para "Mostrar e-mail"
                } else {
                    this.textoBotao = 'Esconder e-mail'; // Atualiza o texto do botão para "Esconder e-mail"
                }
            }
        }
    }
</script>