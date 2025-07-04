<template>
    <div>
        <p>{{ email }}</p>
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
        <p>Linguagens de Back-end</p>
        <ul> 
            <li v-for="linguagem, index in backendLinguagens" v-bind:key="index">{{ linguagem }}</li>
        </ul>
        <p>Linguagens de Front-end</p>
        <ul>
           <li v-for="linguagem in frontendLinguagens" :key="linguagem.id">{{ linguagem.linguagem }}</li> 
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
        props: { // Definindo o props que o componente Info irá receber, neste caso, o "email"
            email: {
                type: String,
            }
        },
        data() {
            return {
                esta_trabalhando: true,
                mostrar_email: true,
                meu_link: 'https://google.com',
                textoBotao: 'Mostrar e-mail',
                backendLinguagens: ['JavaScript1', 'PHP', 'Python'], 
                frontendLinguagens: [ 
                {id: 1, linguagem: 'HTML'},
                {id: 2, linguagem: 'CSS'},
                {id: 3, linguagem: 'JavaScript'},
                ]
            }
        },
        methods: {
            showEmail() {
                console.log('Mostrando e-mail');
                this.mostrar_email = !this.mostrar_email; 
                if(!this.mostrar_email) {
                    this.textoBotao = 'Mostrar e-mail'; 
                } else {
                    this.textoBotao = 'Esconder e-mail'; 
                }
            }
        }
    }
</script>