<?php include './elms-pages/head_bo.php' ?>
<?php include './elms-pages/base_bo.php' ?>
<link rel="stylesheet" href="./css/bo/table-style-bo.css">
<div class="page-table-container">
    <h2 class="titlePage">Liste Clients</h2>
    <table>
        <thead>
            <tr>
                <th colspan="3">IDENTIFICATION</th>
                <th colspan="2" class="no-tab">CLIENT</th>
            </tr>
            <tr>
                <th>Ref :</th>
                <th>Date</th>
                <th class="no-tab">Nb de produit</th>
                <th class="no-tab">Nom</th>
                <th>Type livraison</th>
            </tr>
        </thead>
        <tbody id="fakerOne">
            <tr class="row-color-pair">
                <td><a href="./detail-command-bo.php">N°6267071</a></td>
                <td>15/09/2021</td>
                <td class="no-tab">15</td>
                <td class="no-tab">Bernard de la porte</td>
                <td>Premium</td>
            </tr>
            <tr>
                <td><a href="./detail-command-bo.php">N°6267071</a></td>
                <td>15/09/2021</td>
                <td class="no-tab">15</td>
                <td class="no-tab">Bernard de la porte</td>
                <td>Premium</td>
            </tr>
        </tbody>
    </table>
</div>


<?php include './elms-pages/footer_bo.php' ?>