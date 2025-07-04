<template>
    <ul> <!-- Criando uma lista não ordenada para o menu de navegação -->
        <li><a href="#">Home</a></li> <!-- Cada item da lista é um link que pode ser clicado -->
        <li><a href="#">Projetos</a></li>
        <li><a href="#">Contatos</a></li>
    </ul>
</template>

<script>
    export default {
        name: 'Header',
    }
</script>

<style scoped> /* O estilo scoped significa que este CSS só será aplicado a este componente, evitando conflitos com outros estilos globais. */
    ul {
        list-style: none;
        display: flex;
        background-color: aquamarine;
    }

    li {
        margin-right: 10px;
    }

    a {
        color: white;
        text-decoration: none;
        transition: .5s;
    }

    a:hover {
        color: turquoise;
    }
</style>