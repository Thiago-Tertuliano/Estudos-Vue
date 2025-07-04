<template>
    <div>
        <h2>Esse é nome da pessoa: {{ nome }}</h2> 
        <Info :email="email"/> <!-- Passando o email como prop para o componente Info -->
        <Form/> 
    </div>
   
</template>
    
<script>
    import Info from './Info.vue'
    import Form from './Form.vue' 
    export default {
        name: 'Pessoa',
        components: {
            Info,
            Form,
        },
        data() {
            return {
                nome: 'Thiago Matos Tertuliano',
                email: 'thiago@gmail.com'
            }
        }
    }
</script>