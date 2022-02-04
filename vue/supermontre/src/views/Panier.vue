<template>
  <div class="panier">
    <Panier msg="Yours are incredible!" />
  </div>
</template>

<script>
// @ is an alias to /src
import Panier from "@/components/panier/Panier.vue";

export default {
  name: "Home",
  components: {
    Panier,
  },
};
</script>