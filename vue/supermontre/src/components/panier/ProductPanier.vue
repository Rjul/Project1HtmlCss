<template>
  <div data-target="SuperGrolex" class="ficheList">
    <img :src="`${imageUrl}`" alt="" />
    <div>
      <div>
        <span>{{ name }}</span>
        <span>{{ price }}$</span>
      </div>
      <span class="description">{{ description }} </span>
      <span class="quantity-container">
        <div class="btn-container">
          <button @click="changeQuantity(-1)">-</button>
          <input
            :value="this.qty"
            @input="changeQuantityRow($event.target.value)"
          />
          <button @click="changeQuantity(+1)">+</button>
        </div>
        <span>Total: {{ totalQuantity }} €</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductPanier",
  props: {
    id: Number,
    name: String,
    description: String,
    price: Number,
    quatityCart: Number,
    imageUrl: String,
  },
  data() {
    return {
      qty: this.quatityCart,
    };
  },
  watch: {
    quatityCart: {
      handler(newValue) {
        this.qty = newValue;
      },
    },
  },

  methods: {
    changeQuantity: function (value) {
      if (this.qty > 0) {
        this.qty += value;
        this.$store.dispatch("cart/changeQuantity", {
          id: this.id,
          quatityCart: this.qty,
          type: "math",
        });
      } else if ((this.qty >= 0) & (value == +1)) {
        this.qty += value;
        this.$store.dispatch("cart/changeQuantity", {
          id: this.id,
          quatityCart: this.qty,
          type: "math",
        });
      }
    },
    changeQuantityRow: function (value) {
      this.qty = value;
      this.$store.dispatch("cart/changeQuantity", {
        id: this.id,
        quatityCart: this.qty,
        type: "row",
      });
    },
  },

  computed: {
    imageRoute: {
      get: function () {
        let imageRoute = this.imageUrl;
        return imageRoute;
      },
    },
    totalQuantity: {
      // getter
      get: function () {
        return this.qty * this.price;
      },
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#panier {
  width: 90%;
  align-items: center;
}
.ficheList {
  width: 60%;
  min-width: 500px;
  background-color: rgba(201, 201, 201, 0.253);
  padding: 4px;
  margin: 15px;
  display: flex;
}

.ficheList > img {
  width: 240px;
  height: 150px;
}
.ficheList > div {
  width: 100%;
  display: flex;
  bottom: auto;
  flex-direction: column;
  margin: 3px;
  position: relative;
}
.ficheList > div > div {
  max-width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-size: 20px;
}
.description {
  font-size: 15px;
  margin: 5px;
  padding-top: 10px;
}
.quantity-container {
  position: absolute;
  bottom: 0;
  right: 0;
}
.btn-container {
  text-align: end;
}
.btn-quantity {
  width: 20px;
  height: 20px;
  border-radius: 3px;
}
.input-quantity {
  width: 20px;
  height: 20px;
  border-radius: 3px;
  -webkit-appearance: none;
  text-align: center;
}
input[type="number"] {
  -moz-appearance: textfield;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
.delete-container {
  position: absolute;
  bottom: 50px;
  right: 0;
}
.btn-delete-this {
  padding: 3px;
  border-radius: 3px;
  height: 20px;
  border-radius: 3px;
}
.delivery {
  justify-content: space-between;
  align-content: space-between;
  margin: auto;
  background-color: rgba(201, 201, 201, 0.253);
  padding: 4px;
  margin: 15px;
  display: inline-block;
  text-align: center;
  width: 60%;
  min-width: 500px;
  background-color: rgba(201, 201, 201, 0.253);
  padding: 4px;
  margin: 15px;
  display: flex;
}
.btn-delivery {
  height: 25px;
  padding: 5px;
  border-radius: 4px;
}
.btn-this-selected {
  background-color: rgba(96, 180, 12, 0.952);
}
.form-shiping {
  display: flex;
  flex-direction: column;
  width: 60%;
  min-width: 550px;
  margin: auto;
  background-color: rgba(201, 201, 201, 0.253);
  padding: 4px;
  margin: 15px;
  text-align: center;
}
.input-form-shiping {
  text-align: center;
  height: 20px;
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.349);
}
.input-form-shiping::-webkit-input-placeholder {
  color: slategray;
}
.input-form-shiping:-moz-placeholder {
  color: slategray;
}
.input-form-shiping:invalid {
  border: rgb(201, 66, 43) 2px solid;
  background-color: rgba(128, 128, 128, 0.575);
}
.input-form-shiping:valid {
  border: rgb(32, 172, 44) 2px solid;
  background-color: rgba(101, 160, 54, 0.349);
}

.input-form-shiping::-webkit-input-placeholder {
  color: slategray;
}
.input-form-shiping:-moz-placeholder {
  color: slategray;
}
#payement {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
#payement > button {
  margin-right: 70px;
}
.btnClassShip {
  height: 50px;
  width: 150px;
  background-color: rgba(96, 180, 12, 0.952);
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
}
#montant {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 200px;
  height: 100px;
  background-color: rgb(224, 224, 224);
}
</style>
