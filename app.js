const app = Vue.createApp({
    data() {           // skrócony zapis funkcji
        return {
            showBooks: true,
            title: 'The Lord Of The Rings',
            author: 'J.R.R. Tolkien',
            age: 77
        }
    },
    methods: {
        toggleShowBooks(){
            // this.showBooks = false
            this.showBooks = !this.showBooks
        }
    }
});

app.mount('#app');

/* w ten sposób wszystko co będzie wewnątrz <div id="app"></div>
w html będzie kontrolowane przez Vue */