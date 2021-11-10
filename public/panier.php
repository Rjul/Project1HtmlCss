<?php
include './elms-pages/head.php';
include './elms-pages/base.php';
?>
<link rel="stylesheet" media="all and (min-width: 700px)" href=" ./css/panier/panier.css">
<link rel="stylesheet" media="all and (max-width: 700px)" href="./css/panier/panier-tab-phone.css">
<H2>An incredible shopping cart.
    You are amazing!</H2>
<article id='panier'>
    <div class='ficheList'>
        <buttonx class='buttonFiche' id='1'></buttonx>
        <img src="./asset/Montre 1.webp" alt="" />
        <div>
            <div>
                <span>Super Grolex</span>
                <span>8000$</span>
            </div>
            <span class='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                maiores?</span>
        </div>
    </div>
    <div class='ficheList'>
        <buttonx class='buttonFiche' id='1'></buttonx>
        <img src="./asset/Montre 1.webp" alt="" />
        <div>
            <div>
                <span>Super Grolex</span>
                <span>8000$</span>
            </div>
            <span class='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                maiores?</span>

        </div>
    </div>
    <div id='payement'>
        <button class='btnClassShip' id='buttonPayement'>PAYER</button>
        <article id='montant'>
            <span>HT : 18000 $</span>
            <span>TVA : 20 %</span>
            <span>Total : 19600 $</span>
        </article>
    </div>
</article>
<div>

</div>
<script src="./js/panier.js"></script>
<?php include './elms-pages/footer.php' ?>