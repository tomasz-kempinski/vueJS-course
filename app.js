const app = Vue.createApp({
    data() {           // skrócony zapis funkcji
        return {
            url: 'http://www.google.com',
            showBooks: true,
            books: [
                { title: 'Lord Of The Rings', author: 'J.R.R. Tolkien', img: 'assets/1.jpg', isFav: true },
                { title: 'Game Of Thrones', author: 'G.R.R. Martin', img: 'assets/2.jpg', isFav: false },
                { title: 'Harry Potter', author: 'J.K. Rowling', img: 'assets/3.jpg', isFav: true },
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