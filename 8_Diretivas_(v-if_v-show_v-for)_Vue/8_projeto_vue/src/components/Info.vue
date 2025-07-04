<template>
    <div>
        <p v-if="esta_trabalhando">Estou trabalhando</p> <!-- v-if é uma diretiva que renderiza o elemento apenas se a condição for verdadeira -->
        <p v-else>Estou em busca de novas oportunidades</p> <!-- v-else é uma diretiva que renderiza o elemento se a condição do v-if for falsa -->>
        <p>Aprendendo Vue.js</p>
        <p>As seguintes coisas:</p>
        <ul>
            <li>Componentes</li>
            <li>Reatividade</li>
            <li>Linguagem</li>
            <li>Tecnologia</li>
        </ul>
        <p v-show="mostrar_email">Mande uma mensagem para: {{ email }}</p> <!-- v-show é uma diretiva que renderiza o elemento, mas o esconde com display: none se a condição for falsa -->
    </div>
</template>

<script>
    export default {
        name: 'Info',
        data() {
            return {
                esta_trabalhando: true, // Variável que indica se o usuário está trabalhando ou não
                mostrar_email: true, // Variável que indica se o email deve ser mostrado ou não
                email: 'thiago@gmail.com', // Email do usuário
            }
        }
    }
</script>