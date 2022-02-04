<template>
  <div class="ficheList">
    <div id="ficheRow1">
      <img :src="`${publicPath}${product.imageUrl}`" alt="montre" />
      <div id="ficheColumn">
        <span>
          <h3>{{ product.name }}</h3>
        </span>
        <span
          >{{ product.price }}$
          <form action="./panier.php" method="get">
            <button>Ajouter au panier</button>
          </form>
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

export default {
  name: "Product",
  data: () => {
    return {
      product: {
        ref: "012345",
        nom: "Super Grolex",
        breadcrumb: "super-grolex",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, maiores?",
        imageUrl: "./assets/Montre_2.webp",
        imageMeta: "belle SuperGrolex",
        price: "7999",
        quantity: "1",
        url: "./fiche-produit.php",
      },
      publicPath: process.env.BASE_URL,
    };
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
@media all and (max-width: 800px) {
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