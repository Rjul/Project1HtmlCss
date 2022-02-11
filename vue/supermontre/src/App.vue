<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/panier">Panier</router-link>
    </div>
    <div id="hero-container">
      <div id="hero">
        <!-- <img src="./asset/hero.png" alt=""> -->
      </div>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
  props: {
    title: String,
  },
  data: () => {
    let notDownloaded = false;
    return notDownloaded;
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
* {
  margin: 0;
  padding: 0;
}
body {
  height: 100%;
  margin: auto;
}
#container {
  height: 100%;
  margin: auto;
  background-color: rgba(230, 230, 230, 0.384);
}
/*#region Header */

header {
  height: 10vh;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
/*#region BtnHome  */
.magical-link {
  position: relative;
  margin-left: 30px;
  padding: 15px;
  transition: 500ms;
  border-radius: 15px;
}
.magical-link:hover {
  animation: 1s linear 0s infinite magical-anim;
}
/*#endregion  */
.string {
  position: absolute;
  background-color: black;
  width: 100%;
  height: 5px;
}
.c-right {
  top: -7vh;
  right: 0;
  transform: rotate(40deg);
}
.c-left {
  top: -7vh;
  left: 0;
  transform: rotate(-40deg);
}
#hero-container {
  height: 200px;
  width: 100%;
  border-radius: 40px;
  margin: 20px 0px 20px 0px;
  overflow: hidden;
}
#hero {
  height: 100%;
  width: 100%;
  background-image: url("./assets/hero.png");
  background-repeat: repeat-x;
  background-position: center;
  background-size: 100%;
  transition: 1s;
}
#hero:hover {
  transition: 1s;
  animation: 5s ease-in-out 0s infinite hero-anim;
}
#title {
  height: 100%;
  font-size: 40px;
  align-items: center;
  display: flex;
  color: rgb(201, 123, 67);
}
#authButton {
  padding: 3px;
  background-color: rgb(255, 255, 255);
  border: 2px solid rgba(201, 200, 200, 0.418);
  margin-right: 40px;
  color: sienna;
}

/* #endregion */

section {
  width: 90%;
  height: 90%;
  display: flex;
  margin: auto;
  padding-top: 10px;
  flex-wrap: wrap;
  justify-content: space-around;
  color: rgb(117, 95, 68);
}

/*#region Auth  -------*/

#detectorAuth {
  display: none;
  position: fixed;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  top: 0px;
  left: 0px;
}
#authForm {
  position: fixed;
  z-index: 2;
  top: 10vh;
  left: calc(100vw / 2 - 300px);
  width: 600px;
  height: 450px;
  /**display: flex; **/
  flex-direction: row;
  background-color: rgb(233, 233, 233);
  border: 2px solid rgb(0, 0, 0);
}
.middleForm {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 38%;
  padding: 0px 30px 0px 30px;
}
.middleForm > h3 {
  font-size: large;
  color: black;
  padding: 20px;
}
.middleForm > form {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  text-align: center;
}
.submitButton {
  width: 40%;
  border-radius: 2px;
  padding: 5px;
  margin: 20px;
  background-color: rgb(180, 180, 180);
}
.inputAuth {
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 15px;
  width: 100%;
  height: 30px;
  text-align: center;
  background-color: rgb(180, 180, 180);
}
.separateurVertical {
  width: 3px;

  background-image: url("./assets/separateur.png");
  background-repeat: repeat-y;
  margin: 30px 0px 30px 0px;
}
.separateurHorizontal {
  height: 3px;
  display: initial;
  width: 100%;
  background-image: url("./assets/separateur.png");
  background-repeat: repeat-x;
  margin: 0px 30px 0px 30px;
}
#reseauxSociaux {
  padding: 30px 20px 10px 20px;
  display: flex;
  justify-content: space-around;
  width: 100%;
}
#reseauxSociaux > img {
  width: 70px;
  height: 70px;
}
.tab-switch-mod {
  display: none;
}
/*#endregion*/
/*-------  #Region Animation -------*/

@keyframes magical-anim {
  0% {
    transform: rotate(0deg) translate(0px);
  }
  25% {
    transform: rotate(1.5deg) translate(-3px);
  }
  75% {
    transform: rotate(-1.5deg) translate(3px);
  }
  100% {
    transform: rotate(0deg) translate(0px);
  }
}
@media all and (max-width: 1000px) {
  @keyframes hero-anim {
    0% {
      background-size: 100%;
    }
    20% {
      background-position-y: 0px;
      background-size: 120%;
    }
    70% {
      background-position-y: -200px;
      background-size: 120%;
    }
    100% {
      background-position-y: center;
      background-size: 100%;
    }
  }
}
@keyframes hero-anim {
  0% {
    background-size: 100%;
  }
  20% {
    background-position-y: 0px;
    background-size: 120%;
  }
  70% {
    background-position-y: -100px;
    background-size: 120%;
  }
  100% {
    background-position-y: center;
    background-size: 100%;
  }
}
</style>
