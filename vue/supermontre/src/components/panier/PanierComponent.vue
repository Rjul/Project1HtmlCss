<template>
  <div>
    <div v-if="states !== 2">
      <h2>An incredible shopping cart. You are amazing!</h2>
      <!-- Product panier Component V-FOR Products and bind the data -->
      <div :v-if="products != undefined || products != null">
        <ProductPanier
          v-for="product in products"
          :key="product.id"
          :id="product.id"
          :name="product.name"
          :description="product.description"
          :price="product.price"
          :quatityCart="product.quatityCart"
          :imageUrl="product.imageUrl"
        >
        </ProductPanier>

        <div class="delivery">
          <div>
            <!-- Delivery Component V-FOR DeliveriesType and Bind data ------ Listener for selected Component -->
            <DeliveryAvailable
              v-for="deliveryType in deliveriesType"
              :key="deliveryType.id"
              :name="deliveryType.name"
              :description="deliveryType.description"
              :price="deliveryType.price"
              :selected="deliveryType.selected"
              @selected="mainDeliveryProcesing(deliveryType, $event)"
            >
            </DeliveryAvailable>
          </div>
        </div>
      </div>

      <!-- @Todo Form Componant Return information in object userInformation -->
      <form class="form-shiping" id="shipingForm" action="" v-if="states === 1">
        <input
          class="input-form-shiping"
          placeholder="NOM"
          type="text"
          name="name"
          id="inputName"
          required
        />
        <input
          class="input-form-shiping"
          placeholder="Adresse"
          type="text"
          name="street"
          id="inputStreet"
          required
        />
        <input
          class="input-form-shiping"
          placeholder="Code postal"
          pattern="[A-Za-z0-9]{5}"
          type="text"
          name="zipcode"
          id="inputZipcode"
          required
        />
        <input
          class="input-form-shiping"
          placeholder="Ville"
          pattern="[A-Z]{0,20}[a-z]{0,30}"
          type="text"
          name="city"
          id="inputCity"
          required
        />
        <input
          class="input-form-shiping input-states-switch"
          placeholder="Email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          type="email"
          name="email"
          id="inputEmail"
          required
        />
        <input
          class="input-form-shiping input-states-switch"
          placeholder="Téléphone"
          pattern="[0-9]{10}"
          type="text"
          name="phone"
          id="inputPhone"
          required
        />
      </form>

      <!-- @Todo Total Price Componant Get data pre computed Only for user render -->
      <div id="payement">
        <button class="btnClassShip" @click="statesPanierManager()">
          {{ displayTextButton }}
        </button>
        <article id="montant">
          <span
            ><span>Livraison : {{ priceDelivery }}</span
            ><span> €</span></span
          >
          <span
            ><span>Total : </span><span id="priceShiping">{{ totalPrice }}</span
            ><span> $</span></span
          >
        </article>
      </div>
    </div>
    <transition name="fade">
      <!-- @Todo if utility -->
      <div v-if="states === 2">
        <h2>Votre commande a bien été prise en compte !</h2>
      </div>
    </transition>
  </div>
</template>

<script>
// Import component
import ProductPanier from "./ProductPanier.vue";
import DeliveryAvailable from "./DeliveryAvailable.vue";
// import { useStore } from "vuex";

export default {
  components: {
    ProductPanier,
    DeliveryAvailable,
  },
  name: "PanierComponent",
  props: {
    title: String,
  },
  // Get data for render
  data: function () {
    return {
      states: 0,
      deliveriesType: [
        {
          id: 1,
          name: "Livraison domicile",
          description:
            "Apprecier le plaisir de resevoir votre colie devant votre porte",
          price: 7,
          selected: true,
        },
        {
          id: 2,
          name: "Livraison en point relais",
          description: "Votre colie arrivera pres de chez vous!",
          price: 3,
          selected: false,
        },
      ],
      priceDelivery: 7,
    };
  },
  // Computed Panier data for user
  computed: {
    products: {
      get: function () {
        return this.$store.state.cart.items;
      },
    },
    displayTextButton: {
      get: function () {
        let displayTextButton;
        if (this.states == 0) {
          displayTextButton = "Valider";
        }
        if (this.states == 1) {
          displayTextButton = "Payer";
        }
        return displayTextButton;
      },
    },
    totalPrice() {
      let total = 0;
      this.products.forEach((product) => {
        total += product.price * product.quatityCart;
      });
      if (this.priceDelivery !== 0) {
        total += this.priceDelivery;
      }
      return total;
    },
  },

  methods: {
    mainDeliveryProcesing: function (target, value) {
      this.deliveriesType.forEach((delivery) => {
        delivery.selected = false;
      });
      target.selected = value;
      if (value) {
        this.priceDelivery = target.price;
      } else {
        this.priceDelivery = 0;
      }
    },
    statesPanierManager: function () {
      if (this.states == 0) {
        this.states = 1;
      } else if (this.states == 1) {
        this.states = 2;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
