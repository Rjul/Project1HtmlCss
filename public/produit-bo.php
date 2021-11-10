<?php include './elms-pages/head_bo.php' ?>
<?php include './elms-pages/base_bo.php' ?>
<link rel="stylesheet" href="./css/bo/article-list.css">
<link rel="stylesheet" href="./css/bo/article-list-form.css">
<div class='container-card'>
    <button class='card article-create' onclick="formulaireDisplay('','')">
        <div class='plus style-vertical'></div>
        <div class='plus style-horizontal'></div>
    </button>
    <button class='card article-bo' onclick="formulaireDisplay('Grolex','super grolex incroyable')">
        <img class='img-card' class='' src="./asset/Montre 1.webp" alt="montre-grolex">
        <div class='mid-text'>
            <span>Super grolex</span>
            <span>8000 $</span>
        </div>
    </button>
    <button class='card article-bo' onclick="formulaireDisplay('Grolex','super grolex incroyable')">
        <img class='img-card' class='' src="./asset/Montre 1.webp" alt="montre-grolex">
        <div class='mid-text'>
            <span>Super grolex</span>
            <span>8000 $</span>
        </div>
    </button>
    <button class='card article-bo' onclick="formulaireDisplay('Grolex','super grolex incroyable')">
        <img class='img-card' class='' src="./asset/Montre 1.webp" alt="montre-grolex">
        <div class='mid-text'>
            <span>Super grolex</span>
            <span>8000 $</span>
        </div>
    </button>
    <button class='card article-bo' onclick="formulaireDisplay('Grolex','super grolex incroyable')">
        <img class='img-card' class='' src="./asset/Montre 1.webp" alt="montre-grolex">
        <div class='mid-text'>
            <span>Super grolex</span>
            <span>8000 $</span>
        </div>
    </button>
    <button class='card article-bo' onclick="formulaireDisplay('Grolex','super grolex incroyable')">
        <img class='img-card' class='' src="./asset/Montre 1.webp" alt="montre-grolex">
        <div class='mid-text'>
            <span>Super grolex</span>
            <span>8000 $</span>
        </div>
    </button>
    <button class='card article-bo' onclick="formulaireDisplay('Grolex','super grolex incroyable')">
        <img class='img-card' class='' src="./asset/Montre 1.webp" alt="montre-grolex">
        <div class='mid-text'>
            <span>Super grolex</span>
            <span>8000 $</span>
        </div>
    </button>
    <button class='card article-bo' onclick="formulaireDisplay('Grolex','super grolex incroyable')">
        <img class='img-card' class='' src="./asset/Montre 1.webp" alt="montre-grolex">
        <div class='mid-text'>
            <span>Super grolex</span>
            <span>8000 $</span>
        </div>
    </button>
    <button class='card article-bo' onclick="formulaireDisplay('Grolex','super grolex incroyable')">
        <img class='img-card' class='' src="./asset/Montre 1.webp" alt="montre-grolex">
        <div class='mid-text'>
            <span>Super grolex</span>
            <span>8000 $</span>
        </div>
    </button>
    <button class='card article-bo' onclick="formulaireDisplay('Grolex','super grolex incroyable')">
        <img class='img-card' class='' src="./asset/Montre 1.webp" alt="montre-grolex">
        <div class='mid-text'>
            <span>Super grolex</span>
            <span>8000 $</span>
        </div>
    </button>
    <button class='card article-bo' onclick="formulaireDisplay('Grolex','super grolex incroyable')">
        <img class='img-card' class='' src="./asset/Montre 1.webp" alt="montre-grolex">
        <div class='mid-text'>
            <span>Super grolex</span>
            <span>8000 $</span>
        </div>
    </button>
</div>

</div>
<section id="container-form-produit-id" class='container-form-produit'>
    <form id="produit-form" action="#" method="post">
        <div class='form-row'>
            <div class='form-child-container'>
                <img class='img-form' src="./asset/Montre 1.webp" alt="pre-visu">
                <input class="input-produit input-standart" type="file" accept="image/*" name="img" id="" required>
            </div>
            <div class='form-child-container'>
                <div class='form-child-container'>
                    <label for="name">Nom produit</label>
                    <input class="input-produit input-standart" type="text" name="name" id="name" minlength="4" maxlength="20" required>
                </div>
                <div class='form-child-container'>
                    <label for="description">Description</label>
                    <textarea wrap="hard" form="produit-form" class="input-standart input-area" name="description" id="description" minlength="20" maxlength="255" cols="40" rows="10" required></textarea>
                </div>
                <div class='form-child-container'>
                    <label for="prix">Prix</label>
                    <input class="input-produit input-standart" type="number" name="prix" id="prix" required>
                </div>
            </div>
        </div>
        <div class="btn-container">
            <button onclick="cancelForm()" class="btn is-danger" type="reset">Annuler</button>
            <button class="btn is-success" type="submit">Enregistrer</button>
        </div>
    </form>
</section>

<script src="./js/bo-list-produit.js"></script>
<?php include './elms-pages/footer_bo.php' ?>