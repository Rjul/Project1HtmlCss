class Panier {

    constructor() {
        /// ---- Btn Payer ----///
        this.detectorShipingOutElm = document.getElementById('detectorShiping')
        this.inputCardNumberElm = document.getElementById('#cardnumber')
        this.payementButtonElm = document.getElementById('buttonPayement')
        this.states = 'none'
        ///---- Shiping form Elm -----///
        this.formPayementElm = document.getElementById('shipingForm')
    }
    ///------ Controller Form ------///
    formController() {
        if (this.formPayementElm.reportValidity()) {
            this.switchStatesValid();
        }
        else {
            this.switchStatesError()
        }
    }
    controllerSwitchStates(event) {
        if (event.target.reportValidity()) {
            Array.from(document.getElementsByClassName("input-states-switch")).forEach(inputSwitchElm => {
                if (inputSwitchElm.name != event.target.name) {
                    inputSwitchElm.required = false;
                }
            })
        }
        else {
            let count = 0
            Array.from(document.getElementsByClassName("input-states-switch")).forEach(inputSwitchElm => {
                inputSwitchElm.required = true;
                if (!inputSwitchElm.checkValidity()) {
                    count++
                }
            })
            console.log(count)
            if (count == Array.from(document.getElementsByClassName("input-states-switch")).length) {
                Array.from(document.getElementsByClassName("input-states-switch")).forEach(inputSwitchElm => {
                    inputSwitchElm.required = true;
                })
            }
        }
    }
    ///------ Function States ------///
    switchStatesError() {
        this.payementButtonElm.style.display = 'flex'
        this.payementButtonElm.innerText = 'Formulaire Invalid!'
        setTimeout(() => {
            this.payementButtonElm.innerText = 'Payer'
        }, 3000);
    }
    switchStatesValid() {
        this.payementButtonElm.style.display = 'flex'
        this.payementButtonElm.innerText = 'Merci pour votre commande!'
        setTimeout(() => {
            this.payementButtonElm.innerText = 'En cour de préparation ...'
        }, 3000);
        setTimeout(() => {
            this.formPayementElm.submit()
        }, 3000)
    }
}



//-----   Gestion dynamic tarif 


//_______________________//
//--- defined Function 
//_______________________//

//--- SET data function

function setDeliveryValue(e) {
    deliveryValue = e.target.getAttribute("data-target")
    Array.from(deliveryBtnElms).forEach(element => {
        if (element.classList.contains("btn-this-selected")) {
            element.classList.remove("btn-this-selected");
        }
    });
    e.target.classList.add("btn-this-selected")
    textDeliveryElm.innerHTML = deliveryValue
    calculTotalLines()
}

function setTextTotalLineElm(target, value) {
    target.innerHTML = value
    target.setAttribute('data-price', value)
}

function setTextTotalLinesElm(value) {
    textTotalLinesElm.innerHTML = value
}

//--- GET target OR element

function getTargetInput(thisTarget) {
    for (var i = 0; i < inputQuantityElms.length; i++) {
        if (inputQuantityElms[i].getAttribute('data-target') == thisTarget) {
            return inputQuantityElms[i]
        }
    }
}

function getTextTotalLineElm(thisTarget) {
    for (var i = 0; i < textTotalLineElms.length; i++) {
        if (textTotalLineElms[i].getAttribute('data-target') == thisTarget) {
            return textTotalLineElms[i]
        }
    }
}

// delete elms Shiping

function deleteShipingElem(e) {
    target = e.target.getAttribute("data-target")
    for (ficheShipingElm of ficheShipingElms) {
        if (ficheShipingElm.getAttribute("data-target") == target) {
            ficheShipingElm.remove()
        }
    }
    calculTotalLines()
}

//--- fonction + / -

let addFonction = function (e) {
    let target = getTargetInput(e.target.getAttribute("data-target"))
    target.value++
    calculTotalLine(e)
}

