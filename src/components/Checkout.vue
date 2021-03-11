<template>
  <div>
    <v-row v-show="confirmed">
      <Lesson v-for="(lesson, index) in cart" :key="index">
          <template v-slot:image>
                          {{ lesson.image}}
                      </template>
          <template v-slot:subject>
              Subject: {{lesson.subject}}
          </template>
          <template v-slot:location>
              Location: {{lesson.location}}
          </template>
          <template v-slot:price>
              Price: {{lesson.price}}
          </template>
          <template v-slot:spaces>
              Spaces: {{lesson.spaces}}
          </template>
      </Lesson>
    </v-row>

    <v-container v-show="confirmed" class="justify-center d-flex">
        <v-btn
                class="mr-4"
                @click="clearCart"
        >
            Clear Cart
        </v-btn>
    </v-container>

    <Snackbar :snackbar="snackbar" :success="success"/>
    
  </div>
</template>

<script>
import Lesson from './Lesson.vue'
import Snackbar from './Snackbar.vue'
export default {
  components: { Lesson, Snackbar },
  name: "Checkout",
  props: {
    cart: {
      type: Array,
      required: true
    }, 
    confirmed: {
      required: true
    },
    snackbar: {
      type: Boolean,
      required: true
    },
    success: {
      required: true
    }
  },
  methods: {
    clearCart() {
      this.$store.dispatch('clearCart')
      this.$emit('cartCleared')
    }
  }
}
</script>