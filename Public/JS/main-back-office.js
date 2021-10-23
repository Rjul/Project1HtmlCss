const containerElm = document.getElementById('container')
const menuElm = document.getElementById('menu')
const btnMenu = document.getElementById('btnMenu')


active = false
states = false

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
            let delay = await sleep(0);
            let data = i + 150
            menuElm.style.transform = "translate({0}px, 0px)".format(i)
            containerElm.style.left = "{0}px".format(data)
            containerElm.style.width = "calc(100vw - {0}px)".format(data)
        }
        console.log('fini')
        states = false
        active = true
    } else if (active && !states) {
        states = true
        for (let i = -150; i < 0; i++) {
            let delay = await sleep(0)
            let data = i + 150
            menuElm.style.transform = "translate({0}px, 0px)".format(i)
            containerElm.style.left = "{0}px".format(data)
            containerElm.style.width = "calc(100vw - {0}px)".format(data)
        }
        states = false
        active = false
    }
    console.log('active ', active, 'states', states)
    pourquoi()
})



