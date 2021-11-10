<?php include './elms-pages/head_bo.php' ?>
<?php include './elms-pages/base_bo.php' ?>
<link rel="stylesheet" href="./css/bo/table-style-bo.css">
<div class="page-table-container">
    <h2 class="titlePage">Détail commande n°0869965T</h2>
    <table class="first-table">
        <thead>
            <tr>
                <th colspan="3">IDENTIFICATION</th>
                <th colspan="2" class="no-tab">Adresse</th>
            </tr>
            <tr>
                <th>Nom</th>
                <th>Prenom</th>
                <th>EMail</th>
                <th class="no-tab">Numéro / Voie</th>
                <th class="no-tab">Code postal / Ville</th>
            </tr>
        </thead>
        <tbody>
            <tr class="row-color-pair">
                <td>Du-bout</td>
                <td>Jean-bernard</td>
                <td>fake-email@hapasla.net</td>
                <td class="no-tab">11 rue du perdu</td>
                <th class="no-tab">09876 Labas-Sur-Garonne</th>
            </tr>
        </tbody>
    </table>
    <table class='tab-view'>
        <thead>
            <tr>
                <th>Numéro / Voie</th>
                <th>Code postal</th>
                <th>Ville</th>
            </tr>
        </thead>
        <tbody>
            <tr class="row-color-pair">
                <td>11 rue du perdu</td>
                <td>09876</th>
                <th>Labas-Sur-Garonne</th>
            </tr>
        </tbody>
    </table>

    <table class="first-table">
        <thead>
            <tr>
                <th colspan="3">Commandes</th>
            </tr>
            <tr>
                <th>Réf</th>
                <th>Date</th>
                <th>Prix</th>
            </tr>
        </thead>
        <tbody>
            <tr class="row-color-pair">
                <td><a href="./detail-command-bo.php">0869965T</a></td>
                <td>19/04/2019</td>
                <td>24000€</td>
            </tr>
        </tbody>
    </table>
    <table>
        <thead>
            <tr>
                <th colspan="3">Produits</th>
            </tr>
            <tr>
                <th>Réf</th>
                <th>Nombres</th>
                <th>Prix</th>
            </tr>
        </thead>
        <tbody>
            <tr class="row-color-pair">
                <td><a href="./produit-bo.php?id=monte">0869965T</a></td>
                <td>1</td>
                <td>8000€</td>
            </tr>
            <tr class="">
                <td><a href="./produit-bo.php?id=monte">0869965T</a></td>
                <td>1</td>
                <td>8000€</td>
            </tr>
            <tr class="row-color-pair">
                <td><a href="./produit-bo.php?id=monte">0869965T</a></td>
                <td>1</td>
                <td>8000€</td>
            </tr>
        </tbody>
    </table>
</div>


<?php include './elms-pages/footer_bo.php' ?>