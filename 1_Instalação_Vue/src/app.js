const MyNameApp = { // MyNameApp é um objeto que representa a aplicação Vue.js. Ele contém as propriedades e métodos que serão usados no template HTML associado a ele.
    data() { // data() é um método que retorna um objeto contendo as propriedades reativas da aplicação Vue.js. Essas propriedades podem ser usadas no template HTML para exibir dados dinâmicos.
        return { // Retorna um objeto com as propriedades reativas da aplicação Vue.js. Essas propriedades podem ser usadas no template HTML.
            nome: 'Thiago Matos Tertuliano',
            idade: 20,
        }
    }
}
Vue.createApp(MyNameApp).mount('#app') // Vue.createApp(MyNameApp).mount('#app') serve para montar a aplicação Vue no elemento HTML com o id "app", que está no arquivo index.html, na div com o id "app". Isso significa que todo o conteúdo dentro dessa div será gerenciado pelo Vue.js, e as propriedades definidas no objeto MyNameApp estarão disponíveis para serem usadas no template HTML associado a esse elemento.
// O Vue.js é um framework JavaScript progressivo para construir interfaces de usuário. Ele é projetado para ser adotado incrementalmente, o que significa que você pode usá-lo para adicionar interatividade a partes específicas de uma página ou para construir aplicativos complexos de página única (SPA).
