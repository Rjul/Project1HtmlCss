import shop from '../../api/shop'

// initial state
const state = {
    productsStored: [],
    idViewProduct: null,
    product: null,
    dataMounted: false,
}

// getters
const getters = {
    getProductById: (state) => {
        const product = state.productsStored.find(product => product.id === state.idViewProduct)
        return product;
    },
    getDataMounted: (state) => {
        const dataMounted = state.dataMounted
        return dataMounted;
    }
}

// actions
const actions = {
    getAllProducts({ commit }) {
        shop.getProducts(products => {
            commit('setProducts', products)
        })
    },

    defineIdToView({ state, commit }, productId) {
        if (state.productsStored.find(product => product.id === productId)) {
            console.log("Enter if")

        }
        commit('setProduct', productId)
        commit('setIdViewProduct', productId)
        // commit('setDataMounted', true)
    },

    defineDataMounted({ commit }, value) {
        commit('setDataMounted', value)
    }
}

// mutations
const mutations = {
    setProducts(state, products) {
        state.productsStored = products
        if (state.idViewProduct) [
            this.commit('products/setProduct', state.idViewProduct)
        ]
    },

    setProduct(state, idToView) {
        state.product = state.productsStored.find(product => product.id == idToView)
    },

    setIdViewProduct(state, idToView) {
        state.idViewProduct = idToView;
    },

    setDataMounted(state, dataMounted) {
        state.dataMounted = dataMounted
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}