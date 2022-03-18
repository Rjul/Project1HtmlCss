<template>
  <div class="ficheList">
    <router-link :to="{ name: 'Product', params: { id: product.id } }">
      <img :src="`${product.imageUrl}`" alt="" />
      <span>{{ product.title }}</span>
      <div>
        <span class="description">{{ product.description }}</span>
        <span>{{ product.price }}$</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const addProductToCart = (product) =>
      store.dispatch("cart/addProductToCart", product);

    return {
      addProductToCart,
    };
  },
  name: "ListAppCard",
  props: {
    product: Object,
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ficheList {
  transition: 300ms;
  width: 31%;
  /* height: 230px; */
  background-color: rgba(201, 201, 201, 0.295);
  padding: 4px;
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.ficheList > a {
  color: rgb(0, 0, 0);
  text-decoration: none;
}
.ficheList > a > span {
  font-size: 20px;
  margin: 2px;
  margin-bottom: 6px;
}
.ficheList > a > img {
  width: 100%;
}
.ficheList > a > div {
  display: flex;
  position: relative;
  bottom: auto;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  margin: 3px;
}
.description {
  font-size: 10px;
}
@media all and (max-width: 800px) and (min-width: 600px) {
  .ficheList {
    transition: 500ms;
    width: 45%;
    /* height: 300px; */
    background-color: rgba(201, 201, 201, 0.295);
    padding: 4px;
    margin: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .ficheList > a {
    color: rgb(0, 0, 0);
    text-decoration: none;
  }
  /* .buttonFiche{
        position: absolute;
        width: 45%;
        height: 300px;
    } */
  .ficheList > a > span {
    font-size: 20px;
    margin: 2px;
    margin-bottom: 6px;
  }
  .ficheList > a > img {
    width: 100%;
  }
  .ficheList > a > div {
    display: flex;
    position: relative;
    bottom: auto;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
    margin: 3px;
  }
  .description {
    font-size: 15px;
  }
}
@media all and (max-width: 600px) {
  .ficheList {
    transition: 500ms;
    width: 90%;
    /* height: 400px; */
    background-color: rgba(201, 201, 201, 0.295);
    padding: 4px;
    margin: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  /* .buttonFiche{
        position: absolute;
        width: 90%;
        height: 400px;
        margin: auto;
    } */
  .ficheList > a {
    color: rgb(0, 0, 0);
    text-decoration: none;
  }
  .ficheList > a > span {
    font-size: 20px;
    margin: 2px;
    margin-bottom: 6px;
  }
  .ficheList > a > img {
    width: 100%;
  }
  .ficheList > a > div {
    display: flex;
    position: relative;
    bottom: auto;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
    margin: 3px;
  }
  .description {
    font-size: 15px;
  }
}
</style>
