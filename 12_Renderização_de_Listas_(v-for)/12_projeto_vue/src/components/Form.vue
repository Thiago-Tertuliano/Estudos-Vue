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
    import Submit from './Forms/Submit.vue'; 
    export default { 
  components: { Submit },
        name: 'Form',
        components: {
            InputText,
            Submit,
        }
    }
</script>