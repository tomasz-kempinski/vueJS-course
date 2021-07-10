const app = Vue.createApp({
    /* tutaj możemy zdefiniować np. dane, funkcje, template-y 
    które będą wstrzyknięte i obsługiwane przez Vue */
    // template: '<h2>I am the template</h2>'
});

app.mount('#app');

/* w ten sposób wszystko co będzie wewnątrz <div id="app"></div>
w html będzie kontrolowane przez Vue */