cardsElms = document.getElementsByClassName('card')

inputNameElm = document.getElementById('name')
inputDescriptionElm = document.getElementById('description')
containerFormElm = document.getElementById("container-form-produit-id")

function formulaireDisplay(title, description) {
    console.log(title, description, inputDescriptionElm)
    inputNameElm.value = title
    inputDescriptionElm.value = description
    containerFormElm.style.display = 'flex'
}
function cancelForm() {
    containerFormElm.style.display = 'none'
}