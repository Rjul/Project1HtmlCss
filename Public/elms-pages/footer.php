</section>

<div id='detectorAuth'></div>
<section id='authForm'>
    <div class='middleForm' id='connection-tab'>
        <span class='tab-switch-mod'>Je n'est pas de compte</span>
        <h3>CONNECTION</h3>
        <form action="./dashboard.php">
            <input type="email" class='inputAuth' name="email" placeholder='EMAIL' autocomplete="username" id="emailConnection">
            <input type="password" class='inputAuth passwordInput' placeholder='PASSWORD' autocomplete="current-password" name="" id="passwordConnection">
            <input class='submitButton' type="submit" value="Soumettre">
        </form>
        <div class='separateurHorizontal'></div>
        <div id='reseauxSociaux'>
            <img src="./asset/reseauxSociaux/Google.png" alt="">
            <img src="./asset/reseauxSociaux/Facebook.png" alt="">
        </div>
    </div>
    <div class='separateurVertical'></div>
    <div class='middleForm' id='inscription-tab'>
        <span class='tab-switch-mod'>J'ai un compte, je souhaite me connecté</span>
        <h3>INSCRIPTION</h3>
        <form action="./dashboard.php">
            <input type="email" name="email" class='inputAuth' placeholder='EMAIL' autocomplete="username" id="emailInscription">
            <input type="password" placeholder='PASSWORD' class='inputAuth passwordInput' autocomplete="current-password" name="" id="passwordInscription">
            <input type="password" placeholder='PASSWORD' class='inputAuth passwordInput' autocomplete="current-password" name="" id="passwordInscriptionConfirme">
            <input class='submitButton' type="submit" value="Soumettre">
        </form>

    </div>
</section>

</div>

</body>

<script src='./js/authInterface.js'></script>
<script src='./js/main.js'></script>

</html>