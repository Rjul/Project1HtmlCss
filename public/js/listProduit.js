initProductPage = function initProductPageNow(json) {
    if (json === null) { console.error("Json vide") }
    for (key in json.produits) {
        if (json.produits[key].ref === null) { console.error("prix produit null") }
        createProductElm(json.produits[key])
    }
}

function createProductElm(data) {
    const baseElm = document.createElement('div')
    baseElm.setAttribute("data-target", data.breadcrumb);
    baseElm.setAttribute("class", "ficheList");
    baseElm.appendChild(link = Object.assign(
        document.createElement('a'),
        {
            href: data.url,
        }
    ))
    link.appendChild(Object.assign(
        document.createElement('img'),
        {
            src: data.imageUrl,
            alt: data.imageMeta
        }
    ))
    let spanTitle = document.createElement("span")
    spanTitle.innerHTML = data.nom
    spanTitle.setAttribute('class', 'description')
    const secondaryBaseElm = document.createElement('div')
    link.appendChild(spanTitle)
    link.appendChild(secondaryBaseElm)
    spanDescription = document.createElement('span')
    spanDescription.appendChild(document.createTextNode(data.description))
    spanPrice = document.createElement('span')
    spanPrice.appendChild(document.createTextNode(data.price + "€"))
    secondaryBaseElm.appendChild(spanDescription)
    secondaryBaseElm.appendChild(spanPrice)

    appendToDom(baseElm)
}


function appendToDom(cardElm) {
    document.getElementById('app-base').insertAdjacentElement(
        `afterbegin`, cardElm)
}


function successResponse(response) {
    initProductPage(response)
}

function getDataProducts() {
    return fetch('./faker/list-products.json', {
        method: 'GET',
    })
        .then(function (response) {
            return response.json()
        })
        .catch(function (response) {
            console.error(response)
        })
}

getDataProducts().then(data => successResponse(data));