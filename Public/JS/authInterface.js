//--------------- Auth ----------------//

// init variable
const displayFromAuthElm = document.getElementById('authForm')
const displayFromAuthButtonElm = document.getElementById('authButton')
const detecteClickOutAuthElm = document.getElementById('detectorAuth')

// init states
var stateDisplayAuth = "none"
const stateDisplayAuthNone = "none"
const stateDisplayAuthFixe = "flex"
displayFromAuthElm.style.display = "none"

// Fonction de de display switch

displayFromAuthButtonElm.addEventListener('click', (e) => {
    console.log("Auth vue")
    displayFromAuthElm.style.display = stateDisplayAuthFixe
    detecteClickOutAuthElm.style.display = stateDisplayAuthFixe
    e.stopPropagation()
    stateDisplayAuth = stateDisplayAuthFixe
})
detecteClickOutAuthElm.addEventListener('click', (e) => {
    console.log('Hide Auth')
    e.stopPropagation()
    displayFromAuthElm.style.display = stateDisplayAuthNone
    detecteClickOutAuthElm.style.display = stateDisplayAuthNone
    stateDisplayAuth = stateDisplayAuthNone
})

//----------- Fonction swith tab connection / inscription -------------//

// init variable 

const tabSwitchElms = document.getElementsByClassName('tab-switch-mod')
const inscriptionElm = document.getElementById('inscription-tab')
const connectionElm = document.getElementById('connection-tab')
var states = 'connection'

/// init


// FUNCTION modification des styles

function tabSwitchDisplay(rendu) {
    for (var i = 0; i < tabSwitchElms.length; i++) {
        tabSwitchElms[i].style.display = rendu
        console.log(rendu)
    }
}

function displayFullAuth() {
    inscriptionElm.style.display = 'flex'
    connectionElm.style.display = 'flex'
    tabSwitchDisplay('none')
}
function switchAuthMod() {
    if (states == "connection") {
        inscriptionElm.style.display = 'flex'
        connectionElm.style.display = 'none'
        states = 'inscription'
    } else if (states == "inscription") {
        inscriptionElm.style.display = 'none'
        connectionElm.style.display = 'flex'
        states = 'connection'
    }
}


//------- Ecoute et gestion de resize --------//

window.addEventListener('load', (e) => {

})

window.addEventListener('resize', (e) => {
    console.log("resize")
    if (e.target.innerWidth > 800) {
        displayFullAuth()
    }
    else if (e.target.innerWidth < 800) {
        tabSwitchDisplay('flex')
        if (states == 'connection') {
            inscriptionElm.style.display = 'none'
        } else {
            connectionElm.style.display = 'none'
        }
    }
})

// Ecoute des Elms de switch en tab mods


for (var i = 0; i < tabSwitchElms.length; i++) {
    tabSwitchElms[i].addEventListener('click', () => {
        switchAuthMod()
    }
    )
}