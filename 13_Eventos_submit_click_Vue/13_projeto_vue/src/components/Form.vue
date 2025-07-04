<template>
    <div>
        <h3>Meu formulário</h3>
    <form action="" @submit="enviarFormulario($event)"> 
        <div>
            <input type="text" :v-model="name">
        </div>
        <div>
            <input type="text" :v-model="email"> 
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
        data() { 
            return {
                name: '',
                email: '',
            }
        },
        methods: {
            enviarFormulario(e){
                e.preventDefault(); 
                
                const name = this.nome; 
                const email = this.email;

                console.log('Formulário enviado!');
                console.log("Nome:" + name); 
                console.log("Email:" + email); 
            }
        }
    }
</script>