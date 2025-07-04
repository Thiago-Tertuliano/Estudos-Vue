<template>
    <div>
        <h3>Meu formulário</h3>
    <form action="">
        <div>
            <InputText/> 
        </div>
        <div>
            <InputText/>
        </div>
         <div>
            <submit/> 
         </div>
    </form>
    </div>
    
</template>

<script>
    import InputText from './Forms/InputText.vue';
    import Submit from './Forms/Submit.vue'; // Importando o componente Submit
    export default { // Registrando o componente Form, que é um componente pai do componente InputText e Submit
        // O componente Form é um componente pai dos componentes InputText e Submit, ou seja, o componente Form é o responsável por renderizar os componentes filhos InputText e Submit
        // O componente Form é um componente pai dos componentes InputText e Submit, ou seja, o componente Form é o responsável por renderizar os componentes filhos InputText e Submit
  components: { Submit },
        name: 'Form',
        components: {
            InputText,
            Submit,
        }
    }
</script>