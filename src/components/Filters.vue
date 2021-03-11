<template>
  <v-radio-group v-model="$store.state.sortBy">
      <p style="font-weight: bold; margin-bottom: 3px;">Sort By</p>
      <v-radio
              color="primary"
              v-for="(filter, index) in filters"
              :key="index"
              :label="filter"
              :value="filter.toLowerCase()"
      ></v-radio>
  </v-radio-group>
</template>

<script>
export default {
  name: "Filters",
  data() {
    return {
      filters: ["Subject", "Location", "Price", "Availability"]
    }
  }
}
</script>