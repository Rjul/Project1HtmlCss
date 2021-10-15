//----------- Fiche clickable -----------//

// init variable
ficheElms = document.getElementsByClassName('buttonFiche');

// Boucle les fiches produits, ajoute un event 
for (var i = 0; i < ficheElms.length; i++) {
    ficheElms[i].addEventListener('click', (e) => {
        e.stopPropagation();
        let produit = e.target.getAttribute("id");
        window.location = "../Public/fiche-produit.html"
        console.log(produit);
    });
}

