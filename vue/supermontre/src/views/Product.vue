<template>
  <div class="ficheList" :v-if="dataMounted != false || product != undefined">
    <div id="ficheRow1">
      <img :src="`${product.imageUrl}`" alt="montre" />
      <div id="ficheColumn">
        <span>
          <h3>{{ product.name }}</h3>
        </span>
        <span
          >{{ product.price }}$

          <button @click="addProductToCart(product)">Ajouter au panier</button>
        </span>
      </div>
    </div>
    <span class="description">
      <p>
        {{ product.description }}
      </p>
    </span>
  </div>
</template>

<script>
// @ is an alias to /src
// import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
export default {
  setup() {
    const store = useStore();
    store.dispatch("products/getAllProducts");
    const route = useRoute();
    console.log(route.params.id);
    store.dispatch("products/defineIdToView", route.params.id);
    const addProductToCart = (product) =>
      store.dispatch("cart/addProductToCart", product);

    return {
      addProductToCart,
    };
  },
  name: "Product",

  computed: {
    product() {
      return this.$store.state.products.product;
    },
    dataMounted() {
      return this.$store.state.products.dataMounted;
    },
  },
  watch: {
    product: {
      // Watch change for product and verify the newValue is available
      handler(newValue, oldValue) {
        console.log(newValue, " ", oldValue);
        if ((newValue != "undefined") & newValue & (newValue != null)) {
          console.log("here in if controle state for data");
          this.$store.dispatch("products/defineDataMounted", true);
        }
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>
<style scoped>
.ficheList {
  width: 90%;
  height: auto;
  background-color: rgba(201, 201, 201, 0.253);
  padding: 30px;
  margin: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
#ficheRow1 {
  display: flex;
  flex-direction: row;
}
#ficheRow1 > img {
  width: 40vw;
  max-width: 450px;
  margin: auto;
}
#ficheColumn {
  display: flex;
  flex-direction: column;
  flex: 1;
}
#ficheColumn > span {
  font-size: 30px;
  padding: 30px;
  display: flex;
  align-items: center;
}
#ficheColumn > span > form > button {
  /* height: 30px; */
  padding: 3px;
  margin-left: 30px;
}
.description {
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
}
@media all and (max-width: 600px) {
  .ficheList {
    width: 90vw;
    height: auto;
    background-color: rgba(201, 201, 201, 0.253);
    padding: 30px;
    margin: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  #ficheRow1 {
    display: flex;
    flex-direction: column;
  }
  #ficheRow1 > img {
    width: 85vw;
    margin: auto;
  }
  #ficheColumn {
    display: flex;
    flex-direction: column;
  }
  #ficheColumn > span {
    font-size: 30px;
    padding: 10px;
    display: flex;
    align-items: center;
  }
  #ficheColumn > span > form > button {
    height: 30px;
    padding: 3px;
    margin-left: 30px;
  }
  .description {
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px;
  }
}
</style>