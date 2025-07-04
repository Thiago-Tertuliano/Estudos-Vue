<template>
    <img :src="avatar" :alt="descricao">
</template>

<script>
    export default {
        name: 'picture',
        data() {
            return {
                avatar: "/imagem/avatar.png",
                descricao: "Foto do meu avatar",
            }
        }
    }
</script>