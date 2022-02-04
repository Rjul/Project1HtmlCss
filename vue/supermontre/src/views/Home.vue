<template>
  <div class="home">
    <ListApp msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import ListApp from "@/components/ListApp/ListApp.vue";

export default {
  name: "Home",
  components: {
    ListApp,
  },
};
</script>
