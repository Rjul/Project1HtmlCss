
export default {
    async getProducts() {
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
        getDataProducts().then((data) => { return data });
    }
}
