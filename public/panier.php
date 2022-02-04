<?php
include './elms-pages/head.php';
include './elms-pages/base.php';
?>
<link rel="stylesheet" media="all and (min-width: 750px)" href=" ./css/panier/panier.css">
<link rel="stylesheet" media="all and (max-width: 750px)" href="./css/panier/panier-tab-phone.css">
<H2>An incredible shopping cart.
    You are amazing!</H2>
<article id='panier'>
    <div data-target="SuperGrolex" class='ficheList'>
        <buttonx class='buttonFiche' id='1'></buttonx>
        <img src="./asset/Montre 1.webp" alt="" />
        <div>
            <div>
                <span>Super Grolex</span>
                <span>8000$</span>
            </div>
            <span class='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                maiores?
            </span>
            <span class="delete-container"><button data-target="SuperGrolex" class="btn-delete-this">Supprimer</button></span>
            <span class="quantity-container">
                <div class="btn-container">
                    <button data-target="SuperGrolex" class="btn-quantity btn-low"> - </button>
                    <input data-target="SuperGrolex" value="1" class="input-quantity" type="number" name="quantitySuperGrolex" id="quantitySuperGrolex">
                    <button data-target="SuperGrolex" class="btn-quantity btn-hight"> + </button>
                </div>
                <span>Total: </span><span data-priceBase="8000" data-price="8000" data-target="SuperGrolex" class="totalPriceLine">8000</span><span>€</span>
            </span>
        </div>
    </div>
    <div data-target="Grolex" class='ficheList'>
        <img src="./asset/Montre 1.webp" alt="" />
        <div>
            <div>
                <span>Grolex</span>
                <span>8000$</span>
            </div>
            <span class='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                maiores?
            </span>
            <span class="delete-container"><button data-target="Grolex" class="btn-delete-this">Supprimer</button></span>
            <span class="quantity-container">
                <div class="btn-container">
                    <button data-target="Grolex" class="btn-quantity btn-low"> - </button>
                    <input data-target="Grolex" value="1" class="input-quantity" type="number" name="quantityGrolex" id="quantityGrolex">
                    <button data-target="Grolex" class="btn-quantity btn-hight"> + </button>
                </div>
                <span>Total: </span><span data-priceBase="8000" data-price="8000" data-target="Grolex" class="totalPriceLine">8000</span><span>€</span>
            </span>

        </div>
    </div>
    <div class="delivery">
        <div>
            <button data-target="5" class="btn-delivery btn-this-selected"> Relais colis à 5€ </button>
        </div>
        <div>
            <button data-target="12" class="btn-delivery"> Livraison à domicile à 12€ </button>
        </div>
    </div>
    <form class="form-shiping" id="shipingForm" action="">
        <input class="input-form-shiping" placeholder="NOM" type="text" name="name" id="inputName" required>
        <input class="input-form-shiping" placeholder="Adresse" type="text" name="street" id="inputStreet" required>
        <input class="input-form-shiping" placeholder="Code postal" pattern="[A-Za-z0-9]{5}" type="text" name="zipcode" id="inputZipcode" required>
        <input class="input-form-shiping" placeholder="Ville" pattern="[A-Z]{0,20}[a-z]{0,30}" type="text" name="city" id="inputCity" required>
        <input class="input-form-shiping input-states-switch" placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" type="email" name="email" id="inputEmail" required>
        <input class="input-form-shiping input-states-switch" placeholder="Téléphone" pattern="[0-9]{10}" type="text" name="phone" id="inputPhone" required>
    </form>
    <div id='payement'>
        <button class='btnClassShip' id='buttonPayement'>PAYER</button>
        <article id='montant'>
            <span><span id="priceLines">18000</span><span> €</span></span>
            <span><span>Livraison : </span><span id="delivery">5</span><span> €</span></span>
            <span><span>Total : </span><span id="priceShiping">19600</span><span> $</span></span>
        </article>
    </div>
</article>
<div>

</div>
<script src="./js/panier.js"></script>
<?php include './elms-pages/footer.php' ?>