<template>
  <v-row v-show="$store.getters.cartCount > 0 && !confirmed">
    <v-col cols="12" class="shrink">
        <v-btn depressed v-on:click="$router.go(-1)">Back To Shop</v-btn>
    </v-col>
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
        <template v-slot:button>
            <v-btn
                    v-if="lesson.spaces > 0"
                    outlined
                    rounded
                    text
                    v-on:click="removeFromCart(lesson)"
            >
                Remove From Cart
            </v-btn>
        </template>
    </Lesson>

    <Form v-on:confirmed="$emit('confirmCheckout')" />

  </v-row>
</template>

<script>
import Form from './Form'
import Lesson from './Lesson'
export default {
  name: "Cart",
  components: {
    Form, Lesson
  },
  props: {
    cart: {
      type: Array,
      required: true
    }, 
    confirmed: {
      required: true
    }
  },
  methods: {
    removeFromCart(lesson) {
      this.$store.dispatch('removeFromCart', lesson)
    },
  }
}
</script>