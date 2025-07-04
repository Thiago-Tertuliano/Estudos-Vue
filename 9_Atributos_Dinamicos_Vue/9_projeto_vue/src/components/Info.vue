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
        <p v-show="mostrar_email">Mande uma mensagem para: {{ email }}</p>
        <p>Para acessar meu portfólio <a v-bind:href="meu_link" target="_blank">basta clicar aqui</a></p> <!-- v-bind:href é o mesmo que :href e serve para vincular o valor de uma variável ao atributo href do link. -->
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
                meu_link: 'https://google.com', // Link para o google, pode ser alterado para qualquer link desejado.
            }
        }
    }
</script>