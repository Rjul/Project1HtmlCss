const containerElm = document.getElementById('container')
const menuElm = document.getElementById('menu')
const btnMenu = document.getElementById('btnMenu')

active = false  // Etat -> Déplier ou non 
states = false // Etat -> en transition ou pret

// Surcharge string -> equivalent PHP Sprintf()
String.prototype.format = function () {
    var formatted = this;
    for (var i = 0; i < arguments.length; i++) {
        var regexp = new RegExp('\\{' + i + '\\}', 'gi');
        formatted = formatted.replace(regexp, arguments[i]);
    }
    return formatted;
};


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

btnMenu.addEventListener("click", async () => {

    if (!active && !states) {
        states = true
        for (let i = 0; i > -150; i--) {
            // let delay = await sleep(0);
            let data = i + 150
            menuElm.style.transform = "translate({0}px, 0px)".format(i)
            containerElm.style.left = "{0}px".format(data)
            containerElm.style.width = "calc(100vw - {0}px)".format(data)
        }
        states = false
        active = true
    } else if (active && !states) {
        states = true
        for (let i = -150; i < 0; i++) {
            // let delay = await sleep(0)
            let data = i + 150
            menuElm.style.transform = "translate({0}px, 0px)".format(i)
            containerElm.style.left = "{0}px".format(data)
            containerElm.style.width = "calc(100vw - {0}px)".format(data)
        }
        states = false
        active = false
    }
})



