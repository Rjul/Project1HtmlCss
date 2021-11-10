<?php
include './elms-pages/head.php';
include './elms-pages/base.php';
?>
<div class='ficheList'>
    <link rel="stylesheet" media="all and (min-width: 800px)" href="./css/fiche-produit/ficheProduit.css">
    <link rel="stylesheet" media="all and (max-width: 800px)" href="./css/fiche-produit/fiche-produit-tab.css">
    <div id="ficheRow1">
        <img src="./asset/Montre 1.webp" alt="montre" />
        <div id='ficheColumn'>
            <span>
                <h3>Super Grolex</h3>
            </span>
            <span>8000$ <form action="./panier.php" method="get"><button>Ajouter au panier</button></form>
            </span>
        </div>
    </div>
    <span class='description'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quos possimus
            id dolor! Vel consequatur quis quae quia possimus, ad ipsam earum dolorem. Sint quidem fugiat
            aliquid doloribus in cupiditate asperiores, accusantium laboriosam non possimus repellat,
            dolorum,
            corporis iure deleniti qui numquam nihil a iusto. Necessitatibus, aliquam nisi! Obcaecati,
            quas?</p>
    </span>
</div>
<?php include './elms-pages/footer.php' ?>