<template>
  <section>
    <ListAppCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    >
    </ListAppCard>
  </section>
</template>

<script>
// Import component
import ListAppCard from "./ListAppCard.vue";
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const products = computed(() => store.state.products.productsStored);
    store.dispatch("products/getAllProducts");
    return {
      products,
    };
  },
  components: {
    ListAppCard,
  },
  name: "ListApp",
  props: {
    title: String,
  },
  // Get data for render
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
