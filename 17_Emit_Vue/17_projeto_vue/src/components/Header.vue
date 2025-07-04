<template>
    <ul> 
        <li><a href="#">Home</a></li> 
        <li><a href="#">Projetos</a></li>
        <li><a href="#">Contatos</a></li>
        <li v-if="esta_logado"><a href="#">Meu perfil</a></li> <!-- Usamos o v-if para verificar se o usuário está logado -->
    </ul>
</template>

<script>
    export default {
        name: 'Header',
        props: { // Definindo o props que o componente Header irá receber, neste caso, "esta_logado"
            esta_logado: {
                type : Boolean, // Tipo booleano para saber se o usuário está logado ou não
                default: false
            }
        }
    }
</script>

<style scoped> 
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