<template>
    <img :src="avatar" :alt="descricao"> <!-- Atributo dinâmico com v-bind (:) serve para vincular o valor de uma variável ao atributo HTML. -->
</template>

<script>
    export default {
        name: 'picture',
        data() {
            return {
                avatar: "/imagem/avatar.png", // Caminho da imagem
                descricao: "Foto do meu avatar", // Descrição da imagem
            }
        }
    }
</script>