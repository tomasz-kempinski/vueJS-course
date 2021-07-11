const app = Vue.createApp({
    data() {           // skrócony zapis funkcji
        return {
            showBooks: true,
            title: 'The Lord Of The Rings',
            author: 'J.R.R. Tolkien',
            age: 77,
            x: 0,
            y: 0
        }
    },
    methods: {
        toggleShowBooks() {
            // this.showBooks = false
            this.showBooks = !this.showBooks
        },
        // handleEvent(){
        //     console.log('event');
        // }

        // zawsze pierwszym domyślnym parametrem jest 'event'
        // a drugim 'data', niezależnie jak je nazwiemy
        handleEvent(e, data) {
            console.log(e, e.type);
            if (data) {
                console.log(data);
            }
        },
        handleMouseMove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
});

app.mount('#app');

/* w ten sposób wszystko co będzie wewnątrz <div id="app"></div>
w html będzie kontrolowane przez Vue */