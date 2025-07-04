const MyNameApp = {
    data() {
        return {
            input_nome: "",
            nome: "",
        };
    },
    methods: { // methods é um objeto que contém os métodos que podem ser usados no template HTML. Esses métodos podem ser chamados a partir de eventos, como cliques em botões ou submissão de formulários.
        submitForm(e) { // submitForm é um método que será chamado quando o formulário for submetido. Ele recebe um parâmetro e, que é o evento de submissão do formulário.
            e.preventDefault(); // e.preventDefault() é usado para evitar que o formulário seja submetido de forma tradicional, o que recarregaria a página. Isso permite que você manipule os dados do formulário usando JavaScript sem recarregar a página.
            // console.log("Caiu aqui!") Exibe uma mensagem no console do navegador quando o botão do formulário é clicado.
            console.log(this.input_nome); // this.input_nome é uma propriedade reativa que contém o valor do campo de entrada de texto. Ela é atualizada automaticamente quando o usuário digita algo no campo.

            this.nome = this.input_nome; // this.nome é outra propriedade reativa que armazena o nome digitado pelo usuário. Quando o método submitForm é chamado, o valor de input_nome é atribuído a nome, permitindo que ele seja exibido no template HTML.
        }
    }
};

Vue.createApp(MyNameApp).mount('#app')
