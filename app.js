const app = Vue.createApp({
    data() {           // skrócony zapis funkcji
        return {
            title: 'The Lord Of The Rings',
            author: 'J.R.R. Tolkien',
            age: 77
        }
    },
    methods: {
        changeTitle(title) {
            // poprzez 'this' odwołujemy się do pól z komponentu
            // this.title = 'Harry Potter'
            this.title = title
        }
    }
});

app.mount('#app');

/* w ten sposób wszystko co będzie wewnątrz <div id="app"></div>
w html będzie kontrolowane przez Vue */