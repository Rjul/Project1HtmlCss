class Trolilol {

    constructor() {

        this.lastKey = '';
        this.pressedKey = '';
        this.chaine = '';
        this.deg = 1;
        this.startedRecord = false
        this.intervalFunction;

    }

    target = () => { return document.querySelectorAll('div') }

    brainedFunctionMan(key) {
        if (key == 's') {
            this.startedRecord = true
        }
        else if (key == 'Escape') {
            this.setChaine('')
            this.startedRecord = false;
            clearInterval(this.intervalFunction);
            this.resetTransform()
        }
        if (this.startedRecord) {
            this.addToChaine(key);
        }
        if (this.chaine == decodeURIComponent(escape(window.atob("c3VwZXJtb250cmU=")))) {  /// c3VwZXJtb250cmU=
            this.intervalFunction = setInterval(() => {
                if (Math.random() < 0.5) {
                    this.transformAll(10, 'rotate')
                } else {
                    this.transformAll(10, 'translate')
                }

            }, 200)
        }
    }

    setChaine(value) {
        this.chaine = value
    }

    addToChaine(key) {
        this.chaine += key
    }

    getChaine() {
        return this.chaine
    }

    getChaineLength() {
        return this.chaine.length
    }

    resetTransform() {
        this.transformAll(0, 'rotate')
        this.transformAll(0, 'translate')
    }

    transformAll(randomFact, effect) {
        let targetElms = this.target()

        Array.from(targetElms).forEach((elm) => {

            this.deg = + parseInt(Math.floor(Math.random() * 2 * randomFact));
            if (effect == 'rotate') {
                effect = 'rotate(' + this.deg + 'deg)';
            } else if (effect == 'translate' && randomFact == 0) {
                effect = 'translate(' + this.deg * 10 + 'px , 0px)';
            }
            if (effect == 'translate') {
                effect = 'translate(' + this.deg * 10 + 'px , 5%)';
            }
            elm.style.webkitTransform = effect;
            elm.style.mozTransform = effect;
            elm.style.msTransform = effect
            elm.style.oTransform = effect;
            elm.style.transform = effect;

        })
    }
}
export default Trolilol;