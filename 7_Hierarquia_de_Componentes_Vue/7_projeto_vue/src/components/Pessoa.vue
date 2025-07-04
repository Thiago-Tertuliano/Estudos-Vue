<template>
    <div>
        <h2>Esse é nome da pessoa: {{ nome }}</h2> 
        <Info/>
        <Form/> <!-- Aqui estamos utilizando o componente Form, que é um componente filho do componente Pessoa -->
    </div>
   
</template>
    
<script>
    import Info from './Info.vue'
    import Form from './Form.vue' // Importando os componentes Info e Form, que são componentes filhos do componente Pessoa
    export default {
        name: 'Pessoa',
        components: { // Registrando os componentes, para que possam ser utilizados dentro do componente Pessoa
            Info,
            Form,
        },
        data() {
            return {
                nome: 'Thiago Matos Tertuliano',
            }
        }
    }
</script>