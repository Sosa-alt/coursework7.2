<template>
  <v-radio-group v-model="$store.state.orderBy">
      <v-radio
              color="primary"
              v-for="(order, index) in orders"
              :key="index"
              :label="order"
              :value="order.toLowerCase()"
      ></v-radio>
  </v-radio-group>
</template>

<script>
export default {
  name: "Filters",
  data() {
    return {
      orders: ["Ascending", "Descending"]
    }
  }
}
</script>