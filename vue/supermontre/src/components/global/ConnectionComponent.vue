<template>
  <div v-if="authIsDisplay != false">
    <div @click.prevent="exitFrom()" id="detectorAuth"></div>
    <section id="authForm">
      <div
        v-show="((states == false) & (statesTab == true)) | (states == true)"
        class="middleForm"
        id="connection-tab"
      >
        <span
          @click.prevent="mobileFunNav()"
          v-show="states == false"
          class="tab-switch-mod"
          >Je n'est pas de compte</span
        >
        <h3>CONNECTION</h3>
        <form action="./dashboard.php">
          <input
            type="email"
            class="inputAuth"
            name="email"
            placeholder="EMAIL"
            autocomplete="username"
            id="emailConnection"
          />
          <input
            type="password"
            class="inputAuth passwordInput"
            placeholder="PASSWORD"
            autocomplete="current-password"
            name=""
            id="passwordConnection"
          />
          <input class="submitButton" type="submit" value="Soumettre" />
        </form>
        <div class="separateurHorizontal"></div>
        <div id="reseauxSociaux">
          <img src="../../assets/reseauxSociaux/Google.png" alt="" />
          <img src="../../assets/reseauxSociaux/Facebook.png" alt="" />
        </div>
      </div>
      <div class="separateurVertical"></div>
      <div
        v-show="((states == false) & (statesTab == false)) | (states == true)"
        class="middleForm"
        id="inscription-tab"
      >
        <span
          @click.prevent="mobileFunNav()"
          v-show="states == false"
          class="tab-switch-mod"
          >J'ai un compte, je souhaite me connecté</span
        >
        <h3>INSCRIPTION</h3>
        <form action="./dashboard.php">
          <input
            type="email"
            name="email"
            class="inputAuth"
            placeholder="EMAIL"
            autocomplete="username"
            id="emailInscription"
          />
          <input
            type="password"
            placeholder="PASSWORD"
            class="inputAuth passwordInput"
            autocomplete="current-password"
            name=""
            id="passwordInscription"
          />
          <input
            type="password"
            placeholder="PASSWORD"
            class="inputAuth passwordInput"
            autocomplete="current-password"
            name=""
            id="passwordInscriptionConfirme"
          />
          <input class="submitButton" type="submit" value="Soumettre" />
        </form>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "ConnectionComponent",
  props: {
    authIsDisplay: Boolean,
  },
  data: () => {
    let states;
    if (window.innerWidth < 600) {
      states = false;
    } else {
      states = true;
    }
    return {
      states, // states true for desktop // mobile false
      statesTab: true, // states "true" connection // states "false" inscription for mobile width
      windowWidth: window.innerWidth,
    };
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },

  beforeUnmount() {
    window.removeEventListener("resize", this.onResize);
  },

  methods: {
    onResize: function () {
      console.log(this.windowWidth);
      this.windowWidth = window.innerWidth;
      if (this.windowWidth < 600) {
        // active spécifique part of form
        this.states = false;
      } else {
        // active all part of from
        this.states = true;
      }
    },
    mobileFunNav: function () {
      this.statesTab = !this.statesTab;
    },
    exitFrom: function () {
      this.$emit("exit");
    },
  },
};
</script>

<style scoped>
/*#region Auth  -------*/

#detectorAuth {
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

  background-image: url("../../assets/separateur.png");
  background-repeat: repeat-y;
  margin: 30px 0px 30px 0px;
}
.separateurHorizontal {
  height: 3px;
  display: initial;
  width: 100%;
  background-image: url("../../assets/separateur.png");
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

/*#endregion*/
</style>