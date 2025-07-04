<template> 
<div>
    <h1>Olá Vue!</h1>
    <p>Meu nome é: {{ nome }} e sou {{ profissao }}</p>
</div>
</template>

<script> 
    export default {
        name: 'PrimeiroComponente',
        data() { // A função data retorna um objeto com as propriedades do componente, esses dados são reativos, ou seja, se forem alterados, a interface será atualizada automaticamente. Declarando os dados do componente, o data é uma função que retorna um objeto com as propriedades do componente.
            return {
                nome: 'Thiago Matos Tertuliano',
                profissao: 'Desenvolvedor Front-end',
            }
        }
    }
</script>