let subtractFonction = function (e) {
    let target = getTargetInput(e.target.getAttribute("data-target"))
    if (target.value > 0) {
        target.value--
        calculTotalLine(e)
    }
}

//--- Procesing line and total page

let calculTotalLine = function (e) {
    let inputElm = getTargetInput(e.target.getAttribute('data-target'))
    let displayElm = getTextTotalLineElm(e.target.getAttribute('data-target'))
    let value = parseInt(displayElm.getAttribute("data-priceBase")) * parseInt(inputElm.value)
    setTextTotalLineElm(displayElm, value)
    calculTotalLines()
}

let calculTotalLines = function () {
    let totalLines = 0
    for (var i = 0; i < textTotalLineElms.length; i++) {
        let quantity = parseInt(textTotalLineElms[i].getAttribute("data-price"))
        totalLines = totalLines + quantity
    }
    setTextTotalLinesElm(totalLines)
    textTotalShopingElm.innerHTML = parseInt(totalLines) + parseInt(deliveryValue)
}

///______________________________________________________________________________________///
///______________________________________ CREATE PRODUCT FROM DATA ______________________///
///______________________________________________________________________________________///

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
    baseElm.appendChild(Object.assign(
        document.createElement('img'),
        {
            src: data.imageUrl,
            alt: data.imageMeta
        }
    ))
    const secondaryBaseElm = document.createElement('div')
    baseElm.appendChild(secondaryBaseElm)
    secondaryBaseElm.appendChild(createTextElm(data))
    secondaryBaseElm.appendChild(description = document.createElement('span'))
    description.setAttribute("class", "description")
    description.appendChild(document.createTextNode(data.description))
    secondaryBaseElm.appendChild(createBtnElm(data))
    secondaryBaseElm.appendChild(createQuantityElm(data))

    appendToDom(baseElm)
}

/// Create elm class Quantity-container
function createQuantityElm(data) {
    let spanToReturn = document.createElement('span')
    spanToReturn.setAttribute("class", "quantity-container")
    spanToReturn.appendChild(createButtonQuantity(data))
    createLinePrice(data, spanToReturn)

    return spanToReturn
}

function createLinePrice(data, parentElm) {
    span1 = document.createElement("span")
    span1.innerText = "Total: "
    span2 = document.createElement("span")
    span2.setAttribute("data-priceBase", data.price)
    span2.setAttribute("data-price", parseFloat(data.price) * parseFloat(data.quantity))
    span2.setAttribute("data-target", data.breadcrumb)
    span2.setAttribute("class", "totalPriceLine")
    span2.innerText = data.price * data.quantity
    span3 = document.createElement('span')
    span3.innerText = "€"
    parentElm.appendChild(span1)
    parentElm.appendChild(span2)
    parentElm.appendChild(span3)
}

/// Create Button and input for Quantity container
function createButtonQuantity(data, parentNode) {
    let divBase = document.createElement("div")
    divBase.setAttribute("class", "btn-container")

    let buttonDown = document.createElement('button')
    buttonDown.setAttribute("class", "btn-quantity btn-low")
    buttonDown.setAttribute("data-target", data.breadcrumb)
    buttonDown.innerText = " - "
    let buttonUp = document.createElement('button')
    buttonUp.setAttribute("class", "btn-quantity btn-hight")
    buttonUp.setAttribute("data-target", data.breadcrumb)
    buttonUp.innerText = " + "

    let input = document.createElement('input')
    input.setAttribute("data-target", data.breadcrumb)
    input.setAttribute("class", "input-quantity")
    input.setAttribute("type", "number")
    input.setAttribute("name", "quantity" + data.breadcrumb)
    input.setAttribute("id", "quantity" + data.breadcrumb)
    input.setAttribute("value", data.quantity)

    divBase.appendChild(buttonDown)
    divBase.appendChild(input)
    divBase.appendChild(buttonUp)
    console.log(divBase)
    return divBase;
}

