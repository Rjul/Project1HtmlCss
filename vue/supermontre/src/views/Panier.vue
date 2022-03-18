<template>
  <div class="panier">
    <PanierComponent msg="Yours are incredible!" />
  </div>
</template>

<script>
// @ is an alias to /src
import PanierComponent from "@/components/panier/PanierComponent.vue";

export default {
  name: "Panier",
  components: {
    PanierComponent,
  },
};
</script>