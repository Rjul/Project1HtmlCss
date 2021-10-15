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

//----------- Fonction swith type input -------------//

// init variable 

const passwordInputElms = document.getElementsByClassName('passwordInput')

// boucle ajout d'évent 
for (var i = 0; i < passwordInputElms.length; i++) {
    passwordInputElms[i].addEventListener('key', (e) => {
        console.log(e.value)
    })
}



/**
function SwitchPass(){
 var typeInput = document.getElementById('mdp');
 var txtHREF = document.getElementById('AffPass');
 if(typeInput.type == 'password'){
  typeInput.type = 'text';
  txtHREF.innerHTML = 'Cacher le mot de passe';
 }
 else{
  typeInput.type = 'password';
  txtHREF.innerHTML = 'Afficher mot de passe';
 }
}
 */