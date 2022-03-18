
const state = {
    items: [],
    checkoutStatus: null
}

// getters
const getters = {
    productTotalPrice: (state) => {
        let total;
        state.items.forEach(product => {
            total = + (product.price * product.quatityCart)
        });
        return total;
    },
    cartTotalPrice: (getters) => {
        let total;
        getters.productTotalPrice.forEach(price => {
            total += price
        });
        return total;
    }
}

// actions
const actions = {
    addProductToCart({ state, commit }, product) {
        if (product.quatity > 0) {
            const cartItem = state.items.find(item => item.id === product.id)
            if (!cartItem) {
                commit('pushProductToCart', { product })
            } else {
                commit('incrementItemQuantity', cartItem)
            }
        }
    },
    changeQuantity({ commit }, product) {
        commit('applyQuantityForProductObj', product)
    }
}

// mutations
const mutations = {
    applyQuantityForProductObj(state, product) {
        const cartItem = state.items.find(item => item.id === product.id)
        switch (product.type) {
            case 'math':
                cartItem.quatityCart = + product.quatityCart;
                break;
            case 'raw':
                cartItem.quatityCart = product.quatityCart;
                break;
            default:
                console.error("Type for change quantity dont match with ref")
        }


    },

    pushProductToCart(state, { product }) {
        state.items.push({
            id: product.id,
            title: product.title,
            description: product.description,
            price: product.price,
            imageUrl: product.imageUrl,
            quatityCart: 1
        })
    },

    incrementItemQuantity(state, { id }) {
        const cartItem = state.items.find(item => item.id === id)
        cartItem.quatityCart++
    },

    setCartItems(state, { items }) {
        state.items = items
    },

    setCheckoutStatus(state, status) {
        state.checkoutStatus = status
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}