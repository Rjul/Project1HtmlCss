<template>
  <button
    @click="selectedThis()"
    v-bind:class="{ selectedClass: selectedComponante }"
    class="btn-delivery"
  >
    {{ name }}
  </button>
</template>

<script>
export default {
  name: "DeliveryAvailable",
  props: {
    name: String,
    description: String,
    price: Number,
    selected: Boolean,
  },

  data() {
    let selectedComponante = this.selected;
    return {
      selectedComponante,
    };
  },

  watch: {
    selected: function (newSelectedvalue) {
      this.selectedComponante = newSelectedvalue;
    },
  },

  methods: {
    selectedThis: function () {
      this.selectedComponante = !this.selectedComponante;
      this.$emit("selected", this.selectedComponante);
    },
  },

  computed: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn-delivery {
  height: 25px;
  padding: 5px;
  border-radius: 4px;
}
.selectedClass {
  background-color: rgba(96, 180, 12, 0.952);
}
</style>
