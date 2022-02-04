import { createApp } from 'vue'
import { createStore } from 'vuex';
import RootComponent from './App.vue'
import router from './router'

const store = createStore({
    state() {
        let products
        return {
            products,
        }
    },
    mutations: {
        productsRecever(state, products) {
            state.products = products
        }
    },
    getters: {
        products(state) {
            return state.products
        }
    }
})

const App = createApp(RootComponent)
App.use(router)
App.use(store)
App.mount('#app')


function getDataProducts() {
    return fetch("http://localhost/api/products", {
        method: "GET",
    })
        .then(function (response) {
            console.log("reponse");
            return response.json();
        })
        .catch(function (response) {
            console.error(response);
        });
}

getDataProducts().then((data) => store.commit("productsRecever", data));