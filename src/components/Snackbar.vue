<template>
  <v-snackbar
      v-model="snackbar"
      v-if="success"
    >
        {{ success }}

      <template v-slot:action="{ attrs }">
          <v-btn
                  color="pink"
                  text
                  v-bind="attrs"
                  @click="snackbar = false"
                  class="mr-2"
          >
              Close
          </v-btn>
      </template>
    </v-snackbar>
</template>

<script>
export default {
  name: "Snackbar",
  props: {
    snackbar: {required: true},
    success: {required: true}
  }
}
</script>