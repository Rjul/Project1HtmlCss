class Panier {
    // ----- simulation payement ------//

    // ----- Init VAR -----//
    formPayementElm = document.getElementById('shipingForm')
    detectorShipingOutElm = document.getElementById('detectorShiping')
    inputCardNumberElm = document.getElementById('#cardnumber')
    payementButtonElm = document.getElementById('buttonPayement')
    states = 'none'
    id = ''

    constructor() {
        this.formPayementElm.style.display = 'none'
    }

    ///------ Function States ------///
    switchStates() {
        if (this.states == 'none') {
            this.payementButtonElm.style.display = 'none'
            this.formPayementElm.style.display = 'flex'
            this.states = 'display'
            console.log('display')
            this.addListenerSwitchElm('btnIdShip')

        }
        else if (this.states == 'display') {
            console.log('payerButton')
            this.formPayementElm.style.display = 'none'
            this.payementButtonElm.style.display = 'flex'
            this.payementButtonElm.innerText = 'Merci pour votre commande!'
            setTimeout(() => {
                this.payementButtonElm.innerText = 'En cour de préparation ...'
            }, 3000);

        }
        else if (this.states == 'shiping') {
            console.log('click prepa')
        }
    }
    addListenerSwitchElm(id) {
        document.getElementById(id).addEventListener('click', (e) => {
            e.preventDefault()
            e.stopPropagation()
            this.switchStates()
        })
    }

}

InitPanier = new Panier(); /// => Construtor init

document.getElementById('buttonPayement').addEventListener('click', (e) => {
    InitPanier.switchStates();
})


