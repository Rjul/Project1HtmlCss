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

export default {
  components: {
    ListAppCard,
  },
  name: "ListApp",
  props: {
    title: String,
  },
  // Get data for render
  data: function () {
    let products = this.$store.state.products;
    return {
      products,
    };
  },
  computed: {
    productsStore: () => {
      console.log(this.$store.state);
      return this.$store.getters.products;
    },
  },
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
