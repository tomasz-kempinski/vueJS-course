const app = Vue.createApp({
    data() {           // skrócony zapis funkcji
        return {
            showBooks: true,
            books: [
                { title: 'Lord Of The Rings', author: 'J.R.R. Tolkien' },
                { title: 'Game Of Thrones', author: 'G.R.R. Martin' },
                { title: 'Harry Potter', author: 'J.K. Rowling' }
            ]
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        }
    }
});

app.mount('#app');

/* w ten sposób wszystko co będzie wewnątrz <div id="app"></div>
w html będzie kontrolowane przez Vue */