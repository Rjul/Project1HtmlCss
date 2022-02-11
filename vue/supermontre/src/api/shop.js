/**
 * Mocking client-server processing
 */


export default {
    getProducts(cb) {
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

        getDataProducts().then((_products) => cb(_products));

    },

    buyProducts(products, cb, errorCb) {
        setTimeout(() => {
            // simulate random checkout failure.
            (Math.random() > 0.5 || navigator.webdriver)
                ? cb()
                : errorCb()
        }, 100)
    }
}
