<template>
    <div>
        <h3>Meu formulário</h3>
    <form action="" @submit="enviarFormulario($event)"> <!-- @submit é usado para capturar o evento de envio do formulário -->
        <div>
            <input type="text" :v-model="name">
        </div>
        <div>
            <input type="text" :v-model="email"> <!-- v-model é usado para vincular o valor do input ao data -->
        </div>
         <div>
            <submit/> 
         </div>
    </form>
    </div>
    
</template>

<script>
    import InputText from './Forms/InputText.vue';
    import Submit from './Forms/Submit.vue'; 
    export default { 
  components: { Submit },
        name: 'Form',
        components: {
            InputText,
            Submit,
        },
        data() { // Define os dados do componente
            return {
                name: '',
                email: '',
            }
        },
        methods: {
            enviarFormulario(e){
                e.preventDefault(); // Previne o comportamento padrão do 
                
                const name = this.nome; // Captura o nome preenchido no input
                const email = this.email;

                console.log('Formulário enviado!');
                console.log("Nome:" + name); // Exibe o nome preenchido no console
                console.log("Email:" + email); // Exibe o email preenchido no console
            }
        }
    }
</script>