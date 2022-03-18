<template>
  <div>
    <header>
      <router-link class="nav-link magical-link" :to="{ name: 'Home' }">
        <div class="string c-right"></div>
        <div class="string c-left"></div>
        <h1 id="title">Super Montre</h1>
      </router-link>
      <div>
        <router-link class="nav-link" :to="{ name: 'Home' }">Home</router-link>
        <router-link class="nav-link" :to="{ name: 'Panier' }"
          >Panier</router-link
        >
        <span
          @click.prevent="changeStateAuthForm()"
          class="nav-link"
          id="authButton"
          >Connection</span
        >
      </div>
    </header>
    <div id="hero-container">
      <div id="hero">
        <!-- <img src="./asset/hero.png" alt=""> -->
      </div>
    </div>
    <router-view />
    <ConnectionComponent
      :authIsDisplay="orderForAuthDisplay"
      @exit="changeStateAuthForm()"
    />
  </div>
</template>
<script>
import ConnectionComponent from "./components/global/ConnectionComponent.vue";
import Trolilol from "./assets/Trolilol";
export default {
  name: "App",
  props: {
    title: String,
  },
  components: {
    ConnectionComponent,
  },
  data: function () {
    return {
      notDownloaded: false,
      orderForAuthDisplay: false,
    };
  },
  methods: {
    changeStateAuthForm: function () {
      this.orderForAuthDisplay = !this.orderForAuthDisplay;
    },
  },
};
let trolilol = new Trolilol();
document.addEventListener("keyup", (e) => {
  trolilol.brainedFunctionMan(e.key);
});
</script>


<style>
</style>
