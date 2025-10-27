import { createApp } from 'vue'
import App from './App.vue'
import router from './Router'

var app = createApp(App);
app.config.globalProperties.$filters = {
    //Creamos dos metodos que reciben "Algo" y lo devuelven un resultado
    mayuscula(dato){
        return dato.toUpperCase();
    },

    getNumeroDoble(numero){
        return numero * 2;
    },

    minuscula(dato){
        return dato.toLowerCase();
    }
}

app.use(router).mount('#app')