/// Create elm class Delete-container
function createBtnElm(data) {
    const span = document.createElement('span')
    span.setAttribute("class", "delete-container")
    let button = document.createElement('button')
    button.setAttribute("class", "btn-delete-this")
    button.setAttribute("data-target", data.breadcrumb)
    button.innerText = "Supprimer"
    span.appendChild(button)
    return span
}
function createTextElm(data) {
    // Create Div sub-base
    const baseDivElm = document.createElement('div')
    // Create Span Title with text
    title = document.createElement('span')
    title.appendChild(document.createTextNode(data.nom))
    // Create Span Price with text
    price = document.createElement('span')
    price.appendChild(document.createTextNode(data.price + "€"))
    // Insert
    baseDivElm.appendChild(title)
    baseDivElm.appendChild(price)
    return baseDivElm;
}

function appendToDom(cardElm) {
    document.getElementById('panier').insertAdjacentElement(
        `afterbegin`, cardElm)
}

///______________________________________________________________________________________///
///_______________________________________ INIT LISTENER AND SELECT _____________________///
///______________________________________________________________________________________///

let btnAddQuantityElms;
let btnSubtractQuantityElms
let btnDeleteElms;
let inputQuantityElms;
let ficheShipingElms;
let textTotalLineElms;
let textTotalLinesElm;
let textTotalShopingElm;
let deliveryBtnElms;
let textDeliveryElm;
let deliveryValue = 5;

initListenerFunction = function initListenerApp() {
    //----- ELMS 
    //--- Button elms
    btnAddQuantityElms = document.getElementsByClassName('btn-hight')
    btnSubtractQuantityElms = document.getElementsByClassName('btn-low')
    btnDeleteElms = document.getElementsByClassName("btn-delete-this")
    //--- quantity input
    inputQuantityElms = document.getElementsByClassName("input-quantity")

    //--- Display Product
    ficheShipingElms = document.getElementsByClassName("ficheList")
    //--- DIPLAY ELMS
    textTotalLineElms = document.getElementsByClassName("totalPriceLine")
    textTotalLinesElm = document.getElementById("priceLines")
    textTotalShopingElm = document.getElementById("priceShiping")

    //--- Delivery var
    deliveryBtnElms = document.getElementsByClassName("btn-delivery")
    textDeliveryElm = document.getElementById("delivery")


    InitPanier = new Panier(); /// => Construtor init

    Array.from(document.getElementsByClassName("input-states-switch")).forEach(inputSwitchElm => {
        inputSwitchElm.addEventListener("change", (e) => { InitPanier.controllerSwitchStates(e) })
    })
    document.getElementById('buttonPayement').addEventListener('click', (e) => {
        InitPanier.formController();
    })

    //--- Work array elms for eventlistener

    for (var i = 0; i < btnAddQuantityElms.length; i++) {
        btnAddQuantityElms[i].addEventListener('click', function (e) { addFonction(e) });
    }
    for (var i = 0; i < btnSubtractQuantityElms.length; i++) {
        btnSubtractQuantityElms[i].addEventListener('click', function (e) { subtractFonction(e) });
    }
    for (var i = 0; i < inputQuantityElms.length; i++) {
        inputQuantityElms[i].addEventListener('change', function (e) { calculTotalLine(e) });
    }
    for (var i = 0; i < deliveryBtnElms.length; i++) {
        deliveryBtnElms[i].addEventListener('click', function (e) { setDeliveryValue(e) });
    }
    for (var i = 0; i < btnDeleteElms.length; i++) {
        btnDeleteElms[i].addEventListener('click', function (e) { deleteShipingElem(e) });
    }

    //--- init total price
    calculTotalLines()
}



//________________________________________________________________________________________//
//________________________________________________________________________________________//
//________________________________________  AJAX  ________________________________________//

function successResponse(response) {
    initProductPage(response)
    initListenerFunction()
}

function getDataProducts() {
    return fetch('./faker/panier.json', {
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

